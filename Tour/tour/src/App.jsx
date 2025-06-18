import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './pages/Footer';
import LoginWindow from './pages/LoginWindow'; 
import SignupWindow from './pages/SignUpWindow';
import ImageGallery from './pages/ImageGallery';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import FestivalPage from './pages/FestivalPage';
// import Recommend from './pages/Recommend';

function App() {
  return (
    <Routes>
      {/* 새 창처럼 깔끔하게 보여줄 경로: Header/Footer 없음 */}
      <Route path="/login-window" element={<LoginWindow />} />
      <Route path="/signup-window" element={<SignupWindow />} />

      {/* 나머지 모든 경로는 Header/Footer 포함 */}
      <Route
        path="*"
        element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/image-gallery" element={<ImageGallery />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/festival" element={<FestivalPage />} />
              {/* <Route path="/recommend" element={<Recommend />} /> */}
            </Routes>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;