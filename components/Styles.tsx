import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#ff1",
    flex: 1,
  },

  //personal info

  personalInfoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "stretch",
  },

  logo: {
    width: 150,
    height: 150,
    marginTop: 15,
    resizeMode: "contain",
    alignSelf: "center",
  },

  enterYourName: {
    alignSelf: "center",
    padding: 10,
  },

  nameText: {
    fontSize: 20,
  },

  nameTextInput: {
    borderColor: "rgba(52, 52, 52, 0.8)",
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 18,
  },

  avatarBig: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginTop: 15,
    alignSelf: "center",
  },

  //chat
  sendSection: {
    flexDirection: "row",
    margin: 15,
  },

  chatTextInput: {
    marginRight: 5,
    borderColor: "rgba(52, 52, 52, 0.8)",
    borderWidth: 1,
    borderRadius: 4,
    flexGrow: 1,
    fontSize: 18,
  },

  chatItemHeader: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  flatListItem: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    paddingBottom: 7,
    marginBottom: 7,
    marginLeft: 16,
    marginRight: 16,
    borderColor: "green",
  },

  chatText: {
    fontSize: 18,
  },

  smallItalicText: {
    fontSize: 16,
    fontStyle: "italic",
    alignSelf: "center",
  },

  avatarSmall: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 2,
  },
});
