
const btn = document.querySelector(".submit-btn");

btn.addEventListener("click", () => {

const design =
document.getElementById("design").value;

const budget =
document.getElementById("budget").value;

const timeline =
document.getElementById("timeline").value;

const result =
document.getElementById("result");

if(
design === "Select Design Type" ||
budget === "Select Budget" ||
timeline === "Select Timeline"
){
result.innerHTML =
"Please select all fields.";
return;
}

result.innerHTML =
`Recommended Plan:
${design}
| Budget: $${budget}
| Timeline: ${timeline}`;

});