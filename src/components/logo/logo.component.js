import React from 'react';
// import styles from './logo.module.css';

const Logo = (props) => {
    return (
        <React.Fragment>
            {/* <h1 className={style.heading}>
                THE IN THE OUT
            </h1> */}
            <svg 
                id="tito-logo" 
                data-name="tito-logo-layer" 
                viewBox="0 0 91.97 8.86" 
                role="img" aria-labelledby="title"
                style={{fill: props.fill}}>
                <title id="title">THE IN THE OUT</title>
                <g role="presentation">
                    <path d="M2.55,2.21H0V0H7.69V2.21H5.13V8.58H2.55Z" transform="translate(0 0.14)"/>
                    <path d="M8.34,0h2.59V3.23h2.48V0H16V8.58H13.41V5.42H10.93V8.58H8.34Z" transform="translate(0 0.14)"/>
                    <path d="M17.26,0H23V2.06H19.85V3.24h2.5v2h-2.5V6.51h3.29V8.58H17.26Z" transform="translate(0 0.14)"/>
                    <path d="M26.28,0h2.59V8.58H26.28Z" transform="translate(0 0.14)"/>
                    <path d="M30.12,0h2.47L34.7,3.51a7.88,7.88,0,0,1,.61,1.31h0a12.69,12.69,0,0,1-.1-1.31V0h2.51V8.58H35.25L33.13,4.89a9.86,9.86,0,0,1-.61-1.29h-.05a12.08,12.08,0,0,1,.1,1.29V8.58H30.12Z" transform="translate(0 0.14)"/>
                    <path d="M42.9,2.21H40.34V0H48V2.21H45.48V8.58H42.9Z" transform="translate(0 0.14)"/>
                    <path d="M48.68,0h2.59V3.23h2.49V0h2.59V8.58H53.76V5.42H51.27V8.58H48.68Z" transform="translate(0 0.14)"/>
                    <path d="M57.6,0h5.72V2.06H60.19V3.24H62.7v2H60.19V6.51h3.3V8.58H57.6Z" transform="translate(0 0.14)"/>
                    <path d="M70.81-.14a4.31,4.31,0,0,1,4.6,4.37,4.61,4.61,0,0,1-9.21,0A4.32,4.32,0,0,1,70.81-.14Zm0,6.57a2,2,0,0,0,1.94-2.2,1.94,1.94,0,1,0-3.88,0A2,2,0,0,0,70.81,6.43Z" transform="translate(0 0.14)"/>
                    <path d="M76.15,0h2.59V5.21a1.2,1.2,0,1,0,2.4,0V0h2.59V5.36c0,2-1.52,3.36-3.81,3.36s-3.77-1.39-3.77-3.36Z" transform="translate(0 0.14)"/>
                    <path d="M86.84,2.21H84.29V0H92V2.21H89.42V8.58H86.84Z" transform="translate(0 0.14)"/>
                </g>
            </svg>
        </React.Fragment>
    );
};

export default Logo;