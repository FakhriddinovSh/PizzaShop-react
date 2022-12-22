import React from 'react';
import {
	DashboarFirstIcon,
	DashboarSecondIcon,
	DashboarThirdIcon,
	DashboardSecondaryIconFirst,
	DashboardSecondaryIconSecond,
	DashboardSecondaryIconThird,
	userOne,
	userTwo,
	userThree,
	userFour,
	userFive,
	userSix,
} from '../../Assets/Images/Icons/Icons';
import { DashboardItem } from '../DashboardItem/DashboardItem';
import './DashboardCard.css';
import { ReportItem } from '../ReportItem/ReportItem';

export const DashboardCard = () => {
	const DashboardCards = [
		{
			mainIcon: <DashboarFirstIcon />,
			secondaryIcon: <DashboardSecondaryIconFirst />,
			growth: '+32.40%',
			cost: '$10,243.00',
			total: 'Total Revenue',
		},
		{
			mainIcon: <DashboarSecondIcon />,
			secondaryIcon: <DashboardSecondaryIconSecond />,
			growth: '-12.40%',
			cost: '23,456',
			total: 'Total Dish Ordered',
		},
		{
			mainIcon: <DashboarThirdIcon />,
			secondaryIcon: <DashboardSecondaryIconThird />,
			growth: '+2.40%',
			cost: '1,234',
			total: 'Total Customer',
		},
	];

	const DashboardReports = [
		{
			userIcon: userOne,
			userName: 'Eren Jaegar',
			userMenu: 'Spicy seasoned seafood noodles ',
			userPayment: '$125',
			userStatus: 'Completed',
		},
		{
			userIcon: userTwo,
			userName: 'Reiner Braunn',
			userMenu: 'Salted Pasta with mushroom sauce ',
			userPayment: '$145',
			userStatus: 'Preparing',
		},
		{
			userIcon: userThree,
			userName: 'Levi Ackerman',
			userMenu: 'Beef dumpling in hot and sour soup',
			userPayment: '$105',
			userStatus: 'Pending',
		},
		{
			userIcon: userFour,
			userName: 'Historia Reiss',
			userMenu: 'Hot spicy fried rice with omelet ',
			userPayment: '$45',
			userStatus: 'Completed',
		},
		{
			userIcon: userFive,
			userName: 'Hanji Zoe',
			userMenu: 'Hot spicy fried rice with omelet',
			userPayment: '$245',
			userStatus: 'Completed',
		},
		{
			userIcon: userSix,
			userName: 'Armin Arlert',
			userMenu: 'Hot spicy fried rice with omelet',
			userPayment: '$435',
			userStatus: 'Completed',
		},
	];

	return (
		<>
			<ul className="list-unstyled d-flex pt-4">
				{DashboardCards.map((item) => (
					<DashboardItem
						mainIcon={item.mainIcon}
						secondaryIcon={item.secondaryIcon}
						growth={item.growth}
						cost={item.cost}
						total={item.total}
					/>
				))}
			</ul>

			<div className="report-wrapper">
				<div className="d-flex justify-content-between align-items-center">
					<h3 className="order-title">Order Report</h3>
					<button className="order-filter-button">
						Filter Order
					</button>
				</div>
				<ul
					className="list-unstyled d-flex justify-content-between mt-3 pb-3"
					style={{ paddingRight: '74px' }}
				>
					<li className="report-list-item">Customer</li>
					<li className="report-list-item">Menu</li>
					<li className="report-list-item">Total Payment</li>
					<li className="report-list-item">Status</li>
				</ul>

				<ul className="list-unstyled pt-4">
					{DashboardReports.map((item) => (
						<ReportItem
							userIcon={item.userIcon}
							userName={item.userName}
							userMenu={item.userMenu}
							userPayment={item.userPayment}
							userStatus={item.userStatus}
						/>
					))}
				</ul>
			</div>
		</>
	);
};
