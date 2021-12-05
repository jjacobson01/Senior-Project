import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import { FONTS, SIZES, COLORS, icons } from "../constants"

const CardItem = ({ item, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 100,
                alignItems: 'center',
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                borderWidth: 2,
                borderRadius: SIZES.radius,
                borderColor: isSelected ? COLORS.primary : COLORS.black,
                backgroundColor: COLORS.white
            }}
            onPress={() => onPress(item)}
        >
            {/* Icon */}
            <View
                style={{
                    width: 60,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderRadius: SIZES.radius,
                    borderColor: COLORS.black
                }}
            >
                <Image
                    source={item.icon}
                    resizeMode="center"
                    style={{
                        width: 35,
                        height: 35
                    }}
                />
            </View>

            {/* Name */}
            <Text
                style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    ...FONTS.h3
                }}
            >
                {item.name}
            </Text>

            {/* Radio button */}
            <Image
                source={isSelected ? icons.check_on : icons.check_off}
                style={{
                    width: 25,
                    height: 25
                }}
            />
        </TouchableOpacity>
    )
}

export default CardItem;