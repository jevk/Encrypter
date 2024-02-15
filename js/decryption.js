
// Decrypt the encrypted string
function decrypt() {
    // get three character key from the element with id "key"
    const keyText = document.getElementById("key").value;
    const key = parseInt(keyText, 36);
    // get encrypted string from the element with id "text"
    const encrypted = document.getElementById("message").value;

    const decrypted = encrypted.split("").map((char, i) => {
        return String.fromCharCode(char.charCodeAt(0) - key - i);
    }).join("");

    // set the output string to the element with id "output"
    document.getElementById("output").innerText = `Output: ${decrypted}`;
}