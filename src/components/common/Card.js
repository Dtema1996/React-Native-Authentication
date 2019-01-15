import React from 'react';
import { View, Platform } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      ...Platform.select({
        iso: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 1,
        },
        android: {
          elevation: 4
        }
      }),
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
  }
};

export { Card };
