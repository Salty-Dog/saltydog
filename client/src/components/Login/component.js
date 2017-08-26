import React from "react";
import styled, { css } from "styled-components";

function Login({
  className,
  handleChange,
  handleSubmit,
  inputRef,
  errors = [],
  name = "",
  phone = "",
  email = "",
  hear = "",
  other = ""
}) {
  return (
    <section className={className}>
      <form className="form-container" onSubmit={handleSubmit}>
        <section className="inner-form-container">
          <h1 className="header">Sign Up</h1>
          <label htmlFor="name" className="input">
            <input
              type="input"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="email" className="input">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
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
          <br />
          <label className="hear">
            <p>How did you hear about us?</p>
            <input
              type="radio"
              name="hear"
              value="social"
              checked={hear === "social"}
              onChange={handleChange}
            />{" "}
            Social Media <br />
            <input
              type="radio"
              name="hear"
              value="other"
              checked={hear === "other"}
              onChange={handleChange}
            />{" "}
            Other{" "}
            <input
              ref={inputRef}
              type="input"
              name="other"
              value={other}
              onChange={handleChange}
            />
            <br />
          </label>
          <div className="button-container">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </section>
        <section className="errors">
          {!!errors.length && "You have the following errors"}
          {errors.map(error => {
            return (
              <div>
                {error}
              </div>
            );
          })}
        </section>
      </form>
    </section>
  );
}

export default styled(Login)`${props => css`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: #222;
  .form-container {
    border: 1px solid #222;
    padding: 20px 150px;
    border-radius: 1.5em;
    background-color: #eee;
    .inner-form-container {
      width: 300px;
      .header {
        margin: 10px 0;
        text-align: center;
        font-size: 2em;
        font-weight: 500;
        color: #222;
      }
      .input > input {
        width: 100%;
        margin: 10px 0;
        padding: 10px 10px;
        border: 1px solid #ddd;
        border-radius: .5em;
        font-size: 1em;
      }
      .hear {
        margin: 20px 0;
        p {
          margin: 10px 0;
        }
        input[type=radio] {
          margin: 7px 0;
        }
      }
      .button-container {
        text-align: center;
        padding: 20px 0 0 0;
        button.btn {
          cursor: pointer;
          background-color: #fff;
          padding: 5px 30px;
          border-radius: .5em;
          outline: none;
          border: 1px solid #ddd;
          font-size: 1em;
        }
      }
    }
  }

`}`;
