import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from "./components/user/Login";
import MenuAppBar from "./components/menu/MenuAppBar";
import Filter from "./components/filter/Filter";
import Register from "./components/user/Register";
import BusinessRegister from "./components/user/BusinessRegister";
import ShowClinics from "./components/filtersResult/ShowClinics";
import ClinicPage from "./components/clinicPage/ClinicPage";
import VetPage from "./components/clinicPage/VetPage";
import AddClinic from "./components/addClinics/AddClinic";
import BusinessAcountSettings from "./components/settings/BusinessAcountSettings";

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
                    <Route exact path='/addClinic' component={AddClinic}/>
                    <Route exact path='/settings/:clinicId' component={BusinessAcountSettings}/>
                    <Route exact path='/show' component={ShowClinics}/>
                    <Route exact path="/clinic/:clinicId" component={ClinicPage}/>
                    <Route exact path="/clinic/vet/:vetId" component={VetPage}/>
                    <Route exact path="/service/:serviceId" component={Filter}/>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
