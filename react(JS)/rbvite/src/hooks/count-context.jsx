import { createContext, useContext, useReducer } from "react"

// 11111111
const CountContext = createContext();

// 55555555
const reducer = (count, action) => {
    const {type, step} = action;
    switch (type) {
        case "plus":
            return count + step;
        case "minus":
            return count - step;
        default:
            return count;
    }
}

// 22222222
const CountProvider = ({children}) => {

    // 44444444
    // dispatch({type: 'plus', step: 2}) : payload
    const [count, dispatch] = useReducer(reducer, 0); // count 초기값 0


    // const plusCount = () => setCount((count) => count + 1);
    // const minusCount = () => setCount((count) => count - 1);
    const plusCount = (step = 1) => dispatch({type: "plus", step: step});
    const minusCount = (step = 1) => dispatch({type: "minus", step: step});
    

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