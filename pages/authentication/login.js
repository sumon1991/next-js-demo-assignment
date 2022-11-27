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
                <h2 className={styles.heading}>Login</h2>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <form>
                                <div class="form-group mb-3">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form-group mb-3">
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div class="form-group mb-3">
                                    <Link className="nav-link" href="/authentication/registration">Don't have an account</Link>
                                </div>
                                <button type="submit" class="btn btn-danger">Submit</button>
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