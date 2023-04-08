import React from 'react';
import styles from './Rwdyoutube.module.css';

export default function Rwdyoutube({ src }) {
    return (
        <div className={styles.videobox}>
              <iframe frameBorder="0" src={src} allowFullScreen="true" />
        </div>
    )
}