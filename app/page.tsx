'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  return (
    
      <>
      <main className={styles.container}>
        <h2 className={styles.titles}>Bem vindo ao SmartScience. Inscreva-se já!</h2>
        <h3 className={styles.titles}>O que é o SmartScience?</h3>
          <p className={styles.description}>
            O SmartScience é um evento científico que visa promover o conhecimento sobre o branqueamento de corais e a importância da preservação dos recifes de corais.
          </p>
          <div>
        <Image
          src="/corais.jpg"
          alt="Corais"
          width={400}
          height={400}
          className={styles.image}
        />
        <div className={styles.image_buttons}>
          {!session ? (
            <Link href="/inscricao">
              <button>Inscrever-se</button>
            </Link>
          ) : (
            <Link href="/sobre">
              <button>Submeter artigo</button>
            </Link>
          )}
        </div>
      </div>
      </main>
      </>
  );
}
