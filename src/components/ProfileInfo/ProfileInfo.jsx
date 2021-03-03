import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.hImage}>
            </div>
            <div className={s.faceStat}>
                <img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" alt="me"></img>
                <nav>
                    <ul>
                        <li><h3>Nizami A.</h3></li>
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