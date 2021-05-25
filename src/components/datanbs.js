import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLine } from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url:'/',
        text: 'home',
    },
    {
        id: 2,
        url:'/about',
        text: 'about',
    },
    {
        id: 3,
        url:'/shop',
        text: 'shop',
    },
    {
        id: 4,
        url:'/contact',
        text: 'contact',
    },
    {
        id: 5,
        url:'/sign-up',
        text: 'Sign Up',
    },
];

export const social = [
    {
        id: 1,
        url:  'https://twitter.com',
        icon: <FaFacebookSquare/>,
    },
    {
        id: 2,
        url:  'https://twitter.com',
        icon: <FaTwitter/>,
    },
    {
        id: 3,
        url:  'https://twitter.com',
        icon: <FaInstagram/>,
    },
    {
        id: 4,
        url:  'https://twitter.com',
        icon: <FaLine/>,
    },
];