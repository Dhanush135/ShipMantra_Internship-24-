import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import OrdersPage from './Pages/OrdersPage';
import ViewPage from './Pages/ViewPage';
import AssignPage from './Pages/AssignPage';
import RejectPage from './Pages/RejectPage';
import ProfilePage from './Pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/homePage" element={<HomePage/>}/>
          <Route path="/ordersPage" element={<OrdersPage/>}/>
          <Route path="/viewPage/:id" element={<ViewPage/>}/>
          <Route path="/assignPage" element={<AssignPage/>}/>
          <Route path="/rejectPage" element={<RejectPage/>}/>
          <Route path="/profilePage" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
