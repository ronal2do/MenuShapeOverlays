import React from 'react'

import { storiesOf } from '@storybook/react'
import withMenu from '../Menu'

const MENU_ITEMS = [
  {
    id: 0,
    label: 'Home',
    link: '/none',
  },
  {
    id: 2,
    label: 'News',
    link: '/none',
  },
  {
    id: 3,
    label: 'About',
    link: '/none',
  },
  {
    id: 4,
    label: 'Contact',
    link: '/none',
  },
]

const App = withMenu({ items: MENU_ITEMS })(() => (
  <div>
    <p>Hi there</p>
  </div>
))

storiesOf('Menu', module).add('default', () => <App />)
