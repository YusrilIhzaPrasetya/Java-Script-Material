var nilaiPertama = prompt("Masukan nilai pertama");
var nilaiKedua = prompt("Masukan nilai kedua");

if (nilaiPertama > nilaiKedua) {
	console.log ("Nilai pertama lebih besar dari nilai kedua");
}else if(nilaiPertama < nilaiKedua){
	console.log ("Nilai kedua lebih besar dari nilia pertama");
}else if(nilaiPertama == nilaiKedua){
	console.log ("Nilai pertama dan kedua sama besarnya");
}