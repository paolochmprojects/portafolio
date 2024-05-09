'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    name: string,
    url: string,
    close: () => void
}

const NavLink = ({ name, url, close }: Props) => {

    const router = usePathname()
    console.log(router)
    return (
        <Link 
        onClick={close}
        className='hover:text-red-600 active:text-red-600 text-sm font-medium transition-all duration-500 hover:scale-110'
        href={url}>{name}</Link>
    )
}

export default NavLink