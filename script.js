const ui = new UI();

// we are creating quiz object to use sorular  
const quiz = new Quiz(sorular);


ui.btnStart.addEventListener("click",function(){
    ui.quizBox.classList.add("show");
    ui.nextBtn.classList.remove("show");
    toplamSure(10);
    timeLine();
    ui.soruSirasi(quiz.index + 1,quiz.sorular.length);
    ui.soruGoster(quiz.soruGetir());
});

ui.nextBtn.addEventListener("click",function(){
    if(quiz.index + 1 < quiz.sorular.length){
        quiz.index++;
        ui.nextBtn.classList.remove("show");
        toplamSure(10);
        timeLine();
        ui.soruSirasi(quiz.index + 1,quiz.sorular.length);
        ui.soruGoster(quiz.soruGetir());
        ui.btnStart.classList.remove("show");
    }else{
        ui.quizBox.classList.remove("show");
        ui.scoreBox.classList.add("show");
        ui.skoruGoster(quiz.dogruCevapSayisi,quiz.sorular.length);
    }
})

ui.btnQuit.addEventListener("click",function(){
    window.location.reload();
})

ui.btnReplay.addEventListener("click",function(){
    quiz.dogruCevapSayisi = 0;
    quiz.index = 0;
    ui.scoreBox.classList.remove("show");
    ui.btnStart.click();
})

// we adjust options(correct option, incorrect option)
function selectedOption(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").innerText;
    let soru = quiz.soruGetir();

    // checking option
    if(soru.cevapKontrolEt(cevap)){
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }

    for(let opt of options.children){
        opt.classList.add("disabled");
    }
    ui.nextBtn.classList.add("show");
}


let counter;
function toplamSure (time){
    counter = setInterval(timer,1000);

    function timer(){
        ui.timeSecond.innerHTML = time;
        time--;

        if(time < 0){
            clearInterval(counter);
            ui.timeText.innerText = "Süre Bitti";
            let soru = quiz.soruGetir();

            for(let option of options.children){
                if(soru.cevapKontrolEt(option.querySelector("span b").textContent)){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            
            ui.nextBtn.classList.add("show");
        }
    }
}

let counterLine;
function timeLine(){
    counterLine = setInterval(timer, 100);
    let line = 0;

    function timer(){
        line += 5.72;
        ui.timeLine.style.width = line + "px";

        if(line > 629){
            clearInterval(counterLine);
        }
    }
}