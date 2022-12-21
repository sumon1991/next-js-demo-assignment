import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import styles from '../../styles/Productdetails.module.css'
// import Image from "../Image";
// import Image from "next/image";
import Image from '../image';

// make a api call 
// this will be in ssr
export const getServerSideProps = async (context) => {
    // const router = useRouter()
    // const {id} = router.query
    // console.log('id - ', {id});
    let url = process.env.BASE_URL;
    const id = context.params.id
    // API call
    const response = await fetch(process.env.API_URL + '/products/'+id);
    const data = await response.json(); // convert stringified json to parsed json
    return {
        props: {
            productData: data,
            baseurl: url
        }
    }
}

const FashionAccessoriesID = (props) => {

    
    const router = useRouter();

    // const [formdata, setFormdata] = useState({});
    const [submitStatus, setSubmitStatus] = useState(false);

    const {baseurl} = props;
    console.log(baseurl);

    const AddToCartFn = async () => {
        let loginStatus = localStorage.getItem('loginStatus');
        console.log(loginStatus);
        if(loginStatus == "false") {
            router.push('/authentication/login');
        } else {
            console.log(props.productData);
            const payload = {
                userid: localStorage.getItem('userid'),
                productid: props.productData.id
            };
            console.log(payload);
            const url = baseurl + 'api/users/addtocart'
            console.log(url);
            try {
                console.log('test');
                const response = await axios.put(url, payload);
                console.log(response);
                if(response.data) {
                    setSubmitStatus(true);
                    alert('Product added successfully');
                    // setFormdata(initilObj);
                    // router.push('/fashionaccessories');
                } else {
                    setSubmitStatus(true);
                }
            } catch {
                router.push('/authentication/login');
                setSubmitStatus(true);
            }
        }
    }

    // const router = useRouter()
    // const {id} = router.query
    // console.log('id - ', {id});
    // console.log(props);
    // const {productData} = props;
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6">
                <div className={styles.product_image}>
                    <Image src={props.productData.image} />
                </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="mb-5">
                        <h3>{props.productData.title}</h3>
                        <p className={styles.product_category}>{props.productData.title}</p>
                        <div className={styles.product_over_all_rating}>
                            <p className={styles.rating}>{props.productData.rating.rate}</p>
                            <div className={styles.rating_star}>
                                ★
                            </div>
                            <p className={styles.rating_count}>{props.productData.rating.count}</p>
                        </div>
                        <p className={styles.product_price}>₹ {props.productData.price}</p>
                        <p className={styles.pdp_vatInfo}>inclusive of all taxes</p>
                        <p className={styles.product_description}>{props.productData.description}</p>
                    </div>
                    <div className="d-flex">
                        <div className={styles.button_space}>
                            <button type="button" className="btn btn-outline-danger" onClick={AddToCartFn}>Add to bag</button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-secondary">Add to Wishlist</button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            {/* {productData.map( item => (
                <div>{item.title}</div>
            ))} */}
        </div>
    )
}

export default FashionAccessoriesID;