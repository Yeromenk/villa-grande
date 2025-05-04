import './App.css'
import Header from './Layout/Header/Header.jsx'
import Services from './Components/Services/Services.jsx'
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Layout/Footer/Footer.jsx";

function App() {
    return (
        <div className="app">
            <Header/>
            <main>
                <Main/>
                <Services/>
                <ServiceDetails/>
                <Footer/>
            </main>
        </div>
    )
}

export default App