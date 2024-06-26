// loginUser의 정보를 보이는 Profile component를 작성하세요.
// login을 할 수 있는 Login component를 작성하세요.
// My에서 loginUser가 존재하면 Profile, 그렇지 않다면 Login 표시

import { useSession } from "../hooks/session-context";
import Button from "./atoms/Button";

export default function Profile() {
    const {session: {loginUser: {name}, logout: signOut}} = useSession();
    return <>
        <strong className='text-green-500'>{name}</strong><p>님이 로그인 되었습니다.</p>
        <Button onClick={signOut} text="Sign out" size="xs" />
    </>
    
}