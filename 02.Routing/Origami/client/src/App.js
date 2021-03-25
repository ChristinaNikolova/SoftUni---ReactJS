import { Switch, Route, Redirect } from 'react-router-dom';

import Aside from './components/shared/Layout/Aside/Aside.jsx';
import Navigation from './components/shared/Layout/Navigation/Navigation.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/shared/Layout/Footer/Footer.jsx';
import SharePost from './components/Posts/SharePost/SharePost.jsx';
import Register from './components/Auth/Register/Register.jsx';
import Login from './components/Auth/Login/Login.jsx';
import Profile from './components/Users/Profile/Profile.jsx';
import NotFound from './components/shared/NotFound/NotFound.jsx';

import './App.css';

function App() {
    return (
        <div className="app">
            <Navigation />
            <div className="container">
                <Aside />
                <Switch>
                    <Route path='/' exact><Redirect to='/posts'></Redirect></Route>
                    <Route path='/posts' component={Main}></Route>
                    <Route path='/create-post' component={SharePost}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/profile' component={Profile}></Route>
                    <Route path='*' component={NotFound}></Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
