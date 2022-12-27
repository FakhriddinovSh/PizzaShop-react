import { Route, Routes } from 'react-router-dom';
import {
	SettingsOne,
	SettingsTwo,
	SettingsThree,
	SettingsFour,
	SettingsFive,
	SettingsSix,
	SettingsSeven,
} from '../../Assets/Images/Icons/Icons';
import { AdminManagement } from '../../Components/AdminManagement/AdminManagement';
import { SettingsItem } from '../../Components/SettingsItem/SettingsItem';

export const Settings = () => {
	const settingsData = [
		{
			path: '/apperance',
			settinsIcon: <SettingsOne />,
			title: 'Appereance',
			info: 'Dark and Light mode, Font size',
		},
		{
			path: '/yourRestaurant',
			settinsIcon: <SettingsTwo />,
			title: 'Your Restaurant',
			info: 'Dark and Light mode, Font size',
		},
		{
			path: '/productsManagement',
			settinsIcon: <SettingsThree />,
			title: 'Products Management',
			info: 'Manage your product, pricing, etc',
		},
		{
			path: '/notifications',
			settinsIcon: <SettingsFour />,
			title: 'Notifications',
			info: 'Customize your notifications',
		},
		{
			path: '/security',
			settinsIcon: <SettingsFive />,
			title: 'Security',
			info: 'Configure Password, PIN, etc',
		},
		{
			path: '/securityy',
			settinsIcon: <SettingsSix />,
			title: 'Security',
			info: 'Configure Password, PIN, etc',
		},
		{
			path: '/aboutUs',
			settinsIcon: <SettingsSeven />,
			title: 'About Us',
			info: 'Find out more about Posly',
		},
	];

	// Hello world

	return (
		<div className="text-white pt-4 ps-4">
			<h2>Settings</h2>

			<div className="d-flex">
				<ul
					className="list-unstyled"
					style={{
						width: '100%',
						maxWidth: '275px',
						marginTop: '24px',
						paddingBottom: '45px',
						backgroundColor: '#1F1D2B',
						borderRadius: '8px',
						msOverflowY: 'scroll',
					}}
				>
					{settingsData.map((item) => {
						return (
							<SettingsItem
								path={item.path}
								settinsIcon={item.settinsIcon}
								title={item.title}
								info={item.info}
							/>
						);
					})}
				</ul>

				<Routes>
					<Route
						path="productsManagement"
						element={
							<AdminManagement/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
};
