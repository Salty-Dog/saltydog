import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Login from '../components/Login'
import SignUp from '../components/SignUp'

storiesOf('Login', module)
  .add('Base Component', () => <Login />)
  .add('Inputs Filled In', () => <Login name="Adam Long" email="adam@example.com" />)

storiesOf('SignUp', module)
  .add('Base Component', () => <SignUp />)
  .add('Inputs Filled In', () => <SignUp name="Adam Long" />)
