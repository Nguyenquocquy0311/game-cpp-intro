import Link from 'next/link';
import React from 'react';
import { FaGamepad } from 'react-icons/fa';
import { FaAppStore, FaGithub } from 'react-icons/fa6';

const Download: React.FC = () => {
    return (
        <section
            id="download"
            className="py-20 container"
        >
            <div className='bg-cover text-slate-700 bg-smart-banner-bg-gradient rounded-md flex justify-between items-center px-10 py-8'>
                <div className='flex-1 text-blue-900'>
                    <h2 className='font-bold text-xl mb-3'>Tải game &quot;Conqueror&rsquo;s Journey&quot;</h2>
                    <p className='font-normal w-1/2'>Hãy thử ứng dụng của tôi để tận hưởng trải nghiệm người dùng tốt hơn và hiệu suất tuyệt vời</p>
                </div>
                <div className='flex flex-col'>
                    <Link href='' target='_blank' className='px-5 py-2 my-2 flex bg-black text-white rounded-lg hover:bg-slate-800'>
                        <FaGamepad size={24} className='mx-2'/>
                        Nocode
                    </Link>
                    <Link href='https://github.com/Nguyenquocquy0311/game_cpp' target='_blank' className='px-5 py-2 my-2 flex bg-black text-white rounded-lg hover:bg-slate-800'>
                        <FaGithub size={24} className='mx-2' />
                        Code
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Download;
