function getBotResponse(input) {
 // Simple responses
    if (input == "hello") {
        return "hello dear";
    } else if (input == "how are you today") {
        return "fine, hope you too";
    } 
    else if(input=="done the assignment"){
        return "1% done";
    }
    else if(input=="hi"){
        return "hello";
    }
    else if(input=="i've try abi naw"){
        return "yes ooo";
    }
    else {
       return "i don't understand you."
    }
}