import React from 'react';
import { mount, shallow } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from '../../providers/Global';
import Layout, { withPageLayout } from './Layout.component';
import Header from '../Header';

describe('Layout test suit', () => {
  it('MainLayout should render component that contain <Header /> component', () => {
    const wrapper = mount(
      <BrowserRouter>
        <GlobalProvider>
          <Layout />
        </GlobalProvider>
      </BrowserRouter>
    );

    expect(wrapper.find('Header').exists()).toBeTruthy();
  });

  it('PageLayout should be wrapped when using withPageLayout', () => {
    const Component = withPageLayout(Header);

    const wrapper = shallow(<Component />);

    expect(wrapper.find('PageLayout').exists()).toBeTruthy();
  });
});
