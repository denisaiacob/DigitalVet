import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from "./components/Login";
import MenuAppBar from "./components/MenuAppBar";
import Filter from "./components/Filter";
import Register from "./components/Register";
import BusinessRegister from "./components/BusinessRegister";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MenuAppBar/>
                <header className="App-header">
                    <Route exact path='/' component={Filter}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/business' component={BusinessRegister}/>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
