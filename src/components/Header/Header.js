import React from 'react';

const Header = () => {

    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30,
        // color: 'white'
    };

    return(
        <div className='header'>
            <h3 style={style} ><Link to='/' className=''>Home</Link></h3>
            <h3 style={style} ><Link to='/projects' className=''>Projects</Link></h3>
        </div>
    )
}

export default Header;