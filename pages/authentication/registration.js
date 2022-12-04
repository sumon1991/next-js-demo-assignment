import React from "react";
import Image from "../Image";
import Head from 'next/head';
import styles from '../../styles/Login.module.css'
import Link from "next/link";

export const getStaticProps = () => {
    return {
        props : {footerstatus: true}
    }
}

const Login = (props) => {
    return (
        <>
        {/* <Head>
            <title>About Page</title>
        </Head> */}
        <div className={styles.fullpage}>
            {/* <Header />
            <Navbar /> */}
            <div className="container">
                <h2 className={styles.heading}>Signup</h2>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <form action="/api/users/register" method="post">
                                <div className="form-group mb-3">
                                    <input type="natextteme" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name" name="name" required/>
                                </div>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" required/>
                                </div>
                                <div className="form-group mb-3">
                                    <input type="number" className="form-control" id="exampleInputMobile" aria-describedby="mobileHelp" placeholder="Enter mobile" name="mobile" minLength="10" maxLength="10"  required/>
                                </div>
                                <div className="form-group mb-3">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" required/>
                                </div>
                                <div className="form-group mb-3">
                                    <Link className="nav-link" href="/authentication/login">I have an account</Link>
                                </div>
                                <button type="submit" className="btn btn-primary">Create User</button>
                            </form>
                        </div>
                    </div>
                </div>
            {/* <Footer /> */}
        </div>
        </>
    )
}

export default Login;