import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: 'Home',
        href: '#about',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Projects',
        href: '#projects',
        icon: <FaIcons.FaCode />,
        className: 'nav-text'
    },
    {
        title: 'Tools',
        href: '#tools',
        icon: <FaIcons.FaTools />,
        className: 'nav-text'
    },
    {
        title: 'Contact Me',
        href: '#contactme',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    }
]
