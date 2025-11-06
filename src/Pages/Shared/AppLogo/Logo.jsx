import React from 'react';
import logoImg from '../../../assets/Illustrations/Icon.png'

const Logo = () => {
    return (
        <div className='flex justify-center items-center gap-3'>
            <img src={logoImg} alt="" />
            <h3 className='text-3xl font-semibold'>Positivus</h3>
        </div>
    );
};

export default Logo;