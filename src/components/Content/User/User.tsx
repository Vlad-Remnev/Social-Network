import React from 'react';
import s from "./User.module.css";

export const User = () => {
    return (
        <div className={s.userInfo}>
            <div className={s.avatar}>
                <img
                    src="http://cdn.shopify.com/s/files/1/1357/6027/products/Gangstar_Dog_Final_Render_1_Compressed.jpg?v=1647861503"
                    alt=""/>
            </div>
            <div className={s.userData}>
                <div>Name: Vladislav Remnev</div>
                <div>Date of Birth: 24.08.1991</div>
                <div>City: Gumry, Armenia</div>
                <div>Program Skills: HTML, CSS, JS, React</div>
            </div>
        </div>
    );
};

