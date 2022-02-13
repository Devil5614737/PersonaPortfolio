import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Thumbnail1 from '../public/thumbnail1.png'
import Html from '../public/htmlIcon.svg';
import Css from '../public/cssIcon.svg';
import Javascript from '../public/javascriptIcon.svg';
import React from '../public/react.svg';
import Firebase from '../public/firebaseIcon.svg';
import Bootstrap from '../public/bootstrapIcon.svg';
import Sass from '../public/sassIcon.svg';
import Sql from '../public/sqlIcon.svg';
import { useEffect } from 'react';

export default function Home() {

useEffect(()=>{
  function themeToggle(){
    const btn=document.getElementById('darkBtn')
    btn.addEventListener('click',()=>{
      document.body.style.backgroundColor='black'
    })
  }
themeToggle()
})


  return(
    <>
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
      <p className={styles.logo}>John.S</p>
      <div className={styles.links}>
        <ul className={styles.ul}>
          <li className={styles.li}><a href="#" className={styles.link}>Home</a></li>
          <li className={styles.li}><a href="#" className={styles.link}>Projects</a></li>
          <li className={styles.li}><a href="#" className={styles.link}>Contact</a></li>
        </ul>
      </div>
      </div>
    </nav>
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1 className={styles.title}>Hi,I am <span>John</span> <br /> A fullStack web <br /> developer</h1>
        {/* <div className={styles.switchContainer}>
          <p>Projects</p>
          <svg  width="54" height="104" viewBox="0 0 54 104" fill="none" >
          <rect width="54" height="104" rx="27" fill="#D311D7"/>
          <ellipse cx="26.5" cy="21.5" rx="23.5" ry="21.5" fill="white"/>
          <rect width="54" height="104" rx="27" fill="#D311D7"/>
          <ellipse cx="26.5" cy="21.5" rx="23.5" ry="21.5" fill="white"/>
          </svg>

        </div> */}
      </div>
    </div>
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <p>Projects</p>
          <div className={styles.titleBar}></div>
        </div>
        <div className={styles.projects}>
          <div className={styles.projectsContainer}>
            <div className={styles.project}>
              <div className={styles.projectLeft}>
                <p>Netflix Clone</p>
                <div className={styles.tags}>
                  <p>React</p>
                  <p>Firebase</p>
                  <p>Sass</p>
                </div>
                <div className={styles.demoLink}>
                  <p>Live Demo</p>
                  <svg width="25" height="32" viewBox="0 0 32 32" fill="none" >
<path d="M22.0001 9C21.9063 9.09296 21.8319 9.20356 21.7812 9.32542C21.7304 9.44728 21.7043 9.57799 21.7043 9.71C21.7043 9.84201 21.7304 9.97272 21.7812 10.0946C21.8319 10.2164 21.9063 10.327 22.0001 10.42L26.6001 15.02H3.06006C2.79484 15.02 2.54049 15.1254 2.35295 15.3129C2.16542 15.5004 2.06006 15.7548 2.06006 16.02C2.06006 16.2852 2.16542 16.5396 2.35295 16.7271C2.54049 16.9146 2.79484 17.02 3.06006 17.02H26.5801L22.0001 21.59C21.8138 21.7774 21.7093 22.0308 21.7093 22.295C21.7093 22.5592 21.8138 22.8126 22.0001 23C22.1874 23.1863 22.4409 23.2908 22.7051 23.2908C22.9692 23.2908 23.2227 23.1863 23.4101 23L29.7701 16.64C29.8557 16.5579 29.9238 16.4593 29.9703 16.3502C30.0168 16.241 30.0408 16.1236 30.0408 16.005C30.0408 15.8864 30.0168 15.769 29.9703 15.6598C29.9238 15.5507 29.8557 15.4521 29.7701 15.37L23.4201 9C23.3271 8.90627 23.2165 8.83188 23.0946 8.78111C22.9728 8.73034 22.8421 8.7042 22.7101 8.7042C22.578 8.7042 22.4473 8.73034 22.3255 8.78111C22.2036 8.83188 22.093 8.90627 22.0001 9Z" fill="#C600A6"/>
</svg>

                </div>
              </div>
              <div className={styles.projectRight}>

               <Image src={Thumbnail1}
               layout='responsive' 
               alt='project thumbnail'




               />

              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.projectLeft}>
                <p>Netflix Clone</p>
                <div className={styles.tags}>
                  <p>React</p>
                  <p>Firebase</p>
                  <p>Sass</p>
                </div>
                <div className={styles.demoLink}>
                  <p>Live Demo</p>
                  <svg width="25" height="32" viewBox="0 0 32 32" fill="none" >
<path d="M22.0001 9C21.9063 9.09296 21.8319 9.20356 21.7812 9.32542C21.7304 9.44728 21.7043 9.57799 21.7043 9.71C21.7043 9.84201 21.7304 9.97272 21.7812 10.0946C21.8319 10.2164 21.9063 10.327 22.0001 10.42L26.6001 15.02H3.06006C2.79484 15.02 2.54049 15.1254 2.35295 15.3129C2.16542 15.5004 2.06006 15.7548 2.06006 16.02C2.06006 16.2852 2.16542 16.5396 2.35295 16.7271C2.54049 16.9146 2.79484 17.02 3.06006 17.02H26.5801L22.0001 21.59C21.8138 21.7774 21.7093 22.0308 21.7093 22.295C21.7093 22.5592 21.8138 22.8126 22.0001 23C22.1874 23.1863 22.4409 23.2908 22.7051 23.2908C22.9692 23.2908 23.2227 23.1863 23.4101 23L29.7701 16.64C29.8557 16.5579 29.9238 16.4593 29.9703 16.3502C30.0168 16.241 30.0408 16.1236 30.0408 16.005C30.0408 15.8864 30.0168 15.769 29.9703 15.6598C29.9238 15.5507 29.8557 15.4521 29.7701 15.37L23.4201 9C23.3271 8.90627 23.2165 8.83188 23.0946 8.78111C22.9728 8.73034 22.8421 8.7042 22.7101 8.7042C22.578 8.7042 22.4473 8.73034 22.3255 8.78111C22.2036 8.83188 22.093 8.90627 22.0001 9Z" fill="#C600A6"/>
</svg>

                </div>
              </div>
              <div className={styles.projectRight}>

               <Image src={Thumbnail1}
               layout='responsive' 
               alt='project thumbnail'




               />

              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section className={styles.skills}>
      <div className={styles.sectionTitle}>
          <p>Skills</p>
          <div className={styles.titleBar}></div>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.skill}>
            <Image src={Html} layout='responsive' />
            <p>Html</p>
          </div>
          <div className={styles.skill}>
            <Image src={Css} layout='responsive'/>
            <p>Css</p>
          </div>
          <div className={styles.skill}>
            <Image src={Javascript} layout='responsive'/>
            <p>Javascript</p>
          </div>
          <div className={styles.skill}>
            <Image src={Firebase} layout='responsive'/>
            <p>Firebase</p>
          </div>
          <div className={styles.skill}>
            <Image src={React} layout='responsive'/>
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <Image src={Bootstrap} layout='responsive'/>
            <p>Bootstrap</p>
          </div>
          <div className={styles.skill}>
            <Image src={Sass} layout='responsive'/>
            <p>Sass</p>
          </div>
          <div className={styles.skill}>
            <Image src={Sql} layout='responsive'/>
            <p>Sql</p>
          </div>
         
        
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles.contactContainer}>
        <div className={styles.sectionTitle}>
          <p >Contact</p>
          <div className={styles.titleBar}></div>
        </div>
        <div className={styles.inputContainer}>
          <p>Name</p>
          <input type="text" />
          <p>Email</p>
          <input type="email" />
          <p>Message</p>
          <textarea type="text" ></textarea>
          <button>
          <svg style={{marginRight:'6px'}} width="23" height="23" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.9814 21.8126L6.18137 4.9376C4.38137 4.1876 2.38137 5.68761 3.18137 7.37511L8.18137 19.9376L30.9814 23.5001L8.18137 27.0626L3.18137 39.6251C2.58137 41.3126 4.38137 42.8126 6.18137 41.8751L41.9814 25.0001C43.3814 24.4376 43.3814 22.5626 41.9814 21.8126Z" fill="white"/>
</svg>

            Submit</button>
        </div>
        </div>
      </section>
    </main>
    <div id='darkBtn' className={styles.darkMode}></div>
    </>
  )
}
