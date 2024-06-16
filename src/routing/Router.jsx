
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from '../Components/Screens/Register';
import MyAccount from '../Components/Screens/MyAccount';
import JobOpportunities from '../Components/Screens/JobOpportunities';
import MyCv from '../Components/Screens/MyCv';
import MyApplyJob from '../Components/Screens/MyApplyJob';
import Home from '../Components/Screens/Home';
import CreateCV from '../Components/Screens/CreateCV';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dang-ky' element={<Register />} />
            <Route path='/co-hoi-nghe-nghiep' element={<JobOpportunities />} />
            <Route path='/tai-khoan' element={<MyAccount />} />
            <Route path='/tao-cv' element={<CreateCV />} />
            <Route path='/ho-so-cua-toi' element={<MyCv />} />
            <Route path='/viec-lam-da-ung-tuyen' element={<MyApplyJob />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Router;

