import React, { useState, useEffect } from 'react';
import { TbBellRinging } from "react-icons/tb";
import { TbBellRingingFilled } from "react-icons/tb";

function Authenticated() {
    const [notificate, setNotificate] = useState(false);
    const [notifications, setNotifications] = useState([
        {
            "title": "test 1",
            "subtitle": "",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at suscipit lorem, nec placerat mauris."
        },
        {
            "title": "test 2",
            "subtitle": "",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at suscipit lorem, nec placerat mauris."
        },
        {
            "title": "test 3",
            "subtitle": "",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at suscipit lorem, nec placerat mauris."
        }
    ]);
    const getCurrentUser = {};

    useEffect(() => {
         
    }, []);  
    const handleNotificate = () => {
        setNotificate(!notificate);
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

            <div className=" flex items-center avatar-info ml-3 cursor-pointer">
                <div className=' rounded-full bg-slate-600 mr-2'>
                    <img src={`${getCurrentUser?.avatar || '/logo192.png'}`} alt='avatar.png' width={30} height={30} />
                </div>
                <span className='text-sm'>{getCurrentUser?.username}</span>
            </div>
        </>
    );
}

export default Authenticated;