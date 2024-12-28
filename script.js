function mapLetters(word) {
  // Initialize a Map to store the result
  const letterMap = new Map();

  // Iterate through the string
  for (let i = 0; i < word.length; i++) {
    const letter = word[i]; // Current letter

    // Check if the letter already exists in the Map
    if (!letterMap.has(letter)) {
      // If not, initialize an empty array for this letter
      letterMap.set(letter, []);
    }

    // Add the current index to the letter's array
    letterMap.get(letter).push(i);
  }

  return letterMap;
}

// Examples
console.log(mapLetters("dodo")); // Map { 'd' => [ 0, 2 ], 'o' => [ 1, 3 ] }
console.log(mapLetters("froggy")); // Map { 'f' => [ 0 ], 'r' => [ 1 ], 'o' => [ 2 ], 'g' => [ 3, 4 ], 'y' => [ 5 ] }
console.log(mapLetters("grapes")); // Map { 'g' => [ 0 ], 'r' => [ 1 ], 'a' => [ 2 ], 'p' => [ 3 ], 'e' => [ 4 ], 's' => [ 5 ] }
