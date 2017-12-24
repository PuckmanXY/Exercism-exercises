var DnaTranscriber = function(){}

DnaTranscriber.prototype.toRna = function(input){
    var rnaTranslation = '';
    for(var i=0;i<input.length;i++){
        switch(input[i]){
            case 'G':
                rnaTranslation+='C';
                break;
            case 'C':
                rnaTranslation+='G';
                break;
            case 'T':
                rnaTranslation+='A';
                break;
            case 'A':
                rnaTranslation+='U';
                break;
            default:
                throw new Error('Invalid input');
        }
    }
    return rnaTranslation;
}

module.exports = DnaTranscriber