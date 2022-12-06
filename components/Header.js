import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'

const Header = () => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aung Zay</Text>
      <Text style={styles.text} onPress={() => setShow(true)}>{date.toLocaleDateString()}</Text>
      {show && (<DateTimePicker value={date} onChange={onChange}  />)}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'teal',
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "flex-end",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
});

export default Header;
