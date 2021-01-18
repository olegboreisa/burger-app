import React from 'react';
import Auxy from '../../hoc/Auxy';

const layout = (props) => (
    <Auxy>
        <div>
            Toolbar, SideDrawer, BackDrop
        </div>
        <main>
            {props.children}
        </main>
    </Auxy>
);

export default layout;