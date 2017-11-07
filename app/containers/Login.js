import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { userActionCreators } from '../redux';

const mapStateToProps = (state) => ({
  isAuthenticating: state.user.isAuthenticating,
  token: state.user.token
})

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticating: PropTypes.bool,
    token: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(userActionCreators.startAuthentication())
  }

  // We watch for changes in navigation, because we asked Reddit to redirect us
  // to an arbitrary URL callback://login when the login has been completed.
  onNavigationStateChange = (navState) => {
    if (this.props.isAuthenticating && navState.url.indexOf('about://callback/login#') === 0) {
      // Regex shortcut to grab the access_token if the URL matches this format.
      const regex = /^about:\/\/callback\/login#access_token=(.+)&token/
      let accessToken = navState.url.match(regex)[1]
      this.props.dispatch(userActionCreators.authenticationSuccess(accessToken))
      Actions.pop()
      console.log('to tabs')
    }
  }

  render() {
    const REDDIT_APP_ID = 'Mcnxsc2BLOXi8w'
    const LOGIN_URL = `https://www.reddit.com/api/v1/authorize.compact?client_id=${REDDIT_APP_ID}&response_type=token&state=RANDOM_STRING&redirect_uri=about://callback/login&scope=read`
    return (
      <WebView
        source={{uri: LOGIN_URL}}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    )
  }
}

export default connect(mapStateToProps)(Login)