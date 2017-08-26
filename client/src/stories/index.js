import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Login from "../components/Login";

storiesOf("Login", module)
  .add("Base component", () => <Login />)
  .add("Inputs filled in", () => <Login name="Adam Long" />);
