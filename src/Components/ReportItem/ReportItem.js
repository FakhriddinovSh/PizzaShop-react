import './ReportItem.css';

export const ReportItem = ({
	userIcon,
	userName,
	userMenu,
	userPayment,
	userStatus,
}) => (
	<li className="d-flex align-items-center" style={{ marginBottom: '22px' }}>
		{userIcon}
		<div>
			<h4 className="report-user-name" style={{ width: '190px' }}>
				{userName}
			</h4>
		</div>
		<div style={{ width: '145px' }}>
			<p className="report-user-menu">{userMenu}</p>
		</div>
		<div
			className="text-center"
			style={{ marginLeft: '8px', width: '100px' }}
		>
			<p className="report-user-payment">{userPayment}</p>
		</div>
		<button className={`report-user-status ms-auto ${userStatus}`}>
			{userStatus}
		</button>
	</li>
);
