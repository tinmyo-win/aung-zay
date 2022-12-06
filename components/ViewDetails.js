import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";


const ViewDetails = ({ allUnits }) => {


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.scrollView}>
          <View>
            {allUnits.map((u, i) => (
              <View key={i} style={styles.subView}>
                <Text>{i < 10 ? "0" + i : i}</Text>
                <Text>{u}Ks</Text>
              </View>
            ))}
          </View>
          <View>
            {allUnits.map((u, i) => (
              <View key={i} style={styles.subView}>
                <Text>{i < 10 ? "0" + i : i}</Text>
                <Text>{u}Ks</Text>
              </View>
            ))}
          </View>
          <View>
            {allUnits.map((u, i) => (
              <View key={i} style={styles.subView}>
                <Text>{i < 10 ? "0" + i : i}</Text>
                <Text>{u}Ks</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",

  },
  subView: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ViewDetails;
