import { useSession } from "../hooks/session-context";
import Button from "./atoms/Button";

export default function Profile() {
  const {
    session: {
      loginUser: { name },
    },
    logout: signOut,
  } = useSession();
  return (
    <>
      <strong className='text-green-500'>{name}</strong><p>님이 로그인 되었습니다.</p>
      <Button onClick={signOut} text="Sign out" size="xs" />
    </>
  );
}