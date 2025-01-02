'use client';
import Events from './components/events';
import About from './components/about';
import { useRef, useEffect, useLayoutEffect, useState} from "react";
import ReactLenis from "lenis/react";
import Lenis from 'lenis';
import { gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './page.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home(){
  //const Lenis = dynamic(() => import('lenis'), { ssr: false });
  const imageRef = useRef(null);
  const marqueeRef = useRef(null);
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

  const handleHome = () => {
    if (typeof window !== 'undefined' && lenis) {
      const section = document.getElementById('home');
      if (section) {
        lenis.scrollTo(section);
      }
    }
  };
  const handleEvent = () => {
    if (typeof window !== 'undefined' && lenis) {
      const section = document.getElementById('events');
      if (section) {
        lenis.scrollTo(section);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const image = imageRef.current;
      if (image) {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          (image as HTMLImageElement).style.transform = `scale(${1 + scrollY * 0.009})`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    }
  }, [imageRef]);
  
  const firstSectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (firstSectionRef.current && lenis) {
        const nextSection = document.getElementById('nav');
        if (nextSection) {
          lenis.scrollTo(nextSection); 
        }
      }
    };
  
    const TimeId = setTimeout(handleScroll, 1500);    
    return () => clearTimeout(TimeId); 
  }, [firstSectionRef.current]);

  useEffect(()=>{
    const marquee = marqueeRef.current;
    const handleMarquee = () =>{
      if(marquee){
        gsap.to(marquee, {
          x: '-51%',
          duration: 15,
          repeat: -1,
          ease: 'linear',
          onRepeat: () =>{
            (marquee as HTMLElement).style.transform='translateX(100)';
          },
        });
      }
    };
    const TimeId = setTimeout(handleMarquee);
    return () => clearTimeout(TimeId);
  }, [marqueeRef.current]);

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

  return (
    <ReactLenis root>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale = 1'/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Sometype+Mono:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </Head>
      <main style={{margin: 0, translate: '0 0',}}>

        <section ref={firstSectionRef} className={styles.firstPage}>
          <div style={{ alignSelf: 'center'}} ref={imageRef}>
            <img src="/AURC_logo.png" className={styles.logoImpression} />
          </div>
        </section>

        <div style={{position: 'relative'}}>
          <nav id="nav" className={styles.navbar}>
            <div className={styles.navbarContainer}>
              <img src="/navbar.png" className={styles.navbarBgImg} />
              <img src="/AURC_logo.png" className={styles.navbarLogo} />

              <div className={styles.navbarContent}>
                <span className={styles.navbarText} onClick={handleHome}>Home</span>
                <span className={styles.navbarText} onClick={handleEvent}>Events</span>
                <Link href='/team' className={styles.navbarText}>Team</Link>
                {/* <span className={styles.navbarText}>About</span> */}
              </div>
            </div>
          </nav>

        <section id='secondPage' className={styles.secondPage}>
          <div>
            <img src="/drone.png" id="drone" className={styles.drone}></img>
            <div className={styles.droneLanding1}></div>
            <div className={styles.droneLanding2}></div>
          </div>

          <div className={styles.hero}>
          <div id='home' className={styles.space}></div>

          <div className={styles.marqueeBox}>
            <p ref={marqueeRef} className={styles.marqueeText}>Adani University Robotics Club  Adani University Robotics Club</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginTop: '0%'}}>
          <div className={styles.dashboardLeft}>
            <div className={styles.dashboardUpper}>
              <span className={styles.textUpper}>14+</span>
              <span className={styles.textLower}>Workshops</span>
            </div>
            <div className={styles.dashboardLower}>
              <span className={styles.textUpper}>01</span>
              <span className={styles.textLower}>TBT Competition</span>
            </div>
          </div>

          <div style={{height: '100%', width: '56.35%', boxSizing: 'border-box', border: 'solid', borderColor: '#999'}}>
            <img src="/robot.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}></img>
          </div>

          <div className={styles.dashboardRight}>
            <div className={styles.dashboardUpper}>
              <span className={styles.textUpper}>330+</span>
              <span className={styles.textLower}>Participants</span>
            </div>
            <div style={{height: '50%', width: '100%', display: 'flex'}}>
              <img src="/evolve.png" style={{width: '65%', height: '67%'}}></img>
            </div>
          </div>
          </div>

          <div id='events'><Events /></div>
          <div id='about'><About /></div>
          </div>
        </section>

        {/* <section id='thirdPage' className={styles.thirdPage}>
          <div className={styles.hero}>
          <div id='events' className={styles.spaceA}></div>
            <div id='events'><Events /></div>
            <div id='about'><About /></div>
          </div>
        </section> */}
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
  )
};