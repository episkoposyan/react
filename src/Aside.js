import React from 'react';
import aside from './aside.module.css';

const Aside = () => {
    return (
        <aside>
            <ul>
                <li className={aside.item}>Home</li>
                <li className={aside.item}>about</li>
                <li className={aside.item}>contact</li>
                <li className={aside.item}>page 1</li>
                <li className={aside.item}>page 2</li>
            </ul>
        </aside>
    );
};

export default Aside;