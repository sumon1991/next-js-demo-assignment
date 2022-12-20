import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
    const {children, footerstatus} = props;
    console.log('footerstatus', footerstatus);
    return (
        <>
            {true ? (<div className="jumbotron">
            <Header />
            <Navbar />
            {children}
            {!footerstatus && (<Footer />)}
        </div>) : (
            <div className="jumbotron">
                <Header />
                <Navbar />
                {children}
                {!footerstatus && (<Footer />)}
            </div>
        )}
      </>  
    )
}

export default Layout;