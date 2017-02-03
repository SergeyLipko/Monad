import { StyleSheet } from 'aphrodite';
import { flexColumn } from '../../../styles/utils/mixins';
import { variables as v } from '../../../styles/utils/variables';


export const mainAppStyles = StyleSheet.create({

  loginCard: {
    ...flexColumn(),
    width: '100%',
  },

  loginCardField: {
    width: '275px',
    marginBottom: '15px',
  },

  loginCardButton: {
    marginTop: '15px',
    width: '200px',
  },

  loginCardLinks: {
    color: v.colors.fontGrey,
    paddingBottom: '40px',
  },

  loginLink: {
    paddingLeft: '5px',
    color: v.colors.darkBlue,
    textDecoration: 'underline',
    cursor: 'pointer',
  },

});