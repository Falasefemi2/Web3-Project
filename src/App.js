import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './component/Button/Button';
import Logo from './component/Logo/Logo';
import Text from './component/Text/Text';
import Categories from './component/Categories/Categories';
import FavouriteArtist from './component/FavouriteArtist/FavouriteArtist';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="section__padding">
          <Routes>
            <Route  path="/" element={<Logo />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Text />} />
          </Routes>
          <Routes>
            <Route  path="/Categories" element={<Categories />}  />
          </Routes>
          <Routes>
            <Route  path="/FavouriteArtist" element={<FavouriteArtist />}  />
          </Routes>
          <Routes>
          <Route path='/' element={<Button />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
