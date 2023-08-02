'use client'
import { useState } from 'react'

export default function Header() {
    const [darkMode, setdarkMode] = useState(true)

    const toggleTheme = () => {
        setdarkMode(!darkMode)

        const body = document.querySelector("body")

        if (darkMode) {
            body.classList.add("dark")
        } else {
            body.classList.remove("dark")
        }
    }
    return (
        <>
            <header className='relative z-10 max-w-7xl mt-auto flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-2xl text-slate-800 dark:text-white'>Social Media Dashboard</h1>
                    <p className='font-bold text-slate-600 dark:text-slate-400'>Total Followers: 23.004</p>
                </div>
                <div className="toggle">
                    <label
                        htmlFor="checkbox"
                        className="font-bold text-slate-600 text-sm dark:text-slate-400 cursor-pointer">Dark Mode
                    </label>
                    <input type="checkbox" className="checkbox" id="checkbox" checked={!darkMode} onChange={toggleTheme} />
                    <label htmlFor="checkbox" className="label">
                        <div className="ball"></div>
                    </label>
                </div>
            </header>
        </>
    )
}
