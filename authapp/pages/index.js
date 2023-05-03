import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'Mega/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          Hellow world!
        </h1>
      </main>
    </div>
  )
}
