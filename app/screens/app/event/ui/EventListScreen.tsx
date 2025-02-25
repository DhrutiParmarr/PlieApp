import EventCard from '@components/eventCard/EventCard';
import ScreenWrapper from '@components/ScreenWrapper';
import {asyncGetEventList} from '@screens/app/event/api/Events.service';
import {
  eventListAction,
  getAllEventListSelector,
  getAllFavoriteEventSelector,
} from '@screens/app/event/api/Events.slice';
import {colors} from '@theme/colors';
import {typography} from '@theme/typography';

import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const EventListScreen: React.FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch();
  const eventListFromStore = useSelector(getAllEventListSelector);
  const eventListFromStoreV2 = useSelector(getAllFavoriteEventSelector);

  const isEventFetching = eventListFromStore.isLoading;
  const allEvents = eventListFromStore.data;

  useEffect(() => {
    const fetchAllEvents = () => {
      dispatch(asyncGetEventList('') as any);
    };
    fetchAllEvents();
  }, []);

  const handleOnFavorite = (selectedEventId: number) => {
    dispatch(eventListAction.toggleFavorite(selectedEventId));
  };

  return (
    <ScreenWrapper style={styles.container}>
      {isEventFetching ? (
        <ActivityIndicator size={'large'} color={colors.primary} />
      ) : (
        <FlatList
          contentContainerStyle={{flex: 1}}
          data={allEvents}
          renderItem={({item}) => (
            <EventCard event={item} onFavoriteClick={handleOnFavorite} />
          )}
          keyExtractor={(item, index) =>
            `${item.event_date_id.toString()} + ${index.toString()}`
          }
          initialNumToRender={3}
          ListEmptyComponent={() => {
            if (!isEventFetching && allEvents && allEvents?.length === 0) {
              return (
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>No data available</Text>
                </View>
              );
            }
            return null;
          }}
        />
      )}
    </ScreenWrapper>
  );
};

export default EventListScreen;

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
