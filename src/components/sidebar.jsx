import React from 'react'
import './sidebar.css'
import { Avatar } from '@material-ui/core'
import firebase from 'firebase'
import firebaseConfig from '../firebase'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import PeopleIcon from '@material-ui/icons/People';
import MessageIcon from '@material-ui/icons/Message';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div>
                {
                    firebase.auth().currentUser!=null?
                    <>
                    <Avatar src={firebase.auth().currentUser.photoURL}/>
                    <p>{firebase.auth().currentUser.displayName}</p>
                    </>
                    :
                    <Avatar/>
                }
            </div>
            <div>
                <LocalHospitalIcon/>
                COVID-19 Information Center
            </div>
            <div>
                <FlagIcon/>
                Pages
            </div>
            <div>
                <PeopleIcon/>
                Friends
            </div>
            <div>
                <MessageIcon/>
                Messanger
            </div>
            <div>
                <StorefrontIcon/>
                Marketplace
            </div>
            <div>
                <VideoLibraryIcon/>
                Videos
            </div>
            <div>
                <ArrowDropDownIcon/>
                Marketplace
            </div>
        </div>
    )
}
