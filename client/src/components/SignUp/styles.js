import styled, { css } from "styled-components";
import background from "../../assets/outside-seating.jpg";

export default function styles(component) {
  return styled(component)`${props => css`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    color: #222;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
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
        div.hear {
          margin: 10px 0;
          text-align: left;
          p {
            margin: 10px 0;
          }
          input[type=radio] {
            margin: 7px 0;
            text-align: left;
          }
          input[type=input] {
            margin: 10px 0;
            padding: 5px 10px;
            border: 1px solid #ddd;
            border-radius: .2em;
            font-size: 1em;
          }
        }
        .button-container {
          text-align: center;
          button.button {
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
      section.errors {
        text-align: left;
        color: red;
      }
    }
  `}`;
}
