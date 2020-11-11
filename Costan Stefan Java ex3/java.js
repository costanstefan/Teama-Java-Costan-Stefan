function myFunction() {
  document.getElementById("demo").innerHTML = "Imi voi dori sa termin facultatea cu bine.";
  document.getElementById("demo2").innerHTML = "Inginer Costan Stefan";
	document.getElementById('newimg').src='Costan Stefan 2.jpg';
	var tabelMaterii = document.getElementById("tabelMaterii");
	tabelMaterii.rows[1].cells[0].innerHTML="Inginerie sofware";
	tabelMaterii.rows[2].cells[0].innerHTML="Universitatea Tehnica-OSUT";
	tabelMaterii.rows[3].cells[0].innerHTML="Best Cluj Napoca";

document.body.style.background= "Yellow";
	
}
function arataVarsta()
{
	var azi= new Date;
	var varstaMEa;
	var anNasc=  document.getElementById("varsta").innerHTML;
	var anCurent= azi.getFullYear();
	varstaMEa=anCurent - parseInt(anNasc);
	document.getElementById("varsta").innerHTML= varstaMEa;
	
}