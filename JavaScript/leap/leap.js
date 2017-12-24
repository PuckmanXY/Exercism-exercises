var Year = function (input) {
    this.value = input;
};

Year.prototype.isLeap = function () {
    var answer;
    if(this.value % 4 == 0){
        answer = true;
        if(this.value % 100 == 0){
            answer = false;
            if(this.value % 400 == 0){
                answer = true;
            }
        }
    }
    else{
        answer = false;
    }
    return answer;
};

module.exports = Year;
