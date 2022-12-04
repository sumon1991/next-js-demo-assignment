import React from "react";
import { useRouter } from "next/router";
import styles from '../../styles/Productdetails.module.css'
import Image from "../Image";

// make a api call 
// this will be in ssr
export const getServerSideProps = async (context) => {
    // const router = useRouter()
    // const {id} = router.query
    // console.log('id - ', {id});
    const id = context.params.id
    // API call
    const response = await fetch(process.env.API_URL + '/products/'+id);
    const data = await response.json(); // convert stringified json to parsed json
    return {
        props: {productData: data}
    }
}

const FashionAccessoriesID = ({productData}) => {
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
                    <Image src={productData.image} />
                </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="mb-5">
                        <h3>{productData.title}</h3>
                        <p className={styles.product_category}>{productData.title}</p>
                        <div className={styles.product_over_all_rating}>
                            <p className={styles.rating}>{productData.rating.rate}</p>
                            <div className={styles.rating_star}>
                                ★
                            </div>
                            <p className={styles.rating_count}>{productData.rating.count}</p>
                        </div>
                        <p className={styles.product_price}>₹ {productData.price}</p>
                        <p className={styles.pdp_vatInfo}>inclusive of all taxes</p>
                        <p className={styles.product_description}>{productData.description}</p>
                    </div>
                    <div className="d-flex">
                        <div className={styles.button_space}>
                            <button type="button" class="btn btn-outline-danger">Add to bag</button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-outline-secondary">Add to Wishlist</button>
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