import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

/* actions */
import * as actionCreators from 'actions/nominations';
import { AddNomination } from 'components/AddNomination';
import { Nominations } from 'components/Nominations';

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
  state => state.nominations,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Nomination extends Component {
  constructor(props) {
    super(props);
  }
  getInitialState() {
    return { value: '' };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    console.log(this.props);
    return (
      <section>
        <DocumentMeta {...metaData} />
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
              <h1>
                Nominate somewhere to go for lunch
              </h1>
              <AddNomination { ...this.props } />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
              <Nominations { ...this.props} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
