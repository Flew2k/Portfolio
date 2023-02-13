import React, { ReactNode } from 'react'

type ButtonProperties = {
    type?: keyof typeof ButtonTypes;
    classNames?: string;
    onClick?: () => void ; 
    children?: any;
}

const ButtonTypes = {
    primary: 'bg-primary text-white px-[40px] py-[15px] rounded-[50px]',
    second: 'bg-white text-primary px-[40px] py-[15px] rounded-[50px]',
    primaryL: 'bg-primary text-white px-[50px] py-[20px] rounded-[55px]',
    secondL: 'bg-white text-primary px-[50px] py-[20px] rounded-[55px]'
};

export const Button = (props: ButtonProperties) => {
    const { type = "primary", classNames, onClick, children } = props;
    const className = `w-max h-[66px] cursor-pointer flex flex-row items-center justify-center text-bt font-semibold ${ButtonTypes[type]} ${classNames}`;
    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    )
}
