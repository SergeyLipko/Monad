import { StyleSheet } from 'aphrodite';
import { flexCenter, flexColumn } from '../../styles/utils/mixins';
import { variables as v } from '../../styles/utils/variables';


export const mainAppStyles = StyleSheet.create({

  appWrapper: {
    ...flexCenter(),
    width: '100%',
    height: '100vh',
    backgroundColor: v.colors.appBackground,
    backgroundSize: 'cover',
  },

  appMain: {
    width: '75%',
    maxWidth: '1440px',
    height: v.sizes.appHeightDefault,
    backgroundColor: '#fff',
    borderRadius: '6px',
  },

  loginWrapper: {
    ...flexCenter(),
    width: '100%',
    height: v.sizes.appContentHeight,
  },

  loginCardWrapper: {
    width: '400px',
    height: '500px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
  },

  loginCardHead: {
    ...flexColumn(),
    width: '100%',
    marginBottom: '25px',
    paddingTop: '40px',
  },

  loginCardMainTitle: {
    paddingBottom: '25px',
    fontSize: '31px',
    color: v.colors.darkGrey,
  },

  loginCardText: {
    padding: '0 20px 0',
    fontSize: '16px',
    lineHeight: '22px',
    color: v.colors.fontGrey,
    fontWeight: 300,
    textAlign: 'center',
  },

  loginCardContent: {
    ...flexColumn(),
    width: '100%',
  },


  /* ----- ----- Media queries ----- ----- */

  appSmallSize: {
    '@media (max-width: 1440px)': {
      width: '90%',
      height: v.sizes.appHeightSmallScreen,
    },
  },

  loginWrapperSmall: {
    '@media (max-width: 1440px)': {
      height: v.sizes.appContentHeightSmallScreen,
    },
  }

});

