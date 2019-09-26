import React from 'react';
import classnames from 'classnames';
import MostPopularList from './MostPopularList';
import styles from './grid.module.css';

const MostPopular = () => {
	return (
		<main id="mainContent">
			<div className={classnames('text-center', styles.header)}>
				<h1>Most Popular Series</h1>
			</div>
			<MostPopularList />
		</main>
	);
};

export default MostPopular;
