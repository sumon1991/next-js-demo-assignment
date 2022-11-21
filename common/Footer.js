import React from "react";
import commonstyle from '../styles/Common.module.css'
import Image from "../pages/Image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <Link className="mb-3 me-2 mb-md-0 mr-4 text-muted font-weight-bold text-decoration-none lh-1" href="/"><strong>Myntra Clone</strong></Link>
                    <span className="text-muted"><small>Copyright Protected</small> </span>
                </div>
                <div className={commonstyle.social_container}>
                    <Image src="twitter.png" />
                    <Image src="facebook.png" />
                </div>
            </footer>
        </div>
    )
}

export default Footer;