import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class Header extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideHeader);
  }

  hideHeader = () => {
    const opacity = 1 - (window.pageYOffset / 200).toFixed(1);
    if (opacity < 1) {
      this.refs.header.style.opacity = opacity;
    }
  };

  render() {
    return (
      <header className={`${styles}`} ref="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-5 col-sm-3 col-md-3 col-lg-3 logo">
              <Link to="/">
                Lunch Buddy
              </Link>
            </div>

            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <nav>
                <Link to="/home" activeClassName="active">
                  Home
                </Link>
                <Link to="/list" activeClassName="active">
                  Redux
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
