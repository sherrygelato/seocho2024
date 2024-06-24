// loginUser의 정보를 보이는 Profile component를 작성하세요.
// login을 할 수 있는 Login component를 작성하세요.
// My에서 loginUser가 존재하면 Profile, 그렇지 않다면 Login 표시

import Button from "./atoms/Button";

export default function Profile({name, signOut}) {
    return <>
        <strong className='text-green-500'>{name}</strong> logined
        {/* <button onClick={signOut} className='ml-3'>SignOut</button> */}
        <Button onClick={signOut} text="Sign out" size="xs" />
    </>
    
}