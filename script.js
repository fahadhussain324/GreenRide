"use strict";
  // Handle plan buttons on index page
  var planButtons = document.querySelectorAll(".plan-btn");
  for (var i = 0; i < planButtons.length; i++) {
    planButtons[i].onclick = function() {
      // Get the plan name from the card heading
      var card = this.parentElement;
      var heading = card.querySelector("h3");
      var planName = heading.textContent;

      // Convert to lowercase and replace spaces with dashes
      planName = planName.toLowerCase();
      planName = planName.replace(" ", "-");

      // Go to products page with plan query
      window.location.href = "products.html?plan=" + planName;
    };
  }

  // Handle contact form submission
  let contactForm = document.querySelector(".contact-form").value == "";
  if (contactForm) {
    contactForm.onsubmit = function(event) {
      event.preventDefault();

      // Get form values
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let subject = document.getElementById("subject").value;
      let message = document.getElementById("message").value;

      // validation
      if (name && email && subject && message) {
        alert("Thank you for your query, " + name + "! We will get back to you soon at " + email);
        contactForm.reset();
      } else {
        alert("Error: Please fill in all fields.");
      }
    };
  }

  // Handle the newsletter form submission
  let newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.onsubmit = function(event) {
      event.preventDefault();

      // Get the email value
      let emailInput = newsletterForm.querySelector("input[type='email']");
      let email = emailInput.value;

      // Validate the email input
      if (email) {
        alert("Thank you for subscribing to the newsletter! Check your email for confirmation.");
        newsletterForm.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    };
  }

  // This section handles navigating to specific plans when clicked from navbar

  // Get the current page URL
  let pageURL = window.location.href;

  // Find the position of "?plan=" in the URL
  let planParameterPosition = pageURL.indexOf("?plan=");
  let selectedPlan = null;

  // If the URL has a plan query parameter, extract the plan name
  // ?plan= is 6 characters long, so it start from position after it
  if (planParameterPosition !== -1) {
    selectedPlan = pageURL.substring(planParameterPosition + 6);
  }

  // Function to remove the glow effect from the plan card
  function removeGlow(planCard) {
    planCard.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
  }

  // If a plan was selected from navbar, scroll and highlight it
  if (selectedPlan) {
    // Wait 500ms for page to load before scrolling
    setTimeout(function() {
      // Find the plan card element by its ID
      var planCard = document.getElementById(selectedPlan);
      if (planCard) {
        // Scroll smoothly to the plan card
        planCard.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        // Add a glowing effect to highlight the selected plan
        planCard.style.boxShadow = "0 0 30px rgba(76, 175, 80, 0.5)";

        // Remove the highlight glow after 2 seconds
        setTimeout(function() {
          removeGlow(planCard);
        }, 2000);
      }
    }, 500);
  }
