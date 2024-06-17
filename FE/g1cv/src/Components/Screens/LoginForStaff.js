// import { Link, useLocation, useNavigate } from "react-router-dom";
// import backgroundImage from "../../Image/background.jpg";
// import logo from "../../Image/logo-dragon-2.png";
// import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";
// import { useEffect, useState } from "react";
// function LoginForStaff() {
//     const [account, setAccount] = useState('');
//     const [password, setPassword] = useState('');
//     const location = useLocation();
//     const navigation = useNavigate();
//     useEffect(() => {
//         document.title = 'Đăng Nhập Cho Nhân Viên';
//     }, []);
//     async function handleLogin(e) {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:9999/staff', { account, password });
//             const staff = res.data;
//             console.log(res.data);
//             if (staff && staff.result === 'SUCCESS') {
//                 if (staff.data.role === 'HR') {
//                     sessionStorage.setItem('staff', JSON.stringify(staff.data));
//                     navigation('/danh-sach-cong-viec');
//                 } else if (staff.data.role === 'HRManager') {
//                     sessionStorage.setItem('HRManager', JSON.stringify(staff.data));
//                     navigation('/danh-sach-cong-viec-hrmanager');
//                 }
//             } else if (staff && staff.result === 'FAIL') {
//                 alert('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
//                 toast.error('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
//         }
//     }
//     return (
//         <div className={`all flex-row-reverse`}>
//             <div className="full-screen-image">
//                 <img src={backgroundImage} alt="img" />
//             </div>
//             <div className={`logo z-20 left-[77%]`}>
//                 <img src={logo} alt="img" />
//                 <Link to="/" className="flex items-center ">
//                     <i className="fas fa-undo mr-2"></i> Quay lại trang chủ
//                 </Link>
//             </div>

//             <div className="login-container">
//                 <form onSubmit={(e) => handleLogin(e)}>
//                     <h2 className="mb-4 text-dark  font-bold">Đăng Nhập</h2>
//                     <p>Bạn đang đăng nhập bằng tài khoản cho nhân viên,
//                         hãy nhập e-mail và mật khẩu để tiếp tục</p>
//                     <p>
//                         Tại Nodejs, chúng tôi không chỉ cung cấp công việc, chúng tôi
//                         tạo ra cơ hội nghề nghiệp.
//                     </p>
//                     <div className="form-group font-bold">
//                         <label htmlFor="username" className="mb-3">
//                             Tài khoản
//                         </label>
//                         <span className="text-red-500">*</span>
//                         <input
//                             type="text"
//                             className="form-control p-3"
//                             id="email"
//                             name="email"
//                             placeholder="Nhập tài khoản của bạn"
//                             onChange={e => setAccount(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="form-group  font-bold">
//                         <label htmlFor="password" className="mb-3">
//                             Mật Khẩu
//                         </label>
//                         <span className="text-red-500">*</span>
//                         <input
//                             type="password"
//                             className="form-control p-3"
//                             id="password"
//                             name="password"
//                             onChange={e => setPassword(e.target.value)}
//                             placeholder="Nhập mật khẩu của bạn"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         id='login-button'
//                         className="bg-orange-500 text-white p-2 w-full rounded-md "
//                     >
//                         Đăng Nhập
//                     </button>
//                 </form>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// }

// export default LoginForStaff;
import { Link, useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../../Image/background.jpg";
import logo from "../../Image/logo-dragon-2.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

function LoginForHr() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Đăng Nhập Cho Nhân Viên';
    }, []);

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const res = await axios.get('http://localhost:9999/hr');
            const hr = res.data.find(hr => hr.account === account && hr.password === password);
            console.log(hr);
            if (hr) {
                if (hr.role === 'HR') {
                    sessionStorage.setItem('hr', JSON.stringify(hr));
                    navigate('/danh-sach-cong-viec');
                } else if (hr.role === 'HRManager') {
                    sessionStorage.setItem('HRManager', JSON.stringify(hr));
                    navigate('/danh-sach-cong-viec-hrmanager');
                }
            } else {
                toast.error('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
            }
        } catch (error) {
            console.log(error);
            toast.error('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
        }
    }

    return (
        <div className={`all flex-row-reverse`}>
            <div className="full-screen-image">
                <img src={backgroundImage} alt="img" />
            </div>
            <div className={`logo z-20 left-[77%]`}>
                <img src={logo} alt="img" />
                <Link to="/" className="flex items-center ">
                    <i className="fas fa-undo mr-2"></i> Quay lại trang chủ
                </Link>
            </div>
            <div className="login-container">
                <form onSubmit={handleLogin}>
                    <h2 className="mb-4 text-dark font-bold">Đăng Nhập</h2>
                    <p>Bạn đang đăng nhập bằng tài khoản cho nhân viên, hãy nhập e-mail và mật khẩu để tiếp tục</p>
                    <p>Tại G1CV, chúng tôi không chỉ cung cấp công việc, chúng tôi tạo ra cơ hội nghề nghiệp.</p>
                    <div className="form-group font-bold">
                        <label htmlFor="account" className="mb-3">Tài khoản</label>
                        <span className="text-red-500">*</span>
                        <input
                            type="text"
                            className="form-control p-3"
                            id="account"
                            name="account"
                            placeholder="Nhập tài khoản của bạn"
                            onChange={e => setAccount(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group font-bold">
                        <label htmlFor="password" className="mb-3">Mật Khẩu</label>
                        <span className="text-red-500">*</span>
                        <input
                            type="password"
                            className="form-control p-3"
                            id="password"
                            name="password"
                            placeholder="Nhập mật khẩu của bạn"
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" id='login-button' className="bg-orange-500 text-white p-2 w-full rounded-md">
                        Đăng Nhập
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default LoginForHr;
