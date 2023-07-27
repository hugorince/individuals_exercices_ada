const checkPassword = (str) => {
  const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

  if (str.length < 7) {
    return false;
  }

  return regex.test(str);
};

console.log(checkPassword("Aaa6aaa"));

const button = document.getElementById("submitButton");
const inputPassword = document.getElementById("inputPassword");

inputPassword.onchange = () => {
  console.log(inputPassword.value);
  checkPassword(inputPassword.value)
    ? (inputPassword.style.borderColor = "green")
    : (inputPassword.style.borderColor = "red");
};
