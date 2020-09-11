import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from 'prop-types';

import { Input } from "galio-framework";

import Icon from './Icon';
import  lenkitTheme  from "../constants/Theme";

class ArInput extends React.Component {
  render() {
    const { shadowless, success, error } = this.props;

    const inputStyles = [
      styles.input,
      !shadowless && styles.shadow,
      success && styles.success,
      error && styles.error,
      {...this.props.style}
    ];

    return 
    (

      <Input
        placeholder="write something here"
        placeholderTextColor={lenkitTheme.COLORS.MUTED}
        style={inputStyles}
        color={lenkitTheme.COLORS.HEADER}
        iconContent={
          <Icon
            size={14}
            color={lenkitTheme.COLORS.ICON}
            name="link"
            family="AntDesign"
          />
        }
        {...this.props}
      />
    );
  }
}

ArInput.defaultProps = {
  shadowless: false,
  success: false,
  error: false
};

ArInput.propTypes = {
  shadowless: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderColor: lenkitTheme.COLORS.BORDER,
    height: 44,
    backgroundColor: '#FFFFFF'
  },
  success: {
    borderColor: lenkitTheme.COLORS.INPUT_SUCCESS,
  },
  error: {
    borderColor: lenkitTheme.COLORS.INPUT_ERROR,
  },
  shadow: {
    shadowColor: lenkitTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
  }
});

export  {ArInput};
