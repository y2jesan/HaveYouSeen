import React, { useState, useEffect } from 'react';

const SeriesDetails = (props) => {
	const { seriesId } = props.match.params.id;
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ currentSeriesId, setCurrentSeriesId ] = useState(0);
	const [ seriesDetails, setSeriesDetails ] = useState([]);
	useEffect(
		() => {
			const newSeriesId = props.match.params.id;
			setCurrentSeriesId(newSeriesId);
			fetchSeriesDetails(newSeriesId);
			setIsLoadedData();
		},
		[ seriesId ]
	);
	const fetchSeriesDetails = async (id) => {
		const getSeriesDetailsUrl = `https://www.episodate.com/api/show-details?q=${id}`;
		const response = await fetch(getSeriesDetailsUrl);
		const data = await response.json();
		setSeriesDetails(data);
		console.log(data);
	};
	const setIsLoadedData = () => {
		const currentSeriesList = seriesDetails;
		if (currentSeriesList !== undefined && currentSeriesList.length > 0) {
			setIsLoaded(true);
			console.log(isLoaded);
		}
	};
	return (
		<main id="mainContent">
			<div className="container-fluid">
				<div className="row">
					{/* <MasterDetailPage seriesId={currentSeriesId} seriesDetails={seriesDetails.tvShow} /> */}
					<div className="col-md-8 col-12 ml-3 mb-5">
						{/* <p className={styles.title}>Status</p> */}
						<p> Name: {isLoaded ? seriesDetails.name : '1st'}</p>
						<p>{JSON.stringify(seriesDetails)}</p>
					</div>
				</div>
			</div>
		</main>
	);
};
export default SeriesDetails;
