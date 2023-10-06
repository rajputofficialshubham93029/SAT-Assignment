import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import InsertData from './components/InsertData';
import UpdateScore from './components/UpdateScore';
import DeleteOneRecord from './components/DeleteOneRecord';
import GetRank from './components/GetRank';
import ViewAllData from './components/ViewAllData';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/insert" element={<InsertData/>} />
      <Route path="/update" element={<UpdateScore/>} />
      <Route path="/delete" element={<DeleteOneRecord/>} />
      <Route path="/rank" element={ <GetRank/>} />
      <Route  path="/view" element={<ViewAllData/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
