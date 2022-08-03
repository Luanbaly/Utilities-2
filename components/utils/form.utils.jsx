const getRandomLowercase = () => {
    let charset = "abcdefghiklmnopqrstuvwxyz";
    let randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };
  const getRandomUppercase = () => {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };
  
  const getRandomNumber = () => {
    let charset = "0123456789";
    let randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };
  
  const getRandomSymbol = () => {
    let charset = "[]{}?!|-_*#^/()&%$£";
    let randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };
  
  const generatePassword = ( hasLowercase = true, hasUppercase = true, hasNumber = true, hasSymbol = true, len = 20) => {
    let functionSet = [];
  
    functionSet = hasLowercase ? [...functionSet, getRandomLowercase] : functionSet;
    functionSet = hasUppercase ? [...functionSet, getRandomUppercase] : functionSet;
    functionSet = hasNumber ? [...functionSet, getRandomNumber] : functionSet;
    functionSet = hasSymbol ? [...functionSet, getRandomSymbol] : functionSet;
  
    let password = [];
    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor(Math.random() * functionSet.length);
      let character = functionSet[randomIndex]();
      password.push(character);
    }
  
    return password.join("");
  };
  
  export { generatePassword };
  