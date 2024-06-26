import { useEffect, useRef, memo } from "react";
import Button from "./atoms/Button";
import Input from "./atoms/Input";
// import { useSession } from "../hooks/session-context";

export default function Login({signIn}) {
  console.log("# none :: Login.jsx");

  // const {login: signIn} = useSession();
  const nameRef = useRef();
  const passwdRef = useRef();

  const login = (evt) => {
    evt.preventDefault();
    const name = nameRef.current.value;
    const passwd = passwdRef.current.value;
    if (!name || !passwd) {
      alert("이름과 패스워드를 정확히 입력하세요!");
      if (!name) nameRef.current.focus();
      else passwdRef.current.focus();
      return;
    }

    signIn(nameRef.current.value);
  };

  useEffect(() => {
    if (nameRef.current) nameRef.current.focus();
  }, [nameRef]);

  return (
    <form className="border border-red-300 p-5">
      <h2 className="text-center text-3xl font-semibold leading-7 text-green-500">
        Sign In
      </h2>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Input label="Name" ref={nameRef} />
        </div>

        <div className="sm:col-span-3">
          <Input label="Password" type="password" ref={passwdRef} />
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <Button
          onClick={login}
          text="로그인"
          type="primary"
          size="lg"
          className="px-5 py-1"
        />
      </div>
    </form>
  );
}

// export const MemoedLogin = memo(Login);
export const MemoedLogin = memo(Login, ({ login: a }, { login: b }) => a === b);