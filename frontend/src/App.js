import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/user/:id' element={<Dashboard />} />
        <Route path='/user-mocked/:id' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />   
      </Routes>
    </div>
  );
}

export default App;
