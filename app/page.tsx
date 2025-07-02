'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const handleClick = () => {
    if (session) {
      router.push("/artigos/novo");
    } else {
      router.push("/login");
    }
  };
  const handleClickInscricao = () => {
    if (!session) {
      router.push("/inscricao");
    } else {
      router.push("/");
    }
  };
  
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
          width={600}
          height={400}
          className={styles.image}
        />
        <div className={styles.image_buttons}>
              <button onClick={handleClickInscricao}>Inscrever-se</button>
              <button onClick={handleClick}>Submeter artigo</button>
        </div>
      </div>
      </main>
      </>
  );
}
