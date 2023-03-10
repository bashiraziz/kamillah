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
        <div className="labayk">
          <p>Labayk Allahuma Labayk Labayk. La shareeka laka Labayk. 
        Innal hamda wannimata laka wal mulk.  La shareeka Lak <br></br> 
        (Here I am at your service, oh Lord, here I am - here I am. No partner do you have.  
        Here I am. Truly, the praise and the favor are yours, and the dominion. 
        No partner do you have.)
        </p>
        </div>
        <div > 
        <p>
         <span style={{color:"#28a745"}}></span> Kamillah is a 501 (c)(3) 
        tax-exempt charitable organization. 
        Our mission is to provide assistance for the performance of Hajj to the people in need, which includes but not limited to, airfare, necessary clothings, 
        meals and transportation for the people that cannot afford taking a trip
        for the performance of Hajj.
        Our primary objective is to assist poor and needy Muslim around the world perform Hajj.
        Gifts from donors like you bolster our vital work!
        <br></br>
          
        </p>
        <div>  
        <h3> Question is: “If you go on Hajj a second time, is that a good deed, or are you being selfish?”</h3>
        <p>The vast majority of Muslims will never be able to conduct the Hajj due to capacity restrictions 
          in Mecca. Even worse, if you undertake the Hajj more than once, you deprive an unidentified 
          individual of the opportunity to do it just once in their lives.
          <u><em > Several Hajjs are not good,</em></u> in my opinion; rather, 
          <em><u>they are selfish.</u></em>
        <br></br>It is staggering to consider the sheer enormity of the Hajj, which draws between 2.5 and 3 
          million pilgrims to a limited region of land in and around Mecca.  
          Although 2.5 -3 million pilgrims is a sizable number, there are over 1.5 billion Muslims worldwide.
          <br></br>
          <strong><em>Thus, the typical Muslim would have to wait 500 years for their time to perform the Hajj.</em></strong>
        </p>
        {/* <div style={{backgroundImage:`url(${backgroundpic.src})`}}> */}
        
        
        
        <br></br>        
          
        <Image src={kaaba3} alt="Kaaba Picture"
          priority
        >
        </Image> 
        </div>
        <div>
        <br></br>
        <Image src={kaaba2} alt="Kaaba Picture"
            layout='intrinsic'
            priority
        >
        </Image>
        </div>

        <br></br>
        <div>
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
