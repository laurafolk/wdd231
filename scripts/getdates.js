document.addEventListener("DOMContentLoaded", function() {
    //Gets the current year
    var currentYear = new Date().getFullYear();

    //Displays the current year in the HTML span element with id "currentYear"
    document.getElementById("currentYear").textContent = currentYear;

    //Gets the last modified date of the document
    var lastModifiedDate = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = lastModifiedDate.toLocaleDateString('en-us', options);

    document.getElementById("lastModified").innerHTML = "Last Modified: " + formattedDate;
});