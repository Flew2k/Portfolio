import React, { ReactNode } from 'react'

type TextProps = {
    variant?: keyof typeof TextType;
    color?: keyof typeof ColorType;
    className?: string;
    children?: string | ReactNode;
}

export const TextType = {
    tt: 'font-semibold sm:text-tt text-tt',
    tn: 'font-normal sm:text-tn text-tn',
    pd: 'font-semibold sm:text-4xl text-4xl',
    h1: 'font-semibold sm:text-h1 text-mh1',
    h2: 'font-semibold sm:text-h2 text-mh2',
    sh: 'font-semibold sm:text-sh text-msh',
    c: 'font-normal sm:text-c text-mc',
    bl: 'font-normal sm:text-bl text-mbl',
    bm: 'font-normal sm:text-bm text-mbm',
    bs: 'font-normal sm:text-bs text-mbs',
    btl: 'font-semibold sm:text-btl text-mbtl',
    btm: 'font-semibold sm:text-btm text-mbtm',
    bts: 'font-semibold sm:text-bts text-mbts',
    dxl: 'font-semibold sm:text-dxl text-mdxl',
    dl: 'font-semibold sm:text-dl text-mdl',
    dm: 'font-semibold sm:text-dm text-mdm',
    ds: 'font-semibold sm:text-ds text-mds',
}

const ColorType = {
    white: 'text-white',
    black: 'text-black',
    primary: 'text-[#F1875E]'
}

export const Text = (props: TextProps) => {
    const { variant = "bm", color = "black", className, children, ...other } = props;
    const localClassName = `font-[Poppins] w-fit ${TextType[variant]} ${ColorType[color]} ${className}`
    return (
        <p className={localClassName} {...other}>
            {children}
        </p>
    )
}
