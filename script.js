function firstWord(str) {
  // your code here
	// Check if the string is empty
    if (str.length === 0) {
        return str;
    }

    // Trim leading spaces and find the index of the first space
    let trimmedStr = str.trim();
    let firstSpaceIndex = trimmedStr.indexOf(' ');

    // If no space is found, return the entire string
    if (firstSpaceIndex === -1) {
        return trimmedStr;
    }

    // Return the substring from the beginning to the first space
    return trimmedStr.substring(0, firstSpaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
