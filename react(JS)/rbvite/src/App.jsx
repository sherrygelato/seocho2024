import { useState } from "react";
// import { flushSync } from "react-dom";
import "./App.css";
import Hello from "./components/Hello";
import My from "./components/My";

// mock
const SampleSession = {
  loginUser: { id: 1, name: "Sherrygelato", age: 33 },
  // loginUser: null,
  cart: [
    { id: 100, name: "기본김밥", price: 4500 },
    { id: 101, name: "참치김밥", price: 5000 },
    { id: 200, name: "소고기김밥", price: 5000 },
  ],
};

function App() {
  const [session, setSession] = useState(SampleSession);
  const [count, setCount] = useState(0);
  // const [didLogin, setDidLogin] = useState(true);
  const plusCount = () => setCount((count) => count + 1);
  // const plusCount = () => setCount((curr) => curr + 1);

  // console.log('Appppppppppppp!', count)

  // const toggleLogin = () => {
  //   setDidLogin(!didLogin);
  // }

  const logout = () => setSession({ ...session, loginUser: null });

  const login = (name) => {
    const id = 1;
    const age = 33;
    const x = {
      ...session,
      loginUser: { ...session.loginUser, id, name, age },
    };
    setSession(x);
  };

  const removeItem = (itemId) => {
    setSession({
      ...session,
      cart: [...session.cart.filter((item) => item.id !== itemId)],
    });
  };

  const addItem = (addingItem) => {
    const id = Math.max(...session.cart.map((item) => item.id)) ?? 0;
    const { name, price } = addingItem;
    const item = { id: id + 1, name, price };
    console.log("🚀  id:", id);
    setSession({ ...session, cart: [...session.cart, item] });
  };

  const saveItem = (editingItem) => {
    console.log("# none :: saveItem App.jsx");
    const { id, name, price } = editingItem;
    const foundItem = session.cart.find(item => item.id === id); // 수정되고 있는 거 item 변수에 담기
    // 변수 variable shadowing

    foundItem.name = name;
    foundItem.price = price;
    // 속에 있는 값만 바뀌었는데, set안불렀는데
    // re-render 되기 때문에 다시 그려짐
    // 연결된 함수가 setter 불러서 리랜더링 되었기 때문입

    setSession({...session}) // totalPrice가 cart를 보고 ㅣㅇㅆ기 때문이다

    // setSession({
    //   ...session,
    //   cart: [
    //     ...session.cart.map((item) => (item.id === id ? editingItem : item)),
    //   ],
    // });
  };

  return (
    <>
      <div>
        {session.loginUser && (
          <Hello
            name={session.loginUser.name}
            age={session.loginUser.age}
            plusCount={plusCount}
          />
        )}
      </div>
      {/* <button onClick={toggleLogin}>
        Toggle {session.loginUser ? 'Logined' : 'NotLogined'}
      </button> */}

      <My
        session={session}
        signOut={logout}
        signIn={login}
        removeItem={removeItem}
        addItem={addItem}
        saveItem={saveItem}
      />
      <div className="card">
        <button
          onClick={() => {
            setCount((pre) => pre + 1);
            // flushSync(() => setCount((count) => count + 1));
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;