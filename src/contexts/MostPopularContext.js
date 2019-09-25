import React, { useState, createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
export const MostPopularContext = createContext();

export const MostPopularProvider = (props) => {
	const [ seriesList, setSeriesList ] = useState([]);
	const [ mostPopularPageNo, setMostPopularPageNo ] = useState(0);
	//const mostPopularPage = 1; //useSelector((state) => state.mostPopularPage);
	const mostPopularPage = useSelector((state) => state.mostPopularPage);
	//console.log(x);
	useEffect(() => {
		const loadMostPopularList = async () => {
			const mostPopularUrl = `https://www.episodate.com/api/most-popular?page=${mostPopularPage}`;
			const response = await fetch(mostPopularUrl).then();
			const data = await response.json();
			//console.log(data.tv_shows);
			setSeriesList(data.tv_shows);
			//console.log('seriesList: ' + seriesList);
		};

		loadMostPopularList();
	}, []);

	// for (let i = 0; i < 2; i++) {
	// 	if (mostPopularPageNo !== mostPopularPage) {
	// 		console.log(mostPopularPage);
	// 		console.log(mostPopularPageNo);
	// 		setMostPopularPageNo(mostPopularPage);
	// 		loadMostPopularList();
	// 	}
	// }

	return <MostPopularContext.Provider value={seriesList}>{props.children}</MostPopularContext.Provider>;
};
