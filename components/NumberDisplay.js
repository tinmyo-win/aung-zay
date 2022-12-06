import React, { useEffect, useRef } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Text, Layout } from "@ui-kitten/components";

const NumberDisplay = ({numbers, units, isUnit, toggleIsUnit}) => {
  const handleNumberFocus = () => {
    toggleIsUnit(false)
  }
  const handleUnitFocus = () => {
    toggleIsUnit(true)
  }

  const refNumberInput = useRef(null);
  const refUnitInput = useRef(null)

  useEffect(() => {
    if(isUnit) {
      refUnitInput.current.focus();
    } else {
      refNumberInput.current.focus();
    }
  }, [isUnit])
  
  return(
    <Layout style={styles.container}>
      <Layout style={{flexDirection: 'row'}}>
        <Text>Number: </Text>
        <TextInput ref={refNumberInput} showSoftInputOnFocus={false} onFocus={handleNumberFocus} >{numbers}</TextInput>
      </Layout>
      <Layout style={{flexDirection: 'row'}}>
        <Text>Unit: </Text>
        <TextInput ref={refUnitInput} showSoftInputOnFocus={false} onFocus={handleUnitFocus} >{units}</TextInput>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    height: '20%',
    marginVertical: 3,
    borderWidth: 2,
    borderColor: 'black',
  },
  numberDisplay: {

  }
})

export default NumberDisplay;