import Head from 'next/head';
import styles from '../styles/Home.module.css';

//https://coolors.co/c1cfda-48639c-28502e-941c2f-03191e Color pallet
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cayden Koweck</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={styles.body}>
        <main className={styles.main}>

        <div className={styles.name}>
          <h1>
            Cayden Koweck
          </h1>
        </div>


        </main>
      </body>
      <footer>

      </footer>
    </div>
  )
}
