// Amirreza Heydari - clarotm
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("clarotm-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "صفحه پیدا نشد !"; }
                    elmnt.removeAttribute("clarotm-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
};












// <!-- <script src="incule.js"></script>
// <div clarotm-html="header.html"></div>
// <script>
//     includeHTML();
// </script> -->
