import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import styles from '../styles/About.module.css'
import Image from "./Image";
import Head from 'next/head';

export const getStaticProps = () => {
    return {
        props : {footerstatus: true}
    }
}

const About = (props) => {
    return (
        <>
        {/* <Head>
            <title>About Page</title>
        </Head> */}
        <div className="text-center">
            {/* <Header />
            <Navbar /> */}
                <h2 className={styles.about_text}>Welcome to myntra clone</h2>
                <img src="" />
                <img src="" />
                <Image src="logo.png" width={100} height={100} />
            {/* <Footer /> */}
        </div>
        </>
    )
}

export default About;