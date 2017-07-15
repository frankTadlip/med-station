import React from 'react';
import { browserHistory } from 'react-router';
import Radium, { StyleRoot } from 'radium';

// material
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import UserIcon from 'material-ui/svg-icons/action/account-box';
import PasswordIcon from 'material-ui/svg-icons/action/lock';
import CheckIcon from 'material-ui/svg-icons/action/done';

const styles = {
  loginWrapper: {
    height: 'calc(100vh - 65px)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    loginContainer: {
      padding: '0 25px 25px 25px',
      minWidth: '300px',

      h1: {
        marginBottom: '0px'
      },

      inputFields: {
        display: 'flex',
        alignItems: 'baseline',

        icon: { paddingRight: '10px' }
      },

      signin: {
        marginTop: '15px'
      }
    }

  }
}

@Radium
class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      errorText: ''
    }
  }

  signIn() {
    const { username, password } = this.refs;
    const { adminAccount } = this.props;

    if (adminAccount.username == username.input.value && adminAccount.password == password.input.value) {
      this.setState({
        errorText: ''
      })
      setTimeout(function () { browserHistory.push('/item-management'); }.bind(this), 3000);
    } else {
      this.setState({
        errorText: 'Please Check'
      })
    }

  }


  render() {
    const { adminAccount } = this.props;
    return (
      <StyleRoot>
        <div style={styles.loginWrapper}>
          <Paper style={styles.loginWrapper.loginContainer}>

            <h1 style={styles.loginWrapper.loginContainer.h1}>Login</h1>

            <div style={styles.loginWrapper.loginContainer.inputFields}>
              <UserIcon style={styles.loginWrapper.loginContainer.inputFields.icon} />
              <TextField
                hintText="Username"
                floatingLabelText="Username"
                ref='username'
                errorText={this.state.errorText}
              />
            </div>

            <div style={styles.loginWrapper.loginContainer.inputFields}>
              <PasswordIcon style={styles.loginWrapper.loginContainer.inputFields.icon} />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                ref='password'
                type="password"
                errorText={this.state.errorText}
              />
            </div>

            <RaisedButton
              label="Login"
              primary={true}
              fullWidth={true}
              onTouchTap={this.signIn.bind(this)}
              style={styles.loginWrapper.loginContainer.signin}
            />

          </Paper>
        </div>
      </StyleRoot>
    );
  }
}

export default Login;
