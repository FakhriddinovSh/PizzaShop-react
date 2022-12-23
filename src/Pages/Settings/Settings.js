import {
	SettingsOne,
	SettingsTwo,
	SettingsThree,
	SettingsFour,
	SettingsFive,
	SettingsSix,
	SettingsSeven,
} from '../../Assets/Images/Icons/Icons';
import { SettingsItem } from '../../Components/SettingsItem/SettingsItem';

export const Settings = () => {
	const settingsData = [
		{
			settinsIcon: <SettingsOne />,
			title: 'Appereance',
			info: 'Dark and Light mode, Font size',
		},
		{
			settinsIcon: <SettingsTwo />,
			title: 'Your Restaurant',
			info: 'Dark and Light mode, Font size',
		},
		{
			settinsIcon: <SettingsThree />,
			title: 'Products Management',
			info: 'Manage your product, pricing, etc',
		},
		{
			settinsIcon: <SettingsFour />,
			title: 'Notifications',
			info: 'Customize your notifications',
		},
		{
			settinsIcon: <SettingsFive />,
			title: 'Security',
			info: 'Configure Password, PIN, etc',
		},
		{
			settinsIcon: <SettingsSix />,
			title: 'Security',
			info: 'Configure Password, PIN, etc',
		},
		{
			settinsIcon: <SettingsSeven />,
			title: 'About Us',
			info: 'Find out more about Posly',
		},
	];

	return (
		<div className="text-white pt-4 ps-4">
			<h2>Settings</h2>

			<ul
				className="list-unstyled"
				style={{
					width: '100%',
					maxWidth: '275px',
					// height: '85vh',
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
							settinsIcon={item.settinsIcon}
							title={item.title}
							info={item.info}
						/>
					);
				})}
			</ul>
		</div>
	);
};
