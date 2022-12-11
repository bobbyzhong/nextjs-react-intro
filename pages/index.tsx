import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Bobby Zhong | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>Home</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    vitae ipsam velit, odio eveniet dolore earum aut ullam sequi
                    similique, dicta nihil. In voluptatibus amet earum impedit
                    incidunt praesentium rem?
                </p>
                <Link href="/ninjas" className={styles.btn}>
                    See Ninja Listing
                </Link>
            </div>
        </>
    );
}
