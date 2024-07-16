import { execute, query } from '@/lib/db';
import { Mark } from '@/lib/types';
import { RowDataPacket } from 'mysql2';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { book, title, descript, url, image } = await req.json();
  const rows = await execute(
    'insert into Mark(book, title, descript, url, image) values(?,?,?,?,?)',
    [book, title, descript, url, image]
  );

  const [mark] = await query<Mark & RowDataPacket>(
    'select * from Mark where id = ?',
    [rows.insertId]
  );

  return NextResponse.json({ mark });
}

// Mark list per book
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const bookId = searchParams.get('bookId');
  // console.log('🚀  bookId:', bookId);
  // const conn = await mysql.createConnection(config);
  // const conn = await pool.getConnection();
  try {
    const marks = await query('select * from Mark where book = ?', [bookId]);

    return NextResponse.json({ marks });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'error!';
    return NextResponse.json({ bookId, message }, { status: 500 });
  }
  // conn.end(); // close
  // conn.release(); // release to pool
}
