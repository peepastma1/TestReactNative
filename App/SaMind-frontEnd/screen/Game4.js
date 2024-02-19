// import React, { useState, useEffect } from "react";
// import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

// const ColorGame = () => {
//   const [colors, setColors] = useState([]);
//   const [correctColorIndex, setCorrectColorIndex] = useState(0);
//   const [time, setTime] = useState(10);
//   const [gameOver, setGameOver] = useState(false);

//   useEffect(() => {
//     generateRandomColors();
//     const interval = setInterval(() => {
//       setTime((prevTime) => {
//         if (prevTime > 1) {
//           return prevTime - 1;
//         } else {
//           setGameOver(true);
//           clearInterval(interval);
//           return 0;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const generateRandomColors = () => {
//     const colorOptions = ["red", "blue", "green", "yellow", "pink"];
  
//     // Randomly select a different color index
//     let differentColorIndex = Math.floor(Math.random() * colorOptions.length);

//     // Ensure that the different color is not the same as the previous round
//     while (differentColorIndex === correctColorIndex) {
//       differentColorIndex = Math.floor(Math.random() * colorOptions.length);
//     }
  
//     // Initialize the colors array with one instance of the different color and the rest with the same color
//     const colorsArray = colorOptions.map((color, index) =>
//       index === differentColorIndex
//         ? colorOptions[differentColorIndex]
//         : colorOptions[0] // You can change this to any other index if you want a different color
//     );
  
//     // Shuffle the colors array to randomize the positions
//     for (let i = colorsArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [colorsArray[i], colorsArray[j]] = [colorsArray[j], colorsArray[i]];
//     }
  
//     // Set the correct color index to the index of the different color
//     setCorrectColorIndex(differentColorIndex);
  
//     // Set the colors array in the state
//     setColors(colorsArray);
//   };
  
  

//   const handleColorSelection = (selectedIndex) => {
//     if (selectedIndex === correctColorIndex) {
//       generateRandomColors();
//     } else {
//         setGameOver(true);
//     }
//   };

  

//   const resetGame = () => {
//     setTime(10);
//     setGameOver(false);
//     generateRandomColors();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.timer}>Time: {time}</Text>
//       {gameOver ? (
//         <View>
//           <Text style={styles.gameOverText}>Game Over!</Text>
//           <Button title="Play Again" onPress={resetGame} />
//         </View>
//       ) : (
//         <View style={styles.colorGrid}>
//           {colors.map((color, index) => (
//             <TouchableOpacity
//               key={index}
//               style={{
//                 flex: 1,
//                 aspectRatio: 1,
//                 backgroundColor: color,
//                 margin: 5,
//               }}
//               onPress={() => handleColorSelection(index)}
//             />
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   timer: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   gameOverText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   colorGrid: {
//     flexDirection: "row",
//     marginBottom: 5,
//   },
// });

// export default ColorGame;


import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NumberGame = () => {
  const navigation = useNavigation();
  const [numbers, setNumbers] = useState([]);
  const [nextExpectedNumber, setNextExpectedNumber] = useState(1);
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(null);

  useEffect(() => {
    generateRandomNumbers();

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0 && !gameOver) {
          return prevTime - 1;
        } else {
          clearInterval(timerInterval);
          calculateScore();
          setGameOver(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [gameOver]);

  const generateRandomNumbers = () => {
    const numberOptions = Array.from({ length: 16 }, (_, index) => index + 1);
    shuffleArray(numberOptions);

    setNumbers(numberOptions);
  };

  const handleNumberSelection = (selectedNumberIndex) => {
    const selectedNumber = numbers[selectedNumberIndex];
  
    if (!gameOver) {
      if (selectedNumber === nextExpectedNumber) {
        if (nextExpectedNumber === 16) {
          // If 16 is clicked, the game is won
          calculateScore();
          setGameOver(true); // Set game over to true for a win
        } else {
          // Otherwise, increment the expected number
          setNextExpectedNumber(nextExpectedNumber + 1);
          // Add the clicked number to the list
          setClickedNumbers([...clickedNumbers, selectedNumber]);
        }
      } else {
        // Incorrect number clicked, game over
        calculateScore();
        setGameOver(true);
      }
    }
  };
  

  const calculateScore = () => {
    // const usedTime = 15 - timeLeft;
    const currentScore = Math.max(0, timeLeft) * 10;
    setScore(gameOver ? currentScore : 0);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const resetGame = () => {
    setNextExpectedNumber(1);
    setClickedNumbers([]);
    setGameOver(false);
    setTimeLeft(10);
    setScore(null);
    generateRandomNumbers();
  };

  return (
    <View style={styles.container}>
      {gameOver ? (
        <View>
          <Text style={[styles.gameOverText, { color: nextExpectedNumber === 16 ? 'green' : 'red' }]}>
            {nextExpectedNumber === 16 ? `You Win! Score: ${score !== null ? score : 0}` : 'Game Over! Score: 0'}
          </Text>
          <Button title="Confirm" onPress={() => navigation.goBack()} />
        </View>
      ) : (
        <View>
          <Text style={styles.timer}>Time Left: {timeLeft}s</Text>
          <View style={styles.numberGrid}>
            {numbers.map((number, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.numberBlock,
                  { opacity: clickedNumbers.includes(number) ? 0 : 1 },
                ]}
                onPress={() => handleNumberSelection(index)}
              >
                <Text style={styles.numberText}>{number}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameOverText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "red",
  },
  timer: {
    fontSize: 18,
    marginBottom: 10,
  },
  numberGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  numberBlock: {
    width: 80,
    height: 80,
    backgroundColor: "lightblue",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NumberGame;



