const ovly = { };

ovly.conversor = {
	versao: "1",
	chamarAPI: function(){
		console.log("Chamando API");
		const endpoint = "api/latest";
		var oParametros = {
			base: $("#moeda_origem").val(),
			// date: $("#data_consulta").val(),
		};
		$.get(endpoint, oParametros, this.callback );
	},
	callback: function(resultado){
		// var sMoedaOrigem = $("#moeda_origem").val();
		var sMoedaDestino = $("#moeda_destino").val();
		var fValor = resultado.rates[sMoedaDestino];
	
		// var sDataConsulta = resultado.date;
		// sDataConsulta = sDataConsulta.substring(8, 10) + "/" + sDataConsulta.substring(5, 7) + "/" + sDataConsulta.substring(0, 4);
	
		// $("#data_cotacao").text(sDataConsulta);
		$("#valor_destino").text(fValor);
		$("#moeda_destino_celula").text(sMoedaDestino);
	}
}