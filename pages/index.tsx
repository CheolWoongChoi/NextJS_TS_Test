import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Main(pro) {
  const router = useRouter();

  console.log('index PageProps');
  console.log(pro);

  const goHello = () => {
    router.push('/hello');
  }
  const goBye = () => {
    router.push('/bye');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Hi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        main
        <div>
          <button onClick={goHello}>
            go hello
          </button>
        </div>
        <div>
          <button onClick={goBye}>
            go bye
          </button>
        </div>
        <div>
          {/* {appData} */}
        </div>
      </main>

      <footer className={styles.footer}>s</footer>
    </div>
  );
}
