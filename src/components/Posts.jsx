import { Avatar } from '@material-ui/core';
import React from 'react';
import { useState,useEffect } from 'react';
import './posts.css';
import firebase from 'firebase';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';
import FlipMove from 'react-flip-move';
export default function Posts() {
    const [data,setData] = useState([]);
    console.log(data)
    const post_ref = useRef();
    const image_ref = useRef();
    function UploadData(){
        var date = new Date().toString();
        console.log(date)
        const name = uuidv4();
        if(image_ref.current.value.length!=0 && firebase.auth().currentUser!=null){
            firebase.database().ref('/').child(name).set({
                'text':post_ref.current.value,
                'image':image_ref.current.value,
                'user_image':firebase.auth().currentUser.photoURL,
                'user_name':firebase.auth().currentUser.displayName,
                'date':date
            })
        }
        else if(firebase.auth().currentUser==null && image_ref.current.value.length==0){
            firebase.database().ref('/').child(name).set({
                'text':post_ref.current.value,
                'date':date,
                'user_name':'Unknown User',
                'user_image':''
            }) 
        }
        else if(firebase.auth().currentUser!=null){
            firebase.database().ref('/').child(name).set({
                'text':post_ref.current.value,
                'user_image':firebase.auth().currentUser.photoURL,
                'user_name':firebase.auth().currentUser.displayName,
                'date':date
            })
        }
        
    }
    useEffect(() => {
        firebase.database().ref().child('/').on('value',(snapshot,err)=>{
            setData([])
            console.log(snapshot.val())
            snapshot.forEach((items)=>{
                console.log(items.val())
                setData(prev=>[...prev,items.val()])
            })
        })
    }, []);
    return (
        <div id='posts'>
           <div id='fixed'>
                <span>
                    {
                        firebase.auth().currentUser!=null?
                        <>
                        <Avatar src={firebase.auth().currentUser.photoURL}/>
                        <input type="text" placeholder={`Whats on Your Mind,${firebase.auth().currentUser.displayName}?`} id='post-input' ref={post_ref} onKeyPress={(e)=>{
                            if(e.key === 'Enter'){
                                UploadData();
                                // console.log('hello world')
                            }
                        }}/>
                        <input type='text' placeholder='Image Url (optional)' id='image-url' ref={image_ref}/>
                        </>
                        :
                        <>
                        <Avatar/>
                        <input type="text" placeholder='Whats On Your Mind?' id='post-input' ref={post_ref}/>
                        <input type='text' placeholder='Image Url (optional)' id='image-url' ref={image_ref}/>
                        </>

                    }
                    
                </span>
                <hr />
                <span id='emoji-span'>
                    <div>
                    <VideocamIcon style={{color:'red'}}/>
                    <p>Live Video</p>
                    </div>
                    <div>
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <p>Photo/Video</p>
                    </div>
                    <div>
                    <EmojiEmotionsIcon style={{color:'yellow'}}/>
                    <p>Feeling/Activity</p>
                    </div>
                </span>
           </div> 
           <FlipMove enterAnimation="elevator" leaveAnimation="elevator">

                    {
                        data.map(items=>{
                            return(
                                <div className='posts'>
                                    <span>
                                        {
                                            items.user_image.length!=0?
                                            <Avatar src={items.user_image}/>
                                            :
                                            <Avatar/>
                                        }
                                        <div id='user-details'>
                                            <p>{items.user_name}</p>
                                            <p>{items.date}</p>
                                        </div>
                                    </span>
                                    <hr />
                                    <div>
                                    <p>{items.text}</p>
                                    {
                                        items.image !=null?
                                        <img src={items.image} alt="" id='post-image'/>
                                        :
                                        <></>
                                    }
                                    </div>

                                </div>
                            )
                        })
                    }
                </FlipMove>
        </div>
    )
}
