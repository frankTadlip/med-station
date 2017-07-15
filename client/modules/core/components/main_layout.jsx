import React from 'react';
import Radium, { StyleRoot } from 'radium';

// material
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// shared component
import Shell from './shell';

const styles = {
    bodyContent: {
        paddingLeft: '256px',
        
        mainContent: {
            padding: '10px 15px'
        }
        
    },
};

@Radium
class MainLayout extends React.Component {
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
                    <section style={styles.bodyContent}>
                        <div style={styles.bodyContent.mainContent}>
                            {this.props.children}                            
                        </div>
                    </section>
                </main>

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
            </StyleRoot>
        );
    }
}

export default MainLayout;
