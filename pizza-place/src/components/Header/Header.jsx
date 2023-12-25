import './Header.css';

const Header = () => {

  return (
    <header>
        <div className="logo-wrapper">Logo...</div>
        <nav className="top-nav">
            <ul>
                <li className='menu-el'>
                    <a className='menu-link' href="#/">Link...</a>
                </li>
            </ul>
        </nav>
        <div className="mobile-toggle">
            X
        </div>
    </header>
  )
}

export default Header