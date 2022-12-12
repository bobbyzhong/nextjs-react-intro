import Link from "next/link";
import React from "react";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { ninjas: data },
    };
};

export default function Employees({ ninjas }: { ninjas: any }) {
    return (
        <div>
            <h1>All Employees</h1>
            {ninjas.map((ninja: any) => (
                <Link href={"/employees/" + ninja.id} key={ninja.id}>
                    <div className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}
