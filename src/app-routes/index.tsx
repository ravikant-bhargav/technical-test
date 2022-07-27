import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Layout from "../layout";
import CheckBoxTest from "../pages/checkbox-test";
import NoMatch from "../pages/NoMatch";
import UserSearchTest from "../pages/user-serach-test";


const AppRoutes = () => {
    const AppRouteList = () => {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<CheckBoxTest />} />
                    <Route path="/search-user" element={<UserSearchTest />} />
                    <Route path="*" element={<NoMatch />} />
           
                </Routes>
            </Router>
        )
    }

    return (
        <Layout>
            <AppRouteList />
        </Layout>
    );
}

export default AppRoutes;