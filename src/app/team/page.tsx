'use client';
import ReactLenis from 'lenis/react';
import { useLayoutEffect } from 'react';
import { gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Head from 'next/head';
import styles from './team.module.css';

export default function Team(){

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('#drone',{
           scrollTrigger:{
            trigger:'#drone',
            start:'top center',
            scrub: 2
           },
           y: '1475%',
        })
      }, []);

    return(
        <ReactLenis root>
        <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Sometype+Mono:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </Head>
        <main>
        <div style={{position: 'relative'}}>
            <nav id="nav" className={styles.navbar}>
            <div className={styles.navbarContainer}>
              <img src="/navbar.png" className={styles.navbarBgImg} />
              <img src="/AURC_logo.png" className={styles.navbarLogo} />

              <div className={styles.navbarContent}>
                <Link href='/#home' className={styles.navbarText}>Home</Link>
                <Link href='/#events' className={styles.navbarText}>Events</Link>
                <Link href='/team' className={styles.navbarText}>Team</Link>
                {/* <span className={styles.navbarText}>About</span> */}
              </div>
            </div>
            </nav>
            
            <section className={styles.main}>
            <div>
            <img src="/drone.png" id="drone" className={styles.drone}></img>
            <div className={styles.droneLanding} style={{marginLeft: '.5%', marginTop: '40.7%'}}></div>
            <div className={styles.droneLanding} style={{marginLeft: '.5%', marginTop: '80.7%'}}></div>
            </div>

            <div className={styles.hero}>
                <div style={{display: 'flex', alignItems: 'center', marginTop: 50, marginLeft: 40}}>
                    <img src='/rectBullet.png' className={styles.bullet}></img>
                    <span className={styles.title}>Team</span>
                </div>

                <div className={styles.cardBox}>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                </div>
            </div>
            </section>
            <footer className={styles.footer}>
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10%', marginTop: '2%'}}>
                    <span className={styles.footerTitle}>AURC</span>
                    <span className={styles.footerSubTitle}>Learn | Connect | Evolve</span>
                    <span className={styles.footerConnect}>Connect With Us</span>
                    </div>
                    <div>
                      <img src='/AURC_logo.png' className={styles.footerImg}></img>
                    </div>
            </footer>
        </div>
        </main>
        </ReactLenis>
    );
};