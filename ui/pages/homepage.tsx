import Head from 'next/head';
import styles from '../styles/HomePage.module.css';

export default function Homepage() {
  return (
    <>
        <h1 className={styles.title}>Book Writing Tracker</h1>
        <h1 className={styles.title}>MARCH</h1>

        <h2>1000 words today</h2>
        <h2>1600 words today to hit goal</h2>

        <h3>Total words this month</h3>
    </>
  )
}