const message = "74 117 115 116 32 115 111 32 121 111 117 32 107 110 111 119 44 32 98 121 32 116 104 101 32 116 105 109 101 32 73 32 119 97 115 32 119 114 105 116 105 110 103 32 116 104 105 115 32 83 79 77 69 79 78 69 32 119 97 115 32 98 101 105 110 103 32 118 101 114 121 32 97 110 110 111 121 105 110 103 32 33 33 33 32 87 104 105 99 104 32 109 97 107 101 115 32 109 101 32 100 111 117 98 116 32 115 111 109 101 32 111 102 32 116 104 105 115 32 33 33 33 32 74 75 32 73 32 76 79 86 69 32 89 79 32 33 33 33 32 67 111 110 103 114 97 116 115 32 73 102 32 121 111 117 32 109 97 110 97 103 101 100 32 116 111 32 114 101 97 100 32 116 104 105 45 32 33 33 33 10"
function LoveMessageDecoder(code) {
  console.log("")
  console.log("Starting LoveMessageDecoder")
  console.log("")
  const ASCII_array = ["SOH", "STX", "ETX", "EOT", "ENQ", "ACK", "BEL", "BS", "HT", " LF", "VT", "FF", "CR", "SO", "SI", "DLE", "DC1", "DC2", "DC3", "DC4", "NAK", "SYN", "ETB", "CAN", "EM", "SUB", "ESC", "FS", "GS", "RS", "US", " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", ")", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "DEL"];
  let sentence = "";

  code.split(" ").forEach(number => {
    console.log(ASCII_array[number - 1])
    sentence += (ASCII_array[number - 1])
    console.log("")
  })

  console.log("Finished decoding messsage")
  console.log("")
  console.log("Displaying result")
  console.log("")
  console.log(sentence)
  console.log("")
  console.log("")
  console.log("")
  return "Finished LoveMessageDecoder"
}

console.log(LoveMessageDecoder(message))
console.log("")
