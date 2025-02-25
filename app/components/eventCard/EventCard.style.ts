import {colors} from '@theme/colors';
import {typography} from '@theme/typography';
import {SCREEN_WIDTH} from '@utils/globalConstant';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  eventContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 14,
    backgroundColor: colors.defaultBackGround,
    borderRadius: 12,
    elevation: 3,
    gap: 3,
  },
  image: {
    height: 90,
    width: 85,
    borderRadius: 5,
  },
  eventDetailsContainer: {
    gap: 8,
    flex: 1,
    justifyContent: 'space-between',
  },
  eventTextInnerContainer: {
    gap: 5,
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'space-around',
  },
  eventTitle: {
    fontFamily: typography.secondary.semiBold,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.palette.Woodsmoke,
  },
  eventDateText: {
    fontFamily: typography.secondary.medium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 11,
    textAlign: 'center',
    color: colors.palette.greenLight,
    opacity: 0.8,
  },
  eventPriceText: {
    fontFamily: typography.secondary.medium,
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 11,
    textAlign: 'center',
    color: colors.palette.secondary,
    opacity: 0.8,
  },
  keywordsScrollContainer: {gap: 5, alignItems: 'center'},
  keywordsContainer: {
    borderRadius: 20,
    backgroundColor: colors.palette.Zircon,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  keywordsText: {
    fontFamily: typography.fonts.poppins.medium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    color: colors.text,
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: SCREEN_WIDTH * 0.2,
  },
  actionIconContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  locationTextContainer: {
    fontFamily: typography.secondary.regular,
    fontWeight: '400',
    lineHeight: 14,
    fontSize: 11,
    textAlign: 'right',
    color: colors.secondary,
  },
});
