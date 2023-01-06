import { useContext } from 'react';
import { ValueContext } from '../DataContext/ValueContext';
import './Sh-mainTopMenu.scss';

export const MainTopMenu = () => {

	const { setValueID } = useContext(ValueContext);

	return (
		<ul className="list-unstyled d-flex mt-4 topList">
			<li className="menuItem">
				<p
					onClick={(e)=>{
						setValueID(e.target.getAttribute("value"));
					}}
					className="text-decoration-none text-white fw-bolder  menuTopLink"
					value="1"
				>
					Hot Dishes
				</p>
			</li>
			<li className="menuItem">
				<p
						onClick={(e)=>{
							setValueID(e.target.getAttribute("value"));
						}}
					className="text-decoration-none text-white fw-bolder menuTopLink"
					value="2"

				>
					Cold Dishes
				</p>
			</li>
			<li className="menuItem">
				<p
						onClick={(e)=>{
							setValueID(e.target.getAttribute("value"));
						}}
					className="text-decoration-none text-white fw-bolder  menuTopLink"
					value="3"

				>
					Soup
				</p>
			</li>
			<li className="menuItem">
				<p
						onClick={(e)=>{
							setValueID(e.target.getAttribute("value"));
						}}
					className="text-decoration-none text-white fw-bolder  menuTopLink"
					value="4"

				>
					Grill
				</p>
			</li>
			<li className="menuItem">
				<p
						onClick={(e)=>{
							setValueID(e.target.getAttribute("value"));
						}}
					className="text-decoration-none text-white fw-bolder  menuTopLink"
					value="5"

				>
					Appetizer
				</p>
			</li>
			<li className="menuItem">
				<p
						onClick={(e)=>{
							setValueID(e.target.getAttribute("value"));
						}}
					className="text-decoration-none text-white fw-bolder  menuTopLink"
					value="6"
				
				>
					Dessert
				</p>
			</li>
		</ul>
	);
};
