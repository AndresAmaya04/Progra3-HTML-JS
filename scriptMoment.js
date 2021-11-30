console.log("Secrip create")

var form1 = document.getElementById("form1");


form1.addEventListener("submit", function(event){
	event.preventDefault();
	console.log(event);
	obtainData();
});

function change() {
    var item = document.getElementById("item_change");

    item.style.backgroundColor = "red";
}

function obtainData(){
	var data = Object.fromEntries(new FormData(event.target).entries());

	var output = document.getElementById("jsonHtml");

	output.innerHTML = '<h3 style="color: rgb(69, 182, 224)" >' + data.i_name + " " + data.i_lastname + " " + data.I_date + "</h3>";
}



