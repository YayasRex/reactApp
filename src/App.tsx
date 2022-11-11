import './App.css';
import PopularMovies from './components/PopularMovies/PopularMovies';
import Searchbar from './components/Searchbar/Searchbar';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <PopularMovies />
      <Footer />
    </div>
  );
}

export default App;
