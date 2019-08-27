const ovly = { };

ovly.conversor = {
	versao: "1",
	// https://api.exchangeratesapi.io/latest
	chamarAPI: function(){
		console.log("Chamando API");
		var data_consulta = $("#data_consulta").val();
		const endpoint = "api/" + data_consulta;
		const endpoint_latest = "api/latest";
		var oParametros = {
			base: $("#moeda_origem").val(),
		//  date: $("#data_consulta").val(), 
		};
		// $.get(endpoint, oParametros, this.callback );
		if( data_consulta == ""){
			$.get(endpoint_latest, oParametros, this.callback);
		}
		else{
			var jqxhr = $.get(endpoint, oParametros, ovly.conversor.callback) 
			  .done(function() {
			    console.log("Sucesso");
			  })
			  .fail(function() {
				console.log("Erro");
				$.get(endpoint_latest, oParametros, ovly.conversor.callback);
			  })
			  .always(function() {
			    console.log("Finished");
			  });			
		};
	},
	callback: function(resultado){
		// var sMoedaOrigem = $("#moeda_origem").val();
		var sMoedaDestino = $("#moeda_destino").val();
		var fValor = resultado.rates[sMoedaDestino];
	
		var sDataConsulta = resultado.date;
		sDataConsulta = sDataConsulta.substring(8, 10) + "/" + sDataConsulta.substring(5, 7) + "/" + sDataConsulta.substring(0, 4);
	
		$("#data_cotacao").text(sDataConsulta);
		$("#valor_destino").text(fValor);
		$("#moeda_destino_celula").text(sMoedaDestino);
	},
}