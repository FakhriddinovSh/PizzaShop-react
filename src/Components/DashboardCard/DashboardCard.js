import React from 'react';
import {
	DashboarFirstIcon,
	DashboarSecondIcon,
	DashboarThirdIcon,
	DashboardSecondaryIconFirst,
	DashboardSecondaryIconSecond,
	DashboardSecondaryIconThird,
} from '../../Assets/Images/Icons/Icons';
import { DashboardItem } from '../DashboardItem/DashboardItem';
import { MainCards } from '../Sh-MainCards/Sh-MainCards';

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

	console.log(MainCards);

	return (
		<>
			<ul>{MainCards.map((item) => console.log(item))}</ul>
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
		</>
	);
};
