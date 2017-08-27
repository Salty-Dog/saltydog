import React, { Component } from 'react'
import { compose } from 'recompose'
import axios from 'axios'
import data from './Data'
import user from './User'

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.inputRef
    }

    handleChange = ({ target: { name, value, type } }) => {
      this.setState({ [name]: value }, () => {
        if (type === 'radio' && value === 'other') {
          this.inputRef.focus()
        }
      })
    }

    changePage = () => {
      this.props.history.push('/')
    }

    handleSubmit = e => {
      e.preventDefault()
      axios.post('https://saltydog-saltblock.herokuapp.com/api/v1/proposal_requests', data).then(response => {
        console.log('adding data')
        if (response.status === 204) {
          console.log('add data')
          this.changePage()
        }
      })
    }

    handleCheckErrors() {
      const { email, phone } = this.state
      const validEmail = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test(email)
      const validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          inputRef={el => {
            this.inputRef = el
          }}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}

export default compose(handlers)
