import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

export class Locations extends Component {

  static propTypes = {
    locations: React.PropTypes.array,
    delLocation: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  onDelete = (event) => {
    event.preventDefault();
    const index = event.currentTarget.dataset.index;
    this.props.delItem(index);
  };

  render() {
    const { locations } = this.props;

    return (
      <div className={styles}>
        {!locations.length && <span>Array is empty</span>}
        {
          locations.map((location, index) =>
            <div className="checkbox" key={index}>
              <label>
                  {`${location.name}`}
                  {`${location.votedBy}`}
                <span className="remove"
                  data-index={index}
                  onClick={this.onDelete}
                >
                  x
                </span>
              </label>
            </div>
          )
        }
        </div>
    );
  }
}
