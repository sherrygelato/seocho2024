import Login from "./Login";
import Profile from "./Profile";

export default function My({session: {loginUser, cart}, signOut}) {
    return <>
      {loginUser ? <Profile name={loginUser?.name} signOut={signOut}/> : <Login />}
      {/* <strong className='text-green-500'>{loginUser?.name}</strong> logined
      <button onClick={signOut} className='ml-3'>SignOut</button> */}
      <div className="border">
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name}
              <small className="text-gray-300 ml-2">({item.price.toLocaleString()}원)</small>
            </li>
          ))}
        </ul>
      </div>
    </>;
  }

// export default function My({session})
//     // destructuring 때문에 props를 쓰지 않는다.
//     return <><h2 className="text-green-500">USER NAME: {session.loginUser.name}</h2></>
// }

// export default function My(props) {
//     return <><h2 className="text-green-500">USER NAME: {props.session.loginUser.name}</h2></>
// }
//
// function cartInfo(props) {
//     return props.cart.map((item, i) => <li key={i}>{item.name}의 가격은 {item.price}원</li>)
// }