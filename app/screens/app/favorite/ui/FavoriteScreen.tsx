import EventCard from '@components/eventCard/EventCard';
import Icon from '@components/Icon';
import ScreenWrapper from '@components/ScreenWrapper';
import {
  eventListAction,
  getAllFavoriteEventSelector,
} from '@screens/app/event/api/Events.slice';
import {colors} from '@theme/colors';
import {typography} from '@theme/typography';

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const FavoriteScreen: React.FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch();
  const favoriteEventListFromStore = useSelector(getAllFavoriteEventSelector);

  const handleOnFavorite = (selectedEventId: number) => {
    dispatch(eventListAction.toggleFavorite(selectedEventId));
  };

  return (
    <ScreenWrapper style={styles.container}>
      <FlatList
        contentContainerStyle={{flex: 1}}
        data={favoriteEventListFromStore}
        renderItem={({item}) => (
          <EventCard event={item} onFavoriteClick={handleOnFavorite} />
        )}
        keyExtractor={(item, index) =>
          `${item.event_date_id.toString()} + ${index.toString()}`
        }
        initialNumToRender={3}
        ListEmptyComponent={() => {
          if (
            favoriteEventListFromStore &&
            favoriteEventListFromStore?.length === 0
          ) {
            return (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No more Favorites events</Text>
                <Icon
                  name={'heart'}
                  type="FontAwesome"
                  color={colors.primary}
                  size={15}
                />
              </View>
            );
          }
          return null;
        }}
      />
    </ScreenWrapper>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 14,
    backgroundColor: 'transparent',
  },
  emptyText: {
    fontFamily: typography.secondary.semiBold,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: colors.text,
  },
  emptyContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
