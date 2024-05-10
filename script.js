//quiz sınıfından yeni bir quiz nesnesi tanımlanması
const quiz = new Quiz(sorular);
const ui = new UI();

//start quiz butonuna soru getirme fonksiyonu atanması
ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  ui.soruGoster(quiz.soruGetir());
  startTimer(10);
  startTimeline();
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.btn_next.classList.remove("show");
});

//Sonraki Soru butonuna sonraki soruyu getirme fonksiyonunun atanması
//if bloğu ile soru getirme sınırı ve quiz sonu mesajı belirlenmesi
ui.btn_next.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    ui.quiz_box.classList.add("active");
    quiz.soruIndex += 1;
    clearInterval(counter);
    clearInterval(counter_line);
    startTimer(10);
    startTimeline();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
    ui.time_text.textContent = "Kalan Süre";
    document.querySelector(".timer").classList.remove("bg-danger");
    document.querySelector(".timer .time_second").classList.remove("bg-danger");
  } else {
    clearInterval(counter);
    clearInterval(counter_line);
    ui.score_box.classList.add("active");
    ui.quiz_box.classList.remove("active");
    ui.scoreBilgisi(quiz.dogruCevapSayisi, quiz.sorular.length);
  }
});

//seçeneklerin doğru veya yanlış olma durumlarına göre
//renk csslerinin belirlenmesi ve ikonların insert edilmesi fonksiyonu
function optionSelected(option) {
  clearInterval(counter);
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    clearInterval(counter);
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
    quiz.dogruCevapSayisi += 1;
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }
  ui.btn_next.classList.add("show");
}

//sınavı bitir butonunun fonksiyonu
ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
});

//tekrar başlat butonunun fonksiyonu
ui.btn_replay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  ui.score_box.classList.remove("active");
  ui.btn_start.click();
});

//süre animasyonunun eklenmesi
let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    ui.time_second.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      ui.time_text.textContent = "Süre Bitti";
      document.querySelector(".timer").classList.add("bg-danger");
      document.querySelector(".timer .time_second").classList.add("bg-danger");

      let cevap = quiz.soruGetir().dogruCevap;
      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == cevap) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }

        option.classList.add("disabled");
        ui.btn_next.classList.add("show");
      }
    }
  }
}

//timeline animasyonu fonksiyonu
let counterLine;
function startTimeline() {
  let line_width = 0;

  counterLine = setInterval(timer, 100);

  function timer() {
    line_width += 5;
    ui.time_line.style.width = line_width + "px";
    if (line_width > 549) {
      clearInterval(counterLine);
    }
  }
}
