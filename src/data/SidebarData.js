import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'About',
        path: '/about-me',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    }
]
