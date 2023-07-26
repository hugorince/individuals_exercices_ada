const checkPassword = (str) => {
  const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

  if (str.length < 7) {
    return false;
  }

  return regex.test(str);
};

console.log(checkPassword("Aaa6aaa"));
