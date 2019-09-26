import React, { useState, createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
export const MostPopularContext = createContext();

export const MostPopularProvider = (props) => {
	const [ seriesList, setSeriesList ] = useState([]);
	//const [ mostPopularPageNo, setMostPopularPageNo ] = useState(0);
	//const mostPopularPage = 1; //useSelector((state) => state.mostPopularPage);
	const mostPopularPage = useSelector((state) => state.mostPopularPage);
	useEffect(() => {
		const loadMostPopularList = async () => {
			const mostPopularUrl = `https://www.episodate.com/api/most-popular?page=${mostPopularPage}`;
			const response = await fetch(mostPopularUrl).then();
			const data = await response.json();
			setSeriesList(data.tv_shows);
		};

		loadMostPopularList();
	}, []);

	return <MostPopularContext.Provider value={seriesList}>{props.children}</MostPopularContext.Provider>;
};
