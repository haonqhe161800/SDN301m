
import { Navigate, Route, Routes } from 'react-router-dom';
import ForgotPassword from '../Components/Screens/ForgotPassword';
import CompanyProfile from '../Components/Screens/CompanyProfile';
import ListEmployees from '../Components/Screens/ListEmployees';
import JobListHRManager from '../Components/Screens/JobListHRManager';
import RecruimentPostHR from '../Components/Screens/RecruimentPostHR';
import Home from '../Components/Screens/Home';
import NotFound from '../Components/Screens/NotFound';
import LoginForCompany from '../Components/Screens/LoginForCompany';
import CompanyRegister from '../Components/Screens/CompanyRegister';
import VIPRegister from '../Components/Screens/VIPRegister';
import EditPostHR from '../Components/Screens/EditPostHR';
import LoginForStaff from '../Components/Screens/LoginForStaff';
import HRManagerCandidatesList from '../Components/Screens/HRManagerCandidatesList';
import CandidatesListHR from '../Components/Screens/CandidatesListHR';
import JobListHR from '../Components/Screens/JobListHR';
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cong-ty/dang-nhap' element={<LoginForCompany />} />
            <Route path='/nhan-vien/dang-nhap' element={<LoginForStaff />} />
            <Route path='/cong-ty/dang-ky' element={<CompanyRegister />} />
            <Route path='/khong-xac-dinh' element={<NotFound />} />
            <Route path='/quen-mat-khau/:code' element={<ForgotPassword />} />
            <Route path='/tao-bai-tuyen-dung' element={<RecruimentPostHR />} />
            <Route>
                <Route path='/ho-so-cong-ty' element={<CompanyProfile />} />
                <Route path='/danh-sach-nhan-vien' element={<ListEmployees />} />
                <Route path='/dang-ky-vip' element={<VIPRegister />} />
            </Route>
            <Route>
                <Route path='/tao-bai-tuyen-dung' element={<RecruimentPostHR />} />
                <Route path='/chinh-sua-bai-tuyen-dung/:pid' element={<EditPostHR />} />
                <Route path='/danh-sach-cong-viec' element={<JobListHR />} />
                <Route path='/danh-sach-ung-vien' element={<CandidatesListHR />} /> />
            </Route>
            <Route>
                <Route path='/danh-sach-ung-vien-hrmanager' element={<HRManagerCandidatesList />} />
                <Route path='/danh-sach-cong-viec-hrmanager' element={<JobListHRManager />} />
            </Route>
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Router;

