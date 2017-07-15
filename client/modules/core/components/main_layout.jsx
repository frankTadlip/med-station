import React from 'react';
import Radium, { StyleRoot } from 'radium';

// shared component
import Shell from './shell';

@Radium
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyleRoot>
                <main>
                    <Shell />
                </main>
            </StyleRoot>
        ); 
    }
}

export default Layout;
