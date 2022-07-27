import React from 'react';


type Props = {
    name: any,
    value: any,
    onInputChange: any,
    className:any

};

const InputBox=({ name, value, onInputChange,className }: Props) =>{
    return (
        <label>
            <input
                name={name}
                type="text"
                value={value}
                onChange={onInputChange}
                className={className}
            />
            
        </label>
    );
}

export default InputBox;