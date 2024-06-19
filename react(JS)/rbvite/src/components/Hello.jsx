// import PropTypes from "prop-types";

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   isMale: PropTypes.bool,
//   plusCount: PropTypes.func,
//   // children: PropTypes.children,
//   children: PropTypes.func,
// }

export default function Hello(props) {
    return <h1><div onClick={props.plusCount}>Hello</div>, {props.name}!, <small className='font-sm'>age: {props.age}</small></h1>;
}