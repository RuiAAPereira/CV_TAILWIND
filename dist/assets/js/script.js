// hamburger
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navbar = document.querySelector(".navbar");

hamburgerBtn.addEventListener("click", () => {
	const currentState = hamburgerBtn.getAttribute("data-state");

	if (!currentState || currentState === "closed") {
		hamburgerBtn.setAttribute("data-state", "opened");
		hamburgerBtn.setAttribute("aria-expanded", "true");
		// toggle sidebar class
		navbar.classList.toggle("opened");
		//save state to session
		sessionStorage.setItem("sidebarState", "opened");
	} else {
		hamburgerBtn.setAttribute("data-state", "closed");
		hamburgerBtn.setAttribute("aria-expanded", "false");
		// toggle sidebar class
		navbar.classList.toggle("opened");
		//save state to session
		sessionStorage.setItem("sidebarState", "closed");
	}
});

// observer
const header = document.querySelector("header");
const teste = document.querySelector(".teste");

const options = {
	rootmargin: "-100px 0px 0px 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			header.classList.add("nav-scrolled");
		} else {
			header.classList.remove("nav-scrolled");
		}
	});
}, options);

// observer.observe(teste);

// Navbar
const headerHeight = document.querySelector("header").offsetHeight;

document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);

// add event listener to all nav-links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		// close sidebar
		navbar.classList.remove("opened");
		hamburgerBtn.setAttribute("data-state", "closed");
		hamburgerBtn.setAttribute("aria-expanded", "false");
		//save state to session
		sessionStorage.setItem("sidebarState", "closed");

		navLinks.forEach((a) => {
			a.classList.remove("active");
		});

		// add active class to clicked navlink
		link.classList.add("active");
	});
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
		this.classList.toggle("active");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}
