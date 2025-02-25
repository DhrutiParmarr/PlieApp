import CImage from '@components/CImage';
import {styles} from '@components/eventCard/EventCard.style';
import Icon from '@components/Icon';
import {IEventType} from '@screens/app/event/ui/EventList.constant';
import {colors} from '@theme/colors';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';

interface IEventCardType {
  event: IEventType;
  onFavoriteClick: (selectedEventId: number) => void;
}

const EventCard: React.FC<IEventCardType> = ({
  event,
  onFavoriteClick,
}): JSX.Element => {
  const {
    event_id,
    event_name,
    event_profile_img,
    readable_from_date,
    readable_to_date,
    event_price_from,
    event_price_to,
    city,
    country,
    keywords,
    isFavorite,
    event_date_id,
  } = event;
  return (
    <View style={styles.eventContainer} key={event_date_id}>
      {/* Image */}
      <CImage source={{uri: event_profile_img}} style={styles.image} />

      {/* EventDetails */}
      <View style={styles.eventDetailsContainer}>
        <View style={styles.eventTextInnerContainer}>
          <Text
            style={styles.eventTitle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {event_name}
          </Text>
          <Text
            style={
              styles.eventDateText
            }>{`${readable_from_date} ${readable_to_date}`}</Text>

          <Text style={styles.eventPriceText}>
            {`€${event_price_from}${
              event_price_to ? ` - €${event_price_to}` : ''
            }`}
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.keywordsScrollContainer}>
          {keywords?.map((item: any, index: number) => (
            <View style={styles.keywordsContainer}>
              <Text
                style={styles.keywordsText}
                key={`${event_date_id}-${index}`}
                numberOfLines={1}>
                {item}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Event Action Container*/}
      <View style={styles.actions}>
        <Icon name="arrowright" type="AntDesign" onPress={() => {}} />
        <Text
          style={styles.locationTextContainer}
          numberOfLines={2}>{`${city} ${country}`}</Text>

        <View style={styles.actionIconContainer}>
          <Icon name="upload" type="Feather" onPress={() => {}} />
          <Icon
            name={isFavorite ? 'heart' : 'heart-o'}
            type="FontAwesome"
            color={colors.primary}
            onPress={() => onFavoriteClick(event_date_id)}
          />
        </View>
      </View>
    </View>
  );
};

export default EventCard;
