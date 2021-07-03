import React from 'react';
import { shallow } from 'enzyme';

import Layout, { withPageLayout } from './Layout.component';
import Header from '../Header';

describe('Layout test suit', () => {
  it('MainLayout should render component that contain <Header /> component', () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper.containsMatchingElement(<Header />)).toBeTruthy();
  });

  it('PageLayout should be wrapped when using withPageLayout', () => {
    const Component = withPageLayout(Header);

    const wrapper = shallow(<Component />);

    expect(wrapper.find('PageLayout').exists()).toBeTruthy();
  });
});
