import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import CoursesList from './components/courses/CoursesList';
import CourseDetails from './components/courses/CourseDetails';
import Placement from './components/Placement';
import CareerPage from './components/CareerPage/CareerPage';
import ContactPage from './components/Contact/ContactPage';
import ScrollToTop from "./components/ScrollTop";
import ChatBot from './components/Chatbot/ChatBot';
import BlogPage from './components/Blogs/BlogPage';





const CourseDetailsWrapper = ({ onNavClick }: { onNavClick: (page: string) => void }) => {
  const { id } = useParams();
  const courseId = id ? parseInt(id) : null;

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <CourseDetails
      courseId={courseId}
      onNavClick={onNavClick}
      onBackClick={handleBackClick}
    />
  );
};

function AppWrapper() {
  const navigate = useNavigate();

  const handleNavClick = (page: string) => {
    navigate(page);
  };

  const handleCourseClick = (courseId: number) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar onNavClick={handleNavClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<CoursesList onCourseClick={handleCourseClick} />} />
        <Route path="/courses/:id" element={<CourseDetailsWrapper onNavClick={handleNavClick} />} />
        <Route path="/Placement" element={<Placement />} />
        <Route path="/Career" element={<CareerPage />} />
         <Route path="/Contact" element={<ContactPage />} />
         <Route path="/BlogPage" element={<BlogPage />} />
      </Routes>
      <Footer onNavClick={handleNavClick} />
      <ChatBot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
