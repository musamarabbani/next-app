import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>About Page</title>
				<meta name='description' content='this is user description page' />
				<meta name='keywords' content='web development, programming' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<h1>Welcome to About Page</h1>
			</div>
		</div>
	);
}
