import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import My from './components/My';

 // mock (가짜 data)
const SampleSession = {
  loginUser: { id: 1, name: 'sherrygelato', age: 33 }, // login
  // loginUser: null, // logout
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
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
  
  const [session, setSession] = useState(SampleSession)
  const logout = () => {
    setSession({
      ...session, loginUser: null // destructuring
    })
  }

  const login = (name) => {
    // const loginUser = session.loginUser;
    // setSession({
    //   ...session, loginUser: {...loginUser, name: name } // destructuring
    // })
    const id = 1;
    const age = 33;
    const x = {
      ...session,
      loginUser: { ...session.loginUser, id, name, age },
    };
    setSession(x);
  }

  const removeItem = (itemId) => {
    setSession({
      ...session,
      cart: [...session.cart.filter((item) => item.id !== itemId)],
    });
  };

  const addItem = (addingItem) => {
    const { name, price } = addingItem;
    const id = Math.max(...session.cart.map((item) => item.id)) ?? 0;
    const item = { id: id + 1, name, price };
    console.log("🚀  id:", id);
    setSession({ ...session, cart: [...session.cart, item] });
  }

  const saveItem = (editingItem) => {
    const { id } = editingItem;
    setSession({
      ...session,
      cart: [
        ...session.cart.map((item) => (item.id === id ? editingItem : item)),
      ],
    });
  };
  
  return (
    <>
      <div>
        {session.loginUser && <Hello name={session.loginUser.name} age={session.loginUser.age} plusCount={plusCount} />}
        < My
          session={session}
          signOut={logout}
          signIn={login}
          removeItem={removeItem}
          addItem={addItem}
          saveItem={saveItem}
         />
         </div>
      <div className="card m-3">
        <button
          onClick={() => {
            setCount((pre) => pre + 1);
            // flushSync(() => setCount((count) => count + 1));
          }}
        ></button>
      </div>
    </>
  )
}

export default App
