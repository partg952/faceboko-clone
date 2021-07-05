import React from 'react'
import './Stories.css';
export default function Stories() {
    return (
        <div className='stories'>
            <div>
            <img src="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1619769761" alt="" id='profile-pic1'/>
            <img src="https://t3.ftcdn.net/jpg/03/74/41/40/360_F_374414072_jNUa02RudGjOdFUHYMes3zNxGMJDAi1k.jpg" alt="" />
            <p className='stories-title'>Jeff Bezos</p>
            </div>

            <div>
                <img src="https://www.filepicker.io/api/file/9GCYH9YQnyqu4Ymwmzu9" alt="" id='profile-pic2'/>
                <img src="https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000" alt="" />
                <p className='stories-title'>Rafeh Qazi</p>
            </div>
            <div>
                <img src="https://venturebeat.com/wp-content/uploads/2014/07/notch.jpg?fit=1225%2C1035&strip=all" alt="" id='profile-pic3'/>
                <img src="https://img.redbull.com/images/c_fill,w_1500,h_1000,g_auto,f_auto,q_auto/redbullcom/2020/4/28/bjoyslzjb3uxqyg82uz2/minecraft" alt="" />
                <p className='stories-title'>Notch</p>
            </div>
            <div>
                <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-silicon-valley-kumail-nanjiani.jpg" alt="" id='profile-pic4' />
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?bEhcYQAShJnLf0Mtu4JYq8YzICfhz2rB&size=770:433" alt="" />
                <p className='stories-title'>Dinesh</p>
            </div>
        </div>
    )
}
