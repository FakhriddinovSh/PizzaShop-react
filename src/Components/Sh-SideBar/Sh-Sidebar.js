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
			id:1,
			imageUrl: <MenuSecond svg="svg" className="list-image" />,
			path: '/',
		},
		{
			id:2,
			imageUrl: <MenuThird svg="svg" className="list-image" />,
			path: '/two',
		},
		{
			id:3,
			imageUrl: <MenuFourth svg="svg" className="list-image" />,
			path: '/piece',
		},
		{
			id:4,
			imageUrl: <MenuFivth svg="svg" className="list-image" />,
			path: '/mail',
		},
		{
			id:5,
			imageUrl: <MenuSixth svg="svg" className="list-image" />,
			path: '/notification',
		},
		{

			id:6,
			imageUrl: <MenuSeventh svg="svg" className="list-image" />,
			path: '/settings',
		},
		{
			id:7,
			imageUrl: <MenuEigth svg="svg" className="list-image" />,
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
			<ul className="d-flex justify-content-between flex-column align-items-center list-unstyled ps-3">
				<img
					style={{ marginBottom: '26px' }}
					src={Logo}
					width="56"
					height="56"
					alt="Logo"
				/>
				{menuData.map((item) => (
					<li key={item.id} style={{ marginBottom: '26px' }}>
						<NavLink
							to={item.path}
							className={({ isActive }) =>
								isActive
									? 'list-link list-link--active'
									: 'list-link'
							}
						>
							{item.imageUrl}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};
