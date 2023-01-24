import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import NavbarMenu from '../../components/NavbarMenu'
import NavbarLogo from '../../components/NavbarLogo'
import { style } from '@mui/system'
export default function Application() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Application</title>
        <meta name="Application" content="Application" />
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
        <h2>
         Application
        <br></br> 
        </h2>
        
        <p>
          An application for the funding of the hajj trip can be submitted by filling the form below, emailed to ( email address) or mailed to the below address
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
        <strong>NOTICE: </strong>This organization does not provide any funding for any purpose other than for the expenses necessary for the  performance of the Hajj
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
