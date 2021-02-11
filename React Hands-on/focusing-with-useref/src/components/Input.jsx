import React from 'react';

const Input = (props, ref) => {
    return (<input type={props.type} placeholder={props.placeholder}  onKeyDown={props.onKeyDown} ref={ref}/>)
}
const InputRef = React.forwardRef(Input);
export default InputRef;