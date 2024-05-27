import {Dimensions, StyleSheet} from "react-native";
const screenWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  instructions: {
    fontSize: screenWidth > 600 ? 18 : 14, // Dynamic font size
    fontWeight: "bold",
    color: "black",
    marginBottom: 15,
    textAlign: "center",
    paddingBottom: 20,
  },
  instructionsSearch: {
    fontWeight: "bold",
    color: "black",
    marginBottom: 15,
    textAlign: "center",
    fontSize: screenWidth > 600 ? 18 : 14, // Dynamic font size

  },
  click: {
    alignSelf: "flex-start",
  },
  pics: {
    minHeight: 200,
    minWidth: 200,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    width: 150,
    height: 20,
    marginBottom: 50,
    textAlign: "center",
  },
  view: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container: {
    paddingHorizontal: screenWidth > 600 ? 50 : 20, // Dynamic padding
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  darkContainer: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: screenWidth > 600 ? 18 : 14, // Dynamic font size
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  darkTitle: {
    fontSize: screenWidth > 600 ? 18 : 14, // Dynamic font size
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  startButton: {
    borderRadius: 10,
    marginTop: 20,
    padding: 0,
    backgroundColor: "white",
    width: 100,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  submitButton: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 20,
    padding: 0,
    backgroundColor: "white",
    width: 100,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    padding: 0,
    backgroundColor: "white",
    width: 100,
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  homeImage: {
    position: "absolute",
    justifyContent: "center",
    flex: 1,
    height: "100%",
    width: "100%",
  },
  darkButton: {
    marginTop: 20,
    padding: 0,
    backgroundColor: "black",
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  darkButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  darkInstructions: {
    fontSize: screenWidth > 600 ? 18 : 14, // Dynamic font size
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
    textAlign: "center",
    paddingBottom: 20,
  },
  darkInstructionsSearch: {
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
    textAlign: "center",
    fontSize: screenWidth > 600 ? 18 : 14, // Dynamic font size

  },
  darkInput: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    width: 150,
    height: 20,
    marginBottom: 50,
    textAlign: "center",
    color: "white",
  },
  darkModalView: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  darkTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
