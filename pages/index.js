import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our Book Store!
        </h1>

        <p className={styles.description}>
          Get started by browsing our collection
        </p>
        <div id="lottie" className="lottie"></div>

        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_pmvxqkaq.json" background="transparent"  speed="1"  style={{width: "300px", height: "300px"}} loop autoplay></lottie-player>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Fiction</h2>
            <p>Find in-depth information all the fiction you can read!</p>
            <img src='https://res.cloudinary.com/fullstackmafia/image/upload/c_scale,w_150/v1592001844/41QG0l2KA4L._SX329_BO1_204_203_200__tuyia3.jpg'/>
          </a>
          <a className={styles.card}>
            <h2>Science</h2>
            <p>Explore our books and learn all you can about science </p>
            <img src='https://res.cloudinary.com/fullstackmafia/image/upload/c_scale,h_226,w_150/v1592001680/220px-TheGreatGatsby_1925jacket_iujiwh.jpg' />
          </a>

          <a
            className={styles.card}
          >
            <h2>Engineering</h2>
            <p>Get in and learn our engineering best practices</p>
            <img src='https://res.cloudinary.com/fullstackmafia/image/upload/c_scale,w_150/v1591993407/220px-Where_The_Crawdads_Sing_Book_Cover_mzfiuc.jpg' />
          </a>

          <a
            className={styles.card}
          >
            <h2>Product</h2>
            <p>
              Create amazing products with knowledge gotten from our books
            </p>
            <img src='https://res.cloudinary.com/fullstackmafia/image/upload/c_scale,h_226,w_150/v1592002306/51K84pomCRL._SX305_BO1_204_203_200__mjbffh.jpg' />
          </a>
        </div>
      </main>
    </div>
  )
}
