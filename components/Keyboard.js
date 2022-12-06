import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";

import NumberDisplay from "./NumberDisplay";
import Save from "./Save";
import numbersList from "../assets/numbersList";

const Keyboard = ({ changeAllUnits }) => {
  const { keys, clickNumbers, dropNumbers } = numbersList;

  const [numbers, setNumbers] = useState("");
  const [units, setUnits] = useState("");
  const [isUnit, setIsUnit] = useState(false);

  const toggleIsUnit = (isUnit) => {
    setIsUnit(isUnit);
  };

  const digitGenerator = (key) => {
    if (isUnit && isNaN(Number(key))) {
      return "";
    }

    if (isUnit) {
      return key;
    }

    if (clickNumbers.includes(key)) {
      setIsUnit(true);
      return key;
    }

    const regex = /^[0-9]{2}[:.,-]?$/;
    const regexDropNumbers = /^[0-9]{1}(ထိပ်|ပိတ်|ပတ်|ခွေ)[:.,-]?$/;
    const num = numbers + key;
    const twoDigit = num.match(regex);
    const dropNumbers = num.match(regexDropNumbers);
    if (dropNumbers) {
      setIsUnit(true);
      return dropNumbers[0];
    }
    if (twoDigit) {
      setIsUnit(true);
      return twoDigit;
    }

    return key;
  };

  const handlePress = (key) => {
    if (key === "C") {
      if (isUnit) {
        return setUnits(units.slice(0, -1));
      } else {
        return setNumbers(numbers.slice(0, -1));
      }
    }

    if (key === "R") {
      if (isUnit) {
        return;
      }
      if (isNaN(Number(numbers))) {
        return;
      }
      const reverseNum = numbers.toString().split("").reverse().join("");

      return setNumbers(reverseNum);
    }
    const digit = digitGenerator(key);
    if (!isUnit) {
      setNumbers(digit);
    } else {
      if (units > 100000) {
        return setIsUnit(units);
      }
      setUnits(units + digit);
    }
  };

  return (
    <View style={{ width: "100%" }}>
      <NumberDisplay
        numbers={numbers}
        units={units}
        isUnit={isUnit}
        toggleIsUnit={toggleIsUnit}
      />
      <View style={styles.container}>
        <View style={[styles.buttonGroup, styles.clickNumbers]}>
          {clickNumbers.map((key, i) => (
            <TouchableOpacity
              style={[styles.button, styles.clickNumber]}
              key={i}
              onPress={(e) => handlePress(key)}
            >
              <Text>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.buttonGroup, styles.keys]}>
          {keys.map((key, i) => (
            <TouchableOpacity
              style={[styles.button, styles.key]}
              key={i}
              onPress={(e) => handlePress(key)}
            >
              <Text>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.buttonGroup, styles.dropNumbers]} >
          {dropNumbers.map((key, i) => (
            <TouchableOpacity
              style={[styles.button, styles.dropNumber]}
              key={i}
              onPress={(e) => handlePress(key)}
            >
              <Text>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Save numbers={numbers} units={units} changeAllUnits={changeAllUnits} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  keys: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1.5,
    justifyContent: "center"
  },
  button: {
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  key: {
    width: 50,
    height: 50,
    backgroundColor: "green",
  },
  clickNumber: {
    marginBottom: 3,
    height: 50,
    backgroundColor: "teal",
  },
  clickNumbers: {
    flex: 0.9,
  },
  dropNumbers: {
    flex: 0.9,
  },
  dropNumber: {
    height: 50,
    backgroundColor: "red",
  },
});

export default Keyboard;
