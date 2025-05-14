import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Layout/Header/Header';
import Main from './Components/Main/Main';
import Services from './Components/Services/Services';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Footer from './Layout/Footer/Footer';
import CallButton from './Components/CallButton/CallButton';
import './App.css';
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";

function App() {
    return (
        <Router>
            <div className="app">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Main/>
                                <Services/>
                                <ServiceDetails/>
                            </>
                        }/>
                    </Routes>
                </main>
                <CallButton phoneNumber="+380501234567"/>
                <ScrollToTop/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;