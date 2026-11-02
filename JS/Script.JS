*
/*part 3 will include a JS page that will feature a couple of 
additions including an interactive map by leaflet */

//this message shows that the console is linked correctly
console.log("External JS is connected to file");

// Keep the original homepage colour-change demonstration working.
function changeColor() {
    var demoText = document.getElementById("demo");

    if (demoText) {
        demoText.style.color = "red";
    }
}

//function 2 to greet user depending on the time of the day
//the greeting only appears on the home page, i prefer to keep it that way
function showGreeting(){

    //looking for the greeting element
    var greeting = document.getElementById("greeting");

    //if there is no element on this page the code will stop here
    //and nothing breaks
    if (!greeting) {
        return;
    }

    //function to get a particular hour of the day
    var hour = new Date().getHours();
    var message;
    
    if(hour < 12){
        message = "Good Morning";
    }
    else if(hour < 18){
        message = "Good Afternoon";
    }
    else{
        message = "Good Evening";
    }
    
    greeting.textContent = message;
}
    
//calling the message function to work
showGreeting();




//this is concerning part 3 for the products page

// the shopping list found for the products at the products page
//"var products" means to make a box called "products" and put the list inside it.
var products = [//opening the list of products
    {//will make each product like a small form to make it neat
        name: "PowerWise SmartMeter 1000",
        category: "Smart meter devices",
        description: "A prepaid electricity monitoring device that displays household electricity consumption."
    },
    { // product 2
        name: "PowerWise Consumption Scanner",
        category: "Smart meter devices",
        description: "A device that scans how much power is being consumed in real-time."
    },
    { // product 3
        name: "PowerWise Regulator",
        category: "Smart meter devices",
        description: "A device that picks up how much power is being used and regulates it to prevent overconsumption."
    },
    { // product 4
        name: "PowerWise Emergency Alert System",
        category: "Emergency monitoring devices",
        description: "A device that monitors the power supply and alerts you in case of an emergency."
    },
    { // product 5
        name: "PowerWise Emergency Power Supply",
        category: "Emergency monitoring devices",
        description: "A device that provides backup power in case of a power outage."
    },
    { // product 6
        name: "PowerWise Monitoring Device",
        category: "Emergency monitoring devices",
        description: "Monitors how much you will be billed at the end of the month based on your power usage."
    },
    { // product 7
        name: "PowerWise Support Center",
        category: "Product support",
        description: "A support center that provides assistance and troubleshooting for PowerWise products."
    },
    { // product 8
        name: "PowerWise Online Support",
        category: "Product support",
        description: "An online support platform that provides assistance and troubleshooting for PowerWise products."
    },
    { // product 9
        name: "PowerWise Product Manuals",
        category: "Product support",
        description: "Product manuals that provide detailed information on how to use PowerWise products."
    },
    { // product 10
        name: "PowerWise Power Cord",
        category: "Accessories",
        description: "A power cord that connects your devices to the PowerWise monitoring system."
    },
    { // product 11
        name: "PowerWise Mounting Bracket",
        category: "Accessories",
        description: "A bracket that allows you to mount the PowerWise monitoring device on a wall or panel."
    },
    { // product 12, the last one
        name: "PowerWise Protective Case",
        category: "Accessories",
        description: "A case that protects the PowerWise monitoring device from damage and environmental factors."
    }
];//closing the list of products

// Now we find the spots on the web page, like finding labelled drawers.
// Each one is found by its "id", the name tag we gave it in the HTML.
var productList = document.getElementById("product-list");
var searchBox = document.getElementById("product-search");
var productCategory = document.getElementById("product-category");
var noResults = document.getElementById("no-results");
var productCount = document.getElementById("product-count");

//making a function called showProducts.
function showProducts(list) { 

    // If the product area is missing, stop here so other pages keep working.
    if (!productList || !noResults) {
        return;
    }

    productList.innerHTML = ""; // clear the old cards before showing the new ones

    // "forEach" means: take the list and do the steps below for each product, one at a time
    list.forEach(function(product) { // "product" is the one we are working on right now

        var card = document.createElement("article"); // make a brand new empty card
        card.className = "product-card";

        var title = document.createElement("h3"); // make a blank heading
        title.textContent = product.name; // write the product's name into the heading

        var category = document.createElement("p"); // make a blank line of text
        category.textContent = product.category; // write the product's group into it

        var text = document.createElement("p"); // make another blank line of text
        text.textContent = product.description; // write the product's description into it

        card.appendChild(title); // place the heading inside the card
        card.appendChild(category); // place the group line inside the card
        card.appendChild(text); // place the description into the card
        productList.appendChild(card); // place the finished card on the web page
    }); // that was the last of the steps for one product, now it moves on to the next one

    noResults.hidden = list.length !== 0; // show the no-match message only when there are no products

    if (productCount) {
        productCount.textContent =
            "Showing " + list.length + " of " + products.length + " products.";
    }
} // this is the end of the recipe

