let genBtn = document.querySelector("#generateBtn");
genBtn.addEventListener("click",()=> {
    generatePassword(passLength);
});

let passLength = 8;

let range = document.querySelector("#length");
range.addEventListener("input", ()=> {
    passLength = range.value;
    p.textContent = `Length of Password = ${passLength}`;
})
console.log(range.value);

let p = document.querySelector("p");




function generatePassword(passLength) {
    let str = "H$je8CU7v2[pl0STgZ)cP}vK3rL_y}oNn:.B*JMr:?q6IEfm5WRQ.;_+@4FAbVz!t1X(wYDuk#GsOxlhda&]9ib]p%`";
   
    let password = "";
    // this is for prompt let passInt = parseInt(passLength,10);
    
    
    for(let i=0; i<passLength; i++) {
        // select a random index
        let randomIdx = Math.floor(Math.random() * str.length);
        //console.log(randomIdx);
        password += str.charAt(randomIdx);
    }
    
    let output = document.querySelector("#password");
    output.innerHTML=password;
}

let copyBtn = document.querySelector("#copyBtn");

copyBtn.addEventListener("click", ()=> {
    let password = document.querySelector("#password").textContent;

    // Create a temporary textarea element to hold the password
    let tempTextarea = document.createElement("textarea");
    tempTextarea.value = password;
    document.body.appendChild(tempTextarea);  // Add it to the document
    
    // Select the text inside the textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile compatibility
    
    // Copy the text to clipboard
    document.execCommand("copy");
    
    // Remove the textarea element from the document
    document.body.removeChild(tempTextarea);
    
    alert("Password copied to clipboard!");  // Optional feedback to the user
})

