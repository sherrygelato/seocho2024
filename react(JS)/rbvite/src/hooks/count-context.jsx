import { createContext, useState, useContext } from "react"

// 11111111
const CountContext = createContext();

// 22222222
const CountProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const plusCount = () => setCount((count) => count + 1);
    const minusCount = () => setCount((count) => count - 1);

    const obj = {count, plusCount, minusCount}
    return <CountContext.Provider value={obj}>{children}</CountContext.Provider>;
};

// 333333333
// CountContext for Count
const useCount = () => useContext(CountContext);

// warning 끄기 : 
// 하나의 컴포넌트는 하나를 빼기
// eslint-disable-next-line react-refresh/only-export-components
export {CountProvider, useCount };