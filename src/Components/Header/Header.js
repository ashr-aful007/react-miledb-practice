import React from 'react';
import './Header.css'
const Header = () => {
     return (
          <nav className='header-section'>
          <div className='mile-lable'>
               <h4>MILE DB</h4>
          </div>
          <div className='mile-catagory'>
               <a href="/thai">Thai</a>
               <a href="/italian">Italian</a>
               <a href="/Chines">Chines</a>
               <a href="/Blog">Blog</a>
          </div>
          
     </nav>
     );
};

export default Header;