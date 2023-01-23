import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import NavbarMenu from '../../components/NavbarMenu'
import NavbarLogo from '../../components/NavbarLogo'
import donateForm2 from '../../public/donationForm2.jpg'
import donateForm from '../../public/donationForm.jpg'
import donateForm3 from '../../public/donationForm3.jpg'

//import Link from 'next/link'
import { Link } from '@mui/material';

export default function Donate() {

  const handleDonateClick = () => {

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Donate</title>
        <meta name="Donate" content="Donate" />
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
        <Image src={donateForm} alt="Donate Form">
        </Image>

        <Image src={donateForm2} alt="Donate Form">
        </Image>

        <Image src={donateForm3} alt="Donate Form">
        </Image>
      
        
        <div>
        <br></br>  
        <p>
        <strong>NOTICE: This organization does not provide any .......</strong>
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
