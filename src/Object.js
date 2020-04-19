import React, { Component } from 'react';
import './Object.css';
//import myimage from 'C:\Users\User\project\src\images\logo2.png';
import propTypes from 'prop-types';
import classNames from 'classnames';
//import src from '*.bmp';
//import classes from '*.module.css';



const Image = ( 
{   src,alt,className,

})=> {
    const classes =classNames(
        className,
    );

    return (
        <img 
        src={src}
        alt={alt}
        className={classes}
        />
    );
};
Image.propTypes={
    src:propTypes.string,
    alt:propTypes.string,
    className:propTypes.string,

};
Image.defaultProps ={
     src:'https://via.placeholder.com/100x100',
     alt:'image name',
     className:'',

};
export default Image;

    


