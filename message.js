const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {

if (user.value === "" && message.value === "") {
    alert("Please fill out the user and message fields before sending");
} else if (user.value === "") {
 alert("Please fill out the user field before sending");
} else if (message.value === ""){
    alert("Please fill out the message field");
} else {
    alert(`Message successfully sent to: ${user.value}`);
}

});

