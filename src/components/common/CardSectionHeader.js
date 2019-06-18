import React from 'react';
import { View } from 'react-native';

const CardSectionHeader = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    textAlign: 'center',
  }
};

export { CardSectionHeader };
