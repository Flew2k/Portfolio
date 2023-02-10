/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'developer': "url('/assets/Developer.svg')"
      },
      screens: {
        sm: '675px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: [
        {
          Poppins: ['Poppins', 'sans-serif'],
        }
      ],
      fontSize: {
        tt: ['66px', '84px'],
        tn: ['48px', '72px'],
        pd: ['42px', '44px'],
        h1: ['18px', '24px'],
        h2: ['16px', '24px'],
        sh: ['12px', '16px'],
        c: ['12px', '16px'],
        bl: ['18px', '26px'],
        bm: ['16px', '24px'],
        bs: ['14px', '20px'],
        btl: ['18px', '24px'],
        btm: ['16px', '22px'],
        bts: ['14px', '20px'],
        dxl: ['42px', '44px'],
        dl: ['28px', '32px'],
        dm: ['26px', '32px'],
        ds: ['20px', '28px'],
        mh1: ['17px', '22px'],
        mh2: ['15px', '22px'],
        msh: ['13px', '16px'],
        mc: ['13px', '16px'],
        mbl: ['18px', '26px'],
        mbm: ['16px', '24px'],
        mbs: ['14px', '20px'],
        mbtl: ['18px', '24px'],
        mbtm: ['16px', '22px'],
        mbts: ['14px', '20px'],
        mdxl: ['27px', '36px'],
        mdl: ['24px', '28px'],
        mdm: ['21px', '28px'],
        mds: ['16px', '24px'],
      },
    },
  },
  plugins: [],
}