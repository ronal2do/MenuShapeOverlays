# Animated Menu ShapeOverlays

![Slider](/asset/slide.gif)
[Checkout the demo](https://ronal2do.github.io/MenuShapeOverlays)

### Acknowledgments
Based in the awesome work https://tympanus.net/Development/ShapeOverlays/index3.html

## Install

```
yarn add react-awesome-menu react-dom
```

## Usage
```js
import withMenu from 'react-awesome-menu'
const MENU_ITEMS = [
  {
    id: 0,
    label: 'Home',
    // Props received by the HOC are forwarded here
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

// The HOC will also provide a `toggleMenu` to its child, so you can
// Manipulate the visibility as you wish
const App = withMenu({ items: MENU_ITEMS })(({ toggleMenu }) => (
  <div>
    <p>Hi there</p>
  </div>
))
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/4389565?v=4" width="100px;"/><br /><sub><b>Ronaldo Lima</b></sub>](http://stqpublicidade.com.br/)<br />[💻](https://github.com/ronal2do/react-awesome-menus/commits?author=ronal2do "Code") | [<img src="https://avatars0.githubusercontent.com/u/1283200?v=4" width="100px;"/><br /><sub><b>Gabriel Rubens</b></sub>](https://medium.com/@_gabrielrubens)<br />[💻](https://github.com/ronal2do/react-awesome-menus/commits?author=grsabreu "Code") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!