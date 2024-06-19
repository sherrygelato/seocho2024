import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'

function App() {
  const [count, setCount] = useState(0)
  // 값이 바뀌면 리액트가 알아서 바꿔준다

  const plusCount = () => setCount(count + 1);

  return (
    <>
      <div>
        <Hello name="sherrygelato" age={33} plusCount={plusCount} />
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <button onClick={plusCount}>plus count</button>
      </div>
      {/* <h1>Vite + React + Sherrygelato - App.jsx 파일 입니다.</h1> */}
      <div className="card">
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
