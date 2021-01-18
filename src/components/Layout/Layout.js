import React from 'react';
import Auxy from '../../hoc/Auxy';
import classes from './Layout.css';

const Layout = (props) => (
    <Auxy>
        <div>
            Toolbar, SideDrawer, BackDrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxy>
);

export default Layout;