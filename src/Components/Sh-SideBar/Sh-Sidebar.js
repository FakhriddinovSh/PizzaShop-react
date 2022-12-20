import { NavLink } from 'react-router-dom';
import {
	MenuSecond,
	MenuThird,
	MenuFourth,
	MenuFivth,
	MenuSixth,
	MenuSeventh,
	MenuEigth,
} from '../../Assets/Images/Icons/Icons';

import Logo from '../../Assets/Images/Img/Logo.png';
import './Sh-Sidebar.scss';

export const Sidebar = () => {
	const menuData = [
		{
			imageUrl: <MenuSecond svg="svg" />,
			path: '/home',
		},
		{
			imageUrl: <MenuThird svg="svg" />,
			path: '/two',
		},
		{
			imageUrl: <MenuFourth svg="svg" />,
			path: '/piece',
		},
		{
			imageUrl: <MenuFivth svg="svg" />,
			path: '/mail',
		},
		{
			imageUrl: <MenuSixth svg="svg" />,
			path: '/notification',
		},
		{
			imageUrl: <MenuSeventh svg="svg" />,
			path: '/settings',
		},
		{
			imageUrl: <MenuEigth svg="svg" />,
			path: '/exit',
		},
	];

	const styles = {
		width: '108px',
		height: '100vh',
		backgroundColor: '#1F1D2B',
		paddingTop: '24px',
	};

	return (
		<div style={styles}>
			<ul className="d-flex justify-content-between flex-column align-items-center list-unstyled">
				<img
					style={{ marginBottom: '26px' }}
					src={Logo}
					width="56"
					height="56"
					alt="Logo"
				/>
				{menuData.map((item) => (
					<li
						onClick={() =>
							console.log(
								document
									.querySelector('#list-item')
									.classList.toggle('list-item--active'),
							)
						}
						className="ms-0 list-item"
						id="list-item"
						style={{ marginBottom: '26px' }}
					>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'svg--active' : 'svg'
							}
							to={item.path}
						>
							{item.imageUrl}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};
