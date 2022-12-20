import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
// import Image from "../Image";
// import Image from "next/image";
import Image from '../image';
import Head from 'next/head';
import styles from '../../styles/Login.module.css'
import Link from "next/link";

export const getStaticProps = () => {
    let url = process.env.BASE_URL;
    return {
        props : {
            footerstatus: true,
            baseurl: url
        }
    }
}

const Login = (props) => {
    const [formdata, setFormdata] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);

    const router = useRouter();
    const {baseurl} = props;
    console.log(baseurl);

    const loginFn = async () => {
        console.log(formdata);
        const url = baseurl + 'api/users/login'
        try {
            console.log('test');
            const response = await axios.post(url, formdata);
            console.log(response);
            if(response.data.userid) {
                setSubmitStatus(true);
                // setFormdata(initilObj);
                localStorage.setItem('loginStatus', true);
                localStorage.setItem('username', response.data.email); 
                localStorage.setItem('userid', response.data._id); 
                localStorage.setItem('name', response.data.name);  
                router.push('/fashionaccessories');
            } else {
                setSubmitStatus(true);
            }
        } catch {
            setSubmitStatus(true);
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let tempObj = {};
        tempObj[e.target.name] = e.target.value;
        setFormdata({...formdata, ...tempObj});
    }
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
                            {/* <form action="/api/users/login" method="post"> */}
                                <div className="form-group mb-3">
                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required onChange={handleChange}/>
                                </div>
                                <div className="form-group mb-3">
                                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required onChange={handleChange}/>
                                </div>
                                <div className="form-group mb-3">
                                    <Link className="nav-link" href="/authentication/registration">Don't have an account</Link>
                                </div>
                                <button type="submit" className="btn btn-danger" onClick={loginFn}>Login</button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            {/* <Footer /> */}
        </div>
        </>
    )
}

export default Login;