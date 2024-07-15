import React, { useState, useEffect } from 'react';
import { TbBellRinging } from "react-icons/tb";
import { TbBellRingingFilled } from "react-icons/tb";
import { useSelector } from 'react-redux';
import axios from 'axios';  
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../Store/userSlice';

function Authenticated() {
    const [notificate, setNotificate] = useState(false);
    const [accountDropDown, setAccountDropDown] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const getCurrentUser = useSelector((state) => state.users.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSignOut(e) {
        e.preventDefault();
        sessionStorage.removeItem('staff');
        sessionStorage.removeItem('HRManager');
        sessionStorage.removeItem('company');
        sessionStorage.removeItem('user');
        dispatch(clearUser());
        navigate('/');
    }

    useEffect(() => {
         
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('http://localhost:9999/api/notifications');
                console.log('Notifications:', response.data);  
                setNotifications(response.data);  
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };       
      fetchNotifications();   
        return () => {
        };
    }, []);  
    const handleNotificate = () => {
        setNotificate(!notificate);
    }
    const handleAccountDropDown = () => {
        setAccountDropDown(!accountDropDown);
    }
    return (
        <>
            <div className="notification mr-3 cursor-pointer relative" onClick={handleNotificate}>
                {notificate ? <TbBellRinging size={25} /> : <TbBellRingingFilled size={25} />}

                <span className='num-notifcation rounded-full bg-red-500 text-[0.6rem] absolute right-[-10%] top-[61%] pt-0 pr-[0.3em] pb-[0.1em] pl-[0.2em]'>{notifications.length}</span>
                <div className={notificate ? 'notification-list show text-black' : 'notification-list'}>
                    <ul className="text-black text-[0.8rem]">
                        {notifications.map((notification, index) => (
                            <li className="notification-item" key={index}>
                                <div className="notification-item-title">
                                    <p><b>{notification.title}</b><span>{notification.subtitle}</span></p>
                                </div>
                                <div className="sub-content">
                                    <p>{notification.content.substring(0, 50)}...</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

            <div className="flex items-center avatar-info ml-3 cursor-pointer" onClick={handleAccountDropDown}>
                <div className=' rounded-full bg-slate-600 mr-2'>
                    <img src={`${getCurrentUser?.avatar || '/logo192.png'}`} alt='avatar.png' width={30} height={30} />
                </div>
                <span className='text-sm'>{getCurrentUser?.username}</span>
                <div className="notification mr-3 relative">
                    <div className={accountDropDown ? 'accdrop-list show text-black' : 'accdrop-list'}>
                        <ul className="text-black text-[0.8rem]">
                            <li className="">
                                { getCurrentUser?.taxcode != null ? 
                                    <div className="">
                                        <Link to={'/ho-so-cong-ty'}><div className="bg-red-500  p-3 border-b-2 border-white text-white">Trang Quản Lý</div></Link>
                                        <div onClick={e => handleSignOut(e)} className="bg-white-500  p-3 border-b-2 border-white text-black">Đăng Xuất</div>
                                    </div>
                                : 
                                    getCurrentUser?.role === "HRManager"  ?

                                    <div className="">
                                        <Link to={'/danh-sach-ung-vien-hrmanager'}><div className="bg-red-500  p-3 border-b-2 border-white text-white">HRManager</div></Link>
                                        <Link to={'/danh-sach-cong-viec-hrmanager'}><div className="bg-red-500  p-3 border-b-2 border-white text-white">HRManager</div></Link>
                                        <div onClick={e => handleSignOut(e)} className="bg-white-500  p-3 border-b-2 border-white text-black">Đăng Xuất</div>
                                    </div>
                                :
                                    getCurrentUser?.role === "HR"  ?

                                    <div className="">
                                        <Link to={'/tao-bai-tuyen-dung'}><div className="bg-red-500  p-3 border-b-2 border-white text-white">HR</div></Link>
                                        <Link to={'/danh-sach-cong-viec'}><div className="bg-red-500  p-3 border-b-2 border-white text-white">HR</div></Link>
                                        <Link to={'/danh-sach-ung-vien'}><div className="bg-red-500  p-3 border-b-2 border-white text-white">HR</div></Link>
                                        <div onClick={e => handleSignOut(e)} className="bg-white-500  p-3 border-b-2 border-white text-black">Đăng Xuất</div>
                                    </div>
                                :
                                    <div className="">
                                        <Link to={'/tai-khoan'}><div className="bg-red-500  p-3 border-b-2 border-white text-white">Trang Quản Lý</div></Link>
                                        <div onClick={e => handleSignOut(e)} className="bg-white-500  p-3 border-b-2 border-white text-black">Đăng Xuất</div>
                                    </div>
                                }
                                
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Authenticated;