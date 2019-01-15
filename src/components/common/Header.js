// Import libraries for making a component
import React from 'react';
import { Text, View, Platform } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    ...Platform.select({
      ios: {
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
      },
      android: {
        elevation: 4
      }
    }),
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// Make components available to other parts of the app
export { Header };
