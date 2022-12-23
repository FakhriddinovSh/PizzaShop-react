import './ReportItem.css';

export const ReportItem = ({
	userIcon,
	userName,
	userMenu,
	userPayment,
	userStatus,
}) => (
	<li className="d-flex align-items-center" style={{ marginBottom: '22px' }}>
		<img className="me-3" src={userIcon} alt={userIcon} />
		<div>
			<h4 className="report-user-name" style={{ width: '170px' }}>
				{userName}
			</h4>
		</div>
		<div style={{ width: '145px' }}>
			<p className="report-user-menu">{userMenu}</p>
		</div>
		<div className="text-center" style={{ width: '160px' }}>
			<p className="report-user-payment">{userPayment}</p>
		</div>
		<button
			className={`report-user-status ${userStatus}`}
			style={{ marginLeft: '120px' }}
		>
			{userStatus}
		</button>
	</li>
);
