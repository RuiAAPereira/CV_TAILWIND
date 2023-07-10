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

// Theme switcher
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
	moonIcon.classList.toggle("hidden");
	sunIcon.classList.toggle("hidden");
};

const themeCheck = () => {
	if (userTheme === "dark" || (!userTheme && systemTheme)) {
		document.documentElement.classList.add("dark");
		moonIcon.classList.toggle("hidden");
		return;
	}
	sunIcon.classList.toggle("hidden");
};

const themeSwitch = () => {
	if (document.documentElement.classList.contains("dark")) {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
		iconToggle();
		return;
	}
	document.documentElement.classList.add("dark");
	localStorage.setItem("theme", "dark");
	iconToggle();
};

sunIcon.addEventListener("click", themeSwitch);
moonIcon.addEventListener("click", themeSwitch);

themeCheck();

// observer
const header = document.querySelector("header");

//get all sections
const sections = document.querySelectorAll("section");

const options = {
	rootMargin: "-20% 0px -80% 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			navLinks.forEach((a) => {
				a.classList.remove("active");
			});

			const id = entry.target.getAttribute("id");
			const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
			if (navLink) {
				navLink.classList.add("active");
			}
		}
	});
}, options);

//observe sections
sections.forEach((section) => {
	observer.observe(section);
});
