import React, { useState, createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
export const MostPopularContext = createContext();

export const MostPopularProvider = (props) => {
	const [ seriesList, setSeriesList ] = useState([]); //? Storing The Most Popular List Data
	const mostPopularPage = useSelector((state) => state.mostPopularPage); //? Get The Page Number From Reducer
	useEffect(
		//? works Like ComponentDidMount
		() => {
			const loadMostPopularList = async () => {
				//? Fetching The Data From Api
				const mostPopularUrl = `https://www.episodate.com/api/most-popular?page=${mostPopularPage}`;
				const response = await fetch(mostPopularUrl).then();
				const data = await response.json();
				setSeriesList(data.tv_shows);
			};
			loadMostPopularList();
		},
		[ mostPopularPage ] //? Dependency: useEffect will call everytime when 'mostPopularPage' is changed
	);

	return <MostPopularContext.Provider value={seriesList}>{props.children}</MostPopularContext.Provider>;
};
