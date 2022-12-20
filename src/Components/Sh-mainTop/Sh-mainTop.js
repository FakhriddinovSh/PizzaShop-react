import './Sh-mainTop.scss';

export const MainTop = () => {
	return (
		<div className="d-flex justify-content-between mainTop-wrapper align-items-center">
			<div>
				<h2 className="topTitle">Jaegar Resto</h2>
				<time dateTime="2021-01-02" className="topDate">
					Tuesday, 2 Feb 2021
				</time>
			</div>
			<form autoComplete="off">
				<label className="position-relative">
					<input
						className="form-input"
						type="text"
						placeholder="Search for food, coffe, etc.."
						name="user_search"
					/>
					<span className="form-search-icon"></span>
				</label>
			</form>
		</div>
	);
};
