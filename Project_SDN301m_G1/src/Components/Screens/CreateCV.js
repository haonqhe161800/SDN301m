import React, { useState } from 'react';
import DashboardCustomer from '../Layouts/DashboardCustomer';
import HeaderV2 from '../Util/Header/HeaderV2';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormComponent from './FormComponent';

function CreateCv(props) {
    
    return (
        <DashboardCustomer>
            <HeaderV2 hrefType={'Hồ sơ của tôi'} />
            <main className='pb-5'>
                <div className='info-pageCurrent pt-14 pb-10 ml-24'>
                    <h2 className="text-[2em] font-semibold leading-7 text-gray-700">Tạo hồ sơ mới</h2>
                    <p class="mt-3 text-[0.8em] leading-6 text-gray-600 w-[27%]">Tại PhuThien, chúng tôi không chỉ cung cấp công việc, chúng tôi tạo ra cơ hội nghề nghiệp.</p>
                </div>
                
                <div className='p-20'>
                    <FormComponent></FormComponent>
                </div>
            </main>
        </DashboardCustomer>
    );
}

export default CreateCv;