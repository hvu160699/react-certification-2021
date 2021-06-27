import React from 'react';

import { shallow } from 'enzyme';

import { FAKE_VIDEOS_DATA } from '../../utils/constants';

import GridVideo from './GridVideo.component';
import GridVideoItem from './GridVideoItem.component';

const onClickFn = jest.fn();

describe('Grid Video, Grid Video Item', () => {
  it('<GridVideo /> shoud render "No result" when passing an empty array', () => {
    const gridVideo = shallow(<GridVideo videos={[]} handleSelect={onClickFn} />);
    expect(gridVideo.text()).toEqual('No result');
  });

  it('<GridVideo /> should render <GridVideoItem /> without crashing', () => {
    const gridVideo = shallow(
      <GridVideo videos={FAKE_VIDEOS_DATA} handleSelect={onClickFn} />
    );
    expect(gridVideo.find(GridVideoItem).exists()).toBeTruthy();
  });

  it('<GridVideoItem /> should render as much as data length', () => {
    const gridVideo = shallow(
      <GridVideo videos={FAKE_VIDEOS_DATA} handleSelect={onClickFn} />
    );
    expect(gridVideo.find(GridVideoItem).length).toBe(FAKE_VIDEOS_DATA.length);
  });
});
