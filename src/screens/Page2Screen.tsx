import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

const Page2Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Ir pagina 3 "
        onPress={() => navigation.navigate('Page3Screen')}
      />
    </View>
  );
};

export default Page2Screen;
