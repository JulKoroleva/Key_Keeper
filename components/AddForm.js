import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";

import SocialMediaIcon from "../assets/categories/globe-grid.png";
import Cash from "../assets/categories/money.png";
import Applications from "../assets/categories/target.png";
import Websites from "../assets/categories/spam.png";

const AboutScreen = () => {
  const countries = ["Social Media", "Applications", "Websites", "Bank cards"];
  const [selectedValue, setSelectedValue] = useState(null);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = () => {
    // Perform the logic to add the data to your state or database
    // You can use the values of category, name, login, and password here
    // ...

    // Clear the form fields
    setCategory("");
    setName("");
    setLogin("");
    setPassword("");

    // Close the modal
    onClose();
  };

  const renderCustomDropdownIcon = () => (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: 10, width: 30, height: 30 }}
    >
      <Path
        d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
        fill="#6c757d"
      />
    </Svg>
  );

  return (
    <View>
      <SelectDropdown
        data={countries}
        defaultButtonText={"Chose a category"}
        dropdownIconPosition="right"
        renderDropdownIcon={renderCustomDropdownIcon}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            switch (selectedItem) {
                case "Social Media":
                  return (
                    <>
                      <Image source={SocialMediaIcon} style={styles.icon} />
                      {selectedItem}
                    </>
                  );
                case "Bank cards":
                  return (
                    <>
                      <Image source={Cash} style={styles.icon} />
                      {selectedItem}
                    </>
                  );
                case "Applications":
                  return (
                    <>
                      <Image source={Applications} style={styles.icon} />
                      {selectedItem}
                    </>
                  );
                case "Websites":
                  return (
                    <>
                      <Image source={Websites} style={styles.icon} />
                      {selectedItem}
                    </>
                  );
                default:
                  return null;
              }
        }}
        rowTextForSelection={(item, index) => {
            switch (item) {
              case "Social Media":
                return (
                  <>
                    <Image source={SocialMediaIcon} style={styles.icon} />
                    {item}
                  </>
                );
              case "Bank cards":
                return (
                  <>
                    <Image source={Cash} style={styles.icon} />
                    {item}
                  </>
                );
              case "Applications":
                return (
                  <>
                    <Image source={Applications} style={styles.icon} />
                    {item}
                  </>
                );
              case "Websites":
                return (
                  <>
                    <Image source={Websites} style={styles.icon} />
                    {item}
                  </>
                );
              default:
                return null;
            }
          }}
        buttonStyle={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "#E5E6EB",
          borderRadius: 5,
        }}
        buttonTextStyle={{
            marginRight:150,
            
            width: 100,
        }}
        dropdownStyle={{
          borderRadius: 2,
        }}
        rowTextStyle={{
            width: 100,
            marginRight:150
        }}
        rowImageForSelection={(item, index) => {
            // Определите, какая иконка использовать для каждого элемента
           
          }}
      />
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Login"
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor:"transparent"
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 30,
    marginLeft: 15,
  },
});
export default AboutScreen;
