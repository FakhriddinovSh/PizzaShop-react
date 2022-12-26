import './Sh-mainTopMenu.scss';

export const MainTopMenu = () => {
	return (
		<ul className="list-unstyled d-flex mt-4 topList">
			<li className="menuItem">
				<a
					className="text-decoration-none text-white fw-bolder  menuTopLink"
					href="#"
				>
					Hot Dishes
				</a>
			</li>
			<li className="menuItem">
				<a
					className="text-decoration-none text-white fw-bolder menuTopLink"
					href="#"
				>
					Cold Dishes
				</a>
			</li>
			<li className="menuItem">
				<a
					className="text-decoration-none text-white fw-bolder  menuTopLink"
					href="#"
				>
					Soup
				</a>
			</li>
			<li className="menuItem">
				<a
					className="text-decoration-none text-white fw-bolder  menuTopLink"
					href="#"
				>
					Grill
				</a>
			</li>
			<li className="menuItem">
				<a
					className="text-decoration-none text-white fw-bolder  menuTopLink"
					href="#"
				>
					Appetizer
				</a>
			</li>
			<li className="menuItem">
				<a
					className="text-decoration-none text-white fw-bolder  menuTopLink"
					href="#"
				>
					Dessert
				</a>
			</li>
		</ul>
	);
};
