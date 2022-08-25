    var li_items = document.querySelectorAll(".sidebar ul li");
    var menu_icon = document.querySelector(".menu_icon");
    var wrapper = document.querySelector(".wrapper");
     menu_icon.addEventListener("click", () => {
	menu_icon.closest(".wrapper").classList.toggle("click_collapse");
	menu_icon.closest(".wrapper").classList.toggle("hover_collapse");
 })