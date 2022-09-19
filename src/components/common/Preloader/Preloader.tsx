import React from 'react';
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div><img src="https://media2.giphy.com/media/3y0oCOkdKKRi0/giphy.gif?cid=ecf05e47o0s6rhxeyyrw4lopwl8nn0ogy1274fcmo0hj1yyr&rid=giphy.gif&ct=g"
                  className={s.preloader} alt=""/></div>
    );
};