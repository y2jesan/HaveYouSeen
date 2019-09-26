import React from 'react';
//import classnames from 'classnames';
//import styles from './masterdetail.module.css';

const MasterDetailPage = (props) => {
	const { seriesId, seriesDetails } = props;
	console.log(seriesDetails);
	return (
		<div className="col">
			{/* <div className={classnames('row', styles.heading)}>
				<div className="col">
					<h3 className="ml-3 mb-4">{title}</h3>
				</div>
			</div> */}
			<div className="row">
				{/* <div className="col-12 mt-3">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb bg-white mb-0">
							<li className="breadcrumb-item">
								<a className={styles.breadCrumbLink} href="/SeriesDetails">
									SeriesDetails
								</a>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								{title}
							</li>
						</ol>
					</nav>
				</div> */}
				<div className="col-md-8 col-12 ml-3 mb-5">
					{/* <p className={styles.title}>Status</p> */}
					<p>{seriesId}</p>
					{/* <p>{seriesDetails.name}</p> */}
				</div>
			</div>
		</div>
	);
};
export default MasterDetailPage;
