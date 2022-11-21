import React from "react";
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";

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