import React from 'react';
import './Dashboard.css';
import { DashboardCard } from '../../Components/DashboardCard/DashboardCard';

export const Doashbard = () => {
	return (
		<div className="dashboard-wrapper">
			<div
				className="dashboard-top-wrapper position-fixed top-0 pt-3"
				style={{
					zIndex: '1',
					width: '90%',
					backgroundColor: '#252836',
				}}
			>
				<h2 className="dashboard-title">Dashboard</h2>
				<time className="dashboard-time" dateTime="2022-12-22">
					Tuesday 2 Feb, 2021
					<hr style={{ width: '58%' }} />
				</time>
			</div>
			<DashboardCard />
		</div>
	);
};
