import { NavLink } from 'react-router-dom';
import './SettingsItem.css';

export const SettingsItem = ({ settinsIcon, title, info }) => {
	return (
		<li onClick={(e) => console.log(e.target)}>
			<NavLink
				className={({ isActive }) =>
					isActive
						? 'settings-item settings-item--active text-decoration-none d-flex'
						: ' settings-item '
				}
				to={'/settings'}
			>
				<div
					style={{ width: '15px', height: '15px' }}
					className="settings-icon"
				>
					{settinsIcon}
				</div>
				<div style={{ marginLeft: '10px' }}>
					<h3 className="settings-title">{title}</h3>
					<p className="settings-info">{info}</p>
				</div>
			</NavLink>
		</li>
	);
};
