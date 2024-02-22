function UI(){
    this.btnStart = document.querySelector("#btn_start");
    this.timeText = document.querySelector("#time_text");
    this.timeSecond = document.querySelector("#time_second");
    this.timeLine = document.querySelector("#time_line");
    this.quizBox = document.querySelector(".quiz_box");
    this.questionText = document.querySelector("#question_text");
    this.options = document.querySelector("#options");
    this.quizInfo = document.querySelector("#quiz_info");
    this.nextBtn = document.querySelector("#next_btn");
    this.scoreBox = document.querySelector(".score_box");
    this.scoreText = document.querySelector("#score_text");
    this.btnReplay = document.querySelector("#btn_replay");
    this.btnQuit = document.querySelector("#btn_quit");
    this.correctIcon = `<i class="fa-solid fa-check"></i>`;
    this.incorrectIcon = `<i class="fa-solid fa-xmark"></i>`;
}

// showing questions on the quiz template
UI.prototype.soruGoster = function(soru){
    let question = `<p>${soru.soruMetni}</p>`;
    let optionList = "";

    for(let option in soru.cevapSecenekleri){
        optionList += `
            <div class="option">
                <span><b>${option}</b>: ${soru.cevapSecenekleri[option]}</span>
            </div>
        `;
    }
    this.options.innerHTML = optionList;
    this.questionText.innerHTML = question;

    for(let opt of this.options.children){
        opt.setAttribute("onclick","selectedOption(this)");
    }
}

UI.prototype.skoruGoster = function(dogruCevapSayisi,toplamSoru){
    let tag = `<p>Toplam ${toplamSoru}'dan ${dogruCevapSayisi} doğru cevap verdiniz.</p>`;
    this.scoreText.innerHTML = tag;
}

UI.prototype.soruSirasi = function(soruNumarasi,toplamSoru){
    let tag = `${soruNumarasi} / ${toplamSoru}`;
    this.quizInfo.innerHTML = tag;
}