import React from 'react';
import DashboardCustomer from '../Layouts/DashboardCustomer';
import HeaderV2 from '../Util/Header/HeaderV2';
import { WiTime12 } from "react-icons/wi";
import { CiSearch } from "react-icons/ci";

function CompanyFollowed(props) {
    return (
        <DashboardCustomer>
            <HeaderV2 hrefType={'Công ty đang theo dõi'} />
            <main>
                <div className='info-pageCurrent pt-16 pl-10'>
                    <h2 className="text-[2em] font-bold leading-7 text-gray-700">Công ty đang theo dõi</h2>
                    <p class="mt-3 text-[0.8em] leading-6 text-gray-600 w-[27%]">Theo dõi các công ty để nhận được tin ứng tuyển mới nhất từ họ.</p>
                </div>
                <section id='list-feature-jobs' className='grid lg:grid-cols-3  gap-9 sm:w-[509px] lg:w-[1166px] mx-auto mt-5 mb-5'>
                    {
                        (function func() {
                            const items = [];
                            for (let index = 0; index < 6; index++) {
                                items.push(
                                    <div className=''>
                                        <div className=' bg-gray-200 shadow-md rounded p-3'>
                                            <div className='flex justify-between items-center'>
                                                <h2 className='text-[0.9em] text-blue-900 font-bold py-2'>Công ty cổ phần TMDV HGD </h2>
                                            </div>
                                            <p className='tracking-wide mt-3'>SHN Hưng Yên tuyển dụng vị trí giám đốc chi nhánh</p>

                                            <div className='py-4 border-b border-b-gray-700'>
                                                <h2 className='text-[1.1em] font-semibold text-black mb-2'>Yêu cầu:</h2>
                                                <ul className='list-disc pl-5'>
                                                    <li>6 năm kinh nghiệm vị trí quản lý</li>
                                                    <li>Có bằng cử nhân kinh tế</li>
                                                    <li>Thông thạo tiếng anh</li>
                                                </ul>
                                            </div>
                                            <div className='pt-3 pb-1'>
                                                <p>Hạn ứng tuyển: 30/12/2023</p>
                                            </div>
                                            <div className='pt-1 pb-1'>
                                                <p>Địa điểm: Hưng Yên</p>
                                            </div>
                                            <div className='pt-2 pb-1'>
                                                <button className='px-4 py-2 bg-blue-950 text-white rounded-md mr-4 font-thin'>Cơ hội việc làm</button>
                                                <button>Bỏ lưu</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            return items;
                        })()
                    }
                    <div className="flex items-center gap-4">
                        <button disabled
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                aria-hidden="true" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                            </svg>
                            Previous
                        </button>
                        <div className="flex items-center gap-2">
                            <button
                                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-orange-600 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    1
                                </span>
                            </button>
                            <button
                                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    2
                                </span>
                            </button>
                            <button
                                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    3
                                </span>
                            </button>
                            <button
                                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    4
                                </span>
                            </button>
                            <button
                                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    5
                                </span>
                            </button>
                        </div>
                        <button
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                aria-hidden="true" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                            </svg>
                        </button>
                    </div>
                </section>
            </main>
        </DashboardCustomer>
    );
}

export default CompanyFollowed;