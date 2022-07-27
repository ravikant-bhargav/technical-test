import React, { useState } from 'react';
import CheckBoxList from '../../components/CheckBoxList';
import LeftSideBar from '../../components/LeftSideBar';
import { checkBoxItem } from './checkBoxItems';
import "./index.css";



const CheckBoxTest = () => {

  const [checkBoxList, setCheckBoxList] = useState(checkBoxItem); /// Containes All check box items
  const [isAllSelected, checkAllBox] = useState(false);  /// return true/false if all checkboxes are checked/not

  //  This function is called whenever we trigger any checkbox operation and sets values into respective fields
  const onCheckBoxChange = (checkName: any, isChecked: any) => {
    let isAllChecked = (checkName === 'all' && isChecked);
    let isAllUnChecked = (checkName === 'all' && !isChecked);
    const checked = isChecked;

    /// this will update the checkbox array object with checked true/false
    const checkList = checkBoxList.map((checkItem, index) => {
      if (isAllChecked || checkItem.value === checkName) {
        return Object.assign({}, checkItem, {
          checked,
        });
      } else if (isAllUnChecked) {
        return Object.assign({}, checkItem, {
          checked: false,
        });
      }

      return checkItem;
    });

    let isAllSelected_ = (checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;  // This will return TRUE if all checkboxes are checked Else return FALSE

    setCheckBoxList(checkList);    // Update the checkbox list array object [checkList] with updated values
    checkAllBox(isAllSelected_);  // Sets the all checkbox 
  }



  return (
    <React.Fragment>
      <LeftSideBar />
      <div className="checkboxcontainer">
        <div className="labelContainer">
          <h3>CheckBox List</h3>
        </div>
        
        {/* Render the checkbox component */}
        <CheckBoxList
          options={checkBoxList}
          isCheckedAll={isAllSelected}
          onCheck={onCheckBoxChange}
        />

        <div>
          <h4>Checked Item </h4>
          {checkBoxList.map((lableItem: any, index: any) => {
            return (
              <div className="pt5" key={index}>
                <label >
                  {lableItem.checked && lableItem.value}
                </label>
                <br />
              </div>
            )
          })}
        </div>
      </div>

    </React.Fragment>
  );
}

export default CheckBoxTest;
