import Meta from '../components/Meta';
import styles from '../styles/Layout.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Meta
				title='About Page'
				description='Visit to About Page'
				keywords='web apps development, web programming'
			/>
			<div>
				<h1>Welcome to About Page</h1>
			</div>
		</div>
	);
}
