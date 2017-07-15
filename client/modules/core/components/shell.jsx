import React from 'react';
import Radium, { StyleRoot } from 'radium';

import Header from './header';
import Sidebar from './sidebar';

const styles = {
    content: { 
      display: 'flex',

      view: {}
    }
};

@Radium
class Shell extends React.Component {
    
    render() {
        return (
            <StyleRoot>
                <main>
                    <div>
                        <Header />
                    </div>
                    
                    <div>
                        <Sidebar />
                    </div>
                </main>
            </StyleRoot>
        )
    }
}

export default Shell;
