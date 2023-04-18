let footer = document.getElementsByTagName("footer");

const foot=`
<footer id="footer">
    <br>
    <h3 style="color: #A66D7C ;">Contact</h3>
    <a href="https://www.linkedin.com/in/adriana-ibarrag/" target="_blank"><img
            src="https://iconsplace.com/wp-content/uploads/_icons/ffc0cb/256/png/linkedin-icon-12-256.png"
            alt="LinkedIn" width="60px" height="60px"></a>
    <a href="https://github.com/AdrianaIbarraG/Portafolio_AdrianaIbarraG.git" target="_blank"><img
            src="https://iconsplace.com/wp-content/uploads/_icons/ffc0cb/256/png/github-icon-12-256.png" alt="GitHub"
            width="60px" height="60px"></a>
    <br>
    <em style="color: #A66D7C ;">All Rights Reserved &#169; Adriana Ibarra</em>
</footer>`;
footer[0].insertAdjacentHTML("afterend",foot);
