import React from 'react';
import { mount } from 'enzyme';
import App from './App.component';

describe('App test suit', () => {
  it('Should render without crashing', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('App').exists()).toBeTruthy();
  });

  it('Provider should be wrapped as expected', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('AppProvider').exists()).toBeTruthy();
    expect(wrapper.find('VideoProvider').exists()).toBeTruthy();
  });
});
