import React from 'react'
import Header from '@/components/Header'
import Followers from '@/components/Followers'
import Overview from '@/components/Overview'


export default function Home() {
  return (
    <>
      <section className='p-5 container mx-auto'>
        <Header />
        <Followers />
        <Overview />
      </section>
    </>
  )
}
