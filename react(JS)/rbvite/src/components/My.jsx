import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Hello from "./Hello";
import Login from "./Login";
import Profile from "./Profile";
import ItemEdit, { MemoedItemEdit } from "./ItemEdit";
import Button from "./atoms/Button";
import { useCount } from "../hooks/count-context";
import { SessionProvider, useSession } from "../hooks/session-context";

export default function My() {

  const {session: {loginUser, cart}, logout: signOut, login: signIn } = useSession();

  // 리액트가 따로 캐싱하고 있음
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const {count} = useCount();
  const { session, cart, removeItem } = useSession();

  // 계속 변경되고 있는, 다시 그릴 수 밖에 없는
  const cancelAdding = () => {
    console.log("# none :: cancelAdding My.jsx");
    setIsAdding(false);
  };
 

  // test useEffect
  const [time, setTime] = useState(
    Math.round(new Date().getTime() / 1000) % 1000,
  );

  useEffect(() => {
    const intl = setInterval(() => {
      // console.log("time=", time);
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      // console.log("🚀  intl clear!!");
      clearInterval(intl);
    };
  }, []);

  useLayoutEffect(() => {
    // console.debug("useLayoutEffect!!!!!!");
  }, []);

  const editing = (itemId) => {
    console.log("# none :: editing My.jsx");
    const item = cart.find((item) => item.id === itemId)
    setEditingItem(item);
    setPrePrice(item.price)
  };

  const cancelEditing = () => {
    console.log("# none :: cancelEditing My.jsx");
    setEditingItem(null);
    setPrePrice(0)
  };

  // 프록시 방식으로 바꿈
  const editItem = (item) => {
    saveItem(item)
    if (prePrice !== item.price) setTotalPriceToggleFlag(!totalPriceToggleFlag)
  }

  const addingItem = useMemo(() => ({ name: "x", price: 1000 }), []);

  const [totalPriceToggleFlag, setTotalPriceToggleFlag] = useState(true)
  const [prePrice, setPrePrice] = useState(0)
  const totalPrice = useMemo(() => {
    console.log("# none :: totalPrice My.jsx" );
    console.log(`# totalPriceToggleFlag :: ${totalPriceToggleFlag} My.jsx` );
    return cart?.reduce((acc, item) => acc + item.price, 0);
  }, [cart, totalPriceToggleFlag]); // cart만 바라보는게 아니라 가격 비교해서 flag 확인하여 가기

  return (
    <>
      <SessionProvider>
        <Hello
          name={session.loginUser.name}
          age={session.loginUser.age}
        />
      </SessionProvider>
      {session.loginUser ? (
        <Profile />
      ) : (
        <Login />
      )}

      <h1>Second: {time} - prePrice: ${prePrice} - count: {count}</h1>
      <Button
        text="TotalPrice"
        onClick={() => setTotalPriceToggleFlag(!totalPriceToggleFlag)}
      />

      <div className="my-5 border text-center">
        <ul>
          {cart?.length
            ? cart.map((item) => (
                <li key={item.id} className="flex justify-between border-b">
                  {editingItem?.id === item.id ? (
                    <ItemEdit
                      item={editItem} // editingItem에서 editItem로 프록시(경유) 방식으로 바꿈
                      cancel={cancelEditing}
                      save={saveItem}
                    />
                  ) : (
                    <>
                      <span className="text-xs text-gray-300">{item.id}</span>
                      <strong>
                        {item.name}
                        <small className="ml-2 text-gray-500">
                          ({item.price.toLocaleString()}원)
                        </small>
                      </strong>
                      <div>
                        <Button
                          onClick={() => editing(item.id)}
                          type="primary"
                          text={<FaEdit />}
                          size="xs"
                          className="py-1"
                        />
                        <Button
                          onClick={() => {
                            if (confirm("Are u sure??")) removeItem(item.id);
                          }}
                          type="danger"
                          text={<FaTrashAlt />}
                          size="xs"
                          className="py-1"
                        />
                      </div>
                    </>
                  )}
                </li>
              ))
            : "장바구니가 비었습니다."}
        </ul>
        <h3 className="pl-1 text-left text-green-500">
          * Total: {totalPrice.toLocaleString()}원
        </h3>
        {isAdding ? (
          <MemoedItemEdit item={addingItem} cancel={cancelAdding} save={addItem} /> // 사용하는 바깥쪽
        ) : (
          <Button
            onClick={() => setIsAdding(true)}
            text="+ 상품추가"
            className="mt-5"
          />
        )}
      </div>
    </>
  );
}