const data = require("./data.json");
const dico: any = {
  ATA: "I",
  ATC: "I",
  ATT: "I",
  ATG: "M",
  ACA: "T",
  ACC: "T",
  ACG: "T",
  ACT: "T",
  AAC: "N",
  AAT: "N",
  AAA: "K",
  AAG: "K",
  AGC: "S",
  AGT: "S",
  AGA: "R",
  AGG: "R",
  CTA: "L",
  CTC: "L",
  CTG: "L",
  CTT: "L",
  CCA: "P",
  CCC: "P",
  CCG: "P",
  CCT: "P",
  CAC: "H",
  CAT: "H",
  CAA: "Q",
  CAG: "Q",
  CGA: "R",
  CGC: "R",
  CGG: "R",
  CGT: "R",
  GTA: "V",
  GTC: "V",
  GTG: "V",
  GTT: "V",
  GCA: "A",
  GCC: "A",
  GCG: "A",
  GCT: "A",
  GAC: "D",
  GAT: "D",
  GAA: "E",
  GAG: "E",
  GGA: "G",
  GGC: "G",
  GGG: "G",
  GGT: "G",
  TCA: "S",
  TCC: "S",
  TCG: "S",
  TCT: "S",
  TTC: "F",
  TTT: "F",
  TTA: "L",
  TTG: "L",
  TAC: "Y",
  TAT: "Y",
  TAA: "_",
  TAG: "_",
  TGC: "C",
  TGT: "C",
  TGA: "_",
  TGG: "W",
};

const str: string = data.data;

const result1: string[] = str.match(/.{1,3}/g) ?? [];
const final = result1.map((res) => (res = dico[res])).join("");

const result2: string[] = str.match(/.{1,25}/g) ?? [];
const result3: any = result2.map((res) => res.match(/.{1,5}/g) ?? []);

const objFinal: any = [];

const handleOccurencies = (arr: string[]) => {
  const obj: any = {
    A: [0, 0, 0, 0, 0],
    C: [0, 0, 0, 0, 0],
    G: [0, 0, 0, 0, 0],
    T: [0, 0, 0, 0, 0],
  };
  arr.map((str: string) =>
    str
      .split("")
      .map((elem, i) =>
        elem === "A"
          ? obj.A[i]++
          : elem === "C"
          ? obj.C[i]++
          : elem === "G"
          ? obj.G[i]++
          : elem === "T"
          ? obj.T[i]++
          : null
      )
  );
  objFinal.push(obj);
};

result3.map((elem: string[]) => handleOccurencies(elem));

//console.log(objFinal);

const sequence = objFinal.map((elem: any) => [
  elem.C[0] === Math.max(elem.A[0], elem.C[0], elem.G[0], elem.T[0])
    ? "C"
    : elem.A[0] === Math.max(elem.A[0], elem.C[0], elem.G[0], elem.T[0])
    ? "A"
    : elem.G[0] === Math.max(elem.A[0], elem.C[0], elem.G[0], elem.T[0])
    ? "G"
    : elem.T[0] === Math.max(elem.A[0], elem.C[0], elem.G[0], elem.T[0])
    ? "T"
    : null,
  elem.C[1] === Math.max(elem.A[1], elem.C[1], elem.G[1], elem.T[1])
    ? "C"
    : elem.A[1] === Math.max(elem.A[1], elem.C[1], elem.G[1], elem.T[1])
    ? "A"
    : elem.G[1] === Math.max(elem.A[1], elem.C[1], elem.G[1], elem.T[1])
    ? "G"
    : elem.T[1] === Math.max(elem.A[1], elem.C[1], elem.G[1], elem.T[1])
    ? "T"
    : null,
  elem.C[2] === Math.max(elem.A[2], elem.C[2], elem.G[2], elem.T[2])
    ? "C"
    : elem.A[2] === Math.max(elem.A[2], elem.C[2], elem.G[2], elem.T[2])
    ? "A"
    : elem.G[2] === Math.max(elem.A[2], elem.C[2], elem.G[2], elem.T[2])
    ? "G"
    : elem.T[2] === Math.max(elem.A[2], elem.C[2], elem.G[2], elem.T[2])
    ? "T"
    : null,
  elem.C[3] === Math.max(elem.A[3], elem.C[3], elem.G[3], elem.T[3])
    ? "C"
    : elem.A[3] === Math.max(elem.A[3], elem.C[3], elem.G[3], elem.T[3])
    ? "A"
    : elem.G[3] === Math.max(elem.A[3], elem.C[3], elem.G[3], elem.T[3])
    ? "G"
    : elem.T[3] === Math.max(elem.A[3], elem.C[3], elem.G[3], elem.T[3])
    ? "T"
    : null,
  elem.C[4] === Math.max(elem.A[4], elem.C[4], elem.G[4], elem.T[4])
    ? "C"
    : elem.A[4] === Math.max(elem.A[4], elem.C[4], elem.G[4], elem.T[4])
    ? "A"
    : elem.G[4] === Math.max(elem.A[4], elem.C[4], elem.G[4], elem.T[4])
    ? "G"
    : elem.T[4] === Math.max(elem.A[4], elem.C[4], elem.G[4], elem.T[4])
    ? "T"
    : null,
]);

console.log(sequence);
