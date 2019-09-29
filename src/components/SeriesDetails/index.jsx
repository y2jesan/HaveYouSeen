import React, { useState, useEffect } from 'react';

const SeriesDetails = (props) => {
	const { seriesId } = props.match.params.id;
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ seriesDetails, setSeriesDetails ] = useState([]);

	useEffect(
		() => {
			const newSeriesId = props.match.params.id;
			fetchSeriesDetails(newSeriesId);
			setIsLoaded(true);
		},
		[ seriesId, props.match.params.id ]
	);
	const fetchSeriesDetails = async (id) => {
		const getSeriesDetailsUrl = `https://www.episodate.com/api/show-details?q=${id}`;
		const response = await fetch(getSeriesDetailsUrl);
		const data = await response.json();
		setSeriesDetails(data.tvShow);
		console.log(data.tvShow);
	};
	return (
		<main id="mainContent">
			<div className="container-fluid">
				<div className="row">
					{/* <MasterDetailPage seriesId={currentSeriesId} seriesDetails={seriesDetails.tvShow} /> */}
					<div className="col-md-8 col-12 ml-3 mb-5">
						{/* <p className={styles.title}>Status</p> */}
						<p> Name: {isLoaded ? seriesDetails.name : '1st'}</p>

						<div>{seriesDetails.name}</div>
					</div>
				</div>
			</div>
		</main>
	);
};
export default SeriesDetails;
