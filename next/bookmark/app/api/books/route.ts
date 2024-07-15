import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const userId = searchParams.get('userId');

  try {
    const [books] = await query(`select * from Book where owner=?`, [userId]);
    return NextResponse.json({
      userId,
      message: 'OK',
      books,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'error!';
    return NextResponse.json({ userId, message });
  }
}

export async function POST(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const userId = searchParams.get('userId');

  const { title, owner } = await req.json();

  const [rows] = await query(`insert into Book(title, owner) value(?, ?)`, [
    title,
    owner,
  ]);

  return NextResponse.json({
    userId,
    message: 'OK',
    rows,
  });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const userId = searchParams.get('userId');

  const [books] = await query(`delete from Book where owner=?`, [userId]);
  return NextResponse.json({
    userId,
    message: 'OK',
    books,
  });
}
