import { createContext, useState, useContext, useCallback } from "react"

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

const SessionContext = createContext();

const SessionProvider = ({ children }) => {

    const [ session, setSession ] = useState(SampleSession);
    
    const logout = () => setSession({ ...session, loginUser: null});

    const login = useCallback((name) => {
        const id = 1;
        const age = 33;
        const x = {
        ...session,
        loginUser: { ...session.loginUser, id, name, age },
        };
        setSession(x);
    },[session]);

    const addItem = useCallback((addingItem) => {
        const id = Math.max(...session.cart.map((item) => item.id)) ?? 0;
        const { name, price } = addingItem;
        const item = { id: id + 1, name, price };
        console.log("🚀  id:", id);
        setSession({ ...session, cart: [...session.cart, item] });
      }, [session]);
    
      const saveItem = useCallback((editingItem) => {
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
      }, [session]);

    const removeItem = useCallback(
        (item) => {
            saveItem(item);
            if (prePrice !== item.price) setTotalPriceToggleFlag(!totalPriceToggleFlag);
          });

    const obj =  { session, login, logout, saveItem, removeItem, addItem }
    return <SessionContext.Provider value={obj}>{children}</SessionContext.Provider>;
};

const useSession = () => useContext(SessionContext);

// eslint-disable-next-line react-refresh/only-export-components
export {SessionProvider, useSession};