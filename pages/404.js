import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
            router.push('/');
        }, 3000)
    },[]) // Life cycle hooks

    return (
        <div>
            <h2>Page Not Found</h2>
        </div>
    )
}

export default NotFound;