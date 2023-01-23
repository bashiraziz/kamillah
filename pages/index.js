import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import kaaba1 from '../public/new-images-kaaba-mecca-after-restoration_21730-2621.webp'
import kaaba2 from '../public/kaaba2.jpg'
import kaaba3 from '../public/new-images-kaaba-mecca-after-restoration.jpg'
import NavbarMenu from '../components/NavbarMenu'
import NavbarLogo from '../components/NavbarLogo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kamillah</title>
        <meta name="description" content="Kamillah" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          
        </style>
      </Head>
        <NavbarLogo />
        <NavbarMenu />      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://kamillah.org"><strong> <span style={{color:"#28a745"}}> Kamillah</span></strong></a>
        </h1>
        {/* <div style={{backgroundImage:`url(${backgroundpic.src})`}}> */}
        <div > 
        <p>
         <span style={{color:"#28a745"}}> Kamillah</span> is a 501 (c)(3) 
        tax-exempt charitable organization. 
        Our mission is to provide assistance for the performance of Hajj to the people in need, which includes but not limited to, airfare, necessary clothings, 
        meals and transportation for the people that cannot afford taking a trip
        for the performance of Hajj.
        Our primary objective is to assist poor and needy Muslim around the world perform Hajj.
        <br></br>
          
        </p>
        <div>
        <br></br>        
          
        <Image src={kaaba3} alt="Kaaba Picture"
            layout='intrinsic'
        >
        </Image> 
        </div>
        <div>
        <br></br>
        <Image src={kaaba2} alt="Kaaba Picture"
            layout='intrinsic'
        >
        </Image>
        </div>

        <br></br>
        <div>
        <strong>NOTICE: This organization does not provide any .......</strong>

        </div>
       
        </div>
        
       </main>

      <footer className={styles.footer}>
        Contact Email:......
      </footer>
    </div>
  )
}
