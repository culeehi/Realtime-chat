import { Routes, Route, Navigate } from 'react-router-dom';

import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
   return (
      <>
         <NavBar />
         <Container className="text-secondary">
            <Routes>
               <Route path="/" element={<Chat />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="*" element={<Navigate to="/" />} />
            </Routes>
         </Container>
      </>
   );
}

export default App;
