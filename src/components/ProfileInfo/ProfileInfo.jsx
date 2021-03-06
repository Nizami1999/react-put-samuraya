import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            <div className={s.hImage}>
            </div>
            <div className={s.faceStat}>
                <img src={props.profile.photos.large ? props.profile.photos.large : 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'} alt="me"></img>
                <nav>
                    <ul>
                        <li><h3>{props.profile.fullName}</h3></li>
                        <li>Date of Birth: 10 September</li>
                        <li>City: Baku</li>
                        <li>Education: ASOIU</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ProfileInfo