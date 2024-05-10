function UI() {
  (this.btn_start = document.querySelector(".btn_start")),
    (this.btn_next = document.querySelector(".btn_next")),
    (this.btn_replay = document.querySelector(".btn_replay")),
    (this.btn_quit = document.querySelector(".btn_quit")),
    (this.quiz_box = document.querySelector(".quiz_box")),
    (this.score_box = document.querySelector(".score_box")),
    (this.option_list = document.querySelector(".option_list")),
    (this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`),
    (this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`),
    (this.time_text = document.querySelector(".time_text")),
    (this.time_second = document.querySelector(".time_second")),
    (this.time_line = document.querySelector(".time_line"));
}

//soru ve seçeneklerinin gösterildiği fonksiyon tanımlanması
UI.prototype.soruGoster = function (soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = ``;
  for (let cevap in soru.cevapSecenekleri) {
    options += `<div class="option">
        <span>
        <b>${cevap}</b>:${soru.cevapSecenekleri[cevap]}
        </span>
        </div>

        `;
  }

  //seçeneklere tıklama fonksiyonu kazandırılması
  document.querySelector(".question_text").innerHTML = question;
  this.option_list.innerHTML = options;
  const option = this.option_list.querySelectorAll(".option");
  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};

//soru sayısının dinamik gösterilmesi
UI.prototype.soruSayisiniGoster = function (soruSirasi, toplamSoru) {
  let tag = `<span class="badge bg-warning">
    ${soruSirasi} / ${toplamSoru}
  </span>`;
  document.querySelector(".quiz_box .question_index").innerHTML = tag;
};

//score bilgisinin dinamik gösterilmesi
UI.prototype.scoreBilgisi = function (dogruCevapSayisi, toplamSoru) {
  let tag2 = `<div class="score_text">Toplam ${toplamSoru} sorudan ${dogruCevapSayisi} bildiniz.</div>`;
  document.querySelector(".score_box .score_text").innerHTML = tag2;
};
