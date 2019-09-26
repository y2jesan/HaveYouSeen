import React, { useState, useEffect } from 'react';
import MasterDetailPage from './MasterDetailPage';

const SeriesDetails = (props) => {
	const { seriesId } = props.match.params.id;
	console.log(props.match.params.id);
	const [ seriesDetails, setSeriesDetails ] = useState([]);
	useEffect(
		() => {
			const seriesId = props.match.params.id;
			fetchSeriesDetails(seriesId);
		},
		[ seriesId ]
	);
	const fetchSeriesDetails = async (seriesId) => {
		//console.log(`seriesId:${seriesId}`);
		const getSeriesDetailsUrl = `https://www.episodate.com/api/show-details?q=${seriesId}`;
		//console.log(getSeriesDetailsUrl);
		const response = await fetch(getSeriesDetailsUrl);
		const data = await response.json();
		setSeriesDetails(data);
	};
	return (
		<main id="mainContent">
			<div className="container-fluid">
				<div className="row">
					<MasterDetailPage seriesId={seriesId} seriesDetails={seriesDetails.tvShow} />
				</div>
			</div>
		</main>
	);
};
export default SeriesDetails;
