import React from 'react';

// Default Props
type Props = {
    name: any,
    value: any,
    tick: any,
    onCheck: any

};

const CheckBox=({ name, value, tick, onCheck }: Props) =>{
    return (
        <label>
            <input
                name={name}
                type="checkbox"
                value={value}
                checked={tick || false}
                onChange={onCheck}
            />
            {value}
        </label>
    );
}

export default CheckBox;