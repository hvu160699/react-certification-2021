import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar.component';

describe('SearchBar', () => {
  const onChange = jest.fn();
  const onKeyDown = jest.fn();

  it('Should render SearchInput without crashing', () => {
    const searchBar = shallow(
      <SearchBar onChange={onChange} onKeyDown={onKeyDown} value="" />
    );

    expect(searchBar.find('SearchInput').exists()).toBeTruthy();
  });

  it('Should render with any placeholder', () => {
    const placeholder = 'Search by color...';
    const searchBar = shallow(
      <SearchBar
        onChange={onChange}
        onKeyDown={onKeyDown}
        value=""
        placeholder={placeholder}
      />
    );

    expect(searchBar.find('SearchInput').prop('placeholder')).toEqual(placeholder);
  });

  it('Should render with only "text" type', () => {
    const type = 'password';
    const searchBar = shallow(
      <SearchBar onChange={onChange} onKeyDown={onKeyDown} value="" type={type} />
    );

    expect(searchBar.find('SearchInput').prop('type')).not.toEqual(type);
  });

  it('Should render with a value', () => {
    const searchBar = shallow(
      <SearchBar onChange={onChange} onKeyDown={onKeyDown} value="Blue" />
    );

    expect(searchBar.find('SearchInput').prop('value')).toEqual('Blue');
  });

  it('Should triggers onChange function when someone type-in', () => {
    const searchBar = shallow(
      <SearchBar onChange={onChange} onKeyDown={onKeyDown} value="blue" />
    );

    searchBar.find('SearchInput').simulate('change', { target: { value: 'red' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
