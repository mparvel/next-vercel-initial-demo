import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './MainLayout.module.css'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const MainLayout = ( {children} ) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Initial Demo - About Page</title>
          <meta name="description" content="About Page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
 
        

        <main className={`${styles.main} ${inter.className}`}>

            { children }

        </main>
      </div>
    </>
  )
}

export default MainLayout