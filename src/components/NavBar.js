import React from 'react';
function NavBar(){
    return(
        <div className="jumbotron">
             <nav className="nav-wrapper red darrken-3">
            <ul className="right">
                <li><a href='/Login'>Login</a></li>
                <li><a href='/Register'>Register</a></li>
            </ul>
        </nav>
        </div>
       
    )
}
export default NavBar;