import './App.css';

import { Header } from './components';
import UserGreeting from './components/UseGreeting';
import About from './components/about';
import Home from './components/Home';
import StudentPage from './pages/StudentPage';
import CoursePage from './pages/CoursePage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <Navbar />
        <Contact/>
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/students" element={<StudentPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <main>
        <section>
          <UserGreeting isLoggedIn={true} />
        </section>
      </main>
    </div>
    </AuthProvider>
  );
}

export default App;
