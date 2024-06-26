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