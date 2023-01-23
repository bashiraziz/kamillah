import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import NavbarMenu from '../../components/NavbarMenu'
import NavbarLogo from '../../components/NavbarLogo'
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
        <p>
        <Link href="/Donate" passHref>
          <button class="donatebutton">Donate</button>
        </Link>
        </p>
    
        
        <div>
          
        {/* <Image src={""} alt="Picture"
            fill='intrinsic'
        >
        </Image> 
        
        <Image src={""} alt="Picture"
          fill='intrinsic'
        >
        </Image> */}
        
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
