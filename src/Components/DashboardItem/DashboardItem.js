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
			<div className="d-flex align-items-center mb-2">
				{mainIcon}
				<div className="ms-4">
					<span className="me-2 d-inline-flex align-items-center dashboard-growth">
						{growth}
					</span>
					{secondaryIcon}
				</div>
			</div>
			<p className="dashboard-item-cost">{cost}</p>
			<p className="dashboard-item-total">{total}</p>
		</li>
	);
};
