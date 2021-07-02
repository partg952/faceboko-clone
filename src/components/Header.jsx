import React from 'react';
import './Header.css';
import firebase from 'firebase'
import firebaseConfig from '../firebase';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontIcon from '@material-ui/icons/Storefront';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'; 
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import { Avatar } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { NotificationsRounded } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
export default function Header() {
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
            <div className="user-div">
                {
                    firebase.auth().currentUser!=null?
                    <>
                <Avatar src={firebase.auth().currentUser.photoURL}/>
                <p>{firebase.auth().currentUser.displayName}</p>
                    </>:
                    <Avatar/>
                }
                <AddIcon className='right-icons'/>
                <ModeCommentIcon className='right-icons'/>
                <NotificationsActiveIcon className='right-icons'/>
                <ArrowDropDownIcon className='right-icons'/>
            </div>
        </div>

    )
}
