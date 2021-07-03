import React from 'react'
import './sidebar.css'
import { Avatar } from '@material-ui/core'
import firebase from 'firebase'// eslint-disable-next-line
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
                <LocalHospitalIcon />
                <p>COVID-19 Information Center</p>
            </div>
            <div>
                <FlagIcon/>
                <p>Pages</p>
            </div>
            <div>
                <PeopleIcon/>
                <p>Friends</p>
            </div>
            <div>
                <MessageIcon/>
                <p>Messanger</p>
            </div>
            <div>
                <StorefrontIcon/>
                <p>Marketplace</p>
            </div>
            <div>
                <VideoLibraryIcon/>
                <p>Videos</p>
            </div>
            <div>
                <ArrowDropDownIcon/>
                <p>Marketplace</p>
            </div>
        </div>
    )
}
