import React from 'react'
import styled, { css } from 'styled-components'

export default function SignUp({
  className,
  handleChange,
  handleSubmit,
  inputRef,
  errors = [],
  name = '',
  phone = '',
  email = '',
  hear = '',
  other = ''
}) {
  return (
    <section className={className}>
      <form className="form-container" onSubmit={handleSubmit}>
        <section className="inner-form-container">
          <h1 className="header">Sign Up</h1>
          <label htmlFor="name" className="input">
            <input type="input" id="name" name="name" placeholder="Name" value={name} onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="email" className="input">
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="phone" className="input">
            <input
              type="input"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={handleChange}
            />
          </label>
          <div className="hear">
            <p>How did you hear about us?</p>
            <input type="radio" name="hear" value="social" checked={hear === 'social'} onChange={handleChange} /> Social
            Media <br />
            <input
              type="radio"
              name="hear"
              value="other"
              checked={hear === 'other'}
              onChange={handleChange}
            /> Other <input ref={inputRef} type="input" name="other" value={other} onChange={handleChange} />
            <br />
          </div>
          <div className="button-container">
            <button className="button">Sign Up</button>
          </div>
        </section>
        <section className="errors">
          {Boolean(errors.length) &&
            <div>
              <h3>You have the following errors</h3>
              <ul>
                {errors.map(error => {
                  return (
                    <li>
                      {error}
                    </li>
                  )
                })}
              </ul>
            </div>}
        </section>
      </form>
    </section>
  )
}
