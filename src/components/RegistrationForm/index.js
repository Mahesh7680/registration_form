import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    firstNameError: '',
    lastNameError: '',
    lastName: '',
    submitted: false,
  }

  updateFirstName = e => {
    this.setState({firstName: e.target.value, firstNameError: ''})
  }

  updateLastName = e => {
    this.setState({lastName: e.target.value, lastNameError: ''})
  }

  updateError = () => {
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({firstNameError: 'Required', lastNameError: 'Required'})
    } else if (firstName === '') {
      this.setState({firstNameError: 'Required'})
    } else if (lastName === '') {
      this.setState({lastNameError: 'Required'})
    } else {
      this.setState({firstNameError: '', lastNameError: ''})
    }
  }

  submitForm = event => {
    event.preventDefault()
    this.updateError()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({submitted: true})
    }
  }

  reqFirstName = e => {
    if (e.target.value === '') {
      this.setState({firstNameError: 'Required'})
    }
  }

  reqLastName = e => {
    if (e.target.value === '') {
      this.setState({lastNameError: 'Required'})
    }
  }

  submitNew = () => {
    this.setState({submitted: false})
  }

  render() {
    const {
      submitted,
      firstName,
      firstNameError,
      lastName,
      lastNameError,
    } = this.state
    console.log(firstName, lastName)

    return (
      <div className="main-login-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1>Registration</h1>
          {submitted ? (
            <div className="center-elements">
              <img
                alt="success"
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              />
              <p>Submitted Successfully</p>
              <button onClick={this.submitNew} type="button">
                Sumbit Another Response
              </button>
            </div>
          ) : (
            <div>
              <label htmlFor="firstName">FIRST NAME</label>
              <input
                placeholder="First name"
                onChange={this.updateFirstName}
                onBlur={this.reqFirstName}
                type="text"
                id="firstName"
              />
              <p>{firstNameError}</p>

              <label htmlFor="lastName">LAST NAME</label>
              <input
                onBlur={this.reqLastName}
                placeholder="Last name"
                onChange={this.updateLastName}
                type="text"
                id="lastName"
              />
              <p>{lastNameError}</p>

              <button type="submit">Submit</button>
            </div>
          )}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
