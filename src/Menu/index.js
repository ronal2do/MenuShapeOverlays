import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import './menu.css'
import ShapeOverlays from './ShapeOverlays'

const withMenu = props => WrappedComponent => {
  return class extends React.Component {
    state = {
      isMenuVisible: false,
    }

    overlay = null

    toggleMenu = (event) => {
      event && event.preventDefault()
      if (!this.overlay || this.overlay.isAnimating) {
        return false
      }
      this.overlay.toggle()
      this.setState({ isMenuVisible: !this.state.isMenuVisible })
    }

    componentDidMount() {
      const node = ReactDOM.findDOMNode(this)
      this.overlay = new ShapeOverlays(node.querySelector('.shape-overlays'))
    }

    render() {
      const { items } = props
      const { isMenuVisible } = this.state

      return (
        <div className="new-menu">
          <div className="content--new-menu">
            <div
              className={classnames('hamburger hamburger--new-menu js-hover', { 'is-opened-navi': isMenuVisible })}
              onClick={this.toggleMenu}
            >
              <div className="hamburger__line hamburger__line--01">
                <div className="hamburger__line-in hamburger__line-in--01" />
              </div>
              <div className="hamburger__line hamburger__line--02">
                <div className="hamburger__line-in hamburger__line-in--02" />
              </div>
              <div className="hamburger__line hamburger__line--03">
                <div className="hamburger__line-in hamburger__line-in--03" />
              </div>
              <div className="hamburger__line hamburger__line--cross01">
                <div className="hamburger__line-in hamburger__line-in--cross01" />
              </div>
              <div className="hamburger__line hamburger__line--cross02">
                <div className="hamburger__line-in hamburger__line-in--cross02" />
              </div>
            </div>
            <WrappedComponent {...this.props} toggleMenu={this.toggleMenu} />
            <div className="global-menu">
              <div className="global-menu__wrap">
                {items.map((item, i) => (
                  <a
                    key={i}
                    className={classnames('global-menu__item global-menu__item--new-menu', {
                      'is-opened': isMenuVisible,
                    })}
                    href={item.link}
                    onClick={this.toggleMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <svg ref="test" className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path className="shape-overlays__path" />
              <path className="shape-overlays__path" />
              <path className="shape-overlays__path" />
            </svg>
          </div>
        </div>
      )
    }
  }
}

export default withMenu
