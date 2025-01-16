'use client';
import styles from './achive.module.css';
import { useState, useRef, useEffect, useLayoutEffect} from 'react';
import Head from "next/head";
import Link from 'next/link';
import ReactLenis from "lenis/react";
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

 export default function achivements(){
    const menuRef = useRef(null);
    const [isMenu, setIsMenu] = useState(true);
    const [lenis, setLenis] = useState<any | null>(null); 

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const newlenis = new Lenis({
            duration: 1,
            easing: (t)=> 1 - Math.pow(1 - t, 2) 
          });
          setLenis(newlenis);
      
          function raf(time: number) {
            newlenis.raf(time);
            requestAnimationFrame(raf);
          }
          requestAnimationFrame(raf);
        }
      }, []);

    const handleNavbar = () =>{
        if (typeof window !== 'undefined' && lenis){
          setIsMenu(!isMenu);
          const menu = menuRef.current;
          if(menu){
            gsap.to(menu, {
              height: isMenu ? '18vh': '0vh',
              duration: 0.3,
              ease: 'power2.Out'
            })
          }
        }
      };
      
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('#ball1', {
            scrollTrigger: {
                trigger: '#ball1',
                start: 'top center',
                scrub: 2
            },
            top: '200px'
        })
        gsap.to('#ball2', {
            scrollTrigger: {
                trigger: '#ball2',
                start: 'top center',
                scrub: 2
            },
            top: '200px'
        })
        gsap.to('#ball3', {
            scrollTrigger: {
                trigger: '#ball3',
                start: 'top center',
                scrub: 2
            },
            top: '200px'
        })
    }, []);

    return(
        <ReactLenis root>
        <Head>
        <meta name='viewport' content='width=device-width, initial-scale = 1'/>
        <meta name='keyword' content='adani university, robotics club, adani university robotics club, aurc, au robotics club, eyantra' />
        </Head>
            <main className={poppins.className} style={{position: 'relative', margin: 0, translate: '0 0'}}> 
            <nav id="nav" className={styles.navbar}>
            <div className={styles.navbarContainer}>
              <img src="/navbar.png" className={styles.navbarBgImg} />
              <img src="/AURC_logo.png" className={styles.navbarLogo} />

              <div className={styles.navbarContent}>
                <Link href='/#home' className={styles.navbarText} >Home</Link>
                <Link href='/#events' className={styles.navbarText} >Events</Link>
                <Link href='/team' className={styles.navbarText}>Team</Link>
                <span className={styles.navbarText}>Achivements</span>
              </div>

              <div className={styles.navbarIcon} onClick={handleNavbar}>
                <img src='/RectBullet.png' style={{width: 10, height: 10}} />
                <img src='/RectBullet.png' style={{width: 10, height: 10, marginLeft: 2}} />
                <img src='/RectBullet.png' style={{width: 10, height: 10, marginTop: 1}} />
                <img src='/RectBullet.png' style={{width: 10, height: 10, marginLeft: 2, marginTop: 1}} />
              </div>
              <div ref={menuRef} className={styles.navbarMenu}>
                <Link href='/#home' className={styles.navbarText} style={{marginLeft: 10, marginTop: 15}}>Home</Link>
                <Link href='/#events' className={styles.navbarText} style={{marginLeft: 10, marginTop: 8}}>Events</Link>
                <Link href='/team' className={styles.navbarText} style={{marginLeft: 10, marginTop: 8}}>Team</Link>
                <span className={styles.navbarText} style={{marginLeft: 10, marginTop: 8}}>Achivements</span>
              </div>
            </div>
            </nav>

            <section className={styles.hero}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src='/RectBullet.png' className={styles.bullet}></img>
                <span className={styles.title}>Achivements</span>
            </div>

            <div className={styles.container}>
                <img src='/AeLSI.png' style={{width: '100%'}}></img>
                <p className={styles.text}>Launch of e-Yantra Lab Setup Initiative (eLSI) Institute in collaboration with IIT Bombay. Principal and HOD meet for spreading awareness of eLSI.</p>
            </div>
            <div style={{marginLeft: 30, marginTop: 20,  position: 'relative'}}>
                <div id='ball1' className={styles.ball}></div>
                <div className={styles.dot}></div>
                <div className={styles.line}></div>
                <div className={styles.dot}></div>
            </div>

            <div className={styles.container}>
                <img src='/Afaculty.png' style={{width: '100%'}}></img>
                <p className={styles.text}>Two-Days FDP on Robotics for Faculty. Faculty team from 15  different institutes/universities have  participated.</p>
            </div>
            <div style={{marginLeft: 30, marginTop: 20,  position: 'relative'}}>
                <div id='ball2' className={styles.ball}></div>
                <div className={styles.dot}></div>
                <div className={styles.line}></div>
                <div className={styles.dot}></div>
            </div>

            <div className={styles.container}>
                <img src='/Astudents.png' style={{width: '100%'}}></img>
                <p className={styles.text}>8 phases of two-Days Workshop on Robotics for our students till 2023. </p>
            </div>
            <div style={{marginLeft: 30, marginTop: 20,  position: 'relative'}}>
                <div id='ball3' className={styles.ball}></div>
                <div className={styles.dot}></div>
                <div className={styles.line}></div>
                <div className={styles.dot}></div>
            </div>

            <div className={styles.container} style={{marginBottom: 80}}>
                <img src='/Atbt.png' style={{width: '100%'}}></img>
                <p className={styles.text}>24-Hour Robotics Based Hackathon and TBT for Trained Students.</p>
            </div>
            </section>
            
            <footer className={styles.footer}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <span className={styles.footerTitle}>AURC</span>
                <span className={styles.footerSubTitle}>Learn | Connect | Evolve</span>
                <span className={styles.footerConnect}>Connect With Us</span>
                <Link href='https://www.instagram.com/robotics_club_au?igsh=MmwzZWs4MDRheWxz'>
                <img src='/insta.png' className={styles.footerIcon} /></Link>
                </div>
                <div>
                  <img src='/AURC_logo.png' className={styles.footerImg}></img>
                </div>
            </footer> 
            </main>
        </ReactLenis>
    );    
 }