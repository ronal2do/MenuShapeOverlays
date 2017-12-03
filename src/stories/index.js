import React from 'react'

import { storiesOf } from '@storybook/react'
import withMenu from '../Menu'

const MENU_ITEMS = [
  {
    id: 0,
    label: 'Home',
    action: (props) => console.log('Any routing trigger you use'),
  },
  {
    id: 2,
    label: 'News',
    action: (props) => console.log('Any routing trigger you use'),
  },
  {
    id: 3,
    label: 'About',
    action: (props) => console.log('Any routing trigger you use'),
  },
  {
    id: 4,
    label: 'Contact',
    action: (props) => console.log('Any routing trigger you use'),
  },
]

const App = withMenu({ items: MENU_ITEMS })(() => (
  <div>
    <p>Hi there</p>
  </div>
))

storiesOf('Menu', module).add('default', () => <App />)
