import { Link} from 'react-router-dom';

import './style.scss'

const Layout = ({ children, user, LogOut }) => (
  <div>
    <header className="Header">
      <Link to='/images'>
        <div className="Header-title">Lorem</div>
      </Link>
      <div className="Header-menu">
      <div className="Header-user">{user}</div>
      <div className="Header-logout" onClick={LogOut}>Logout</div>
      <div className="Header-logout-icon" onClick={LogOut}></div>
      </div>
    </header>
    <div className="App-content">
        {children}
    </div>
    <footer className="Footer">
      <div className="Footer-content">
        <div className="Footer-content-item">
          <div className="Footer-content-title">Lorem</div>
          <div className="Footer-content-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi est sit amet.
          </div>
          <div className='Footer-payment'>
            <div className='VisaLogo'></div>
            <div className='MastercardLogo'></div>
            <div className='MaestroLogo'></div>
          </div>
        </div>
        <div className="Footer-content-item">
          <div className="Footer-content-title">Lorem Ipsum</div>
          <div className="Footer-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Vulputate odio ut enim blandit volutpat maecenas volutpat. Massa tincidunt dui ut ornare lectus sit. Quam elementum pulvinar etiam non.</div>
        </div>
        <div className="Footer-content-item">
          <div className="Footer-content-title">Contacts</div>
          <div className="Footer-content-text">
            <div className="Footer-contacts">
              <p>London</p> 
              <p>26985 Brighton Lane, Lake Forest, CA 92630</p> 
              <p className="Footer-phone">+1 (949) 354-2574</p>
            </div>
            <div className="Footer-contacts"> 
              <p>Paris</p> 
              <p>9 Doe Crossing Court</p> 
              <p className="Footer-phone">+11 281-762-2687</p>
            </div>
          </div>
        </div>
        <div className='Footer-payment-mobile'>
            <div className='VisaLogo'></div>
            <div className='MastercardLogo'></div>
            <div className='MaestroLogo'></div>
          </div>
      </div>
      <div className="Footer-copyright">
        <p>2022-2023 All rights reserved</p>
        <p>Site is developed by ME</p>
      </div>
    </footer>
  </div>
);

export default Layout;