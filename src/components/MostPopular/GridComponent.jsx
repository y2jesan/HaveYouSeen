import React from 'react';
import { Link } from 'react-router-dom';
const GridComponent = (props) => {
	//const { image, header, description } = props;
	const { seriesId, header, image } = props;
	return (
		<div className="col-md-4 col-sm-12 p-5">
			<img src={image} width="180" height="250" alt="Default Grey Box" className="mb-3" />
			<h3>
				<Link to={`SeriesDetails/${seriesId}`}>{header}</Link>
			</h3>
		</div>
	);
};
export default GridComponent;
