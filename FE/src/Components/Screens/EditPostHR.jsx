import React, { useEffect, useRef, useState } from 'react';
import NoFooter from '../Layouts/NoFooter';
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import DescriptionPost from '../Util/ReactQuills/DescriptionPost';
import CustomToolBarInline from '../Util/ReactQuills/RequirePost';
import '../../Styles/richEditorPost.css';
import 'react-calendar/dist/Calendar.css';
import TitlePost from '../Util/ReactQuills/TitlePost';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Breadcrumb from '../Util/StaticUtil/Breadcrumb';
import ProvinceDropdown from '../Util/Modal/ProvinceDropdown';

function EditPostHR(props) {
    const { pid } = useParams();
    const [post, setPost] = useState({});
    const [desc, setDesc] = useState('');
    const [reqText, setReqText] = useState('<ul><li>Thêm dòng ...</li></ul>');
    const [benText, setBenText] = useState('<ul><li>Thêm dòng ...</li></ul>');
    const [candidateReq, setCandidateReq] = useState('');
    const [title, setTitle] = useState('<h1>Nhập tên công việc</h1>');
    const [nameCo, setnameCo] = useState('');
    const [dateState, setDateState] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const staff = JSON.parse(sessionStorage.getItem('staff'));
    const [category, setCategory] = useState('');
    const salary = useRef('');
    const deadline = useRef('');
    const jobCategory = useRef();

    useEffect(() => {
        document.title = 'Chỉnh sửa công việc';
        async function getPostById() {
            try {
                const res = await axios.get('http://localhost:9999/api/post/get-post-by-id/' + pid);
                setPost(res.data.data);
                setSearchTerm(post.location);
            } catch (error) {
                console.log(error);
            }
        }
        getPostById();
    }, [pid]);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const res = await axios.get('http://localhost:9999/api/job-category/get-all-categories');
                const categories = res.data.data;
                setCategory(categories);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategory();
    }, []);
    

    async function handlePost(e) {
        e.preventDefault();
        try {} catch(err) {
            toast.error('Đã có lỗi xảy ra khi cập nhật bài viết')
        }
    }
    return (
        <NoFooter type={2}>
            <section id='section-header' className=' bg-gradient-to-r from-[#4973CE] to-[#47BDE1] text-gray-200'>
                <div className='pl-[9em] py-16'>
                    <Breadcrumb text1={'Trang chủ'} text2={'Danh sách công việc'} text3={'Tạo mới công việc'} />
                    <h2 className='text-[2em] font-semibold leading-7 py-3'>Chỉnh sửa công việc</h2>
                    <p className='text-[0.8em] font-thin'>Tại G1CV, chúng tôi không chỉ cung cấp công việc, chúng tôi tạo ra cơ hội nghề nghiệp</p>
                </div>
            </section>
            <section className='grid lg:grid-cols-3 gap-4 sm:w-[509px] lg:w-[1386px] mx-auto mt-5 mb-5'>
                <div className='col-span-2'>
                    <div className='tooltipABC flex justify-center gap-x-5'>
                        <div class="tooltipItem relative">
                            <input type="radio" name="toolEdit" id="edit" className="h-2 w-4 rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-2 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-2 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]" checked />
                            <span className='absolute bg-[#1F2F65] text-white text-[0.7em] rounded-sm p-2 min-w-max top-[2.5em] left-[-4.9em]'>Trang tạo bài viết</span>
                        </div>
                        <div className='tooltipItem relative'>
                            <input type="radio" name="toolEdit" id="preview" className="h-2 w-4 rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-2 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-2 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]" />
                            <span className='absolute bg-[#1F2F65] text-white text-[0.7em] rounded-sm p-2 min-w-max top-[2.5em] left-[-4.8em]'>Trang xem trước bài viết</span>
                        </div>
                    </div>
                    <form>
                        <div className='titlePost text-[#1F2F65] font-semibold'>
                            {/* title bai dang tuyen dung */}
                            {/* <TitlePost title={title} setTitle={setTitle} getTitle={getTitle}/> */}
                            <input type='text' value={post.title} onChange={(e) => setTitle(e.target.value)} className='w-full h-[3rem] border-gray-300 text-2xl outline-none' placeholder='Nhập tiêu đề bài viết' id='title' />
                        </div>
                        <div className='nameCo text-[#A7ACB1] font-semibold'>
                            {/* ten cong ty tuyen dung */}
                            <TitlePost title={post.name} setTitle={setnameCo} />
                        </div>
                        <div className='grid lg:grid-cols-3 gap-4 py-3 border-b-2 border-gray-300'>
                            {/* salary, dealine apply, location */}
                            <div className='flex gap-x-4'>
                                <label htmlFor="salary" className='text-[#7b839b] leading-[3.5rem] cursor-pointer'>Lương: </label>
                                <div className='flex align-items-center'>
                                    {/* <SalaryModal /> */}
                                    <input type="number" value={post.salary} ref={salary} className='w-[10rem] h-[2.5rem] border-b-2 border-solid border-gray-300 rounded-md pl-2' placeholder='Thỏa thuận' id='salary' />
                                </div>
                            </div>
                            <div className='flex gap-x-4'>
                                <label htmlFor="dealine" className='text-[#7b839b] leading-[3.5rem] cursor-pointer'>Hạn ứng tuyển: </label>
                                <div className='flex align-items-center'>
                                    <input type="date" defaultValue={new Date(post.deadline)} ref={deadline} className='w-[10rem] h-[2.5rem] border-b-2 border-solid border-gray-300 rounded-md pl-2' required placeholder='Hạn ứng tuyển' id='deadline' />
                                    {/* <CalendarModal dateState={dateState} setDateState={setDateState} /> */}
                                </div>
                            </div>
                            <div className='flex gap-x-4'>
                                <label htmlFor="location" className='text-[#7b839b] leading-[3.5rem] cursor-pointer'>Địa điểm: </label>
                                <div className="dropdown-content mt-2 relative">
                                    <ProvinceDropdown searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-4'>
                                <label htmlFor="location" className='text-[#7b839b] leading-[3.5rem] cursor-pointer'>Ngành: </label>
                                <div className="dropdown-content mt-3 relative flex align-items-center flex-col">
                                    <select id='job-category' ref={jobCategory}>
                                        {
                                            category && category.map((item, index) => {
                                                return <option key={index} value={item._id}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        <div className='req_ben grid lg:grid-cols-2 gap-4  py-3 border-b-2 border-gray-300'>
                            {/* req, quyen loi */}
                            <div className=''>
                                <label htmlFor="" className='text-[1.2rem] font-semibold font-sans text-[#1F2F65]'>Yêu cầu: </label>
                                <CustomToolBarInline text={post.candidateReq} setText={setReqText}  />
                            </div>
                            <div className=''>
                                <label htmlFor="" className='text-[1.2rem] font-sans  font-semibold  text-[#1F2F65]'>Quyền lợi: </label>
                                <CustomToolBarInline text={benText} setText={setBenText} />
                            </div>
                        </div>
                        <div className='mt-3'>
                            {/* mo ta cong viec */}
                            <label htmlFor="" className='text-2xl font-sans text-[#1F2F65]'>Mô tả công việc</label>
                            <DescriptionPost desc={post.jobDescription} setDesc={setDesc} />
                        </div>
                        <div className='mt-3 mb-3'>
                            <button type="button" className='md:px-10 md:py-3 bg-blue-950 text-white rounded-md mr-4 font-medium' onClick={e => handlePost(e)}>Lưu bài</button>
                            <button type="submit" className=' md:px-16 md:py-3 bg-orange-600 text-white rounded-md mr-4 font-medium' id='post-button'>Đăng bài</button>
                        </div>
                    </form>
                </div>
                <div>
                    <div className='shadow-xl'>
                        <h4 className='text-center font-semibold text-white  bg-blue-950 p-3 rounded-t-lg'>Liên hệ tư vấn cho nhà tuyển dụng</h4>
                        <div className='grid grid-cols-1 gap-y-4 p-4 mx-auto'>
                            <div className='flex items-center'>
                                <div className='icon-phone p-2.5 mr-1 bg-orange-600 rounded-full text-white'>
                                    <FiPhoneCall size={15} />
                                </div>
                                <div className='content_icon text-left text-[0.8em]'>
                                    <p className=''>Điện thoại</p>
                                    <p className='text-[1em] font-bold'>(84 - 24) 66526332 {' - '} <span>Dương Thế Toàn</span></p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='icon-phone p-2.5 mr-1 bg-orange-600 rounded-full text-white'>
                                    <FiPhoneCall size={15} />
                                </div>
                                <div className='content_icon text-left text-[0.8em]'>
                                    <p className=''>Điện thoại</p>
                                    <p className='text-[1em] font-bold'>(84 - 24) 66526332 {' - '} <span>Nguyễn Quang Hào</span></p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='icon-phone p-2.5 mr-1 bg-orange-600 rounded-full text-white'>
                                    <FiPhoneCall size={15} />
                                </div>
                                <div className='content_icon text-left text-[0.8em]'>
                                    <p className=''>Điện thoại</p>
                                    <p className='text-[1em] font-bold'>(84 - 24) 66526332 {' - '} <span>Nguyễn Tiến Anh</span></p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='icon-email p-2.5 mr-1 bg-orange-600 rounded-full text-white'>
                                    <MdOutlineEmail size={15} />
                                </div>
                                <div className='content_icon text-left text-[0.8em]'>
                                    <p className=''>Email</p>
                                    <p className='text-[1em] font-bold'>Info@minhnhat.com</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer/>
        </NoFooter>
    );
}

export default EditPostHR;