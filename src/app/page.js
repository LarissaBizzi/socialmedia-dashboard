import React from 'react'
import Header from '@/components/Header'
import Followers from '@/components/Followers'
import Overview from '@/components/Overview'


export default function Home() {
  return (
    <>
      <section className='p-8 max-w-7xl mx-auto dark:bg-slate-900 h-full lg:h-screen flex flex-col items-center justify-center'>
        <Header />
        <Followers />
        <Overview />
      </section>
    </>
  )
}
