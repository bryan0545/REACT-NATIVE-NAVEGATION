import {StyleSheet} from 'react-native';

export const colores = {
  prymary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonFont: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuItem: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  menuText: {
    fontSize: 20,
  },
  menuButton: {
    marginLeft: 10,
    width: 40,
    height: 40,
  },
});
