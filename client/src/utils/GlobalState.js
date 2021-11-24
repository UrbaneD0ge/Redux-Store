import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reducer } from './reducers';

const StoreContext = createStore(reducer);

export function StoreProvider(props) {
  // Return the provider component provided by react-redux
  return <Provider store={StoreContext} {...props} />;
}
