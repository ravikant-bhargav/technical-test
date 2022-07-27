import React from 'react';
import CheckBox from './CheckBox';
import "./../pages/checkbox-test/index";

//Default checkbox props we used from parent component
type Props = {
    options: any,
    isCheckedAll: any,
    onCheck: any,
};

const CheckBoxList = ({ options, isCheckedAll, onCheck }: Props) => {
    //This will return all the checkbox component 
    const checkBoxOptions = (
        <div className="singleBoxContainer">
            {options.map((option: any, index: any) => {
                return (
                    <div className="pt5">
                        <CheckBox
                            key={index}
                            name={option.name}
                            value={option.value}
                            tick={option.checked}
                            onCheck={(e: any) => onCheck(option.value, e.target.checked)} />
                    </div>
                );
            })}
        </div>
    );

    return (
        <React.Fragment>
            <div className="pt5">
                <CheckBox
                    name="select-all"
                    value="ALL"
                    tick={isCheckedAll}
                    onCheck={(e: any) => onCheck('all', e.target.checked)}
                />
            </div>
            {checkBoxOptions}
        </React.Fragment>
    );
}

export default CheckBoxList;
