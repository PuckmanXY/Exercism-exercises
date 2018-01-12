var Cipher = function(key) {
    this.key = '';
    if(key == null){
        this.key = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
    }
    else if(key == ''){
        throw new Error('Bad key');
    }
    else{
        for(var i=0; i<key.length; i++){
            if(key.charCodeAt(i) < 97 || key.charCodeAt(i) > 122){
                throw new Error('Bad key');
            }
        }
        this.key = key;
    }
}

Cipher.prototype.encode = function(input) {
    var encodedMessage = '';
    for(var i=0; i<input.length; i++){
        if(input.charCodeAt(i) < 97 || input.charCodeAt(i) > 122){
            throw new Error('Bad Key');
        }
        else if(input.charCodeAt(i) <= 99){
            encodedMessage += String.fromCharCode(input.charCodeAt(i) + 23);
        }
        else{
            encodedMessage += String.fromCharCode(input.charCodeAt(i) - 3);
        }
    }
    return encodedMessage;
}

Cipher.prototype.decode = function(input) {
    var decodedMessage = '';
    for(var i=0; i<input.length; i++){
        if(input.charCodeAt(i) < 97 || input.charCodeAt(i) > 122){
            throw new Error('Bad Key');
        }
        else if(input.charCodeAt(i) >= 119){
            decodedMessage += String.fromCharCode(input.charCodeAt(i) - 23);
        }
        else{
            decodedMessage += String.fromCharCode(input.charCodeAt(i) + 3);
        }
    }
    return decodedMessage;
}

cipher = new Cipher();
cipher.encode('aaaaaaaaaa');


module.exports = Cipher;