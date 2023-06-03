$diretorio_arquivos = "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/dados"
$diretorio_arquivos_manual = "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/dados manuais"
$diretorio_arquivos_erro = "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/erro consulta"

if (!(Test-Path $diretorio_arquivos)) {
    New-Item $diretorio_arquivos -ItemType Directory
}
if (!(Test-Path $diretorio_arquivos_manual)) {
    New-Item $diretorio_arquivos_manual -ItemType Directory
}
if (!(Test-Path $diretorio_arquivos_erro)) {
    New-Item $diretorio_arquivos_erro -ItemType Directory
}

$nomearquivos = Get-ChildItem -Path $diretorio_arquivos
$nomearquivos_manual = Get-ChildItem -Path $diretorio_arquivos_manual
$nomearquivos_erro = Get-ChildItem -Path $diretorio_arquivos_erro

$csv = Import-Csv "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/latitude-longitude-cidades-powershell.csv"

$GPON = @();
$HFC = @();
$SOBRE = @();
$NADA = @();
$NEUTROGPON = @();
$NEUTROHFC = @();
$ERROAPI = @();

Clear-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-gpon.js" -Force
Clear-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-sobrepo.js" -Force
Clear-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-hfc.js" -Force
Clear-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-nada.js" -Force
Clear-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrogpon.js" -Force
Clear-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrohfc.js" -Force
Clear-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-erroapi.js" -Force

Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-gpon.js" "var locations_gpon = ["
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-sobrepo.js" "var locations_sobrepo = ["
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-hfc.js" "var locations_hfc = ["
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-nada.js" "var locations_nada = ["
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrogpon.js" "var locations_neutrogpon = ["
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrohfc.js" "var locations_neutrohfc = ["
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-erroapi.js" "var locations_erroapi = ["

# CIDADES ACERTADAS MANUALMENTE

Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-gpon.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-sobrepo.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-hfc.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-nada.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrogpon.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrohfc.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-erroapi.js" "/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */"

foreach($row_nomearquivos in $nomearquivos_manual) {
	$arquivo_nome = $row_nomearquivos.NAME.split("-");	
	try {
		$arquivo_nome[1] = $arquivo_nome[1].split(".")[0];
	}
	catch {
		Write-Host $arquivo_nome
		Exit
	}
	
	foreach($row_csv in $csv) {		
		if($row_csv.uf -eq $arquivo_nome[0] -And $row_csv.municipio -eq $arquivo_nome[1]) {
			$tem_gpon = 0;
			$tem_hfc = 0;
			$tem_soprepo = 0;
			$tem_gpon_neutro = 0;
			$tem_hfc_neutro = 0;
			$tem_nada = 1;
			$latitude = $row_csv.latitude;
			$longitude = $row_csv.longitude;
			
			foreach($line in Get-Content $row_nomearquivos) {
				switch($line) {
					"GPON"                { $tem_gpon = 1;        $tem_nada = 0; break }
					"HFC"                 { $tem_hfc = 1;         $tem_nada = 0; break }
					"Area Fibra Expans�o" { $tem_soprepo = 1;     $tem_nada = 0; break }
					"NEUTRA GPON"         { $tem_gpon_neutro = 1; $tem_nada = 0; break }
					"NEUTRA HFC"          { $tem_hfc_neutro = 1;  $tem_nada = 0; break }
				}
			}
			
			if($tem_gpon -eq 1) {					
				$GPON += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> GPON', color: 'green', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";

			}
			if($tem_soprepo -eq 1) {
				$SOBRE += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> Sobreposição HFC e GPON', color: 'yellow', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_hfc -eq 1) {
				$HFC += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> HFC', color: 'red', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_gpon_neutro -eq 1) {
				$NEUTROGPON += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> GPON REDE NEUTRA', color: 'grey', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_hfc_neutro -eq 1) {
				$NEUTROHFC += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> HFC REDE NEUTRA', color: 'violet', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_nada -eq 1) {
				$NADA += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> Sem serviço fixo', color: 'black', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
		}
	}	
}

Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-gpon.js" $GPON
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-sobrepo.js" $SOBRE
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-hfc.js" $HFC
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-nada.js" $NADA
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrogpon.js" $NEUTROGPON
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrohfc.js" $NEUTROHFC
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-erroapi.js" $ERROAPI

# CIDADES VIA CONSULTA AUTOMATICA

$GPON = @();
$HFC = @();
$SOBRE = @();
$NADA = @();
$NEUTROGPON = @();
$NEUTROHFC = @();
$ERROAPI = @();

Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-gpon.js" ""
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-sobrepo.js" ""
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-hfc.js" ""
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-nada.js" ""
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrogpon.js" ""
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrohfc.js" ""
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-erroapi.js" ""

Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-gpon.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-sobrepo.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-hfc.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-nada.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrogpon.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrohfc.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-erroapi.js" "/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */"

foreach($row_nomearquivos in $nomearquivos) {
	$arquivo_nome = $row_nomearquivos.NAME.split("-");	
	try {
		$arquivo_nome[1] = $arquivo_nome[1].split(".")[0];
	}
	catch {
		Write-Host $arquivo_nome
		Exit
	}
	
	foreach($row_csv in $csv) {		
		if($row_csv.uf -eq $arquivo_nome[0] -And $row_csv.municipio -eq $arquivo_nome[1]) {
			$tem_gpon = 0;
			$tem_hfc = 0;
			$tem_soprepo = 0;
			$tem_gpon_neutro = 0;
			$tem_hfc_neutro = 0;
			$tem_nada = 1;
			$latitude = $row_csv.latitude;
			$longitude = $row_csv.longitude;
			
			foreach($line in Get-Content $row_nomearquivos) {
				switch($line) {
					"GPON"                { $tem_gpon = 1;        $tem_nada = 0; break }
					"HFC"                 { $tem_hfc = 1;         $tem_nada = 0; break }
					"Area Fibra Expans�o" { $tem_soprepo = 1;     $tem_nada = 0; break }
					"NEUTRA GPON"         { $tem_gpon_neutro = 1; $tem_nada = 0; break }
					"NEUTRA HFC"          { $tem_hfc_neutro = 1;  $tem_nada = 0; break }
				}
			}
			
			if($tem_gpon -eq 1) {					
				$GPON += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> GPON', color: 'green', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";

			}
			if($tem_soprepo -eq 1) {
				$SOBRE += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> Sobreposição HFC e GPON', color: 'yellow', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_hfc -eq 1) {
				$HFC += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> HFC', color: 'red', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_gpon_neutro -eq 1) {
				$NEUTROGPON += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> GPON REDE NEUTRA', color: 'grey', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_hfc_neutro -eq 1) {
				$NEUTROHFC += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> HFC REDE NEUTRA', color: 'violet', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
			if($tem_nada -eq 1) {
				$NADA += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome[0]+" <br> Sem serviço fixo', color: 'black', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
			}
		}
	}	
}

$GPON[$GPON.Count-1] = $GPON[$GPON.Count-1] -replace ".$"
$HFC[$HFC.Count-1] = $HFC[$HFC.Count-1] -replace ".$"
$SOBRE[$SOBRE.Count-1] = $SOBRE[$SOBRE.Count-1] -replace ".$"
$NADA[$NADA.Count-1] = $NADA[$NADA.Count-1] -replace ".$"
$NEUTROGPON[$NEUTROGPON.Count-1] = $NEUTROGPON[$NEUTROGPON.Count-1] -replace ".$"
$NEUTROHFC[$NEUTROHFC.Count-1] = $NEUTROHFC[$NEUTROHFC.Count-1] -replace ".$"

foreach($row_nomearquivos in $nomearquivos_erro) {
	$arquivo_nome = $row_nomearquivos.NAME.split("-");	
	$arquivo_nome_inicio = $arquivo_nome[0].split(" ");
	
	try {
		$arquivo_nome[1] = $arquivo_nome[1].split(".")[0];
	}
	catch {
		Write-Host $arquivo_nome
		Exit
	}
	
	foreach($row_csv in $csv) {		
		if($row_csv.uf -eq $arquivo_nome_inicio[3] -And $row_csv.municipio -eq $arquivo_nome[1]) {
			$latitude = $row_csv.latitude;
			$longitude = $row_csv.longitude;
			$ERROAPI += "{ name: '"+$arquivo_nome[1]+", "+$arquivo_nome_inicio[3]+" <br> ERRO na consulta API', color: 'orange', latitude: '"+$latitude+"', longitude: '"+$longitude+"' },";
		}
	}	
}
$ERROAPI[$ERROAPI.Count-1] = $ERROAPI[$ERROAPI.Count-1] -replace ".$"

Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-gpon.js" $GPON
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-sobrepo.js" $SOBRE
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-hfc.js" $HFC
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-nada.js" $NADA
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrogpon.js" $NEUTROGPON
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrohfc.js" $NEUTROHFC
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-erroapi.js" $ERROAPI
			
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-gpon.js" "];"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-sobrepo.js" "];"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-hfc.js" "];"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-nada.js" "];"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrogpon.js" "];"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-neutrohfc.js" "];"
Add-Content -Path "/home/runner/work/claro-mapa-privado/claro-mapa-privado/scripts/js/locations-erroapi.js" "];"

Write-Host "fim"