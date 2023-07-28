import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

export default function Overview() {
    return (
        <>
            <h2>Overview - Today</h2>
            <section>
                <article className='bg-slate-200 p-5 rounded shadow shadow-slate-50 '>
                    <ul className='flex items-center justify-between mb-5'>
                        <li className='text-slate-600 font-bold '>Page Views</li>
                        <li>
                            <image src={facebook} alt='Facebook' />
                        </li>
                    </ul>
                    <ul className='flex items-center justify-between'>
                        <li className='font-bold text-slate-800 text-4xl'>87</li>
                        <li className='flex items-center text-emerald-600 font-bold'>
                            <image src={up} alt='' />
                            3%
                        </li>
                    </ul>



                </article>
            </section>
        </>
    )
}
