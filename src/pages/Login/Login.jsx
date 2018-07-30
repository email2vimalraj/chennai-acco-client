import React from 'react'
import { Mutation } from 'react-apollo'
import { Alert } from 'react-bootstrap'

import { LOGIN } from '../../queries'
import {
  AUTH_TOKEN,
  AUTH_USER_NAME,
  AUTH_USER_ID,
  AUTH_USER_EMAIL,
  AUTH_USER_ROLE
} from '../../constants'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    error: false
  }

  componentDidMount() {
    if (localStorage.getItem(AUTH_TOKEN)) {
      this.props.history.push('/')
    }
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async (e, login) => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      const { data } = await login({
        variables: { email, password }
      })

      localStorage.setItem(AUTH_TOKEN, data.login.token)
      localStorage.setItem(AUTH_USER_NAME, data.login.user.name)
      localStorage.setItem(AUTH_USER_ID, data.login.user.id)
      localStorage.setItem(AUTH_USER_EMAIL, data.login.user.email)
      localStorage.setItem(AUTH_USER_ROLE, data.login.user.role)

      this.setState({
        error: false
      })

      this.props.history.push('/')
    } catch (err) {
      this.setState({
        error: true
      })
    }
  }

  render() {
    const { email, password, error } = this.state
    return (
      <main className="pri-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 offset-sm-3">
              <h3 className="mb-30">Login</h3>

              <Mutation mutation={LOGIN}>
                {login => (
                  <div>
                    {error && (
                      <Alert bsStyle="danger">
                        Unable to signup, please try again!
                      </Alert>
                    )}

                    <form className="property-submit">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="email@example.com"
                          value={email}
                          onChange={this.onInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={this.onInputChange}
                          required
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-success btn-lg shadow faa-parent animated-hover"
                        onClick={e => this.onSubmit(e, login)}
                      >
                        Login
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <a href="/signup">Signup</a>
                    </form>
                  </div>
                )}
              </Mutation>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Login
