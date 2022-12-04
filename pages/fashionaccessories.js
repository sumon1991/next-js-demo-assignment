import React from "react";
import Image from "./Image";
import styles from '../styles/FashionAccessories.module.css'
import Link from "next/link";

export const getStaticProps = async () => {
    // API call
    const response = await fetch(process.env.API_URL + '/products');
    const data = await response.json(); // convert stringified json to parsed json
    return {
        props: {productData: data}
    }
}

const FashionAccessories = (props) => {
    // console.log(props);
    const {productData} = props;
    return (
        <div className="container mt-3">
            {/* <h2>This is FashionAccessories</h2> */}
            <div className="row">
            {productData.map( item => (
                <div className="col-md-3 col-12">
                    <div className={[styles.card_container, 'card', 'mb-3'].join(" ")}>
                        <div className={[styles.product_image].join(" ")}>
                            
                            <Link className="nav-link" href={`/fashionaccessories/` + item.id}>
                                <Image src={item.image} />
                            </Link>
                        </div>
                        <div className="card-body">
                            <h5 className={['card-title', styles.item_title].join(" ")}>{item.title}</h5>
                            <div className={styles.add_to_wishlist}>
                                <Image src="love.png" />
                            </div>
                            <p className={['card-text', styles.item_category].join(" ")}><small className="text-muted">{item.category}</small></p>
                            <p className={['card-text', styles.item_description].join(" ")}>{item.description}</p>
                            <p className={['card-text', styles.item_price].join(" ")}>Rs. {item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default FashionAccessories;