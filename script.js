document.getElementById("incidentForm").addEventListener("submit", function(event){

event.preventDefault();

alert("Incident Report Submitted Successfully!");

this.reset();

});