import React from 'react'
import './Login.css';
import { useHistory } from 'react-router';
import firebase from 'firebase';//eslint-disable-next-line
import firebaseConfig from '../firebase';
function Login() {
    const history = useHistory();
    const Google = new firebase.auth.GoogleAuthProvider();
    return (
        <div>
            <div className='image-container'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" draggable={false} alt="" />
            
            </div>
            <h1>facebook</h1>
            <button id='sign-in-button'onClick={()=>{
                firebase.auth().signInWithPopup(Google).then((user)=>{
                    console.log(user.user)
                    history.push('/home')
                }).catch((err)=>{
                    alert(err.message)
                })
            }}>Sign In</button>
        </div>
    )
}

export default Login
