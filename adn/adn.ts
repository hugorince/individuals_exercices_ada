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

const result: string[] = str.match(/.{1,3}/g) ?? [];
const final = result.map((res) => (res = dico[res])).join("");

const result2: string[] = str.match(/.{1,25}/g) ?? [];
const result3: any = result2.map((res) => res.match(/.{1,5}/g) ?? []);

const test: string[] = ["CAATC", "AGGCA", "GTTCA", "GCAGG", "ACTCA"];
const obj: any = {
  sequence1: {
    A: [0, 0, 0, 0, 0],
    C: [0, 0, 0, 0, 0],
    G: [0, 0, 0, 0, 0],
    T: [0, 0, 0, 0, 0],
  },
};

test.map((str) =>
  str
    .split("")
    .map((elem, i) =>
      elem === "A"
        ? obj.sequence1.A[i]++
        : elem === "C"
        ? obj.sequence1.C[i]++
        : elem === "G"
        ? obj.sequence1.G[i]++
        : elem === "T"
        ? obj.sequence1.T[i]++
        : null
    )
);

console.log(obj);
