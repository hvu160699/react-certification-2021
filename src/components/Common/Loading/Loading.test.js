import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading.component';

describe('Loading component test suit', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper.find('LoadingContainer').exists()).toBeTruthy();
  });

  it('Should render with any text when passing loadingText prop', () => {
    const wrapper = shallow(<Loading loadingText="Is loading..." />);

    expect(wrapper.find('LoadingText').text()).toEqual('Is loading...');
  });

  it('Should render with "Processing" as default text when not passing loadingText prop', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper.find('LoadingText').text()).toEqual('Processing');
  });
});
