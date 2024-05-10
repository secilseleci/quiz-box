//quiz sınquiz.soruGetir sınıfının tanımlanması
function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
  this.dogruCevapSayisi = 0;
}
//Quiz soru getirme fonksiyonunun prototipe atanması
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};
