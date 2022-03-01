import React, { useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//이미지 import
import logo from "../images/icons/logo-sm.png";
import cart from "../images/icons/cart-sm.png";

//css import
import "./Header.css";
import { AuthContext } from "../context/AuthContext";

function Header() {
    const { isAuth, isAuthenticated, signOut } = useContext(AuthContext);

    useEffect(() => {
        isAuthenticated();
    }, [isAuthenticated])

    return (
        <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
            <div className="container">
                <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="/">
                        <img src={logo} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav-justified w-100 nav-fill">
                            <Nav.Link href="/">iphone</Nav.Link>
        {isAuth ? (
            // jsx는 무조건 <div>나 <React.Fragment>로 감싸야 함. <div>는 실제 HTML에 들어감.
            // <React.Fragment>는 <> 로 생략하여 작성 가능
            <>
                <Nav.Link onClick={signOut}>Logout</Nav.Link>
                <Nav.Link href="/user/cart">
                    <img src={cart} alt="cart"/>
                </Nav.Link>
            </>
        ) : (
            <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/login">
                    <img src={cart} alt="cart"/>
                </Nav.Link>
            </>
        )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;