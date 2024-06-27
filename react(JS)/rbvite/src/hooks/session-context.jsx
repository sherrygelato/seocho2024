/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, createContext, useCallback, useReducer } from "react";

const SessionContext = createContext();

// mock
const SampleSession = {
  loginUser: { id: 1, name: "Hong", age: 33 },
  // loginUser: null,
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

// dispatch({type: 'login', payload: {name: "sherry"}})
// arr.reduce((acc, a) => acc + a)
const reducer = (session, action) => {
    const {
        type, 
        payload: {
            id, 
            name,
            price
        }
    } = action;

    switch (type) {

        case "logout":
            return { ...session, loginUser: null };

        case "login":
            return {...session, loginUser: {id: 1, age: 33, name }};

        case "removeItem":
            return {
                ...session,
                cart: [...session.cart.filter((item) => item.id !== id)]
            };

        case "addItem":
            console.table({ id, name, price });
            // session.cart.push({ id, name, price }); // 2번 push!!
            // return { ...session };
        
            // 완전히 추가되기 전의 session.cart가 spread되므로 1번만 추가된 것 처럼 보임!
            return { ...session, cart: [...session.cart, { id, name, price }] };
        
        case "saveItem":
            return {
                ...session,
                cart: session.cart.map((_item) => {
                if (_item.id !== id) return _item;
                return { id, name, price };
                }),
            };
        
        default:
            return session;
    }
}

const SessionProvider = ({ children }) => {
  // const [session, setSession] = useState(SampleSession);
  const [session, dispatch] = useReducer(reducer, SampleSession);


  const logout = useCallback(
      // () => setSession({ ...session, loginUser: null }),
    dispatch({type: 'logout', payload: {}}),
    [], // 의존배열이 빈 배열이면 1번만 실행
  );

  // useCallback으로 캐싱했기 때문에 아이템 수정이 일어나도 로그인이 풀리지 않음
  const login = useCallback(
    // (name) => {
    //   const id = 1;
    //   const age = 33;
    //   const x = {
    //     ...session,
    //     loginUser: { ...session.loginUser, id, name, age },
    //   };
    //   setSession(x);
    // },
    dispatch({type: 'login', payload: {name}}),
    [],
  );

  const removeItem = useCallback(
    (id) => {
    //   setSession({
    //     ...session,
    //     cart: [...session.cart.filter((item) => item.id !== itemId)],
    //   });
    // },
    dispatch({type: 'removeItem', payload: {id}})},
    [],
);

  const addItem = useCallback(
    ({ name, price }) => {
        const maxId = Math.max(...session.cart.map((_item) => _item.id)) ?? 0;
        const id = maxId + 1;
        // session.cart.push({
        //   id: maxId + 1,
        //   name,
        //   price,
        // });
        dispatch({ type: "addItem", payload: { id, name, price } });
    },
    [session],
  );

  const saveItem = useCallback(
    (item) => {
    //   const { id, name, price } = editingItem;
    //   const foundItem = session.cart.find((item) => item.id === id);
    //   foundItem.name = name;
    //   foundItem.price = price;
    //   setSession({ ...session });
      dispatch({type: 'saveItem', payload: item})},
    [],
  );

  return (
    <SessionContext.Provider
      value={{ session, login, logout, removeItem, saveItem, addItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

// eslint-disable-next-line react-refresh/only-export-components
export { SessionProvider, useSession };