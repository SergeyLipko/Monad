import React from 'react';
import MDSpinner from 'react-md-spinner';
import { StyleSheet, css } from 'aphrodite';


const SpinnerStyles = StyleSheet.create({
  spinner: {
    marginTop: 25,
  }
});

const Spinner = () => {
  return (
    <MDSpinner
      singleColor='#45a7b9'
      size={34}
      className={css(SpinnerStyles.spinner)}/>
  )
};

export default Spinner;

