import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Modal from "react-native-modal";

export default function ChooseLangScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const toggleModal = (language) => {
    setSelectedLanguage(language);
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.headtitle, styles.alignLeft]}>ยินดีต้อนรับ</Text>
      <Text style={[styles.title, styles.alignLeft]}>กรุณาเลือกภาษา</Text>
      <TouchableOpacity
        style={styles.lanButton}
        onPress={() => toggleModal("English")}
      >
        <Text style={styles.lanButtonText}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.lanButton}
        onPress={() => toggleModal("ภาษาไทย")}
      >
        <Text style={styles.lanButtonText}>ภาษาไทย</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {selectedLanguage === "English" ? "Terms and Conditions" : "เงื่อนไขการใช้งาน"}
          </Text>
          <Text style={styles.modalText}>
            {selectedLanguage === "English"
              ? "Please read the terms and conditions carefully before using the application."
              : "กรุณาอ่านเงื่อนไขการใช้งานอย่างละเอียด ก่อนที่คุณจะใช้แอปพลิเคชันนี้"}
          </Text>

          <View style={{ flex: 1 }} />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.declineButton}
              onPress={() => {
                console.log("User declined the terms");
                setModalVisible(false);
              }}
            >
              <Text style={styles.declineButtonText}>{selectedLanguage === "English" ? "Decline" : "ปฏิเสธ"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => {
                console.log("User accepted the terms");
                setModalVisible(false);
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.acceptButtonText}>{selectedLanguage === "English" ? "Accept" : "ยอมรับ"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: Dimensions.get("window").height * 0.2,
  },
  headtitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  alignLeft: {
    alignSelf: "flex-start",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: Dimensions.get("window").height * 0.5,
    justifyContent: "flex-start",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  declineButton: {
    backgroundColor: "white",
    borderColor: "#006633",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  declineButtonText: {
    color: "#006633",
    fontSize: 16,
    textAlign: "center",
  },
  acceptButton: {
    backgroundColor: "#006633",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
  },
  acceptButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  lanButton: {
    backgroundColor: "#006633",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  lanButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
