import React from 'react';
import './orders.scss';
import ProductImg from '../../Assets/Images/Img/MaskGroup.png';
import Karzinka from '../../Assets/Images/Img/karzinka.svg';
import { useRef } from 'react';
import { MainCards } from '../Sh-MainCards/Sh-MainCards';
export function Orders() {
	const btnActive = useRef();

	let imputArray = [
		{
			productId: 1,
			productName: 'Salted pasta with mu...',
			productSprice: '$ 2.69',
			producImg: ProductImg,
		},
		{
			productId: 1,
			productName: 'Salted pasta with mu...',
			productSprice: '$ 2.69',
			producImg: ProductImg,
		},
		{
			productId: 1,
			productName: 'Salted pasta with mu...',
			productSprice: '$ 2.69',
			producImg: ProductImg,
		},
		{
			productId: 1,
			productName: 'Salted pasta with mu...',
			productSprice: '$ 2.69',
			producImg: ProductImg,
		},
		{
			productId: 1,
			productName: 'Salted pasta with mu...',
			productSprice: '$ 2.69',
			producImg: ProductImg,
		},
		{
			productId: 1,
			productName: 'Salted pasta with mu...',
			productSprice: '$ 2.69',
			producImg: ProductImg,
		},
		{
			productId: 1,
			productName: 'Salted pasta with mu...',
			productSprice: '$ 2.69',
			producImg: ProductImg,
		},
	];

	const btnClick = () => {
		btnActive.current.classList.toggle('oreder-home__dine');
	};

	return (
		<div className="order-home">
			<div>
				<div className="order-home__text-top">
					<h3 className="order-home__title">Orders #34562</h3>
					<div className="order-home__btns">
						<button
							onClick={btnClick}
							className="oreder-home__dine order-hm-btns"
							ref={btnActive}
						>
							Dine In
						</button>
						<button
							onClick={btnClick}
							className="order-hm-btns"
							ref={btnActive}
						>
							To go{' '}
						</button>
						<button
							onClick={btnClick}
							className="order-hm-btns"
							ref={btnActive}
						>
							Delivery
						</button>
					</div>

					<div className="oreder-home__buttom-text-box">
						<p className="order-home__button-text">Item</p>
						<div className="order-home__button-text-end">
							<p className="order-home__button-text">Qty</p>
							<p className="order-home__button-text">Price</p>
						</div>
					</div>
					<div></div>
				</div>

				<div className="order-home__product-buy">
					<ul className="order-home__product-list product-list list-unstyled">
						{MainCards.map((item) => (
							<li className="product-list__item d-flex gap-3">
								<div>
									<div className="d-flex justify-content-between">
										<div className="d-flex align-items-center gap-3">
											<img
												src={item.image}
												width="45"
												height="41"
												alt=""
											/>
											<div>
												<p className="prosuct-list__name m-0">
													{item.foodName}
												</p>
												<p className="prosuct-list__name product-list__price m-0">
													{item.price}
												</p>
											</div>
										</div>
										<button className="product-list__count">
											2
										</button>
									</div>
									<input
										className="product-list__input mt-2"
										type="text"
										placeholder="Order Note..."
									/>
								</div>

								<div>
									<p className="product-list__price-count mt-3">
										{item.price}
									</p>
									<button className="product-list__delete d-flex mt-4">
										<img src={Karzinka} alt="delete" />
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>

				<div className="product-buy-box">
					<div className="d-flex justify-content-between">
						<div className="d-flex flex-column gap-3">
							<p className="proudct-buy__skitka">Discount</p>
							<p className="proudct-buy__skitka">Sub total</p>
						</div>
						<div className="d-flex flex-column gap-3">
							<p className="proudct-buy__price">$0</p>
							<p className="proudct-buy__price"> $ 21,03</p>
						</div>
					</div>
					<button className="proudct-buy__btn w-100">
						{' '}
						Continue to Payment
					</button>
				</div>
			</div>
		</div>
	);
}
