import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export const LoginScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/PhotoBG.jpg")}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            style={styles.input}
            email
            placeholder="Адреса електронної пошти"
          />
          <TextInput style={styles.input} password placeholder="Пароль" />
          <Pressable>
            <Text style={styles.inputLink}>Показати</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Увійти</Text>
          </Pressable>
          <View style={styles.textWrap}>
            <Text style={styles.text}>Немає акаунту?</Text>
            <Pressable>
              <Text style={styles.textLink}>Зареєструватися</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  container: {
    marginTop: "auto",
    width: "100%",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },

  form: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    gap: 16,
  },

  title: {
    marginTop: 32,
    marginBottom: 33,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
  },

  input: {
    width: "100%",
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },

  inputLink: {
    position: "absolute",
    top: -51,
    right: 16,
    color: "#1B4371",
  },

  button: {
    marginTop: 43,
    display: "flex",
    width: "100%",
    padding: 16,
    alignItems: "center",
    fontSize: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  buttonText: {
    color: "#FFFFFF",
  },

  textWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
  },

  text: {
    color: "#1B4371",
  },

  textLink: {
    color: "#1B4371",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});
