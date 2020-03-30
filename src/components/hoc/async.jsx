/* eslint-disable no-underscore-dangle */
import React from 'react';

const asyncComponent = importComponent => class AsyncComponentClass extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { component: null };
  }

  componentDidMount() {
    this._isMounted = true;
    importComponent().then(cmp => {
      if (this._isMounted) {
        this.setState({ component: cmp.default });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { component: C } = this.state;
    return C ? <C {...this.props} /> : null;
  }
};

export default asyncComponent;
