'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getUsers, User } from '../../lib/placeholder';

export default function CSR() {
  console.log('/app/csr/page.tsx :: CSR!!!!!!!!!!!');

  const [dtStr, setDtStr] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setDtStr(new Date().toString());

    (async () => {
      const userData = await getUsers();
      console.log(`/app/csr/page.tsx :: users=${userData}`);
      setUsers(userData);
    })();
  }, []);

  // 새로고침 할 태마다 서버쪽WAS에서 JS+HTML 만들어서 WS에서 가져와서 브라우저에서 뿌려줌
  return (
    <>
      <h1>This is CRS Page!! {dtStr}</h1>
      <Link href='/'>GO HOME</Link>
      <div>
        <h3>Users List</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/ssg/${user.id}`}>* {user.username}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
