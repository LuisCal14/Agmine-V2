import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./assets/style/App.css";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import MapsM from "./container/MapMenu/MapsMenu";
import QuizM from './container/QuizMenu/QuizMenu';
import QuizMain from "./pages/QuizMain";
import Province from './pages/Maps/ProvincesPage';
import RegionE from './pages/Maps/RegionsEstePage';
import RegionN from './pages/Maps/RegionsNortePage';
import RegionS from './pages/Maps/RegionSurPage';
import QuizBalaguer from "./pages/QuizBalaguer";
import QuizBosch from "./pages/QuizBosch";
import QuizIntervencion from "./pages/QuizIntervencion";
import QuizGeografia from "./pages/QuizzGeografia";
import Games from './container/Games/Games';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true}/>} />
          <Route path="/home" element={<MainPage Main={HomePage} />} />
          <Route path='/games' element={<Games/>}></Route>
          <Route path="/mapmenu" element={<MapsM />} />
          <Route path='/quizmenu' element={<QuizM/>}></Route>
          <Route path='/provinces' element={<Province />} />
          <Route path='/regionescibao' element={<RegionN />} />
          <Route path='/regionessur' element={<RegionS />}/>
          <Route path='/regioneseste' element={<RegionE />} />
          <Route path="/QuizBalaguer" element={<MainPage Main={QuizBalaguer} />} />
          <Route path='/QuizTrujillo' element={<MainPage Main={QuizMain} />}></Route>
          <Route path='/QuizBosch' element={<MainPage Main={QuizBosch} />}></Route>
          <Route path='/QuizIntervencion' element={<MainPage Main={QuizIntervencion} />}></Route>
          <Route path='/QuizGeografia' element={<MainPage Main={QuizGeografia} />}></Route>
        </Routes>
    </Router>
  );
};

export default App;
