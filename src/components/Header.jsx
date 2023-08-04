import React from 'react';
import logo from '../images/logo.gif'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} alt className='logo-img' />
        </div>

        <div className='category-Wrapper'>
            <div className='cat-title'>Action </div>
            <div className='cat-title'>Romance </div>
            <div className='cat-title'>Comedy </div>
        </div>
        <div className='category-Wrapper'>
            <div className='cat-title'>Horror </div>
            <div className='cat-title'>Fantasy </div>
            <div className='cat-title'>Adventure </div>
        </div>
        <div className='category-Wrapper'>
            <div className='cat-title'>Drama </div>
            <div className='cat-title'>Science Fiction </div>
            <div className='cat-title'>western</div>
        </div>  
        <button>Sign In</button>


    </div>

  )
}

export default Header
