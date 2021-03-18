import Aside from './components/Aside/Aside.js';
import Navigation from './components/Navigation/Navigation.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

function App() {
    return (
        <div className="app">
            <Navigation/>
            <div className="container">
                <Aside/>
                <Main/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
