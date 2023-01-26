import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import NavbarMenu from '../../components/NavbarMenu'
import NavbarLogo from '../../components/NavbarLogo'
import ContactUs from '../../public/contactUs.jpg'

//import Link from 'next/link'
import { Link } from '@mui/material';

export default function Contact() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="Contact" content="Contact" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          
        </style>
      </Head>
      <br/>
      <NavbarLogo /> 
      <NavbarMenu /> 


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://kamillah.org"><strong> <span style={{color:"#28a745"}}> Kamillah</span></strong></a>
        </h1>
      
        <div > 
        <br></br>
        <br></br>
        Your gift allows Kamillah to deliver help to people who yearn to perform Hajj. Gifts from donors like you bolster our vital work!
        <br></br>
        <br></br>
        <Image src={ContactUs} alt="Contact">
        </Image>
        
        <div>
        <br></br>  
        <p>
        <strong>NOTICE: </strong>Kamillah does not provide any funding for any purpose other than for the expenses necessary for the  performance of the Hajj
        </p>
        </div>
        </div>
       </main>

      <footer className={styles.footer}>
        Contact Email:......
      </footer>
    </div>
    )
}