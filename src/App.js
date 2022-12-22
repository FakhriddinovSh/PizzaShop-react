import './App.css';
import './Assets/Fonts/fonts.scss';
import './Assets/Style/index.scss';
import './Assets/Style/index.scss';
import { Orders } from './Components/Orders/Orders';
import { Sidebar } from './Components/Sh-SideBar/Sh-Sidebar';
import { MainTop } from './Components/Sh-mainTop/Sh-mainTop';
import { MainTopMenu } from './Components/Sh-mainTopMenu/Sh-mainTopMenu';
import { Route, Routes } from 'react-router-dom';
import { Doashbard } from './Pages/Doashbard/Doashbard';
import { ChooseDishes } from './Components/Hero/ChooseDishes';

function App() {
  return (
    <>
      <div>
        {<ChooseDishes />}
      </div>
    </>
  );
}

export default App;
