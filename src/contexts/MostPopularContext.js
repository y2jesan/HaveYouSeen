import React, { useState, createContext } from 'react';
import { useSelector } from 'react-redux';
export const MostPopularContext = createContext();

export const MostPopularProvider = (props) => {
	const [ seriesList, setSeriesList ] = useState([
		{
			Id: 1,
			name: 'BB'
		},
		{
			Id: 2,
			name: 'GOT'
		}
	]);
	const [ mostPopularPageNo, setMostPopularPageNo ] = useState(0);
	const mostPopularPage = 1; //useSelector((state) => state.mostPopularPage);
	//const x = useSelector((state) => state.mostPopularPage);
	//console.log(x);
	const loadMostPopularList = async () => {
		const mostPopularUrl = `https://www.episodate.com/api/most-popular?page=${mostPopularPageNo}`;
		const response = await fetch(mostPopularUrl);
		const data = await response.json();
		//console.log(data.tv_shows);
		setSeriesList(data.tv_shows);
		console.log(seriesList);
	};
	for (let i = 0; i < 2; i++) {
		if (mostPopularPageNo !== mostPopularPage) {
			console.log(mostPopularPage);
			console.log(mostPopularPageNo);
			setMostPopularPageNo(mostPopularPage);
			loadMostPopularList();
		}
	}

	return <MostPopularContext.Provider value={seriesList}>{props.children}</MostPopularContext.Provider>;
};
