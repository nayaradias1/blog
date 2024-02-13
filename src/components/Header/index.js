

import logosvg from '../../svg/logo.svg'

const Header = () => {

    const desclogo = "Essa é a logo do blog.";
    return (
        <>
            <header className="flex-space-between">
                <div className="logo" >
                    <img src={logosvg}/>
                    
                     </div>

                <div className="search"> 
                <input className="input-search" type="text" name="search"></input>
                
                
                </div>
                <div className="menu">
                    <li><a href="#" className="nav-link"> Categories</a></li>
                    <li><a href="#" className="nav-link"> About</a></li>
                    <li><a href="#" className="nav-link">Contact</a></li>
                   
                     </div>
            </header>
        </>
    )
}
export default Header;