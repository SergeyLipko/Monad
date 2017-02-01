import { StyleSheet } from 'aphrodite';
import { flexCenter } from '../../styles/utils/mixins';
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

  appMainContainer: {
    width: '100%',
    height: v.sizes.appContentHeight,
  },



  /* ----- ----- Media queries ----- ----- */

  appSmallSize: {
    '@media (max-width: 1440px)': {
      width: '90%',
      height: v.sizes.appHeightSmallScreen,
    },
  },

  appMainContainerSmall: {
    '@media (max-width: 1440px)': {
      height: v.sizes.appContentHeightSmallScreen,
    },
  }

});

