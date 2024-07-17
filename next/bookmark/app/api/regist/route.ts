import { execute, query } from '@/lib/db';
import { UserRowData } from '@/lib/types';
import { hash } from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

// export default async function GET(req: NextRequest) {
//   const { searchParams } = req.nextUrl;
//   const email = searchParams.get('email');

//   const [user] = await query<UserRowData>(
//     'select id, nickname, email from User where email = ?',
//     [email]
//   );

//   // const { id, nickname } = user;

//   return NextResponse.json({ id, nickname, email });
// }

export async function POST(req: NextRequest) {
  const { nickname, email, passwd } = await req.json();
  console.table({ nickname, email, passwd });

  const hashedPasswd = await hash(passwd, 10);
  console.log('🚀  hashedPasswd:', hashedPasswd);

  try {
    const rsh = await execute(
      'insert into User(nickname, email, passwd) values(?,?,?)',
      [nickname, email, hashedPasswd]
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
