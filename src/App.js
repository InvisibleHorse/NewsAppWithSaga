import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Home from './containers/Home';
import PopularNews from './containers/PopularNews';
import LatestNews from './containers/LatestNews';
import AutorisationMain from './components/AuthorisationForm/AutorisationMain';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/latest-news/:number" element={<LatestNews />} />
                <Route path="/popular-news/:number" element={<PopularNews />} />
                <Route path="/login" element={<AutorisationMain />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;
