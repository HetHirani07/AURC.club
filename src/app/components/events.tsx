'use client';
import styles from './events.module.css';
import Link from 'next/link';

export default function Events(){
    return (
        <div className={styles.container}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src='/RectBullet.png' className={styles.bullet}></img>
                <span className={styles.title}>Events</span>
            </div>
            {/* <p className={styles.subTitle}>Join events to learn and grow with better connections.</p> */}
            <div className={styles.card}>
                <img src='/workshopBG.png' className={styles.cardImg}></img>
                <span className={styles.eventName}>Robotics Workshop S16</span>
                <span className={styles.eventDate}>Date: 24th Jan, 2025</span>
                <Link href='/event'><img src='/cardToggle.png' className={styles.toggleImg}></img></Link>
            </div>
        </div>
    )
}
