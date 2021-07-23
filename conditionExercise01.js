var jabatanSaya = prompt("Mauskan jabatan anda :")

if (jabatanSaya == "HR") {
	console.log("Tugas anda adalah mencari dan merekrut programmer baru");
}else if(jabatanSaya == "CEO"){
	console.log("Tugas anda adalah bertanggung jawab dan me-manage perusahaan");
}else if(jabatanSaya == "CTO"){
	console.log("Tugas anda pembuat keputusan mengenai semua infrastruktur dari teknologi.");
}else if(jabatanSaya == "PROGRAMMER"){
	console.log("Tugas anda adalah membuat sebuah aplikasi yang di perintahkan oleh perusahaan");
}else{
	console.log("Anda harus memasukan opsi pilihan dengan benar");
}
