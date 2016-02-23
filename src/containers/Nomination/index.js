import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

/* actions */
import { Locations } from 'components/Locations';
import * as actionCreators from 'actions/items';

const metaData = {
  title: 'Straw-Order Nominations',
  description: 'Nominate somewhere you would like to get lunch from',
  canonical: '',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

@connect(
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Nomination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
              <h1>
                Redux
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
              <h1>We should put a box to enter a nomination here</h1>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">

            </div>
          </div>
        </div>
      </section>
    );
  }
}
