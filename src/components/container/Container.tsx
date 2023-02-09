import React, { ReactNode } from 'react'

type ContainerType = {
    height?: string;
    children?: ReactNode;
}

export const Container = (props: ContainerType) => {
    const { height = "max-h-screen", children } = props;
    return (
        <div className={`flex h-screen w-auto bg-black flex-col relative justify-center items-center overflow-hidden`}>
            <div className='absolute px-6 w-full h-full bg-[#051A16]'>
                {children}
            </div>
        </div>
    )
}
