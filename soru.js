function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "Aşağıdakilerden hangisi JS paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Soru(
    "Aşağıdakilerden hangisi frontend kapsamında değerlendirilmez?",
    { a: "css", b: "html", c: "Javascript", d: "sql" },
    "d"
  ),
  new Soru(
    "Aşağıdakilerden hangisi backend kapsamında değerlendirilir?",
    { a: "Node.js", b: "Typescript", c: "Angular", d: "React" },
    "a"
  ),

  new Soru(
    "Aşağıdakilerden hangisi Javascript programlama dilini kullanmaz",
    { a: "React", b: "Angular", c: "buejs", d: "asp.net" },
    "d"
  ),
];
