import React from 'react';

import { AuthConsumer } from './AuthContext';

export default class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
      return (
      <header className='logButton'>
        <AuthConsumer>
          {({isAuth, login, logout}) => (
            <div>
              <h1>Welcome to The Cigar Guy</h1>
              {isAuth ? (
                <div className='loggedin'>

                </div>
              ) : (
                <div className='loggedout'>

                </div>
              )}
            </div>
          )}
        </AuthConsumer>
        </header>
      )}}