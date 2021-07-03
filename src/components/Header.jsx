import React from 'react';
import './Header.css';
import { useRef } from 'react';
import firebase from 'firebase'// eslint-disable-next-line
import firebaseConfig from '../firebase';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontIcon from '@material-ui/icons/Storefront';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'; 
import FlagIcon from '@material-ui/icons/Flag';// eslint-disable-next-line
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import { Avatar } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';// eslint-disable-next-line
import { NotificationsRounded } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
export default function Header() {
    const Nav_Ref = useRef();
    return (
        <div className='nav-bar'>
            <div className="input-and-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
                <div>
                    
                    <SearchIcon/>
                    <input type="text" placeholder='Search Facebook'/>
                </div>
            </div>
            <div className="buttons">
                <button id='home-button'>
                   <HomeIcon className='icons'  />
                </button>
                <button>
                    <FlagIcon className='icons'/>
                </button>
                <button>
                    <SubscriptionsIcon className='icons' />
                </button>
                <button>
                    <StorefrontIcon className='icons' />
                </button>
                <button>
                    <SupervisedUserCircleIcon className='icons' />

                </button>
            </div>
            <div className="user-div" ref={Nav_Ref}>
                {
                    firebase.auth().currentUser!=null?
                    <span>
                <Avatar src={firebase.auth().currentUser.photoURL}/>
                <p>{firebase.auth().currentUser.displayName}</p>
                    </span>
                    :
                    <span>
                        <Avatar/>
                    </span>
                }
                <button>

                <AddIcon className='right-buttons'/>
                </button>
                <br />
                <button>
                <ModeCommentIcon className='right-buttons'/>
                </button>
                <br />
                <button>
                <NotificationsActiveIcon className='right-buttons'/>
                </button>
                <br />
                <button>
                <ArrowDropDownIcon className='right-buttons'/>
                </button>
                <br />
                <button id='close-button' onClick={()=>{
                    Nav_Ref.current.style.transform = 'translate(300px)'
                }}>
                    <MenuIcon/>
                </button>
            </div>
                <button id="open-button" onClick={()=>{
                    Nav_Ref.current.style.transform = 'translate(00px)'
                }}>
                    <MenuIcon/>
                </button>
        </div>

    )
}
