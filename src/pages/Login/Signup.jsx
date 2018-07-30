import React from 'react'
import { Mutation } from 'react-apollo'
import { Alert } from 'react-bootstrap'

import { SIGNUP } from '../../queries'

class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordErrorMessage: '',
    formError: '',
    formCompleted: false
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = e => {
    if (e.target.value.length < 8) {
      this.setState({
        passwordErrorMessage: 'Password must be >= 8 characters'
      })
    } else {
      this.setState({
        passwordErrorMessage: ''
      })
    }

    this.setState({ password: e.target.value })
  }

  formOnCompleted = data => {
    this.setState({
      formCompleted: true,
      name: '',
      email: '',
      password: '',
      passwordErrorMessage: '',
      formError: ''
    })
  }

  formOnError = error => {
    this.setState({
      formCompleted: false,
      formError: error
    })
  }

  formSubmit = async (e, signup) => {
    e.preventDefault()

    const { name, email, password } = this.state

    await signup({
      variables: {
        name,
        email,
        password
      }
    })
  }

  render() {
    const {
      name,
      email,
      password,
      passwordErrorMessage,
      formError,
      formCompleted
    } = this.state

    return (
      <main className="pri-pad">
        <div className="container">
          <div className="row justify-content-center">
            {formCompleted && (
              <p>
                Please <a href="/login">Login</a>
              </p>
            )}

            {!formCompleted && (
              <div className="col-sm-6 offset-sm-3">
                <h3 className="mb-30">Signup</h3>

                <Mutation
                  mutation={SIGNUP}
                  onCompleted={this.formOnCompleted}
                  onError={this.formOnError}
                >
                  {(signup, result) => (
                    <div>
                      {formError && (
                        <Alert bsStyle="danger">
                          Unable to signup, please try again!
                        </Alert>
                      )}

                      <form className="property-submit">
                        <div className="form-group">
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            value={name}
                            onChange={this.handleNameChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="email@example.com"
                            value={email}
                            onChange={this.handleEmailChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            name="password"
                            type="password"
                            className={`form-control ${
                              passwordErrorMessage === '' ? '' : 'invalid-input'
                            }`}
                            placeholder="Password"
                            value={password}
                            onChange={this.handlePasswordChange}
                            minLength="8"
                            required
                          />
                          <div className="invalid-feedback">
                            {passwordErrorMessage}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-success btn-lg shadow faa-parent animated-hover"
                          onClick={e => this.formSubmit(e, signup)}
                        >
                          Signup
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <a href="/login">Login</a>
                      </form>
                    </div>
                  )}
                </Mutation>
              </div>
            )}
          </div>
        </div>
      </main>
    )
  }
}

export default Signup
