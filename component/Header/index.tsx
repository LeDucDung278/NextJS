import Link from 'next/link'
import React from 'react'
import style from './header.module.scss';

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <div className={style.demo}>
            Le Duc Dung
        </div>
        <ul className='menu'>
            <li><Link href="/"><a className='menu__item'>Home page</a></Link></li>
            <li><Link href="/"><a className='menu__item'>About</a></Link></li>
            <li><Link href="/product"><a className='menu__item'>Product</a></Link></li>
            <li><Link href="/"><a className='menu__item'>Contact</a></Link></li>
        </ul>
    </div>
  )
}

export default Header