import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import React, {useState} from "react";

import {
  Header,
  Keyboard,
  ViewDetails,
} from "./components";

export default function App() {
  const arr100 = new Array(100).fill(0)
  const obj100 = {};

  arr100.forEach((element, index) => {
    obj100[index<10 ? '0' + index : index.toString()] = element;
  });
  const [allUnits, setAllUnits] = useState(arr100)

  const changeAllUnits = (arr100) => {
    setAllUnits(arr100);
  }
  return (
    <ApplicationProvider {...eva} theme={eva.light}>

        <Header />
        <ViewDetails allUnits={allUnits} />
        <Layout style={styles.bottomView}>
          <View style={styles.contentContainer}>
            <Keyboard changeAllUnits={changeAllUnits} />
          </View>
        </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  bottomView: {
    bottom: 50,
    position: "absolute"
  }
});
