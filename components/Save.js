import React, { useState, useEffect } from "react";
import { Button } from "@ui-kitten/components";

import numberLists from "../assets/numbersList";

const Save = ({ numbers, units, changeAllUnits }) => {
  const { keys, clickNumbers, dropNumbers } = numberLists;
  const arr100 = new Array(100).fill(0)

  const [allUnits, setAllUnits] = useState(arr100);
  const handleClickNumbers = (numbers) => {
    if (numbers === "အပူး") {
      const changedUnits = allUnits.map((u, i) => {
        if (i % 11 === 0) {
          u += Number(units);
        }
        return u;
      });
      setAllUnits(changedUnits);
    } else if (numbers === "နက္ခက်") {
      const changedUnits = allUnits.map((u, i) => {
        if (
          i === 18 ||
          i === 24 ||
          i === 35 ||
          i === 69 ||
          i === 70 ||
          i === 81 ||
          i === 42 ||
          i === 53 ||
          i === 96 ||
          i === 7
        ) {
          u += Number(units);
        }
        return u;
      });

      setAllUnits([...changedUnits]);
    } else if (numbers === "ပါဝါ") {
      const changedUnits = allUnits.map((u, i) => {
        if (
          i === 50 ||
          i === 27 ||
          i === 16 ||
          i === 38 ||
          i === 49 ||
          i === 5 ||
          i === 72 ||
          i === 61 ||
          i === 83 ||
          i === 94
        ) {
          u += Number(units);
        }
        return u;
      });
      setAllUnits(changedUnits);
    } else if (numbers === "ညီကို") {
      const changedUnits = allUnits.map((u, i) => {
        if (
          i === 1 ||
          i === 12 ||
          i === 23 ||
          i === 34 ||
          i === 45 ||
          i === 56 ||
          i === 67 ||
          i === 78 ||
          i === 89 ||
          i === 90
        ) {
          u += Number(units);
        }
        return u;
      });
      setAllUnits(changedUnits);
    }

  };

  const handletwoDigit = (numbers) => {
    const changedUnits = allUnits.map((u, i) => {
      if (i === Number(numbers)) {
        u += Number(units);
      }
      return u;
    });
    setAllUnits(changedUnits);
  };
  const handleDropNumbers = (numbers) => {
    const num = numbers.slice(0, 1);
    const drops = numbers.slice(1);
    if (drops === "ထိပ်") {
      const changedUnits = allUnits.map((u, i) => {
        let numString = i.toString();
        if (numString.length === 1) {
          numString = "0" + numString;
        }
        if (numString[0] === num) {
          u += Number(units);
        }
        return u;
      });
      setAllUnits(changedUnits);
    } else if (drops === "ပိတ်") {
      const changedUnits = allUnits.map((u, i) => {
        let numString = i.toString();
        if (numString.length === 1) {
          numString = "0" + numString;
        }
        if (numString[1] === num) {
          u += Number(units);
        }
        return u;
      });
      setAllUnits(changedUnits);
    } else if (drops === "ပတ်") {
      const changedUnits = allUnits.map((u, i) => {
        let numString = i.toString();
        if (numString.length === 1) {
          numString = "0" + numString;
        }
        if (numString[0] === num || numString[1] === num) {
          u += Number(units);
        }
        return u;
      });
      setAllUnits(changedUnits);
    }

  };

  useEffect(() => {
    changeAllUnits(allUnits);
  }, [allUnits])

  const handleSave = () => {
    const regex = /^[0-9]{2}[:.,-]?$/;
    const regexDropNumbers = /^[0-9]{1}(ထိပ်|ပိတ်|ပတ်|ခွေ)[:.,-]?$/;
    const twoDigit = numbers.toString().match(regex);
    const dropNumbers = numbers.toString().match(regexDropNumbers);
    if (clickNumbers.includes(numbers)) {
      handleClickNumbers(numbers);
    } else if (twoDigit) {
      handletwoDigit(numbers);
    } else if (dropNumbers) {
      handleDropNumbers(numbers);
    }
  };
  return (
    <Button style={{ flex: 1 }} onPress={handleSave}>
      {"ထည့်မည်"}
    </Button>
  );
};

export default Save;
