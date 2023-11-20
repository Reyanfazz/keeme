/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var topicdown = document.getElementsByClassName("topicdown-btn");
var i;

for (i = 0; i < topicdown.length; i++) {
    topicdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var topicdownContent = this.nextElementSibling;
        if (topicdownContent.style.display === "block") {
            topicdownContent.style.display = "none";
        } else {
            topicdownContent.style.display = "block";
        }
    });
}