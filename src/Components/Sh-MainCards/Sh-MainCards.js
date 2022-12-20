import { foodOne } from '../../Assets/Images/Img/food-one.png';
import { foodTwo } from '../../Assets/Images/Img/food-two.png';
import { foodThree } from '../../Assets/Images/Img/food-three.png';
import { foodFour } from '../../Assets/Images/Img/food-four.png';
import { foodFive } from '../../Assets/Images/Img/food-five.png';
import { foodSeven } from '../../Assets/Images/Img/food-seven.png';

export const MainCards = () => {
	return [
		{
			image: { foodOne },
			foodName: 'Spicy seasoned seafood noodles',
			price: '$ 2.29',
			bowl: '20 Bowls available',
		},
		{
			image: { foodTwo },
			foodName: 'Salted Pasta with mushroom sauce',
			price: '$ 5.29',
			bowl: '11 Bowls available',
		},
		{
			image: { foodThree },
			foodName: 'Beef dumpling in hot and sour soup',
			price: '$ 3.19',
			bowl: '15 Bowls available',
		},
		{
			image: { foodFour },
			foodName: 'Healthy noodle with spinach leaf',
			price: '$ 2.19',
			bowl: '13 Bowls available',
		},
		{
			image: { foodFive },
			foodName: 'Hot spicy fried rice with omelet',
			price: '$ 2.89',
			bowl: '18 Bowls available',
		},
		{
			image: { foodFive },
			foodName: 'Spicy instant noodle with special omelette',
			price: '$ 2.79',
			bowl: '24 Bowls available',
		},
		{
			image: { foodSeven },
			foodName: ' Healthy noodle with spinach leaf',
			price: '$ 2.69',
			bowl: '36 Bowls available',
		},
		{
			image: { foodOne },
			foodName: 'Spicy seasoned seafood noodles',
			price: '$ 2.59',
			bowl: '12 Bowls available',
		},
	];
};