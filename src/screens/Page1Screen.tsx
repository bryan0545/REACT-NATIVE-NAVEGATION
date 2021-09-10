import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles, colores} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
          style={styles.menuButton}>
          <Text>
            <Icon name="menu-outline" size={40} color={colores.prymary} />
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Ir page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text>Navegar con argumentos</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, name: 'Pedro'})
          }>
          <Text style={styles.buttonFont}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: '#42F642',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, name: 'Maria'})
          }>
          <Text style={styles.buttonFont}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page1Screen;
