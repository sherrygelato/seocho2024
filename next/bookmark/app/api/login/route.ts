import { execute, query } from '@/lib/db';
import { UserRowData } from '@/lib/types';
import { compare } from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, passwd } = await req.json();
  console.table({ email, passwd });

  const hashedPasswd = await compare(passwd, '');
  console.log('🚀  hashedPasswd:', hashedPasswd);

  try {
    const rsh = await execute(
      'select email, passwd from User where email = ?, passwd = ?',
      [email, hashedPasswd]
    );

    const [user] = await query<UserRowData>('select * from User where id = ?', [
      rsh.insertId,
    ]);

    return NextResponse.json({ user });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(
        { error },
        { status: 500, statusText: error.message }
      );

    return NextResponse.json({ error }, { status: 500 });
  }
}
