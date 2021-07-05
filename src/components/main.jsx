import React from 'react'
import Header from './Header'
import SideBar from './sidebar'
import Stories from './Stories'
import Post from './Posts';
import './main.css';
function Main() {
    return (
        <div>
            <Header/>
            <SideBar/>
            <div className='scrollable'>
            <Stories/>
            <Post/>
            </div>
        </div>
    )
}

export default Main
