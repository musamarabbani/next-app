import articleStyles from '../styles/Article.module.css';

const ArticleList = ({ articles }) => {
	return (
		<div className={articleStyles.grid}>
			{articles.map((article, index) => (
				<h3 key={index}>{article.title}</h3>
			))}
		</div>
	);
};

export default ArticleList;
