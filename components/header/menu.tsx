'use client'
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useCartService from '../../lib/hooks/usecartstore'

const Menu = () => {
  const {items} = useCartService()
  const [mounted , setMounted] = useState(false)
  useEffect(()=>{
    setMounted(true)
  }, [])
  return (
    <div>
      <ul className='flex items-stretch'>
          <li>
              <Link className='btn btn-ghost rounded-btn' href='/cart'>
              Cart
              {/* if i am in the client side */}
              {mounted && items.length != 0 && (
                <div className='border border-red-600 bg-red-800'>
                  {items.reduce((a,c)=> a+c.qty,0)}{' '}
                </div>
              )}
              </Link>
          
          </li>
              <li>
                <button className='btn btn-ghost ml-12 ' type='button'> SignIn </button>
              </li>
      </ul>
    </div>
  )
}

export default Menu
