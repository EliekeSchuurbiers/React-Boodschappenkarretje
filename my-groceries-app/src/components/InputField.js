import React from 'react';

function InputField(props) {

    return (
        <input
            className="inputField"
            onKeyDown={props.onChange}
        ></input>
    )

}


export default InputField;
