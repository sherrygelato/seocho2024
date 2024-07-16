import { execute, query } from '@/lib/db';
import { Mark } from '@/lib/types';
import { RowDataPacket } from 'mysql2';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  params: { markId: string };
};

export async function GET(req: NextRequest, { params: { markId } }: Params) {
  try {
    const [mark] = await query<Mark & RowDataPacket>(
      'select * from Mark where id = ?',
      [markId]
    );
    // console.log('🚀  book:', book.title);
    return NextResponse.json({ mark });
  } catch (error) {
    return handleError(error);
  }
}

// api/marks/[markId]
// api/marks/555
export async function PATCH(req: NextRequest, { params: { markId } }: Params) {
  return await update(req, markId);
}
export async function PUT(req: NextRequest, { params: { markId } }: Params) {
  return await update(req, markId);
}

export async function DELETE(req: NextRequest, { params: { markId } }: Params) {
  try {
    const rows = await execute('delete from Mark where id = ?', [markId]);

    const message = rows.affectedRows > 0 ? 'OK' : 'Fail to delete';
    const status = rows.affectedRows > 0 ? 200 : 404;

    return NextResponse.json({ message }, { status });
  } catch (error) {
    console.log('************', error);
    return handleError(error);
  }
}

async function update(req: NextRequest, markId: string) {
  const { title, descript, url, image } = await req.json();

  try {
    await execute(
      'update Mark set title = ?, descript = ?,url = ?,image = ?, where id = ?',
      [title, descript, url, image, markId]
    );

    const [mark] = await query('select * from Book where id = ?', [markId]);

    // console.log('rrrrrrr>>>', rows);
    return NextResponse.json({ mark });
  } catch (error) {
    return handleError(error);
  }
}

function handleError(error: unknown) {
  const message = error instanceof Error ? error.message : 'error!';
  console.log('🚀  messageXXXXXX:', message);
  return NextResponse.json({ message }, { status: 500 });
}
