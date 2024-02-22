// we created Quiz Object
function Quiz(sorular){
    this.sorular = sorular;
    this.index = 0;
    this.dogruCevapSayisi = 0;
}

// this function bring question
Quiz.prototype.soruGetir = function() {
    return this.sorular[this.index];
}