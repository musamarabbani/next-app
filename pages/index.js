import axios from 'axios';
import ArticleList from '../components/ArticleList';
import Meta from '../components/Meta';
import styles from '../styles/Layout.module.css';

export default function Home({ articles }) {
	return (
		<div className={styles.container}>
			<Meta
				title='WebDevs Newz'
				description='Visit to About Page'
				keywords='web apps development, web programming'
			/>
			<ArticleList articles={articles} />
		</div>
	);
}

export const getStaticProps = async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts?_limit=6'
		);
		if (response.status >= 400) throw new Error('api error');
		return {
			props: { articles: response.data },
		};
	} catch (err) {
		console.log('getStaticProps error ==>', err);
	}
};
