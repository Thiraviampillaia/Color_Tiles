
var value = document.getElementById('nameValidation').value;

var nameValidationInput = document.getElementById('nameValidation');
function useValue() {
    var NameValue = nameValidationInput.value;
    alert(NameValue);
  
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("usernameCT",NameValue); 
    // document.getElementById("  ").innerHTML = localStorage.getItem("usernameCT");
    console.log("saved successfully");
  } 
}
nameValidationInput.onchange = useValue;  
// nameValidationInput.onblur = useValue;
// console.log(NameValue);      

const isStorage = 'undefined' !== typeof localStorage;

// isStorage && localStorage.setItem('fap-scores', elements.scores);
// if (isStorage && localStorage.getItem('fap-scores')) {
//     elements.scores = localStorage.getItem('fap-scores').split(',');
//   }; 

  
//   else {
//     document.getElementById("  ").innerHTML = "Sorry, your browser does not support Web Storage...";
//   }
//**********   Storing all these data to refer later */