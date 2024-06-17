// import DefaultLogin from '../Layouts/DefaultLogin';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation, useNavigate } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function LoginForCompany(props) {
//     const navigate = useNavigate();
//     const [resetEmail, setRestEmail] = useState('');
//     const [buttonSendEmail, setButtonSendEmail] = useState(false);
//     const dispatch = useDispatch();
//     const statusLogin = useSelector((state) => state.users.statusLogin);
//     const [buttonLogin, setButtonLogin] = useState(false);
//     const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
//     const nav = useNavigate();
//     const location = useLocation();
//     const from = location.state?.from?.pathname || "/trang-chu";
//     const openConfirmationModal = () => {
//         setButtonSendEmail(!buttonSendEmail);
//     };

//     const closeConfirmationModal = () => {
//         setIsConfirmationModalOpen(false);
//     };


//     useEffect(() => {
//         document.title = "Đăng Nhập Tài Khoản Doanh Nghiệp - BEST CV";


//         //Xử lý đăng nhập
//         const loginButton = document.getElementById('login-button');
//         loginButton.addEventListener('click', async (e) => {
//             const email = document.getElementById('email');
//             const password = document.getElementById('password');
//             if (email.value && password.value) {
//                 const res = await axios.post('http://localhost:9999/company', {
//                     email: document.getElementById('email').value,
//                     password: document.getElementById('password').value
//                 }).catch((err) => {
//                     console.log(err);
//                 })
//                 console.log(res);
//                 if (res && res.data.result === "SUCCESS") {
//                     sessionStorage.setItem('company', JSON.stringify(res.data.data));
//                     navigate('/ho-so-cong-ty');
//                 }
//             } else {
//                 toast.error('Vui lòng nhập đầy đủ thông tin');
//             }
//         })
//     }, []);


//     return (
//         <DefaultLogin isCompany={true} resetEmail={resetEmail} setRestEmail={setRestEmail}
//             setButtonLogin={setButtonLogin} openConfirmationModal={openConfirmationModal}
//             closeConfirmationModal={closeConfirmationModal} isConfirmationModalOpen={isConfirmationModalOpen} />
//     );
// }

// export default LoginForCompany;

import DefaultLogin from '../Layouts/DefaultLogin';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForCompany(props) {
    const navigate = useNavigate();
    const [resetEmail, setRestEmail] = useState('');
    const [buttonSendEmail, setButtonSendEmail] = useState(false);
    const dispatch = useDispatch();
    const statusLogin = useSelector((state) => state.users.statusLogin);
    const [buttonLogin, setButtonLogin] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const nav = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/trang-chu";

    const openConfirmationModal = () => {
        setButtonSendEmail(!buttonSendEmail);
    };

    const closeConfirmationModal = () => {
        setIsConfirmationModalOpen(false);
    };

    useEffect(() => {
        document.title = "Đăng Nhập Tài Khoản Doanh Nghiệp - G1CV";
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            try {
                const res = await axios.get('http://localhost:9999/company');
                const company = res.data.find(company => company.email === email && company.password === password);

                if (company) {
                    sessionStorage.setItem('company', JSON.stringify(company));
                    navigate('/ho-so-cong-ty');
                } else {
                    toast.error('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
                }
            } catch (err) {
                console.log(err);
                toast.error('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
            }
        } else {
            toast.error('Vui lòng nhập đầy đủ thông tin');
        }
    };

    return (
        <DefaultLogin 
            isCompany={true} 
            resetEmail={resetEmail} 
            setRestEmail={setRestEmail}
            setButtonLogin={setButtonLogin} 
            openConfirmationModal={openConfirmationModal}
            closeConfirmationModal={closeConfirmationModal} 
            isConfirmationModalOpen={isConfirmationModalOpen} 
        >
            <form onSubmit={handleLogin}>
                <div className="form-group font-bold">
                    <label htmlFor="email" className="mb-3">Email</label>
                    <span className="text-red-500">*</span>
                    <input
                        type="text"
                        className="form-control p-3"
                        id="email"
                        name="email"
                        placeholder="Nhập email của bạn"
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
                        required
                    />
                </div>
                <button
                    type="submit"
                    id='login-button'
                    className="bg-orange-500 text-white p-2 w-full rounded-md"
                >
                    Đăng Nhập
                </button>
            </form>
        </DefaultLogin>
    );
}

export default LoginForCompany;
