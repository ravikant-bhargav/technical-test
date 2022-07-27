import React, { useState } from 'react';
import { fetchServerDataGet } from '../../ApiService';
import InputBox from '../../components/InputBox';
import DataTable from 'react-data-table-component';
import "./index.css";
import LeftSideBar from '../../components/LeftSideBar';



const UserSearchTest = () => {
  const [uValue, setUValue] = useState(""); // Sets the input text value
  const [usersList, setUserList] = useState([]);  // Sets the userlist array object
  const [loading, isLoading] = useState(false);  // Sets the loading status
  const [errorMsg, setErrorMessage] = useState("");  // Sets the error message



  const getUsers = async (inputVal: any) => {
    setUValue(inputVal);
    if (inputVal.trim() !== '') {
      
      isLoading(true);

      // Sets the header in APi Request
      let headers = {
        'Content-Type': 'application/json',
      };

      // API Calling to get the users data from GIt API
      await fetchServerDataGet(inputVal.trim(), headers).then(async (response: any) => {
        let data = await response.json();
        isLoading(false);
        if (data?.message) {
          setErrorMessage(data?.message); // Sets error message if geeting from api response
        } else {
          setUserList(data.items);
          setErrorMessage("");
        }
      })
        .catch(error => {  // Catch the errors if get from the server side
          isLoading(false);
          setErrorMessage("Something went wrong.Please try again");
          console.log('Error : ', error);
        });
    }

  }

  // Column Object to set in Data Table
  const columns = [
    {
      name: 'Id',
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: 'Image',
      cell: (row: any) => (
        <>
          <img src={row.avatar_url} width={40} height={40} />
        </>
      ),
      sortable: true,
    },
    {
      name: 'User Name',
      selector: (row: any) => row.login,
      sortable: true,
    },
    {
      name: 'User Type',
      selector: (row: any) => row.type,
      sortable: true,
    },
    {
      name: 'Score',
      selector: (row: any) => row.score,
      sortable: true,
    },


  ];

  return (
    <React.Fragment>
      <LeftSideBar />
      <div className="searchcontainer">
        <div className="labelContainer">
          <h3>Search User</h3>
        </div>
        <div className="inputContainer">
          <InputBox
            name="users"
            value={uValue}
            onInputChange={(e: any) => { getUsers(e.target.value) }}
            className={"inputBox"}
          />

        </div>
        {errorMsg && (
          <div className="sc-ivTmOn fwKvpK">
            <div style={{ "padding": 24 }}>{errorMsg}
            </div>
          </div>
        ) || (
            <DataTable
              columns={columns}
              data={usersList}
              progressPending={loading}
              pagination

            />
          )}

      </div>

    </React.Fragment>
  );
}

export default UserSearchTest;
