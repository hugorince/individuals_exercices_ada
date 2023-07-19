const str =
  "J'utilise les expressions regulières pour retrouver des schémas de texte au sein d'une chaine de caractères.";

const exp = /\bde\b|\bdes\b|\bles\b/g;
const exp2 = /[a-zA-Z]/g;
const exp3 = /[^ a-zA-Z0-9]/g;

console.log(str.match(exp3).length);
