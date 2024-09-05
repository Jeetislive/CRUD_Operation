import { AppBar, Toolbar,styled } from "@mui/material"
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
    background-color: #111111;
`;
const Tabs = styled(NavLink)`
    font-size: 20px;
    color: white;
    margin-right: 20px;
    text-decoration: none;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to ="/">CRUD OPERATION</Tabs>
                <Tabs to ="/all">All User</Tabs>
                <Tabs to ="/add">Add User</Tabs>

            </Toolbar>
        </Header>
    )
}

export default NavBar;