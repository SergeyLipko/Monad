import { StyleSheet } from 'aphrodite';
import { flexColumn } from '../../../styles/utils/mixins';
import { variables as v } from '../../../styles/utils/variables';


export const mainAppStyles = StyleSheet.create({

  loginCard: {
    ...flexColumn(),
    width: '100%',
  },

  loginCardField: {
    width: 275,
    marginBottom: 15,
  },

  loginCardButton: {
    marginTop: 15,
    width: 200,
  },

  loginCardLinks: {
    fontSize: 17,
    color: v.colors.fontGrey,
    paddingBottom: 40,
  },

  loginLink: {
    fontSize: 17,
    paddingLeft: 5,
    color: v.colors.darkBlue,
    textDecoration: 'underline',
    cursor: 'pointer',
  },

  statusMessage: {
    paddingTop: 30,
    fontSize: 16,
    color: 'green',
  },

  errorMsg: {
    paddingTop: 30,
    color: 'red',
  },

  successMsg: {
    paddingTop: 30,
    color: 'green',
  },

});