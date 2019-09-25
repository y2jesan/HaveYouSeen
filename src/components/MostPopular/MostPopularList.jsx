import React, { useContext, useEffect } from 'react';
import { MostPopularContext } from '../../contexts/MostPopularContext';
import GridComponent from './GridComponent';

export default function MostPopularList() {
	// const { image, header, description } = props;
	const seriesList = useContext(MostPopularContext);
	console.log(seriesList);
	return (
		<div className="container">
			<div className="row justify-content-around text-center pb-5">
				{seriesList.map((series) => (
					<GridComponent
						key={series.id}
						header={series.name}
						// description={textAssets.shortDescription}
						// image={GreyBox}
					/>
				))}
			</div>
		</div>
	);
}
