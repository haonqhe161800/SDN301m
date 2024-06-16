
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from '../Components/Screens/Register';
import MyAccount from '../Components/Screens/MyAccount';
import JobOpportunities from '../Components/Screens/JobOpportunities';
import MyCv from '../Components/Screens/MyCv';
import MyApplyJob from '../Components/Screens/MyApplyJob';
import Home from '../Components/Screens/Home';
import CreateCV from '../Components/Screens/CreateCV';
import Login from '../Components/Screens/Login';
import LoginCompany from '../Components/Screens/LoginCompany';
import ForgotPassword from '../Components/Screens/ForgotPassword';
import MySaveJob from '../Components/Screens/MySaveJob';
import CompanyFollowed from '../Components/Screens/CompanyFollowed';


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dang-nhap' element={<Login />} />
            <Route path='/dang-nhap-cong-ty' element={<LoginCompany />} />
            <Route path='/quen-mat-khau' element={<ForgotPassword />} />
            <Route path='/dang-ky' element={<Register />} />
            <Route path='/co-hoi-nghe-nghiep' element={<JobOpportunities />} />
            <Route path='/tai-khoan' element={<MyAccount />} />
            <Route path='/tao-cv' element={<CreateCV />} />
            <Route path='/ho-so-cua-toi' element={<MyCv />} />
            <Route path='/viec-lam-da-luu' element={<MySaveJob />} />
            <Route path='/viec-lam-da-ung-tuyen' element={<MyApplyJob />} />
            <Route path='/cong-ty-dang-theo-doi' element={<CompanyFollowed />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Router;

