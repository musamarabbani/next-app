import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</React.Fragment>
	);
};

export default Layout;
