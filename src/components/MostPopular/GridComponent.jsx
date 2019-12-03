import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './grid.module.css';
const GridComponent = (props) => {
	//const { image, header, description } = props;
	const { seriesId, header, image } = props;
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 p-5">
			<div className={classnames(styles.cardNew)}>
				<img src={image} width="100%" height="350" alt="Default Grey Box" />
				<div className={classnames(styles.containerNew)}>
					<h3>
						<Link className="btn btn-sm" width="100%" to={`SeriesDetails/${seriesId}`}>
							<b>{header}</b>
						</Link>
					</h3>
				</div>
			</div>
		</div>
	);
};
export default GridComponent;
