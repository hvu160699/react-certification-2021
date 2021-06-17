import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar.component';

describe('SearchBar', () => {
  it('Should render SearchInput without crashing', () => {
    const searchBar = shallow(<SearchBar />);

    expect(searchBar.find('SearchInput').exists()).toBeTruthy();
  });

  it('Should render with any placeholder', () => {
    const placeholder = 'Search by color...';
    const searchBar = shallow(<SearchBar placeholder={placeholder} />);

    expect(searchBar.find('SearchInput').prop('placeholder')).toEqual(placeholder);
  });

  it('Should render with only "text" type', () => {
    const type = 'password';
    const searchBar = shallow(<SearchBar type={type} />);

    expect(searchBar.find('SearchInput').prop('type')).not.toEqual(type);
  });

  it('Should render with a value', () => {
    const searchBar = shallow(<SearchBar value="Blue" />);

    expect(searchBar.find('SearchInput').prop('value')).toEqual('Blue');
  });

  it('Should triggers onChange function when someone type-in', () => {
    const onChangeMock = jest.fn();
    const searchBar = shallow(<SearchBar value="blue" onChange={onChangeMock} />);

    searchBar.find('SearchInput').simulate('change', { target: { value: 'red' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
