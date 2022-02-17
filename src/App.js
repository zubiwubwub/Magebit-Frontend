import Home from './components/pages/Home.js';
import List from './components/pages/List.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/list' element={<List />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
