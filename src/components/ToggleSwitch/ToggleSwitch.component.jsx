// Ref: https://upmostly.com/tutorials/build-a-react-switch-toggle-component
import React from 'react';
import PropTypes from 'prop-types';

import { TSContainer, TSInput, TSLabel } from './ToggleSwitch.styled';

const ToggleSwitch = ({ toggleName, checkedColor, checked, onChange }) => {
  return (
    <TSContainer>
      <TSInput
        type="checkbox"
        id={toggleName}
        name={toggleName}
        checked={checked}
        onChange={onChange}
      />
      <TSLabel htmlFor={toggleName} style={{ background: checked && checkedColor }}>
        <span />
      </TSLabel>
    </TSContainer>
  );
};

ToggleSwitch.propTypes = {
  toggleName: PropTypes.string.isRequired,
  checkedColor: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

ToggleSwitch.defaultProps = {
  checkedColor: '#29bb89',
};

export default ToggleSwitch;
