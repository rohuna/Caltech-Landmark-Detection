import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import InputAndInference from "../components/InputAndInference";


const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Caltech Landmarks Detection</title>
      </Head>
      <div className = {styles.alignCenter}>
        <h1 className = {styles.title}>
        Caltech Landmarks Detection
        </h1>
      </div>

      <InputAndInference/>
    </div>
  )
}

export default Home
