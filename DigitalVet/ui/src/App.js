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

const ROLES = {
    'User': 'user',
    'Editor': 'business'
}

function App() {
    return (
        <div className="App">
            <MenuAppBar/>
            <header className="App-header">
                <Routes>
                    {/* public routes */}
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='business' element={<BusinessRegister/>}/>
                    <Route path='unauthorized' element={<Unauthorized/>}/>

                    {/*<Route element={<RequireAuth allowedRoles={[ROLES.User]}/>}>*/}
                        <Route path='/' element={<Filter/>}/>
                        <Route path='show' element={<ShowClinics/>}/>
                        <Route path="clinic/:clinicId" element={<ClinicPage/>}/>
                        <Route path="clinic/vet/:vetId" element={<VetPage/>}/>
                    {/*</Route>*/}

                    <Route element={<RequireAuth allowedRoles={[ROLES.Editor]}/>}>
                        <Route path='addClinic' element={<AddClinic/>}/>
                        <Route path='settings/:clinicId' element={<BusinessAcountSettings/>}/>
                    </Route>

                    {/* catch all */}
                    <Route path="*" element={<Missing />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
