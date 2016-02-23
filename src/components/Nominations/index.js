import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

export class Nominations extends Component {

  static propTypes = {
    nominations: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { nominations } = this.props;

    return (
      <div className="nomination-container">
        <h1>Nominations</h1>
        <div>
        {!nominations.length && <span>There are no nominations yet</span>}
        {
          nominations.map((nomination) =>
            <div className="nomination">
              <label>
                {`${nomination}`}
              </label>
            </div>
          )
        }
        </div>
      </div>
    );
  }
}
