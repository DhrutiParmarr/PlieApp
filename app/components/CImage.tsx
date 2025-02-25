import AppImageList from '@root/app/assets/images';
import {colors} from '@theme/colors';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface CImageProps extends ImageProps {
  style?: StyleProp<ImageStyle>;
  placeholder?: string;
  loader?: boolean;
  source: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
}

const CImage: React.FC<CImageProps> = ({
  source,
  style,
  placeholder = AppImageList.imagePlaceHolder,
  loader = true,
  onPress,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const $imageContainer = [styles.container, style];
  const $image = [styles.image];

  return (
    <TouchableOpacity
      style={$imageContainer}
      activeOpacity={onPress ? 0.6 : 1}
      onPress={onPress}>
      {loading && loader && (
        <ActivityIndicator
          style={styles.loader}
          size="small"
          color={colors.primary}
        />
      )}

      <Image
        source={error ? placeholder : source}
        style={$image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onError={() => setError(true)}
        alt="plie img"
        {...props}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loader: {
    position: 'absolute',
  },
});

export default CImage;
