'use client';
import ReactLenis from 'lenis/react';
import {Poppins} from 'next/font/google';
import { useLayoutEffect, useState, useRef} from 'react';
import { gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Head from 'next/head';
import styles from './team.module.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function Team(){
  const menuRef = useRef(null);
  const [isMenu, setIsMenu] = useState(true);

  const handleNavbar = () =>{
      setIsMenu(!isMenu);
      const menu = menuRef.current;
      if(menu){
        gsap.to(menu, {
          height: isMenu ? '18vh': '0vh',
          duration: 0.3,
          ease: 'power2.Out'
        })
      }
  };

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
        <meta name='viewport' content='width=device-width, initial-scale = 1'/>
        <meta name='keyword' content='adani university, robotics club, adani university robotics club, aurc, au robotics club, eyantra' />
      </Head>
      <body>
        <main className={poppins.className}>
        <div style={{position: 'relative'}}>
            <nav id="nav" className={styles.navbar}>
            <div className={styles.navbarContainer}>
              <img src="/navbar.png" className={styles.navbarBgImg} />
              <img src="/AURC_logo.png" className={styles.navbarLogo} />

              <div className={styles.navbarContent}>
                <Link href='/#home' className={styles.navbarText}>Home</Link>
                <Link href='/#events' className={styles.navbarText}>Events</Link>
                <Link href='/team' className={styles.navbarText}>Team</Link>
                <Link href='/achivements' className={styles.navbarText}>Achivements</Link>
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
                <Link href='/achivements' className={styles.navbarText} style={{marginLeft: 10, marginTop: 8}}>Achivements</Link>
              </div>
            </div>
            </nav>
            
            <section className={styles.main}>
            <div>
            <img src="/drone.png" id="drone" className={styles.drone}></img>
            <div className={styles.droneLanding1}></div>
            <div className={styles.droneLanding2}></div>
          </div>

            <div className={styles.hero}>
                <div className={styles.titleContainer}>
                    <img src='/RectBullet.png' className={styles.bullet}></img>
                    <span className={styles.title}>Team</span>
                </div>

                <div className={styles.cardBox}>
                    <div className={styles.card}>
                      <img src='/hetProfile.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Het Hirani</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/het-hirani-1511b4282/'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>
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
          <div style={{display: 'flex', flexDirection: 'column'}}>
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
        </body>
        </ReactLenis>
    );
};