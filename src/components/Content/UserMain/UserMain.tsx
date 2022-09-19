import React, {FC} from 'react';
import s from "./UserMain.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {IMainUser} from "../../../redux/profile_reducer";
import avatar from '../../../assets/852.jpg'

interface IUser {
    profile: IMainUser | null
}

export const MainUser: FC<IUser> = ({profile}) => {

    return (
        <>
            {!profile
                ? <Preloader/>
                : <div className={s.userInfo}>
                    <div className={s.avatar}>
                        {profile.photos.large ? <img src={profile.photos.large} alt="Photo"/> :
                            <img src={avatar} alt=""/>}
                    </div>
                    <div className={s.userData}>
                        <div>Name: {profile.fullName}</div>
                        <div>About me: {profile.aboutMe}</div>
                        <div>Looking for a Job: {profile.lookingForAJob}</div>
                    </div>
                </div>}

        </>
    );
};

