/******************************

	Koleksi Function JavaScript

******************************/



	/* Menghitung jumlah harga dan diskon 
		- harga satuan fixed 2600
		- diskon fixed 10% (0.1)
	*/

	function hitungharga ( jumlah ) {
		var hasil;
		var total;
		total = jumlah * 2500;
		hasil = total;
		//hasil = total - (total * 0.1);

		return hasil;
	}

	function hitungJumlahHargaDiscountBersyarat ( jumlah ){
		var hasil;
		var total;
		total = jumlah * 2500;
		

		if ( total >= 25000) {
			hasil = total - (total * 0.1);
		} else {
			hasil = total;
		}

		return hasil;
	}

	function bacaNama (){
		document.getElementById ('sembarang').innerHTML = document.getElementById ('isian').value;
	}

	function inputRasa(){
		hargasatuan = document.getElementById ('rasa').value;
	}

	function hitungHarga (){
		var jml = document.getElementById ('jumlah').value;
		document.getElementById('harga').innerHTML = hargasatuan * jml;
	}