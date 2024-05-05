'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface Props {
    name: string,
    url: string,
}

const NavLink = ({ name, url }: Props) => {

    const router = usePathname()
    console.log(router)
    return (
        <Link 
        className='hover:text-red-600 active:text-red-600 text-sm font-medium transition-all duration-500 hover:scale-110'
        href={url}>{name}</Link>
    )
}

export default NavLink