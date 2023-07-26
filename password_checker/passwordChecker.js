const checkLength = (str) => {
  const length = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/s;

  length.test(str);
};

console.log(checkLength("aaaa2aAa1"));
