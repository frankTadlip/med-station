import React from 'react';
import Radium, { StyleRoot } from 'radium';


import Header from './header';

@Radium
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyleRoot>
                <main>
                    <Header />
                </main>
            </StyleRoot>
        ) 
    }
}

export default Layout;
