let body = document.getElementsByTagName("body");

const Navbar=`


<nav class="navbar fixedtop">
    <button class="nav-toggle">
        <i class="fa-solid fa-bars"></i>
    </button>
    <ul class="nav nav-tabs nav-menu_visible" style="font-family: century; color: #8F144B;">
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="./index.html" style="font-family: century; color: #8F144B;">Home</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                aria-expanded="false" style="font-family: century; color: #8F144B;">Portfolio</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./htmlwork.html" target="_blank" style="font-family: century; color: #8F144B;">HTML</a></li>
                <li><a class="dropdown-item" href="./csswork.html" target="_blank" style="font-family: century; color: #8F144B;">CSS</a></li>
                <li><a class="dropdown-item" href="./javascript.html" target="_blank" style="font-family: century; color: #8F144B;">JavaScript</a></li>
                <li><a class="dropdown-item" href="./Javawork.html" target="_blank" style="font-family: century; color: #8F144B;">Java</a></li>
                <li><a class="dropdown-item" href="./mysqlwork.html" target="_blank" style="font-family: century; color: #8F144B;">MySQL</a></li>
                
                <li><hr class="dropdown-divider"></li> 
            
                </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./Contact.html" target="_blank" style="font-family: century; color: #8F144B;">Contact Me</a>
        </li>
    </ul>
</nav>
<background-img><img src="./RSC/images/sakura3.jpg" alt="sakura" width="100%"></background-img>`

body[0].insertAdjacentHTML("beforebegin",Navbar);

const navToggle = document.querySelector(".nav-toggle");
const navTabs = document.querySelector(".nav-tabs");

navToggle.addEventListener("click", ()=>{
    navTabs.classList.toggle("nav-menu_visible");
});