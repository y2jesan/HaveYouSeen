import React, { Component } from 'react';
import classnames from 'classnames';
import GridComponent from './GridComponent';
import MostPopularList from './MostPopularList';
import WarningMessage from '../WarningMessage';
import GreyBox from '../../images/GreyBox.svg';
import styles from './grid.module.css';
import CONSTANTS from '../../constants';

export default class MostPopular extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gridTextAssets: [ { description: '', header: '', id: 0 } ],
			WarningMessageOpen: false,
			WarningMessageText: ''
		};
		this.handleWarningClose = this.handleWarningClose.bind(this);
	}

	// Get the text sample data from the back end
	componentDidMount() {
		fetch(CONSTANTS.ENDPOINT.GRID)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then((result) => this.setState({ gridTextAssets: result }))
			.catch((error) =>
				this.setState({
					WarningMessageOpen: true,
					WarningMessageText: `Request to get grid text failed: ${error}`
				})
			);
	}

	handleWarningClose() {
		this.setState({
			WarningMessageOpen: false,
			WarningMessageText: ''
		});
	}

	render() {
		const { gridTextAssets, WarningMessageOpen, WarningMessageText } = this.state;
		console.log(this.state.seriesList);
		return (
			<main id="mainContent">
				<div className={classnames('text-center', styles.header)}>
					<h1>Most Popular Series</h1>
				</div>

				{/* <div className="container">
					<div className="row justify-content-around text-center pb-5">
						{gridTextAssets.map((textAssets) => (
							<GridComponent
								key={textAssets.id}
								header={textAssets.title}
								description={textAssets.shortDescription}
								image={GreyBox}
							/>
						))}
					</div>
        </div> */}
				<MostPopularList />
				<WarningMessage
					open={WarningMessageOpen}
					text={WarningMessageText}
					onWarningClose={this.handleWarningClose}
				/>
			</main>
		);
	}
}
