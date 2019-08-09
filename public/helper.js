function encode() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            // encodedText.value = this.responseText // <-- GET
            var res = JSON.parse(this.responseText)
            encodedText.value = res.encodedMessage
            console.log(encodedText.value)
        }
    };
    // xhttp.open("GET", "/encode?message="+text.value, true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send();
    xhttp.open("POST", "/encode", true)
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify({message: text.value}))
}
function decode() {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            // text.value = this.responseText // <-- GET
            var res = JSON.parse(this.responseText)
            text.value = res.decodedMessage
         }
    };
    // xhttp.open("GET", "/decode?message="+encodedText.value, true)
    // xhttp.setRequestHeader("Content-type", "application/json")
    // xhttp.send()
    xhttp.open("POST", "/decode", true)
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify({message: encodedText.value}))
}
