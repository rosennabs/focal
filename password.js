const password = process.argv[2];

const obfuscate = function (inputPassword) {
  let obfuscatedPassword = "";
  for (let i = 0; i < inputPassword.length; i++) {
    switch (inputPassword[i]) {
      case "a":
        obfuscatedPassword += "4";
        break;
      case "e":
        obfuscatedPassword += "3";
        break;
      case "o":
        obfuscatedPassword += "0";
        break;
      case "l":
        obfuscatedPassword += "1";
        break;
      default:
      obfuscatedPassword += inputPassword[i];
    }
  } return obfuscatedPassword;
}

console.log(obfuscate(password));