import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Meta from '../../../components/Meta';

const Article = ({ article }) => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<React.Fragment>
			<Meta
				title={article.title}
				keywords={'get specific article'}
				description={article.excerpt}
			/>
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<br />
			<Link href='/'>Go Back</Link>
		</React.Fragment>
	);
};

export const getStaticProps = async (context) => {
	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
		);
		if (response.status >= 400) throw new Error(response);
		return {
			props: { article: response.data },
		};
	} catch (error) {
		console.log('getServerSideProps error', error);
	}
};

export const getStaticPaths = async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const articles = response.data;
		const ids = articles.map((article) => article.id);
		const paths = ids.map((id) => ({ params: { id: id.toString() } }));
		return { paths: paths, fallback: false };
	} catch (error) {
		console.log('getStaticPath ==>', error);
	}
};

export default Article;
