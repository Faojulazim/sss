const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");
const list = document.querySelector("#list");
const left = document.querySelector("#left");
const interval = document.querySelector("#interval");

//Hamburger Toggle Section

hamburger.addEventListener("click", (e) => {
  hamburger.classList.add("hidden");
  closeIcon.classList.remove("opacity-0");
  closeIcon.classList.remove("rotate-[90deg]");
  left.classList.remove("translate-x-[-150%]");
});

//Close Icon Toggle Section

closeIcon.addEventListener("click", (e) => {
  hamburger.classList.remove("hidden");
  closeIcon.classList.add("opacity-0");
  closeIcon.classList.add("rotate-[90deg]");
  left.classList.add("translate-x-[-150%]");
});

//Toggle between the PC-Building

//Emaill Integration

//mobile size translate-x-[27px]
const toggler = document.querySelectorAll("[data-languageSelection]");
const togglerDiv = document.querySelector("#togglerDiv");
const circle = document.querySelector("#circle");

toggler.forEach((items) => {
  items.addEventListener("change", () => {
    if (items.value == "Deutsch") {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Accent font-[600]'>Benutzerdefinierte PCs</span> sind in Sicht";
      document.querySelector("#titleP").innerText =
        "Keine Notwendigkeit für überteuerte Sonderanfertigungen. Pro Kunde erstellt, keine versteckten Kosten.";
      document.querySelector("#quoteBtn").innerText =
        "Holen Sie sich ein Angebot";
      document.querySelector("#galleryHeading").innerText = "Galerie";
      document.querySelector("#servicesHeading").innerText = "Dienstleistungen";
      document.querySelector("#pcbuildingText").innerText = "PC Gebäude";
      document.querySelector("#pcbuildingPageText").innerText = "PC Gebäude";
      document.querySelector("#repairText").innerText = "Kleine Reparaturen";
      document.querySelector("#pcbuildingPagePara").innerText =
        "Sie können Ihren ersten PC nicht bauen? Bauen Sie Ihren ersten PC bei uns und wir kümmern uns um den Rest.";
      document.querySelector("#emailfirst").placeholder = "Email Adresse";
      document.querySelector("#priceCatLabel").innerText =
        "Wählen Sie die Preiskategorie aus";
      document.querySelector("#customReqText").innerText =
        "Benutzerdefinierte Anfragen";
      document.querySelector("#custom").placeholder =
        "Benutzerdefinierte Anfragen";
      document.querySelector("#priorExpText").innerText =
        "Haben Sie bereits Erfahrungen mit PCs?";
    } else {
      document.querySelector("#heading").innerHTML =
        "<span class='text-Accent font-[600]'>Custom PC's </span> are on the Horizon";
      document.querySelector("#titleP").innerText =
        "No need for overpriced custom builds. Built per customer, no hidden costs.";
      document.querySelector("#quoteBtn").innerText = "Get a quote";
      document.querySelector("#galleryHeading").innerText = "Gallery";
      document.querySelector("#servicesHeading").innerText = "Services";
      document.querySelector("#pcbuildingText").innerText = "PC-Building";
      document.querySelector("#repairText").innerText = "Small Repairs";
      document.querySelector("#pcbuildingPageText").innerText = "PC Building";
      document.querySelector("#pcbuildingPagePara").innerText =
        "Unable to build your first PC? Build your first pc from us and we'll take care of the rest.";
      document.querySelector("#emailfirst").placeholder = "Email Address";
      document.querySelector("#priceCatLabel").innerText =
        "Select Price Category";
      document.querySelector("#customReqText").innerText = "Custom Requests";
      document.querySelector("#priorExpText").innerText =
        "Do your have prior experience of PCs?";
      document.querySelector("#custom").placeholder = "Custom Request";
    }
  });
});
