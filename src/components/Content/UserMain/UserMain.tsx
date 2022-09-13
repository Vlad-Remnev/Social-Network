import React from 'react';
import s from "./UserMain.module.css";

export const MainUser = () => {
    return (
        <>
            <div className={s.userInfo}>
                <div className={s.avatar}>
                    <img
                        src="./852.jpg"
                        alt=""/>
                </div>
                <div className={s.userData}>
                    <div>Name: Vladislav Remnev</div>
                    <div>Date of Birth: 24.08.1991</div>
                    <div>City: Gumry, Armenia</div>
                    <div>Program Skills: HTML, CSS, JS, React</div>
                </div>
            </div>
        </>
    );
};

