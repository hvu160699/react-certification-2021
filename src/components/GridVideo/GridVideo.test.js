import React from 'react';

import { mount, shallow } from 'enzyme';

import { BrowserRouter } from 'react-router-dom';
import { FAKE_VIDEOS_DATA } from '../../utils/constants';

import GridVideo from './GridVideo.component';
import GridVideoItem from './GridVideoItem.component';

const onClickFn = jest.fn();

describe('Grid Video test suit', () => {
  const RouterWrapper = (children) => <BrowserRouter>{children}</BrowserRouter>;

  describe('GridVideoContainer test case', () => {
    it('Shoud render "No result" when passing an empty array', () => {
      const gridVideo = shallow(<GridVideo videos={[]} handleSelect={onClickFn} />);
      expect(gridVideo.text()).toEqual('No result');
    });

    it('Should render <GridVideoItem /> without crashing', () => {
      const gridVideo = shallow(
        <GridVideo videos={FAKE_VIDEOS_DATA} handleSelect={onClickFn} />
      );
      expect(gridVideo.find(GridVideoItem).exists()).toBeTruthy();
    });

    it('Should render as much <GridVideoItem /> as data length', () => {
      const gridVideo = shallow(
        <GridVideo videos={FAKE_VIDEOS_DATA} handleSelect={onClickFn} />
      );
      expect(gridVideo.find(GridVideoItem).length).toBe(FAKE_VIDEOS_DATA.length);
    });

    it('Should apply default style when not passing vertical props', () => {
      const wrapper = mount(RouterWrapper(<GridVideo videos={FAKE_VIDEOS_DATA} />));

      expect(wrapper).toHaveStyleRule(
        'grid-template-columns',
        'repeat(1, minmax(0, 1fr))'
      );
      expect(wrapper).toHaveStyleRule('gap', '1rem');
    });

    it('GridVideo should apply new style when passing vertical props', () => {
      const wrapper = mount(
        RouterWrapper(<GridVideo videos={FAKE_VIDEOS_DATA} vertical />)
      );

      expect(wrapper).toHaveStyleRule(
        'grid-template-columns',
        'repeat(1, minmax(0, 1fr))'
      );
      expect(wrapper).toHaveStyleRule('gap', '1rem 0');
    });
  });

  describe('GridVideoItem test case', () => {
    it('Should render null when video > snippet is undefined', () => {
      const videoData = { ...FAKE_VIDEOS_DATA[0], snippet: undefined };

      const gridVideo = shallow(
        <GridVideoItem video={videoData} handleSelect={onClickFn} />
      );
      expect(gridVideo.html()).toBe(null);
    });

    it('Should apply default style when not passing vertical props', () => {
      const wrapper = mount(RouterWrapper(<GridVideoItem video={FAKE_VIDEOS_DATA[0]} />));

      expect(wrapper).toHaveStyleRule('flex-direction', 'column');
    });

    it('Should apply new style when passing vertical props', () => {
      const wrapper = mount(
        RouterWrapper(<GridVideoItem video={FAKE_VIDEOS_DATA[0]} vertical />)
      );

      expect(wrapper).toHaveStyleRule('flex-direction', 'row');
    });
  });
});
