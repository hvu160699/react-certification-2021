import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { FAKE_VIDEOS_DATA } from '../../utils/constants';

import GridVideo from './GridVideo.component';
import GridVideoItem from './GridVideoItem.component';

describe('Grid Video, Grid Video Item', () => {
  it('<GridVideo /> shoud render "No result" when passing an empty array', () => {
    const gridVideo = shallow(<GridVideo videos={[]} />);
    expect(gridVideo.text()).toEqual('No result');
  });

  it('<GridVideo /> should render as much <GridVideoItem /> as FAKE_VIDEOS_DATA', () => {
    const gridVideo = shallow(<GridVideo videos={FAKE_VIDEOS_DATA} />);
    expect(gridVideo.find(GridVideoItem).length).toBe(FAKE_VIDEOS_DATA.length);
  });

  it('<GridVideoItem /> should render without crashing', () => {
    const gridVideoItem = renderer
      .create(<GridVideoItem video={FAKE_VIDEOS_DATA[0].snippet} />)
      .toJSON();
    expect(gridVideoItem).toMatchSnapshot();
  });
});
