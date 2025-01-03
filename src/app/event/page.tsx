'use client';
import ReactLenis from 'lenis/react';
import { useState, useEffect, useRef, useLayoutEffect} from 'react';
import { gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './event.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Event(){
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);
  const images = ['/image1.png', '/image2.png', '/image3.png', '/image4.png', '/image5.png', '/image6.png', '/image7.png']

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (slideContainerRef.current) {
      (slideContainerRef.current as HTMLElement).style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

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
            <div className={styles.droneLanding1}></div>
            <div className={styles.droneLanding2}></div>
            </div>

            <div className={styles.hero}>
            <div className={styles.imgContainer}>
              <div onClick={handlePrev} className={styles.prevBtn}>
                <img src='/cardToggle.png' style={{height: '100%', width: '100%', rotate: '180deg'}}></img>
              </div>
              <div onClick={handleNext} className={styles.nextBtn}>
                <img src='/cardToggle.png' style={{height: '100%', width: '100%'}}></img>
              </div>
              <div className={styles.slideContainer} ref={slideContainerRef}>
                {images.map((child, index) => (
                  <img src={child} key={index} className={styles.Img}></img>
                ))}
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: 30, marginTop: 40}}>
                <img src='/RectBullet.png' className={styles.bullet}></img>
                <span className={styles.title}>Robotics Workshop S16</span>
            </div>
            <div>
              <p className={styles.para}>The Adani University Robotics Club is going to organize two-days consecutive workshops cum 
              competition on “Introduction to Robotics” under the initiative of SSIP 2.0. The workshop 
              aims to create the next generation of embedded systems engineers with a practical outlook 
              to provide practical solutions to some of the real-world problems. The workshop will involve 
              theory and hands-on-training sessions based on fundamentals of Robotics and educational 
              platforms.</p>
              <p className={styles.para}>Robotics involves the integration of various disciplines such as computer science, 
              electronics, and communication technology. It is a rapidly growing field with wide-ranging 
              applications across industries such as healthcare, agriculture, smart cities, manufacturing,
              etc. Overall, Robotics workshop play a crucial role in enhancing the educational experience 
              of students by providing practical skills and fostering interdisciplinary learning.</p>
            </div>

            <div style={{display: 'flex', alignItems: 'center', marginLeft: 30, marginTop: 40}}>
                <img src='/RectBullet.png' className={styles.bullet}></img>
                <span className={styles.title}>Entrance Test</span>
            </div>
            <div>
              <p className={styles.para}>An entrance exam will be conducted to select 24 participants. This test will be of 15 MCQs 
              (one mark each). There will be no negative-marking. Time given to complete the test will be 
              strictly 5 min. Most of the questions will be based on aptitude, basic about robots and 
              logical programming questions on C language.</p>
              <p className={styles.para}>The date, time and link of the test will be shown in this section at the time of test. Please keep checking for the details.</p>
            </div>

            <div style={{display: 'flex', alignItems: 'center', marginLeft: 30, marginTop: 40}}>
                <img src='/RectBullet.png' className={styles.bullet}></img>
                <span className={styles.title}>Workshop Modalities</span>
            </div>
            <div className={styles.modalities}>
            <p>1. Participants number: A total of 24-participants in a team of 4-students (max 6- teams) 
                will be trained.</p>
            <p>2. Laptop: All participants are requested to come with their laptop (at least 1-2 laptop per
              team)</p>
            <p>3. Certification: All students having 100% attendance will be given a participation 
            certificate (there is no provision for relaxation)</p>
            <p>4. Awards: Attractive prize will be given to a top team after successfully completion of the 
            workshop.</p>
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
        
    )
}