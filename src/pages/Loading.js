import React from 'react';
import styles from '../css/Loading.module.css';


export default function Loading(){
    return(
        <div className = {styles.loadingcontainer}>
            <h1>Loading...</h1>
        </div>
    )
}