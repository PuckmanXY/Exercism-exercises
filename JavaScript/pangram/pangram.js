var Pangram = function(input){
    this.value = input;
    this.cont = 0;
    var arrayOfLetterOccur = [];
    for(var i=0; i<25; i++){
        arrayOfLetterOccur.push(false);
    }
}

Pangram.prototype.isPangram = function(){
    for(var k = 0; k<this.value.length; k++){
        arrayOfLetterOccur[this.value.charCodeAt(k) - 97] = true;
    }
    for(var j=0; j<25; j++){
        if(1==1){
            console.log("then you need to continue coding from here!");
        }
    }
}


module.exports = Pangram;