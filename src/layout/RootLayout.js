import React, {Component} from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

class RootLayout extends Component {
    state = {  } 
    render() { 
        return (
            <div className='root-layout'>
                <header>
                    <nav>
                        <h1>Job Serve</h1>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="careers">Career</NavLink>
                        <NavLink to="help">Help</NavLink>
                    </nav>
                    <Breadcrumbs/>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        );
    }
}
 
export default RootLayout;