/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

/**
 *  Success
 */

it('Sum', () => {
  var appComponent = renderer.create(<App />);
  appComponent.getInstance().state = {
    displayValue: '0',
    clearDisplay: false,
    operation: '+',
    values: [1, 2],
    current: 1
  };
  appComponent.getInstance().setOperation('=');

  expect(Number(appComponent.getInstance().state.displayValue)).toEqual(3);
});

it('Subtraction', () => {
  var appComponent = renderer.create(<App />);
  appComponent.getInstance().state = {
    displayValue: '0',
    clearDisplay: false,
    operation: '-',
    values: [5, 2],
    current: 1
  };
  appComponent.getInstance().setOperation('=');

  expect(Number(appComponent.getInstance().state.displayValue)).toEqual(3);
});

it('Multiplication', () => {
  var appComponent = renderer.create(<App />);
  appComponent.getInstance().state = {
    displayValue: '0',
    clearDisplay: false,
    operation: '*',
    values: [5, 2],
    current: 1
  };
  appComponent.getInstance().setOperation('=');

  expect(Number(appComponent.getInstance().state.displayValue)).toEqual(10);
});

it('Division', () => {
  var appComponent = renderer.create(<App />);
  appComponent.getInstance().state = {
    displayValue: '0',
    clearDisplay: false,
    operation: '/',
    values: [5, 2],
    current: 1
  };
  appComponent.getInstance().setOperation('=');
  expect(parseFloat(appComponent.getInstance().state.displayValue)).toEqual(2.5);
});
