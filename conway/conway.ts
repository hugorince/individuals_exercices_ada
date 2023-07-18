const decoupeChaine = (str: string) => {
  const arr = str.split("");
  let result: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      result.push(arr[i]);
    } else {
      result.push(arr[i] + " ");
    }
  }
  return result.join("");
};

console.log(decoupeChaine("ab"));
console.log(decoupeChaine("aabbca"));

const decritChaine = (str: string) => {
  const arr = str.split("");
  let result: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      let counter = 1;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === arr[i]) {
          counter++;
        } else {
          result.push(counter + arr[i]);
          break;
        }
      }
    } else if (arr[i] !== arr[i - 1]) {
      result.push("1" + arr[i]);
    }
  }
  return result.join("");
};

console.log(decritChaine("ab"));
console.log(decritChaine("aabbca"));

const suiteConway = (carac: string, n: number) => {
  if ((n = 1)) {
    return decritChaine(carac);
  } else {
    return suiteConway(carac, n - 1);
  }
};

console.log(suiteConway("a", 3));