// This checks the words and category chosen by the visitor.
function filterProducts() {
    if (!searchBox || !productCategory) {
        return;
    }

    var typed = searchBox.value.toLowerCase();
    var chosenCategory = productCategory.value;

    // "filter" means: keep only the products that pass both checks.
    var matches = products.filter(function(product) {
        var matchesWords =
            product.name.toLowerCase().includes(typed) ||
            product.category.toLowerCase().includes(typed) ||
            product.description.toLowerCase().includes(typed);

        var matchesCategory =
            chosenCategory === "all" ||
            product.category === chosenCategory;

        return matchesWords && matchesCategory;
    });

    showProducts(matches);
}

// Only run the product controls on the Products page.
if (searchBox && productCategory && productList && noResults) {

    showProducts(products); // when the page opens, show every product

    // "input" means the visitor typed or deleted a letter.
    searchBox.addEventListener("input", filterProducts);

    // "change" means the visitor chose a different category.
    productCategory.addEventListener("change", filterProducts);

    // Apply the starting search and category choices.
    filterProducts();
}




// Part 3: this list holds the information for the Services page.
var serviceItems = [
    {
        name: "Monitoring Services",
        category: "monitoring",
        description: "Our monitoring services provide real-time data on your energy usage, helping you identify areas for improvement and optimise your power consumption."
    },
    {
        name: "Installation Services",
        category: "installation",
        description: "We provide professional installation services for all our power management solutions."
    },
    {
        name: "Maintenance and Support",
        category: "support",
        description: "Our maintenance services help keep your power management systems running efficiently."
    }
];

// These connect the service information to the controls and display area in the HTML.
var serviceList = document.getElementById("service-list");
var serviceSearch = document.getElementById("service-search");
var serviceCategory = document.getElementById("service-category");
var serviceCount = document.getElementById("service-count");
var serviceEmpty = document.getElementById("service-empty");

// This finds matching services and creates a card for each one.
function showServices() {
    if (!serviceList || !serviceSearch || !serviceCategory) {
        return;
    }

    var typed = serviceSearch.value.toLowerCase();
    var chosenCategory = serviceCategory.value;

    var matchingServices = serviceItems.filter(function(service) {
        var matchesWords =
            service.name.toLowerCase().includes(typed) ||
            service.description.toLowerCase().includes(typed);

        var matchesCategory =
            chosenCategory === "all" ||
            service.category === chosenCategory;

        return matchesWords && matchesCategory;
    });

    // Clear the previous cards before drawing the matching ones.
    serviceList.innerHTML = "";

    matchingServices.forEach(function(service) {
        var card = document.createElement("article");
        card.className = "service-card";

        var title = document.createElement("h3");
        title.textContent = service.name;

        var description = document.createElement("p");
        description.textContent = service.description;

        card.appendChild(title);
        card.appendChild(description);
        serviceList.appendChild(card);
    });

    if (serviceCount) {
        serviceCount.textContent =
            matchingServices.length + " services found";
    }

    if (serviceEmpty) {
        serviceEmpty.hidden = matchingServices.length > 0;
    }
}

// Update the cards when the visitor types or chooses a category.
if (serviceSearch && serviceCategory) {
    serviceSearch.addEventListener("input", showServices);
    serviceCategory.addEventListener("change", showServices);

    // Show all services when the page first opens.
    showServices();
}




//this is also concerning part 3 for the inquiry page

// for the inquiry page
// WHAT THIS DOES: when the visitor clicks Submit, it checks every box.
// If a box is wrong, a red message appears. If all are fine, a message appears.

var inquiryForm = document.getElementById("inquiry-form"); // find the form on the page

