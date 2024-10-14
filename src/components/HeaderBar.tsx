import React from 'react';
import {COLORS, FONTSIZE} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';
import Text from './UI/Text';
import View from './UI/Box';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View
      p="space_30"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text
        fontSize={'size_20'}
        color={'primaryWhiteHex'}
        fontFamily={'poppins_semibold'}>
        {title}
      </Text>
      <ProfilePic />
    </View>
  );
};

export default HeaderBar;
