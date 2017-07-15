import React from 'react';
import Radium, { StyleRoot } from 'radium';

// material
import AppBar from 'material-ui/AppBar';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
    appbar: {
        '@media (min-width: 768px)': {
            paddingLeft: '256px'
        }
    },
};

@Radium
class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyleRoot>
                <header style={styles.appbar}>
                    <AppBar
                        title="Title"
                    />
                </header>
            </StyleRoot>
        );
    }
}

export default Header;
