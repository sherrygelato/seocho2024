import { useState, useRef, useEffect, useLayoutEffect } from 'react'

import Login from "./Login";
import Profile from "./Profile";
import Button from "./atoms/Button";
import Input from "./atoms/Input";
// import SampleAtoms from "./atoms/SampleAtoms";
import { FaRegEdit, FaRegTrashAlt, FaUndo, FaShoppingCart } from "react-icons/fa";

export default function My({
  session: { loginUser, cart },
  signOut,
  signIn,
  removeItem,
  addItem: addCartItem,
  saveItem: saveCartItem,
}) {

  const [isAdding, setIsAdding] = useState(false)
  const [editingItem, setEditingItem] = useState(null);
  const itemNameRef = useRef();
  const itemPriceRef = useRef();

  const cancelAdding = (evt) => {
    evt.preventDefault()
    setIsAdding(false)
  } 
  const addItem = (evt) => {
    evt.preventDefault()
    const itemName = itemNameRef.current.value;
    const itemPrice = itemPriceRef.current.value;

    if (!itemName || !itemPrice) {
      alert("상품명과 금액을 정확히 입력하세요");
      itemName.current.focus();
      return;
    }

    addCartItem(itemName, +itemPrice);
    setIsAdding(false)
  };

  const editing = (itemId) => {
    setEditingItem(cart.find((item) => item.id === itemId));
  };

  // Dom 다 그려지고 나서 네가 수행해
  // defendency array [editingItem]가 변경 되었을 때만
  // defendency array가 []면 1회만 실행
  useEffect(() => {
    if (editingItem) {
      itemNameRef.current.value = editingItem.name;
      itemPriceRef.current.value = editingItem.price;
      itemNameRef.current.select();
    }
  }, [editingItem]);

  const cancelEditing = () => {
    setEditingItem(null);
  };

  const saveItem = (evt) => {
    evt.preventDefault();
    const itemName = itemNameRef.current.value;
    const itemPrice = itemPriceRef.current.value;
    console.log("🚀  itemName, itemPrice:", itemName, itemPrice);
    if (!itemName || !itemPrice) {
      alert("상품명과 금액을 정확히 입력하세요!");
      itemNameRef.current.focus();
      return;
    }
    saveCartItem(editingItem.id, itemName, +itemPrice);
    setEditingItem(null);
  };

  // test useEffect
  // Timer
  const [time, setTime] = useState(
    Math.round(new Date().getTime() / 1000) % 1000,
  );
  useEffect(() => {
    const intl = setInterval(() => {
      // console.log("time=", time);
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      console.log("🚀  intl clear!!");
      clearInterval(intl);
    };
  }, []);

  // Posts
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    console.log("fetch!!!");
    fetch("https://jsonplaceholder.typicode.com/posts?userId=2", signal)
      .then((res) => res.json())
      .then((data) => setPosts(data));

    return () => {
      console.log("abort!!");
      controller.abort();
    };
  }, []);

  // useLayoutEffect
  useLayoutEffect(() => {
    console.log("useLayoutEffect!!!!!!");
  }, []);

  return <>
    {loginUser ? <Profile name={loginUser?.name} signOut={signOut}/> : <Login signIn={signIn} />}
    <h1>{time} ====== posts: {posts.length} </h1>
    <div className="my-5 border text-center">
      <ul>
        {cart?.length
          ? cart.map((item) => (
            <li key={item.id} className="flex justify-between border-b">
                  <span className="text-xs text-gray-300">{item.id}</span>
                  {editingItem?.id === item.id ? (
                    <form className="m-2 flex gap-3 border border-green-300 p-3">
                      <Input ref={itemNameRef} placeholder="상품명" />
                      <Input
                        ref={itemPriceRef}
                        type="number"
                        placeholder="금액"
                      />
                      <Button
                        text={<FaUndo />}
                        onClick={cancelEditing}
                        size="sm"
                      />
                      <Button
                        text={<FaShoppingCart />}
                        onClick={saveItem}
                        type="primary"
                        size="sm"
                      />
                    </form>
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
                          text={<FaRegEdit />}
                          size="xs"
                          className="py-1"
                        />
                        <Button
                          onClick={() => removeItem(item.id)}
                          type="danger"
                          text={<FaRegTrashAlt />}
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
      {isAdding ? <form className="m-2 ">
          <Input ref={itemNameRef} placeholder="상품명" />
          <Input ref={itemPriceRef}  placeholder="금액" />
          <Button text={<FaUndo />} onClick={cancelAdding} size="sm" />
            <Button
              text={<FaShoppingCart />}
              onClick={addItem}
              type="primary"
              size="sm"
            />
        </form> : <Button onClick={() => setIsAdding(true)} text="+ 상품추가" className="mt-5" />
      }

      {/* <SampleAtoms /> */}
    </div>
  </>;
}
