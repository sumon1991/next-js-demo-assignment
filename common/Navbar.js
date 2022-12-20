import Link from "next/link";
import React from "react";
// import Image from "../pages/Image";
// import Image from "next/image";
import Image from '../pages/image';
import styles from '../styles/Navbar.module.css'
import commonstyle from '../styles/Common.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar_container}>
            <nav className="navbar sticky-top navbar-expand-lg">
            <a className="navbar-brand ml-2" href="#"><strong>Myntra Clone</strong> </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${styles.navbar_items} collapse navbar-collapse`} id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" href="/fashionaccessories">Fashion Accessories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <div className={commonstyle.profile_details}>
                        <Link className="nav-link" href="/authentication/login">
                            <Image src="person.png" />
                        </Link>
                        <Image src="love.png" />
                        <Image src="shopping-bag.png" />
                    </div>
                    <div className={commonstyle.social_container}>
                        <Image src="twitter.png" />
                        <Image src="facebook.png" />
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;