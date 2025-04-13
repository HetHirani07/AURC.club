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
                      <img src='/niralee.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Niralee Chavda</span>
                      <span className={styles.subName}>President</span>
                      <Link href='https://www.linkedin.com/in/niralee-chavda-869961251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5Pq0GbLRTXau5OOfmNNz4Q%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/hetProfile.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Het Hirani</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/het-hirani-1511b4282?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhZBZSrvjSz%2BT%2Fw27BAMPfw%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/jiaan.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Jiaan Oza</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/jiaan-oza-333496284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Box7m9Io8TlqBnrZJZfwoFw%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/saurabh.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Saurabh Singh</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/saurabh-singh-520180282?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbG87wybRTiOn2TtSRYWUpA%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/aditya.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Aditya Jani</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/aditya-jani-a183a0284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFscVbYAMTE2o7WykBRudBg%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/supal.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Supal Vasani</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/supal-vasani-4a061a284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BaDPpBJxQi21bzqr1PlP1g%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/priyanshi.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Priyanshi Naghera</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/priyanshi-naghera-11b824284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgbDp542mSReyfundt1OkLQ%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/ashish.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Ashish Shrivastav</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/ashish-shrivastav-aaa543284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgkTdp5v%2BR6eFbgGBD2Kfwg%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/dharm.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Dharm Saliya</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/dharm-saliya-460166292?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjjAXf7gHRNiXHWhaexC52w%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/om.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Om Kansara</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/om-kansara-710846198?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bj4dCKoeHRk%2BiwCLcNcP3QA%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/shivam.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Shivam Markanday</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/shivammarkanday?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUoGHRYb2RJqVpvLeG1CM%2Bg%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='hetJethva.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Het Jethva</span>
                      <span className={styles.subName}>Trainer</span>
                      <Link href='https://www.linkedin.com/in/het-jethva-8bb9382a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Ba5ddnI1%2BTPyLioaixedHJA%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/nishka.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Nishka Suthar</span>
                      <span className={styles.subName}>Volunteer</span>
                    </div>

                    <div className={styles.card}>
                    <img src='heet.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Heet Vekariya</span>
                      <span className={styles.subName}>Mentor</span>
                      <Link href='https://www.linkedin.com/in/heet-vekariya-16326024b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMQdtBwBLQC2B%2FHkfRDX7Hg%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/naimish.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Naimish Bhuva</span>
                      <span className={styles.subName}>Mentor</span>
                      <Link href='https://www.linkedin.com/in/naimishbhuva?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxPteJDtOQjWLrXHcvQIhZw%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>

                    <div className={styles.card}>
                    <img src='/aloksir.png' className={styles.imgProfile} alt='profileImage'></img>
                      <span className={styles.name}>Dr. Alok Kumar</span>
                      <span className={styles.subName}>Faculty Cordinator</span>
                      <Link href='https://www.linkedin.com/in/dr-alok-kumar-singh-10117818?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0Fhd6MzcSBOKal91PIdeMA%3D%3D' target='blank'>
                      <img src='/linkedIn.png' className={styles.icon} alt='icon'></img></Link>
                    </div>
                </div>
            </div>
            </section>
            <footer className={styles.footer}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
          <span className={styles.footerTitle}>AURC</span>
          <span className={styles.footerSubTitle}>Learn | Connect | Evolve</span>
          <span className={styles.footerConnect}>Connect With Us</span>
          <Link href='https://www.instagram.com/aurc.robotics?utm_source=qr&igsh=MmwzZWs4MDRheWxz' target='blank'>
          <img src='/insta.png' className={styles.footerIcon}/></Link>
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