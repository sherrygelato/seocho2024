// import PropTypes from "prop-types";

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   isMale: PropTypes.bool,
//   plusCount: PropTypes.func,
//   // children: PropTypes.children,
//   children: PropTypes.func,
// }

// const style = {
//     cousor: 'pointer',
// }

// const SampleSession = {
//     loginUser: { id: 1, name: 'sherrygelato', age: 33 }, // login
//     // loginUser: null, // logout
//     cart: [
//         { id: 100, name: '라면', price: 3000 },
//         { id: 101, name: '컵라면', price: 2000 },
//         { id: 200, name: '파', price: 5000 },
//     ],
// };

import { useEffect } from "react";

export default function Hello(props) {
    // console.log('Heeeeeeeeelo')
    // return <h1 onClick={props.plusCount} style={{
    //     cursor: 'pointer'
    // }}>Hello, {props.name}! <small className="font-sm text-red-500">({props.age + 1})</small></h1>

    useEffect(() => {
        // console.log("Heeeeeeeeelo");
      }, []);
    
      return (
        <h1
          onClick={props.plusCount}
          style={{
            cursor: "pointer",
          }}
        >
          Hello, {props.name}!{" "}
          <small className="font-sm text-red-500">({props.age + 1})</small>
        </h1>
      );
}

// export default function Hello(props) {
//     // console.log(`Hello.jsx :: ${props.name}에 따라 Hello.jsx가 다시 그려지고 있습니다.`)
//     // console.log(`Hello.jsx :: ${props}에 따라 Hello.jsx가 다시 그려지고 있습니다.`)

//     return <h1 onClick={props.plusCount} style={style}>Hello, {props.name}!, <small className='font-sm text-red-900'>age: {props.age}</small></h1>;
// }