import React from 'react';
import './chooseDishes.scss';
import { Routes, Route } from 'react-router-dom';
import { Orders } from '../Orders/Orders';
import { Doashbard } from '../../Pages/Doashbard/Doashbard';
import { MainTop } from '../Sh-mainTop/Sh-mainTop';
import { MainTopMenu } from '../Sh-mainTopMenu/Sh-mainTopMenu';
import { Sidebar } from '../Sh-SideBar/Sh-Sidebar';
import { HeroMainCards } from '../MainCard/MainCards';

export const ChooseDishes = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="d-flex">
								<div className="task">
									<Sidebar />
								</div>
								<div
									style={{
										backgroundColor: '#252836',
										paddingLeft: '130px',
										paddingRight: '38px',
									}}
									className="hero-top"
								>
									<MainTop />
									<MainTopMenu />
									<HeroMainCards />
								</div>
								{<Orders />}
							</div>
						</>
					}
				/>
				<Route
					path="/piece"
					element={
						<>
							<div className="d-flex">
								<div className="task" style={{ zIndex: '1' }}>
									<Sidebar />
								</div>
								<div
									style={{
										width: '100%',
										backgroundColor: '#252836',
										paddingLeft: '109px',
										paddingRight: '38px',
									}}
								>
									<Doashbard />
									{/* <MainTop /> */}
									{/* <MainTopMenu /> */}
								</div>
							</div>
						</>
					}
				/>
				<Route
					path="/*"
					element={
						<>
							<div className="d-flex">
								<div>
									<Sidebar />
								</div>
								<div
									style={{
										backgroundColor: '#252836',
										paddingLeft: '10px',
										paddingRight: '38px',
									}}
								>
									{/* <MainTop /> */}
									{/* <MainTopMenu /> */}
								</div>
								{/* {<ChooseDishes />} */}
							</div>
						</>
					}
				/>
			</Routes>
		</>
	);
};
