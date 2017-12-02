import React from 'react'
import ReactDOM from 'react-dom';
import './menu.css';
import ShapeOverlays from './ShapeOverlays';

const withMenu = (props) => (WrappedComponent) => {

  return class extends React.Component {
    
    componentDidMount() {
      const node = ReactDOM.findDOMNode(this);
      
      const elmHamburger = node.querySelector('.hamburger');
      const gNavItems = node.querySelectorAll('.global-menu__item');
      const elmOverlay = node.querySelector('.shape-overlays');
      const overlay = new ShapeOverlays(elmOverlay);
      const naviItems = Array.from(node.querySelectorAll('.global-menu__item'));
      
      naviItems.forEach(link => link.addEventListener('click', (ev) => {
        ev.preventDefault();
  
        overlay.toggle();
        if (overlay.isOpened === true) {
          elmHamburger.classList.add('is-opened-navi');
          for (let i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.add('is-opened');
          }
        } else {
          elmHamburger.classList.remove('is-opened-navi');
          for ( let i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.remove('is-opened');
          }
        }
  
      }));
  
      elmHamburger.addEventListener('click', () => {
        if (overlay.isAnimating) {
          return false;
        }
        overlay.toggle();
        if (overlay.isOpened === true) {
          elmHamburger.classList.add('is-opened-navi');
          for (let i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.add('is-opened');
          }
        } else {
          elmHamburger.classList.remove('is-opened-navi');
          for ( let i = 0; i < gNavItems.length; i++) {
            gNavItems[i].classList.remove('is-opened');
          }
        }
      });
  
    }

    render() { 
      const { items } = props;
      return (
        <div className="new-menu">
          <div className="content--new-menu">
            <div className="hamburger hamburger--new-menu js-hover">
              <div className="hamburger__line hamburger__line--01">
                <div className="hamburger__line-in hamburger__line-in--01"></div>
              </div>
              <div className="hamburger__line hamburger__line--02">
                <div className="hamburger__line-in hamburger__line-in--02"></div>
              </div>
              <div className="hamburger__line hamburger__line--03">
                <div className="hamburger__line-in hamburger__line-in--03"></div>
              </div>
              <div className="hamburger__line hamburger__line--cross01">
                <div className="hamburger__line-in hamburger__line-in--cross01"></div>
              </div>
              <div className="hamburger__line hamburger__line--cross02">
                <div className="hamburger__line-in hamburger__line-in--cross02"></div>
              </div>
            </div>
            <WrappedComponent {...this.props} />
            <div className="global-menu">
              <div className="global-menu__wrap">
               { items.map( (item, i) => 
                  <a key={i} 
                    className="global-menu__item global-menu__item--new-menu" 
                    href={item.link} >
                    {item.label}
                  </a>
                )}
              </div>
            </div>
            <svg ref='test' className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path className="shape-overlays__path"></path>
              <path className="shape-overlays__path"></path>
              <path className="shape-overlays__path"></path>
            </svg>
          </div>
        </div>
      )
    }
  };
}

export default withMenu;