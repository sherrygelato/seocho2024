import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import My from './components/My';

 // mock (가짜 data)
const SampleSession = {
  loginUser: { id: 1, name: 'sherrygelato', age: 33 }, // login
  // loginUser: null, // logout
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [count, setCount] = useState(0)
  // console.log(`App.jsx :: Count의 횟수 ${count}에 따라 App.jsx가 다시 그려지고 있습니다.`)
  
  // 값이 바뀌면 리액트가 알아서 바꿔준다

  // {
  //   count = count + 1
  //   _count = 0,
  //   setCount(val){
  //     this._count=val;
  //   }
  //   get count() {
  //     return this._count;
  //   }
  // }

  const plusCount = () => setCount(count + 1);
  // const plusCount = () => setCount((count) => count + 1);


  // let didLogin = true;
  // const toggleLogin = () => {
  //   didLogin = !didLogin;
  // }
  // const [didLogin, setDidLogin] = useState(true)
  // const toggleLogin = () => {
  //   setDidLogin(!didLogin);
  // }

  const [session, setSession] = useState(SampleSession)
  const logout = () => {
    setSession({
      ...session, loginUser: null // destructuring
    })
  }

  
  return (
    <>
      <div>
        {/* {session.loginUser && <Hello props={session} plusCount={plusCount} />} */}
        {session.loginUser && <Hello name={session.loginUser.name} age={session.loginUser.age} plusCount={plusCount} />}
        {/* {didLogin && <Hello name="sherrygelato" age={33} plusCount={plusCount} />} */}
        <My session={session} signOut={logout} />
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        {/* <button onClick={plusCount}>plus count</button> */}
        {/* <button onClick={toggleLogin}>toggle {didLogin ? 'Logined' : 'Not Logined'}</button>
        <button onClick={logout} className='ml-3'>Signout</button> */}
        {/* <button onClick={logout} className='m-3'>Signout {session.loginUser ? 'Logined' : 'Not Logined'}</button> */}
      </div>
      {/* <h1>Vite + React + Sherrygelato - App.jsx 파일 입니다.</h1> */}
      <div className="card m-3">
        <button onClick={plusCount}>
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
