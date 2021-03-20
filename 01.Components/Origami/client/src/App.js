import Aside from './components/Aside/Aside.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

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
