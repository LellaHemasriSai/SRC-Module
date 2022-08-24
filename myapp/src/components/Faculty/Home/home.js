var li_items = document.querySelectorAll(".sidebar ul li");
var menu_icon = document.querySelector(".menu_icon");
var wrapper = document.querySelector(".wrapper");

//var year=new Date().getFullYear();
//var year2=year+1;
//document.getElementById("year").innerHTML=year+" - "+year2


menu_icon.addEventListener("click", () => {
	menu_icon.closest(".wrapper").classList.toggle("click_collapse");
	menu_icon.closest(".wrapper").classList.toggle("hover_collapse");
})