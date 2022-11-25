import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import NavbarMenu from '../../components/NavbarMenu'
import NavbarLogo from '../../components/NavbarLogo'
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
      <NavbarLogo />
      <NavbarMenu /> 

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://kamillah.org"><strong> <span style={{color:"#28a745"}}> Kamillah</span></strong></a>
        </h1>
        {/* <div style={{backgroundImage:`url(${backgroundpic.src})`}}> */}
        <div > 
        <p>
         Application
        <br></br>
          
        </p>
        <div>
          
        <Image src={""} alt="Picture"
            layout='intrinsic'
        >
        </Image> 
        
        <Image src={""} alt="Picture"
            layout='intrinsic'
        >
        </Image>
        
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
