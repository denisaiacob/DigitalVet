import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from "./components/user/Login";
import MenuAppBar from "./components/menu/MenuAppBar";
import Filter from "./components/filter/Filter";
import Register from "./components/user/Register";
import BusinessRegister from "./components/user/BusinessRegister";
import ShowClinics from "./components/page/filtersResult/ShowClinics";

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
                    <Route exact path='/show' component={ShowClinics}/>
                    <Route exact path='/clinic' component={Clinic}/>

                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
