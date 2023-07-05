// hamburger
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navbar = document.querySelector("#navbar");

hamburgerBtn.addEventListener("click", () => {
	const currentState = hamburgerBtn.getAttribute("data-state");

	if (!currentState || currentState === "closed") {
		hamburgerBtn.setAttribute("data-state", "opened");
		hamburgerBtn.setAttribute("aria-expanded", "true");
		// toggle sidebar class
		navbar.classList.remove("top-10");
		navbar.classList.add("-top-full");
		//save state to session
		sessionStorage.setItem("sidebarState", "opened");
	} else {
		hamburgerBtn.setAttribute("data-state", "closed");
		hamburgerBtn.setAttribute("aria-expanded", "false");
		// toggle sidebar class
		navbar.classList.add("top-10");
		navbar.classList.remove("-top-full");
		//save state to session
		sessionStorage.setItem("sidebarState", "closed");
	}
});

// observer
// Get the header element
const header = document.querySelector("header");

const options = {
	rootmargin: "-100px 0px 0px 0px",
};

// Create an observer
const observer = new IntersectionObserver(function (entries, observer) {
	// Iterate over each entry
	entries.forEach((entry) => {
		// If the entry is not intersecting
		if (!entry.isIntersecting) {
			// Add the class to the header
			header.classList.add("nav-scrolled");
		} else {
			// If the entry is intersecting, remove the class
			header.classList.remove("nav-scrolled");
		}
	});
}, options);

// Navbar
// Get the height of the header
const headerHeight = document.querySelector("header").offsetHeight;

// Select all links in the navbar
const navLinks = document.querySelectorAll("#navbar a");

// Loop over each link
navLinks.forEach((link) => {
	// Add a click event listener to each link
	link.addEventListener("click", () => {
		// Close the navbar
		navbar.classList.remove("opened");
		// Set the hamburger button state to "closed"
		hamburgerBtn.setAttribute("data-state", "closed");
		// Set the hamburger button aria-expanded attribute to "false"
		hamburgerBtn.setAttribute("aria-expanded", "false");
		// Save the state to session storage
		sessionStorage.setItem("sidebarState", "closed");
		// Remove the "active" class from all links
		navLinks.forEach((a) => {
			a.classList.remove("active");
		});
		// Add the "active" class to the clicked link
		link.classList.add("active");
	});
});

// Select all elements with class "accordion"
var acc = document.getElementsByClassName("accordion");

// Create a loop to apply the function to each element
for (i = 0; i < acc.length; i++) {
	// When an element with class "accordion" is clicked
	acc[i].addEventListener("click", function () {
		// Add the class "active" to the element
		this.classList.toggle("active");

		// Select the next sibling element
		var panel = this.nextElementSibling;
		// If the element is displayed, hide it
		if (panel.style.display === "block") {
			panel.style.display = "none";
			// Otherwise, display it
		} else {
			panel.style.display = "block";
		}
	});
}
