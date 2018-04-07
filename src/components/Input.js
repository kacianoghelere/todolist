import React from 'react';

import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const Input = (props) => (
  <TextInput
    style={styles.input}
    {...props}
    />
);

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4
  }
})

export default Input;