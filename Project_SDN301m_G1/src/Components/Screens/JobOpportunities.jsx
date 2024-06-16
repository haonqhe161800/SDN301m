import React, { memo, useEffect, useState } from 'react';
import Default from '../Layouts/Default'
import Breadcrumb from '../Util/StaticUtil/Breadcrumb';
import { FaHeart } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import parse, { domToReact } from 'html-react-parser';
import FilterSearchJobOpportunities from '../Util/FilterSearchJobOpportunities';

import PostItemSkeleton from '../Util/ViewUtil/PostItemSkeleton';
import UsePagination from '../Util/Pagination/UsePagination';

const itemsPerPage = 4;

function JobOpportunities() {
    const [itemOffset, setItemOffset] = useState(0);
    const [filteredPosts, setFilteredPosts] = useState([
        {
            companyId: {
                name: "Công ty cổ phần TMDV HGD",
                title: "SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh",
                candidateReq: "<ul><li>6 năm kinh nghiệm vị trí quản lý</li> <li>Có bằng cứ nhân kinh tế</li> <li>Thông thạo Tiếng Anh</li></ul>"
            },
            deadline: 1703969049,
            location: "Hưng Yên"
        },
        {
            companyId: {
                name: "Công ty cổ phần TMDV HGD",
                title: "SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh",
                candidateReq: "<ul><li>6 năm kinh nghiệm vị trí quản lý</li> <li>Có bằng cứ nhân kinh tế</li> <li>Thông thạo Tiếng Anh</li></ul>"
            },
            deadline: 1703969049,
            location: "Hưng Yên"
        },
        {
            companyId: {
                name: "Công ty cổ phần TMDV HGD",
                title: "SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh",
                candidateReq: "<ul><li>6 năm kinh nghiệm vị trí quản lý</li> <li>Có bằng cứ nhân kinh tế</li> <li>Thông thạo Tiếng Anh</li></ul>"
            },
            deadline: 1703969049,
            location: "Hưng Yên"
        },
        {
            companyId: {
                name: "Công ty cổ phần TMDV HGD",
                title: "SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh",
                candidateReq: "<ul><li>6 năm kinh nghiệm vị trí quản lý</li> <li>Có bằng cứ nhân kinh tế</li> <li>Thông thạo Tiếng Anh</li></ul>"
            },
            deadline: 1703969049,
            location: "Hưng Yên"
        },
        {
            companyId: {
                name: "Công ty cổ phần TMDV HGD",
                title: "SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh",
                candidateReq: "<ul><li>6 năm kinh nghiệm vị trí quản lý</li> <li>Có bằng cứ nhân kinh tế</li> <li>Thông thạo Tiếng Anh</li></ul>"
            },
            deadline: 1703969049,
            location: "Hưng Yên"
        },
        {
            companyId: {
                name: "Công ty cổ phần TMDV HGD",
                title: "SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh",
                candidateReq: "<ul><li>6 năm kinh nghiệm vị trí quản lý</li> <li>Có bằng cứ nhân kinh tế</li> <li>Thông thạo Tiếng Anh</li></ul>"
            },
            deadline: 1703969049,
            location: "Hưng Yên"
        },
        {
            companyId: {
                name: "Công ty cổ phần TMDV HGD",
                title: "SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh",
                candidateReq: "<ul><li>6 năm kinh nghiệm vị trí quản lý</li> <li>Có bằng cứ nhân kinh tế</li> <li>Thông thạo Tiếng Anh</li></ul>"
            },
            deadline: 1703969049,
            location: "Hưng Yên"
        },
        {
            companyId: {
                name: "Công ty cổ phần TMDV HGD",
                title: "SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh",
                candidateReq: "<ul><li>6 năm kinh nghiệm vị trí quản lý</li> <li>Có bằng cứ nhân kinh tế</li> <li>Thông thạo Tiếng Anh</li></ul>"
            },
            deadline: 1703969049,
            location: "Hưng Yên"
        },
        {
            companyId: {
                name: "Công ty cổ phần TMDV HGD",
                title: "SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh",
                candidateReq: "<ul><li>6 năm kinh nghiệm vị trí quản lý</li> <li>Có bằng cứ nhân kinh tế</li> <li>Thông thạo Tiếng Anh</li></ul>"
            },
            deadline: 1703969049,
            location: "Hưng Yên"
        },
        {
            companyId: {
                name: "Công ty cổ phần TMDV HGD",
                title: "SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh",
                candidateReq: "<ul><li>6 năm kinh nghiệm vị trí quản lý</li> <li>Có bằng cứ nhân kinh tế</li> <li>Thông thạo Tiếng Anh</li></ul>"
            },
            deadline: 1703969049,
            location: "Hưng Yên"
        }
    ]);
    const [sidebarData, setSidebarData] = useState(JSON.parse(localStorage.getItem('sidebarDataLL')) || {
        searchTerm: '',
        category: '',
        page: 1
    });
    const [checkradio, setCheckedRadio] = useState(JSON.parse(localStorage.getItem('checkradioLL')) || '');
    const location = useLocation();
    const postJob = [];
    const statusPost = "succeeded";
    const getUser = [];

    const options = {
        replace: ({ attribs, children, name }) => {
            if (!attribs) {
                return;
            }
            if (name === 'ul') {
                return (
                    <ul className='list-disc pl-5'>
                        {domToReact(children, options)}
                    </ul>
                )
            }
            if (name === 'li') {
                return (
                    <li>
                        {domToReact(children, options)}
                    </li>
                )
            }
        }
    };


    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm') || '';
        const categoryFromUrl = urlParams.get('categories');
        const pageFromUrl = urlParams.get('page');

        if (!categoryFromUrl) {
            setCheckedRadio('');
        }
        if (pageFromUrl) {
            setItemOffset(itemsPerPage * (Number(pageFromUrl) - 1));
        }

        setSidebarData({
            ...sidebarData,
            searchTerm: searchTermFromUrl,
            category: categoryFromUrl ? checkradio : '',
            page: pageFromUrl
        });


    }, [location.search]);


    useEffect(() => {
        localStorage.setItem('sidebarDataLL', JSON.stringify(sidebarData));
    }, [sidebarData]);

    const handlePageChange = (newOffset) => {
        setItemOffset(newOffset);

    };


    const handleHeart = async (postId) => {

    }

    return (
        <Default>
            <section id='section-header' className=' bg-blue-900 text-gray-200 relative'>
                <div className='pl-[9em] py-16'>
                    <Breadcrumb text1={'Trang chủ'} text2={'Cơ hội nghề nghiệp'} />
                    <h2 className='text-[2em] font-semibold leading-7 py-3'>Cơ hội nghề nghiệp</h2>
                    <p className='text-[0.8em] font-thin'>Tại G1CV, chúng tôi không chỉ cung cấp công việc, chúng tôi tạo ra cơ hội nghề nghiệp</p>
                </div>
            </section>
            <section id='list-feature-jobs' className='grid lg:grid-cols-3 gap-9 sm:w-[509px] lg:w-[1166px] mx-auto mt-5 mb-5'>

                <FilterSearchJobOpportunities checkradio={checkradio} setCheckedRadio={setCheckedRadio} itemOffset={itemOffset} />
                <div className='col-span-2 grid lg:grid-cols-2 gap-4'>

                    {
                        statusPost === 'failed' && filteredPosts.length === 0 && (
                            <p className='text-gray-400 text-xl'>Không tìm thấy bài viết nào.</p>
                        )
                    }
                    {
                        statusPost === 'pending' && (
                            <PostItemSkeleton card={10} />
                        )
                    }
                    {
                        statusPost === 'succeeded' && filteredPosts &&
                            filteredPosts.length !== 0 ?
                            (
                                filteredPosts
                                    ?.map((post, index) => (
                                        <div className='flex items-stretch' key={index}>
                                            <div className=' bg-gray-200 shadow-md rounded p-3'>
                                                <div className='flex justify-between items-center'>
                                                    <h2 className='text-[0.9em] text-blue-900 font-bold py-2'>{post?.companyId.name}</h2>

                                                </div>
                                                <p className='tracking-wide mt-3'>{post?.title}</p>

                                                <div className='py-4 border-b border-b-gray-700'>
                                                    <h2 className='text-[1.1em] font-semibold text-black mb-2'>Yêu cầu:</h2>
                                                    {/* {parse(post?.candidateReq, options)} */}
                                                    {post?.candidateReq}
                                                </div>
                                                <div className='pt-3 pb-1'>
                                                    <p>Hạn ứng tuyển:  {moment(post?.deadline).format('MM/DD/YYYY')}</p>
                                                </div>
                                                <div className='pt-1 pb-1'>
                                                    <p>{post?.location}</p>
                                                </div>
                                                <div className='pt-2 pb-1 flex justify-evenly items-center'>
                                                    <Link to={`/co-hoi-nghe-nghiep/post_id=${post?._id}`} className='px-10 py-3 bg-blue-950 text-white rounded-md mr-4 font-thin hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400'>Chi tiết</Link>
                                                    <Link className='px-10 py-3 bg-orange-600 text-white rounded-md mr-4 font-thin hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-400'>Ứng tuyển</Link>
                                                    <div onClick={() => handleHeart(post._id)}>
                                                        <FaHeart size={20}
                                                            color={getUser?.savedPost?.find(p => post._id === p) ? 'red' : ''}
                                                            // color={likePost ? 'red' : ''} 
                                                            className='cursor-pointer transition duration-500 ease-in-out hover:text-red-500 transform hover:-translate-y-1 hover:scale-100' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )).slice(itemOffset, itemOffset + itemsPerPage)
                            )
                            :
                            <p className='text-gray-400 text-xl'>Không tìm thấy bài viết nào.</p>
                    }
                </div>
                <div className='row-span-4 col-span-2'>
                    <UsePagination listItem={filteredPosts} itemsPerPage={itemsPerPage} itemOffset={itemOffset} setItemOffset={handlePageChange} />
                </div>
            </section>


        </Default >
    );
}

export default memo(JobOpportunities);