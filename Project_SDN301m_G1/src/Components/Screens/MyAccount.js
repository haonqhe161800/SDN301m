import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CiImageOn } from "react-icons/ci";
import { RiVipCrownLine } from "react-icons/ri";
import HeaderV2 from '../Util/Header/HeaderV2';
import DashboardCustomer from '../Layouts/DashboardCustomer';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
function MyAccount(props) {
    const nav = useNavigate();
    const [avatarPreview, setAvatarPreview] = useState('/logo192.png');
    const getCurrentUser = {};

    const handleSaveImage = (e) => {

    }

    return (
        <DashboardCustomer>
            <HeaderV2 hrefType={'Quản lý tài khoản'} />
            <ToastContainer />
            <main>
                <div className='info-pageCurrent mt-16 ml-16'>
                    <h2 className="text-[2em] font-bold leading-7 text-gray-700">Thông tin tài khoản</h2>
                    <p className="mt-3 text-[0.8em] leading-6 text-gray-600 w-[27%]">Tại G1CV, chúng tôi không chỉ cung cấp công việc, chúng tôi tạo ra cơ hội nghề nghiệp.</p>
                </div>
                <div className='flex justify-between items-center p-[2.6em]'>
                    <div className='w-[100%]'>
                        <Formik
                            initialValues={{ phone: getCurrentUser?.phone, firstname: getCurrentUser?.firstname, lastname: getCurrentUser?.lastname, email: getCurrentUser?.email, newpassword: '', newpassword2: '' }}
                            validationSchema={Yup.object({
                                phone: Yup.number(),
                                fullname: Yup.string(),
                                email: Yup.string().email('* Invalid email address'),
                                newpassword: Yup.string()
                                    .min(6, "Password is too short - should be 6 chars minimum")
                                ,
                                newpassword2: Yup.string()
                                    .min(6, "Password is too short - should be 6 chars minimum")
                                    .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
                            })}
                            onSubmit={async (values, { setSubmitting, setErrors }) => {
                                let info = {
                                    username: values.fullname || getCurrentUser?.username,
                                    email: values.email || getCurrentUser?.email,
                                    phone: values.phone,
                                    ...(values.newpassword && { password: values.newpassword }),
                                    savedPost: getCurrentUser.savedPost,
                                    followCompany: getCurrentUser.followCompany,
                                    avatar: avatarPreview
                                }
                                const cookieInfo = { ...info };
                                delete cookieInfo.password;

                                toast.success("Cập nhật thông tin thành công!")


                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="mt-10 container">
                                    <div className='row justify-center gap-x-4'>
                                        <div className='col-8'>
                                            <div className="row bg-slate-300-100 shadow-sm  p-5 rounded">
                                                <div className='col-6'>
                                                    <div className='row'>
                                                        <div className="col-md-12">
                                                            <div className='row'>
                                                                <div className="col-6">
                                                                    <div className='mt-3'>
                                                                        <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">Họ và tên</label>
                                                                        <div className='input-group input-group-lg mt-2'>
                                                                            <Field name="lastname" type="text" placeholder={getCurrentUser?.lastname} className={`form-control rounded ${errors.lastname && touched.lastname ? 'border-danger' : ''}`} />
                                                                            <span className='absolute text-red-500 text-[0.7em] font-semibold left-[1em] error-message'><ErrorMessage name="lastname" /></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className='mt-3'>
                                                                        <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">Họ và tên</label>
                                                                        <div className='input-group input-group-lg mt-2'>
                                                                            <Field name="firstname" type="text" placeholder={getCurrentUser?.firstname} className={`form-control rounded ${errors.firstname && touched.firstname ? 'border-danger' : ''}`} />
                                                                            <span className='absolute text-red-500 text-[0.7em] font-semibold left-[1em] error-message'><ErrorMessage name="firstname" /></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className="mt-3">
                                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                                                <div className='input-group input-group-lg mt-2'>
                                                                    <Field name="email" type="email" placeholder={getCurrentUser?.email} className={`form-control rounded ${errors.email && touched.email ? 'border-danger' : ''}`} />
                                                                    <span className='absolute text-red-500 text-[0.7em] font-semibold left-[1em] error-message'><ErrorMessage name="email" /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className="mt-3">
                                                                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Số điện thoại</label>
                                                                <div className='input-group input-group-lg mt-2'>
                                                                    <Field name="phone" type="text" placeholder={getCurrentUser?.phone} className={`form-control rounded ${errors.phone && touched.phone ? 'border-danger' : ''}`} />
                                                                    <span className='absolute text-red-500 text-[0.7em] font-semibold left-[1em] error-message'><ErrorMessage name="phone" /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    <div className="row">
                                                        <div className='col-md-12'>
                                                            <div className="mt-3">
                                                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mật khẩu</label>
                                                                <div className=' input-group input-group-lg mt-2'>
                                                                    <Field name="password" type="password" placeholder="**********" className={`form-control rounded`} disabled={true} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className="mt-3">
                                                                <label htmlFor="newpassword" className="block text-sm font-medium leading-6 text-gray-900">Nhập mật khẩu mới của bạn</label>
                                                                <div className='input-group input-group-lg mt-2'>
                                                                    <Field name="newpassword" type="password" placeholder="**********" className={`form-control rounded ${errors.newpassword && touched.newpassword ? 'border-danger' : ''}`} />
                                                                    <span className='absolute text-red-500 text-[0.7em] font-semibold left-[1em] error-message'><ErrorMessage name="newpassword" /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-12'>
                                                            <div className="mt-3">
                                                                <label htmlFor="newpassword2" className="block text-sm font-medium leading-6 text-gray-900">Nhập lại mật khẩu của bạn</label>
                                                                <div className='input-group input-group-lg mt-2'>
                                                                    <Field name="newpassword2" type="password" placeholder="**********" className={`form-control rounded ${errors.newpassword2 && touched.newpassword2 ? 'border-danger' : ''}`} />
                                                                    <span className='absolute text-red-500 text-[0.7em] font-semibold left-[1em] error-message'><ErrorMessage name="newpassword2" /></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-3 relative'>
                                            <div className='row text-center bg-gray-100 rounded p-4'>
                                                <div className='col-md-12 pb-3'>
                                                    <div className='relative'>
                                                        <img src={getCurrentUser?.avatar || avatarPreview}
                                                            alt='avatar.png' className='mx-auto rounded-full shadow-lg object-cover w-[15em] h-[14em]' />
                                                        <label htmlFor="avatar" className='p-2 mt-1 absolute cursor-pointer bg-orange-600 rounded-full bottom-[-0.9em] right-[3em]'><CiImageOn size={20} color='#fff' /></label>
                                                        <input
                                                            name='avatar'
                                                            type='file'
                                                            accept=".jpg, .jpeg, .png"
                                                            id="avatar"
                                                            hidden
                                                            onChange={handleSaveImage}
                                                        />

                                                    </div>
                                                </div>
                                                {/* <div className='col-md-12'>
                                                    <div className='accountType'>
                                                        <p className='text-sm font-bold'>Tài khoản chưa được nâng cấp</p>
                                                    </div>
                                                </div> */}
                                                <div className='col-md-12'>
                                                    <div className='mt-3'>
                                                        {
                                                            getCurrentUser?.isVip ?
                                                                <div className='md:px-5 md:py-3 bg-orange-600 text-white rounded-md mr-4 font-medium mx-auto cursor-pointer'><RiVipCrownLine size={25} className='inline-block' /> <span>VIP</span></div>
                                                                :
                                                                <div className='md:px-5 md:py-3 bg-orange-600 text-white rounded-md mr-4 font-medium mx-auto cursor-pointer' onClick={() => nav('/nang-cap')}>Nâng cấp ngay</div>
                                                        }

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='col-12'>
                                            <div className='mt-3 ml-14'>
                                                <button type="submit" className=' md:px-8 md:py-3 bg-[#141a45ff] text-white rounded-md mr-4 font-medium'>Chỉnh Sửa</button>
                                                <button type="submit" className=' md:px-8 md:py-3 bg-orange-600 text-white rounded-md mr-4 font-medium'>Lưu</button>
                                            </div>
                                        </div>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>

            </main>
        </DashboardCustomer >
    );

}

export default MyAccount;