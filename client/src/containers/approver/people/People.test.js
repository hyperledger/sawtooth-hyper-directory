/* Copyright 2018 Contributors to Hyperledger Sawtooth

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
----------------------------------------------------------------------------- */


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import * as customStore from '../../../customStore';
import People from './People';


const store = customStore.create();


it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    getAllUsers:        () => {},
    getOrganization:    () => {},
    handleUserSelect:   () => {},
    getUsers:           () => {},
    userFromId:         () => {},
  };

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter><People {...props}/></BrowserRouter>
    </Provider>, div
  );

  ReactDOM.unmountComponentAtNode(div);
});