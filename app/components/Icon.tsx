import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

type IconType =
  | 'MaterialIcons'
  | 'FontAwesome'
  | 'Feather'
  | 'Ionicons'
  | 'AntDesign'
  | 'Entypo'
  | 'SimpleLineIcons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  type: IconType;
  style?: ViewStyle;
  onPress?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'black',
  type = 'MaterialIcons',
  style,
  onPress,
}) => {
  let IconComponent: any;

  switch (type) {
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    case 'Feather':
      IconComponent = Feather;
      break;
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    case 'AntDesign':
      IconComponent = AntDesign;
      break;
    case 'SimpleLineIcons':
      IconComponent = SimpleLineIcons;
      break;

    default:
      IconComponent = AntDesign;
      break;
  }

  return onPress ? (
    <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.4}>
      <IconComponent name={name} size={size} color={color} />
    </TouchableOpacity>
  ) : (
    <IconComponent name={name} size={size} color={color} style={style} />
  );
};

export default Icon;
