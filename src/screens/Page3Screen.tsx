import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3Screen</Text>
      <Button title="Volver" onPress={() => navigation.pop()} />
      <Button title="Pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Page3Screen;