if (inquiryForm) { // only do this if the page has the form

    // find the boxes and the spaces where red messages appear
    var nameBox = document.getElementById("Fullname");
    var emailBox = document.getElementById("email");
    var phoneBox = document.getElementById("phone");
    var inquiryBox = document.getElementById("Inquiry");

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var phoneError = document.getElementById("phone-error");
    var messageError = document.getElementById("message-error");
    var success = document.getElementById("form-success");

    // Only add the form action if all the required page parts are present.
    if (nameBox && emailBox && phoneBox && inquiryBox &&
        nameError && emailError && phoneError && messageError) {

        // watch the form: when "submit" happens, run the steps below
        inquiryForm.addEventListener("submit", function(event) {

            event.preventDefault(); // stop the page from reloading so we can check the boxes

            // collect what the visitor typed; trim() removes spaces at the start and end
            var name = nameBox.value.trim();
            var email = emailBox.value.trim();
            var phone = phoneBox.value.trim();
            var message = inquiryBox.value.trim();

            // clear any old messages from the last time they clicked Submit
            nameError.textContent = "";
            emailError.textContent = "";
            phoneError.textContent = "";
            messageError.textContent = "";

            if (success) {
                success.textContent = "";
                success.hidden = true;
            }

            var isValid = true; // start by assuming everything is fine

            // CHECK 1: the name must include a first name and surname
            if (name.length < 3 || !name.includes(" ")) {
                nameError.textContent = "Please enter your name and surname.";
                isValid = false;
            }

            // CHECK 2: the email must look like name@example.com
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                emailError.textContent = "Please enter a valid email, like name@example.com.";
                isValid = false;
            }

            // CHECK 3: the phone must be a South African number
            var cleanPhone = phone.replace(/[\s-]/g, "");
            var phonePattern = /^(\+27|0)[0-9]{9}$/;

            if (!phonePattern.test(cleanPhone)) {
                phoneError.textContent = "Please enter a valid South African number, like 082 123 4567.";
                isValid = false;
            }

            // CHECK 4: the message must be at least 10 characters
            if (message.length < 10) {
                messageError.textContent = "Please write at least 10 characters.";
                isValid = false;
            }

            // If every check passed, show a clear message without saying the form was sent.
            if (isValid && success) {
                success.textContent =
                    "Your details are valid. Use the contact details on this website to send your inquiry.";
                success.hidden = false;
            }
        });
    }
}




// PART 3: show an interactive Leaflet map on the Contact page.
var mapBox = document.getElementById("map");

if (mapBox) {
    if (window.L) {
        // This is an approximate point in South Africa, not an office address.
        var powerWiseMap = L.map("map").setView([-29.0, 24.0], 5);

        // Leaflet draws the interactive map; this layer supplies its map picture.
        var powerWiseTiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }).addTo(powerWiseMap);

        // Show a helpful note if the map picture cannot download.
        powerWiseTiles.on("tileerror", function() {
            mapBox.classList.add("map-tile-error");
        });

        L.marker([-29.0, 24.0])
            .addTo(powerWiseMap)
            .bindPopup("Approximate South Africa service-area marker, not a verified office.")
            .openPopup();

        // Ask Leaflet to recalculate the map size after the page layout settles.
        window.setTimeout(function() {
            powerWiseMap.invalidateSize();
        }, 200);
    } else {
        mapBox.innerHTML =
            '<p class="map-fallback">The interactive map could not load. Check your internet connection and reload the page.</p>';
    }
}


// PART 3: prepare an email draft from the general contact form.
// This opens an email draft; it does not send the message automatically.
var contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        var contactAnswers = [];
        var contactData = new FormData(contactForm);

        contactData.forEach(function(value, label) {
            contactAnswers.push(label + ": " + value);
        });

        var contactStatus = document.getElementById("contact-form-status");

        if (contactStatus) {
            contactStatus.textContent =
                "Your email app should open with your message. Review it and press Send.";
        }

        window.location.href =
            "mailto:PowerWise@gmail.com?subject=" +
            encodeURIComponent("PowerWise website message") +
            "&body=" +
            encodeURIComponent(contactAnswers.join("\n"));
    });
}


// PART 3: add a menu button for visitors using a small screen.
document.addEventListener("DOMContentLoaded", function() {
    var pageHeader = document.querySelector("header");

    // Only add the button when this page has a header and navigation.
    if (pageHeader) {
        var pageNavigation = pageHeader.querySelector("nav");
        var headerTitle = pageHeader.querySelector("h1");

        if (pageNavigation && headerTitle) {
            var menuButton = document.createElement("button");

            menuButton.className = "mobile-menu-toggle";
            menuButton.type = "button";
            menuButton.textContent = "Menu";
            menuButton.setAttribute("aria-expanded", "false");

            // Place the new button beside the website heading.
            headerTitle.insertAdjacentElement("afterend", menuButton);

            // Open or close the navigation links when the button is clicked.
            menuButton.addEventListener("click", function() {
                var menuIsOpen =
                    menuButton.getAttribute("aria-expanded") === "true";

                menuButton.setAttribute("aria-expanded", String(!menuIsOpen));
                pageNavigation.classList.toggle("menu-open", !menuIsOpen);
            });

            // Close the menu after a visitor chooses one of its links.
            pageNavigation.querySelectorAll("a").forEach(function(link) {
                link.addEventListener("click", function() {
                    pageNavigation.classList.remove("menu-open");
                    menuButton.setAttribute("aria-expanded", "false");
                });
            });
        }
    }

    // Fade the original cards in as they appear while the visitor scrolls.
    if ("IntersectionObserver" in window) {
        var cards = document.querySelectorAll(".card, .product-card, .service-card");

        var cardObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("card-visible");
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        cards.forEach(function(card) {
            card.classList.add("card-reveal");
            cardObserver.observe(card);
        });
    }
});
