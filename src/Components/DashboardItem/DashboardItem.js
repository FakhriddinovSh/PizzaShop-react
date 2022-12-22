import './DashboardItem.css';

export const DashboardItem = ({
	growth,
	cost,
	total,
	mainIcon,
	secondaryIcon,
}) => {
	return (
		<li className="text-white dashboard-item">
			<div className="d-flex align-items-center justify-content-between mb-2">
				{mainIcon}
				<span>{growth}</span>
				{secondaryIcon}
			</div>
			<p className="dashboard-item-cost">{cost}</p>
			<p className="dashboard-item-total">{total}</p>
		</li>
	);
};
