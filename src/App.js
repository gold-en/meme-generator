import './App.css';

import Header from './components/Header';
import Meme from './components/Meme';

const App = () => {
  return (
    <div class="container">
      <div class="wrapper">
        <Header />
        <Meme />
      </div>
    </div>
  );
};

export default App;
