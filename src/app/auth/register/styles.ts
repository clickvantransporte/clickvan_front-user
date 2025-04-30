import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        gap: 20,
        backgroundColor: '#fff',
        padding: 20,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        gap: 20,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '10',
        padding: 16,
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
      },
      boxTitle: {
        fontSize: 16,
        fontWeight: 500,
        color: '#222831',
        padding: 0,
        margin: 0,
      },
      button: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
      },
      buttonTitle: {
        fontSize: 24,
        fontWeight: 500,
        padding: 0,
        margin: 0,
      },
      loginText: {
        fontSize: 16,
        color: "222831",
      },
});