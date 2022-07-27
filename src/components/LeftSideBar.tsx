import React from 'react';
import { Link } from 'react-router-dom';



const LeftSideBar = () => {
    return (
        <div style={{
            width: "15%",
            backgroundColor: "#eee",
            paddingTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            paddingLeft:0,
            flexDirection: 'column',
           
        }}>
            <div style={{ padding: 20 }}>
                <Link to="/" style={{ color: "#000", width: 200, textDecoration: "none", fontSize: 22 }}>Home</Link>
            </div>
            <div style={{ padding: 20 }}>
                <Link to="/search-user" style={{ color: "#000", width: 200, textDecoration: "none", fontSize: 22 }}>Users</Link>
            </div>
        </div>
    );
}

export default LeftSideBar;


