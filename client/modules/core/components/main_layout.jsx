import React from 'react';
import Radium, { StyleRoot } from 'radium';

// material
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// shared component
import Shell from './shell';

@Radium
class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            welcomeDialog: true
        }
    }


    closeWelcomeDialog(){
        this.setState({welcomeDialog: false});
    }

    render() {
        return (
            <StyleRoot>
                <main>
                    <Shell />

                    <Dialog
                        open={this.state.welcomeDialog}
                        close={this.closeWelcomeDialog.bind(this)}
                        modal={true}
                        title="Welcome"
                        actions={
                            <FlatButton 
                                label="Close"
                                keyboardFocused={true}
                                onTouchTap={this.closeWelcomeDialog.bind(this)}
                            />
                        } 
                    >
                        <p>Testing Dialog</p>
                    </Dialog>
                </main>
            </StyleRoot>
        ); 
    }
}

export default Layout;
