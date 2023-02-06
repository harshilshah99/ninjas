import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/navbar.js'
import Footer from '@/components/footer.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NinjaList | Home</title>
      </Head>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>The About Us page of your website is an essential source of information for all who want to know more about your business.</p>

    </>
  )
}
