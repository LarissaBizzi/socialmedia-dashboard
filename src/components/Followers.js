import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

export default function Followers() {
    return (
        <>
            <section className='py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50'>
                    <ul className='flex items-center justify-center text-center'>
                        <li><image src={facebook} alt='Facebook' className='mr-2' /></li>
                        <li className='text-sm text-slate-600' font-bold>
                            @nathanf
                        </li>
                    </ul>

                    <h2 className='text-5xl font-bold text-slate-800 text-center my-5'>
                        1987 <span className='text-sm block text-slate-600 font-normal uppercase tracking-widest'>followers</span></h2>
                    <p className='text-center text-emerald-600 flex items-center justify-center text-sm font-bold'>
                        <image src={up} alt='' className='mr-2 w-3' />
                        12 today
                    </p>
                </article>

                <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50'>
                    <ul className='flex items-center justify-center text-center'>
                        <li><image src={twitter} alt='Twitter' className='mr-2' /></li>
                        <li className='text-sm text-slate-600' font-bold>
                            @nathanf
                        </li>
                    </ul>

                    <h2 className='text-5xl font-bold text-slate-800 text-center my-5'>
                        1044 <span className='text-sm block text-slate-600 font-normal uppercase tracking-widest'>followers</span></h2>
                    <p className='text-center text-emerald-600 flex items-center justify-center text-sm font-bold'>
                        <image src={up} alt='' className='mr-2 w-3' />
                        99 today
                    </p>
                </article>

                <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50'>
                    <ul className='flex items-center justify-center text-center'>
                        <li><image src={instagram} alt='Instagram' className='mr-2' /></li>
                        <li className='text-sm text-slate-600' font-bold>
                            @realnathanf
                        </li>
                    </ul>

                    <h2 className='text-5xl font-bold text-slate-800 text-center my-5'>
                        11k <span className='text-sm block text-slate-600 font-normal uppercase tracking-widest'>followers</span></h2>
                    <p className='text-center text-emerald-600 flex items-center justify-center text-sm font-bold'>
                        <image src={up} alt='' className='mr-2 w-3' />
                        1099 today
                    </p>
                </article>

                <article className='bg-slate-200 p-5 rounded-lg shadow shadow-slate-50'>
                    <ul className='flex items-center justify-center text-center'>
                        <li><image src={youtube} alt='Youtube' className='mr-2' /></li>
                        <li className='text-sm text-slate-600' font-bold>
                            Nathan F.
                        </li>
                    </ul>

                    <h2 className='text-5xl font-bold text-slate-800 text-center my-5'>
                        8239 <span className='text-sm block text-slate-600 font-normal uppercase tracking-widest'>subscribers</span></h2>
                    <p className='text-center text-rose-600 flex items-center justify-center text-sm font-bold'>
                        <image src={down} alt='' className='mr-2 w-3' />
                        144 today
                    </p>
                </article>

            </section>
        </>
    )
}
