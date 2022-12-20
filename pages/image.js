import React from "react";
import style from '../styles/Common.module.css'

const Image = (props) => {
    // const {src, alt, width, height} = props //destructuring
    const {src, alt} = props //destructuring
    return (
        <div className={style.image_container}>
            <img src={src} alt={alt} />
        </div>
    )
}
export default Image