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
} from "react-native";

import * as Animatable from "react-native-animatable";

import AddForm from "./AddForm";

import SocialMediaIcon from "../assets/categories/globe-grid.png";
import Cash from "../assets/categories/money.png";
import Applications from "../assets/categories/target.png";
import Websites from "../assets/categories/spam.png";

const HomeScreen = () => {
  const [data, setData] = useState([
    {
      category: "Social Media",
      icon: SocialMediaIcon,
      items: [
        { name: "VK", login: "user1", password: "pass1" },
        { name: "Одноклассники", login: "user2", password: "pass2" },
      ],
    },
    {
      category: "Applications",
      icon: Applications,
      items: [
        { name: "Music", login: "appUser1", password: "appPass1" },
        { name: "Telegram", login: "appUser2", password: "appPass2" },
      ],
    },
    {
      category: "Websites",
      icon: Websites,
      items: [
        { name: "VK", login: "user1", password: "pass1" },
        { name: "Yandex", login: "user2", password: "pass2" },
      ],
    },
    {
      category: "Bank cards",
      icon: Cash,
      items: [
        { name: "Visa", login: "appUser1", password: "appPass1" },
        { name: "MasterCard", login: "appUser2", password: "appPass2" },
      ],
    },
  ]);

  const [expandedCategories, setExpandedCategories] = useState([]);
  const [expandedSubItems, setExpandedSubItems] = useState([]);

  const [expanded, setExpanded] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const openModal = () => {
    setAddModalVisible(true);
  };

  const closeModal = () => {
    setAddModalVisible(false);
  };
  const handlePress = () => {
    setExpanded(!expanded);
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const toggleSubItem = (itemName) => {
    setExpandedSubItems((prevSubItems) =>
      prevSubItems.includes(itemName)
        ? prevSubItems.filter((item) => item !== itemName)
        : [...prevSubItems, itemName]
    );
  };

  const renderItem = ({ item, index }) => {
    const isExpanded = expandedCategories.includes(item.category);
    const isLastItem = index === data.length - 1;

    return (
      item.items.length > 0 && (
        <View>
          <TouchableOpacity
            style={[styles.itemCategory, isLastItem && styles.lastItemCategory]}
            onPress={() => toggleCategory(item.category)}
          >
            {isExpanded === true && (
              <Svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={styles.arrow}
              >
                <Path
                  d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                  fill="#6c757d"
                />
              </Svg>
            )}
            {isExpanded === false && (
              <Svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ ...styles.arrow, transform: [{ rotate: "-90deg" }] }}
              >
                <Path
                  d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                  fill="#6c757d"
                />
              </Svg>
            )}
            <Image source={item.icon} style={styles.itemImage} />
            <Text style={styles.title}>{item.category}</Text>
          </TouchableOpacity>
          {isExpanded && (
            <FlatList
              data={item.items}
              keyExtractor={(subItem, index) => `${index}`}
              renderItem={({ item: subItem, index: subIndex }) => (
                <TouchableOpacity
                  onPress={() => toggleSubItem(subItem.name)}
                  style={[
                    styles.subItem,
                    subIndex === item.items.length - 1 && styles.lastSubItem,
                  ]}
                >
                  <Text style={styles.subtitle}>{`${subItem.name}`}</Text>
                  {expandedSubItems.includes(subItem.name) && (
                    <View style={styles.userData}>
                      <Text>{`Login: ${subItem.login}`}</Text>
                      <Text>{`Password: ${subItem.password}`}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      )
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text></Text>
        {data.length > 0 ? (
          <FlatList
            data={data}
            keyExtractor={(item, index) => `${index}`}
            renderItem={renderItem}
          />
        ) : (
          <Text>Импортируйте пароли</Text>
        )}
      </View>
      <View
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          backgroundColor: "transparent"
        }}
      >
        {expanded && (
          <Animatable.View
            animation={expanded ? "fadeIn" : "fadeOut"}
            duration={700}
            style={{
              flexDirection: "row",
              position: "",
              top: 0,
              left: 0,
              zIndex: 1,
              transform: [{ rotate: expanded ? "0deg" : "90deg" }],
              
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  width: 50,
                  height: 50,
                  top: 30,
                  left: -5,
                  borderRadius: 50,
                  backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white" }}>?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openModal}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  top: -10,
                  left: 0,
                  borderRadius: 50,
                  backgroundColor: "green",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={{ color: "white" }}>+</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: 50,
                  height: 50,
                  top: 30,
                  left: 5,
                  borderRadius: 50,
                  backgroundColor: "yellow",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <Text style={{ color: "white" }}>0</Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
        )}
        {expanded === true && (
          <TouchableOpacity onPress={handlePress}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                backgroundColor: "blue",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>Cloud</Text>
            </View>
          </TouchableOpacity>
        )}
        {expanded === false && (
          <TouchableOpacity onPress={handlePress} style={{
            backgroundColor: "transparent"}}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                backgroundColor: "blue",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>...</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={addModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          {/* Your AddForm component can go here */}
          <AddForm />
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  itemCategory: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    fontSize: "24px",
    borderWidth: 1,
    borderColor: "#E5E6EB",
    borderStyle: "solid",
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#E5E6EB",
  },
  itemImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 15,
  },
  subItem: {
    width: "100%",
    paddingLeft: 65,
    padding: 10,
    // borderTopWidth: 1,
    borderTopWidth: 1,
    borderColor: "#E5E6EB",
    borderStyle: "solid",
  },
  lastSubItem: {
    marginBottom: 10,
  },
  arrow: {
    marginTop: 0,
    marginLeft: 5,
    // marginBottom: 40,
  },
  userData: {
    justifyContent: "space-around",
    width: 250,
    backgroundColor: "#dae1e7",
    opacity: 0.5,
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 16,
  },
  addBtn: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: "red",
  },
  modalContainer: {
    flex: 1, // Set flex to 1 to make it cover the entire screen
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"transparent"
  },
});

export default HomeScreen;
