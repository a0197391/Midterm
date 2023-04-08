import React from 'react';
import styles from './Rwdyoutube.module.css';

export default function Rwdyoutube({ src }) {
    return (
        <div className={styles.videobox}>
            <iframe src={src} />
        </div>
    )
}