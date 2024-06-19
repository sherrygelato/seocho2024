// import PropTypes from "prop-types";

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   isMale: PropTypes.bool,
//   plusCount: PropTypes.func,
//   // children: PropTypes.children,
//   children: PropTypes.func,
// }

const style = {
    cousor: 'pointer',
}

export default function Hello(props) {
    return <h1 onClick={props.plusCount} style={style}>Hello, {props.name}!, <small className='font-sm' style={{
        'text-decoration': 'solid'
    }}>age: {props.age}</small></h1>;
}