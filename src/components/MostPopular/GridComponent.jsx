import React from 'react';

const GridComponent = (props) => {
	//const { image, header, description } = props;
	const { header, image } = props;
	return (
		<div className="col-md-4 col-sm-12 p-5">
			<img src={image} width="180" height="250" alt="Default Grey Box" className="mb-3" />
			<h3>{header}</h3>
		</div>
	);
};
export default GridComponent;
