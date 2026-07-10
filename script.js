document.getElementById("incidentForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Incident submitted successfully.\n\nThank you for helping keep our campus safe.");

this.reset();

});