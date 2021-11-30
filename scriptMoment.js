console.log("Secrip create")

var form1 = document.getElementById("form1");


form1.addEventListener("submit", function(event){
	event.preventDefault();
	console.log(event);
	obtainData();
});

function change0() {
    var item = document.getElementById("item_change0");

    item.style.backgroundColor = "red";

    var text = document.getElementById("text0")
    text.style.color = "white";
    text.style.size = "30px";
}

function change1() {
    var item = document.getElementById("item_change1");

    item.style.backgroundColor = "red";
    text.style.size = "30px";
    text.style.size = "30px";

    var text = document.getElementById("text1")
    text.style.color = "white";
}

function change2() {
    var item = document.getElementById("item_change2");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text2")
    text.style.color = "white";
}

function change3() {
    var item = document.getElementById("item_change3");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text3")
    text.style.color = "white";
}

function change4() {
    var item = document.getElementById("item_change4");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text4")
    text.style.color = "white";
}

function change5() {
    var item = document.getElementById("item_change5");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text5")
    text.style.color = "white";
}

function change6() {
    var item = document.getElementById("item_change6");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text6")
    text.style.color = "white";
}

function change7() {
    var item = document.getElementById("item_change7");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text7")
    text.style.color = "white";
}

function change8() {
    var item = document.getElementById("item_change8");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text8")
    text.style.color = "white";
}

function change9() {
    var item = document.getElementById("item_change9");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text9")
    text.style.color = "white";
}

function change10() {
    var item = document.getElementById("item_change10");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text10")
    text.style.color = "white";
}

function change11() {
    var item = document.getElementById("item_change11");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text11")
    text.style.color = "white";
}

function change12() {
    var item = document.getElementById("item_change12");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text12")
    text.style.color = "white";
}

function change13() {
    var item = document.getElementById("item_change13");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text13")
    text.style.color = "white";
}

function change14() {
    var item = document.getElementById("item_change14");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text14")
    text.style.color = "white";
}

function change15() {
    var item = document.getElementById("item_change15");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text15")
    text.style.color = "white";
}

function change16() {
    var item = document.getElementById("item_change16");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text16")
    text.style.color = "white";
}

function change17() {
    var item = document.getElementById("item_change17");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text17")
    text.style.color = "white";
}

function change18() {
    var item = document.getElementById("item_change18");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text18")
    text.style.color = "white";
}

function change19() {
    var item = document.getElementById("item_change19");

    item.style.backgroundColor = "red";
    text.style.size = "30px";

    var text = document.getElementById("text19")
    text.style.color = "white";
}

function obtainData(){
	var data = Object.fromEntries(new FormData(event.target).entries());

	var output = document.getElementById("jsonHtml");

	output.innerHTML = '<h3 style="color: rgb(69, 182, 224)" >' + data.i_name + " " + data.i_lastname + " " + data.I_date + "</h3>";
}



