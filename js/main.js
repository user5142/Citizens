// Header components
const header = document.querySelector("#header");
if (header != undefined) {
  header.innerHTML = `
<div class="fixed-header">
        <header>
            <ul>
                <div class="nav-pages">
                    <li id="home"><a href="https://citizensoftheinter.net"><img class="logo" src="images/Citizens Logo 1.svg"></a></li>
                    <div class="nav-links">
                      <li><a href="https://citizensoftheinter.net/home">Home</a></li>
                      <li><a href="https://citizensoftheinter.net/about">About</a></li>
                    </div>
                </div>
            </ul>
            <div class="mobile-nav">
                <li id="home"><a href="https://citizensoftheinter.net"><img class="logo" src="images/Citizens Logo 1.svg"></a></li>
                <a id="hamburger-icon">
                    <img id="burger-icon" src="images/bh-hamburger-2.svg" alt="hamburger icon"><img id="x-icon"
                        src="images/bh-x-2.svg">
                </a>
            </div>
        </header>
        <div id="burger-links">
            <a href="https://citizensoftheinter.net/home">Home</a>
            <a href="https://citizensoftheinter.net/about">About</a>
        </div>
    </div>
`
}

const header2 = document.querySelector("#header2");
if (header2 != undefined) {
  header2.innerHTML = `
<div class="fixed-header">
        <header>
            <ul>
                <div class="nav-pages">
                    <li id="home"><a href="https://citizensoftheinter.net"><img class="logo" src="../images/Citizens Logo 1.svg"></a></li>
                    <div class="nav-links">
                    <li><a href="https://citizensoftheinter.net/home">Home</a></li>
                    <li><a href="https://citizensoftheinter.net/about">About</a></li>
                </div>
            </ul>
            <div class="mobile-nav">
                <li id="home"><a href="https://citizensoftheinter.net"><img class="logo" src="../images/Citizens Logo 1.svg"></a></li>
                <a id="hamburger-icon">
                    <img id="burger-icon" src="../images/bh-hamburger-2.svg" alt="hamburger icon"><img id="x-icon"
                        src="../images/bh-x-2.svg">
                </a>
            </div>
        </header>
        <div id="burger-links">
            <a href="https://citizensoftheinter.net/home">Home</a>
            <a href="https://citizensoftheinter.net/about">About</a>
        </div>
    </div>
`
}

// Display and hide hamburger menu on click
const burgerMenu = () => {
  const burgerMenu = document.querySelector("#burger-links");
  const xIcon = document.querySelector("#x-icon");
  const burgerIcon = document.querySelector("#burger-icon");

  if (burgerMenu.style.display === "block") {
    burgerMenu.style.display = "none";
    xIcon.style.display = "none";
    burgerIcon.style.display = "inline";
  } else {
    burgerMenu.style.display = "block";
    burgerIcon.style.display = "none";
    xIcon.style.display = "inline";
  }
};

// Hamburger menu
const burgerIcon = document.querySelector("#hamburger-icon");
const projectsNav = document.querySelector("#burger-links");
if (burgerIcon != null) {
  burgerIcon.addEventListener("click", burgerMenu);
  projectsNav.addEventListener("click", burgerMenu);
};