function chamarAPI(){
	console.log("Chamando API");
	const endpoint = "api/latest";
	var oParametros = {
		base: $("#moeda_origem").val()
	};
	$.get(endpoint, oParametros, callback );
}

function callback(resultado){
	// console.log(resultado);
	
	var sMoedaOrigem = $("#moeda_origem").val();
	var sMoedaDestino = $("#moeda_destino").val();
	var fValor = resultado.rates[sMoedaDestino];

	var sDataConsulta = resultado.date;
	sDataConsulta = sDataConsulta.substring(8, 10) + "/" + sDataConsulta.substring(5, 7) + "/" + sDataConsulta.substring(0, 4);

	$("#data_cotacao").text(sDataConsulta);
	$("#valor_destino").text(fValor);
	$("#moeda_destino_celula").text(sMoedaDestino);
}