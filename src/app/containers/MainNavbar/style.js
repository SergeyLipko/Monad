import { StyleSheet } from 'aphrodite';
import { flexCenter, flexDefault } from '../../styles/utils/mixins';
import { variables as v } from '../../styles/utils/variables';



export const MainNavBarStyles = StyleSheet.create({

  MN_Wrapper: {
    ...flexDefault('space-between', 'center'),
    width: '100%',
    height: v.sizes.mainNavBarHeight,
    backgroundColor: v.colors.darkGrey,
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
  },

  MN_LogoWrapper: {
    ...flexCenter(),
    width: '140px',
    height: v.sizes.mainNavBarHeight,
    backgroundColor: v.colors.darkBlue,
    borderTopLeftRadius: '6px',
  },

  MN_LogoText: {
    fontSize: '27px',
    fontWeight: '800',
    color: '#fff',
  },

  MN_AppNav: {
    ...flexDefault('space-between', 'center'),
    height: v.sizes.mainNavBarHeight,
    paddingRight: '25px',
  },

  MN_AppNavItemIcon: {
    fontSize: '24px',
    color: v.colors.iconColor,
    ':hover': {
      cursor: 'pointer',
      color: '#fff',
    },
  },

});
