import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from "./components/user/Login";
import MenuAppBar from "./components/menu/MenuAppBar";
import Filter from "./components/filter/Filter";
import Register from "./components/user/Register";
import BusinessRegister from "./components/user/BusinessRegister";
import ShowClinics from "./components/filtersResult/ShowClinics";
import ClinicPage from "./components/clinicPage/ClinicPage";
import VetPage from "./components/clinicPage/VetPage";
import AddClinic from "./components/addClinics/AddClinic";
import BusinessAcountSettings from "./components/editorMenu/BusinessAcountSettings";
import RequireAuth from "./hooks/RequireAuth";
import Missing from "./components/wrongPath/Missing";
import Unauthorized from "./components/wrongPath/Unauthorized";
import FavoriteList from "./components/user/FavoriteList";
import MyAppointments from "./components/user/MyAppointments";

const ROLES = {
    'User': 'user',
    'Admin': 'business'
}

function App() {
    return (
        <div className="App">
            <MenuAppBar/>
            <header className="App-header">
                <Routes>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='business' element={<BusinessRegister/>}/>
                    <Route path='unauthorized' element={<Unauthorized/>}/>
                    <Route path='/' element={<Filter/>}/>
                    <Route path='show' element={<ShowClinics/>}/>
                    <Route path="clinic/:clinicId" element={<ClinicPage/>}/>
                    <Route path="clinic/vet/:vetId" element={<VetPage/>}/>

                    <Route element={<RequireAuth allowedRoles={[ROLES.User]}/>}>
                        <Route path='fav' element={<FavoriteList/>}/>
                        <Route path='myAppointments' element={<MyAppointments/>}/>
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
                        <Route path='addClinic' element={<AddClinic/>}/>
                        <Route path='settings/:clinicId' element={<BusinessAcountSettings/>}/>
                    </Route>

                    <Route path="*" element={<Missing/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
