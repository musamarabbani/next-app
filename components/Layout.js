import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className={styles.container}>
				<main className={styles.main}>
					<Header />
					{children}
				</main>
			</div>
		</React.Fragment>
	);
};

export default Layout;
