class mensagemErro extends Error{constructor(e){super(e),this.name="Erro"}}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("telaerro-conteudo"),a=document.getElementById("telaerro"),t=L.map("map").setView([-14.235004,-51.92528],5),o=L.layerGroup(),r=L.layerGroup(),n=L.layerGroup(),s=L.layerGroup(),i=L.layerGroup(),c=L.layerGroup(),l=L.layerGroup(),p=document.getElementById("load"),d=document.getElementById("loadImg"),m=(e,a)=>e?`./js/locations/old/${e}/${a}`:`./js/locations/${a}`,g=["./img/loading0.gif","./img/loading1.gif","./img/loading2.gif"],u=[[!0,"GPON",()=>$(m(verData,"locations-gpon.json"),"GPON","somatorio-gpon")],[!0,"HFC",()=>$(m(verData,"locations-hfc.json"),"HFC","somatorio-hfc")],[!0,"Sobreposição",()=>$(m(verData,"locations-sobrepo.json"),"Sobreposição","somatorio-sobre")],[!0,"GPON Rede neutra",()=>$(m(verData,"locations-neutrogpon.json"),"GPON Rede neutra","somatorio-neutragpon")],[!1,"HFC Rede neutra",()=>$(m(verData,"locations-neutrohfc.json"),"HFC Rede neutra","somatorio-neutrahfc")],[!1,"ERRO Consulta API",()=>$(m(verData,"locations-erroapi.json"),"ERRO Consulta API","somatorio-erroapi")],[!1,"Sem serviço FIXO",()=>$(m(verData,"locations-nada.json"),"Sem serviço FIXO","somatorio-nada")]],h=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors',maxZoom:18}),b={OpenStreetMap:h,"Satélite":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:'Imagery &copy; <a href="https://www.arcgis.com/" target="_blank">ArcGIS</a>',maxZoom:18}),"Stamen Terrain":L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",{attribution:'Map tiles by <a href="http://stamen.com" target="_blank">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0" target="_blank">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0" target="_blank">CC BY SA</a>',maxZoom:18}),"Esri World Imagery":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri",maxZoom:18}),"CartoDB Positron":L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'}),"CartoDB Voyager":L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'}),"CartoDB Positron (Sem rótulos)":L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'}),"CartoDB Voyager (Sem rótulos)":L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.carto.com/">CartoDB</a> contributors'}),"CartoDB Dark Matter (Sem rótulos)":L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.carto.com/" target="_blank">CartoDB</a> contributors'}),"Esri World Street Map":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri",maxZoom:18}),"Esri World Topo Map":L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri",maxZoom:18})},f={'GPON <img height="20" width="15" src="./img/marker-icon-green.png" alt="Marcador GPON"/>':o,'HFC <img height="20" width="15" src="./img/marker-icon-red.png" alt="Marcador HFC"/>':r,'Sobreposição <img height="20" width="15" src="./img/marker-icon-yellow.png" alt="Marcador Sobreposição"/>':n,'GPON Rede neutra <img height="20" width="15" src="./img/marker-icon-grey.png" alt="Marcador GPON Rede Neutra"/>':s,'HFC Rede neutra <img height="20" width="15" src="./img/marker-icon-violet.png" alt="Marcador HFC Rede Neutra"/>':i,'Sem serviço FIXO <img height="20" width="15" src="./img/marker-icon-black.png" alt="Marcador Sem serviço FIXO"/>':c,'ERRO Consulta API <img height="20" width="15" src="./img/marker-icon-orange.png" alt="Marcador ERRO Consulta API"/>':l},y={GPON:o,HFC:r,"Sobreposição":n,"GPON Rede neutra":s,"HFC Rede neutra":i,"Sem serviço FIXO":c,"ERRO Consulta API":l};function E(e,a){return parseFloat(e)+(Math.random()*a-a/2)}function w(e="none"){p.style.display=e}function v(e="none"){a.style.display=e,w()}function I(a){e.innerHTML=a,v("block")}async function $(e,a,t){try{const o=L.layerGroup(),r=await async function(e){try{const a=await fetch(e);if(!a.ok)throw new Error("Erro ao carregar dados.");return a.json()}catch(e){I(e)}}(e);if(document.getElementById(t).innerHTML=`<span class="center">${r.length}</span>`,r.forEach((function(e){const a=L.icon({iconUrl:`./img/marker-icon-${e.color}.png`,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[0,-41]}),t=L.marker([E(e.latitude,.005),E(e.longitude,.005)],{icon:a});t.bindPopup(e.name),t.addTo(o)})),r.length>0){if(!(a in y))throw new mensagemErro(`Tipo de localização desconhecido: ${a}`);y[a].addLayer(o)}}catch(e){I(e)}}async function C(){if(d.setAttribute("src",g[Math.floor(Math.random()*g.length)]),!function(){const e=document.getElementById("cep").value,a=document.getElementById("numero").value;return w(),8!==e.length?(I("O campo CEP deve conter 8 números."),!1):!(a.length<1||a.length>9)||(I("O campo Número deve conter de 1 a 9 números."),!1)}())return;v(),w("block");const e=document.getElementById("cep").value,a=document.getElementById("numero").value,o=`https://api.amxrest.net/viability/${e}/${a}`,r=`https://planos.claro.com.br/monte-sua-combinacao?cep=${e}&number=${a}`;try{const n=await fetch(o);if(n.ok){const o=await n.json();let s="",i="",c="",l="";try{const a=await fetch(`https://viacep.com.br/ws/${e}/json/`);if(!a.ok)throw new mensagemErro("Erro ao carregar dados do viacep, fallback para dados fornecidos pela própria API claro.");{const e=await a.json();s=e.logradouro||o.data.logradouro,i=e.bairro||o.data.bairro,c=e.localidade||o.data.cidade,l=e.uf||o.data.uf}}catch(e){s=o.data.logradouro,i=o.data.bairro,c=o.data.cidade,l=o.data.uf,a=o.data.number}let p="<span> Localização aproximada <br> ";p+=`Ver no <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${s}, ${a}, ${c}, ${l}, Brasil`)}" target="_blank"> Google Maps <img src="./img/google_maps_icon.png" /></a> </span> <br>`,p+=`Consulta oficial disponível na <a href="${r}" target="_blank">CLARO</a>`,p+=`<p>CEP: ${e} Número: ${a}<br>`,p+=`Endereço: ${s}, ${a}, ${i}, ${c}, ${l}, Brasil </p>`;for(const e of o.data.technologies){let a=null;const t=[];if("Satellite"===e.name)a="SATELLITE / MÓVEL";else if("GPONAVTAL"===o.data.cableNodeID)a="REDE NEUTRA VTAL";else if("GPONAATC"===o.data.cableNodeID)a="REDE NEUTRA ATC";else if(e.gpon)a="GPON (FIBRA)";else{if(e.gpon){const a='Erro ao definir tipo de tecnologia, se possível reporte via <a href="https://github.com/dudu15051505/mapa-claro-beta/issues/" target="_blank">GITHUB</a> informando o CEP e Numero pesquisado para futura verificação. <br>';throw a+=p+=`<span>${JSON.stringify(e,null,"\t")}</span>`,new Error(a)}a="HFC (COAXIAL)"}if(e.tv&&t.push("TV"),e.phone&&t.push("TELEFONE FIXO"),e.internet&&t.push("INTERNET"),t.length>0){p+=`<p> SERVIÇOS VIA ${a}:<br>`;for(const e of t)p+=`&#9679; ${e}<br>`;p+="</p>"}else"Cable"===e.name&&0===t.length?(p+=`<span> A tecnologia ${a} retornou na consulta, mas não a serviços ativos na API</span> <br>`,p+=`<span>Realize uma consulta oficial diretamente no site da <a href="${r}" target="_blank">CLARO</a> para confirmar os serviços disponíveis</span> <br>`):(p+='<span> Ocorreu algum erro, se possível reporte via <a href="https://github.com/dudu15051505/mapa-claro-beta/issues/" target="_blank">GITHUB</a> informando o CEP e Numero pesquisado para futura verificação.</span> <br>',p+=`<span>${JSON.stringify(e,null,"\t")}</span>`)}try{const e=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${s} ${a}, ${c}, ${l}, Brasil`)}`);if(!e.ok)throw new mensagemErro("Erro ao processar a solicitação de geocodificação:",e.status,"-",e.statusText);{const o=await e.json();if(!(o.length>0)){const e=`https://www.openstreetmap.org/search?query=${encodeURIComponent(`${s} ${a}, ${c}, ${l}, Brasil#map=5/-13.240/-50.383`)}`;throw new mensagemErro(`<b>Endereço não encontrado na base de geolocalização <a href="${e}" target="_blank">OpenStreetMap <img src="./img/osm_icon.svg" style="height: 20px;width: 20px;" /></a></b> <br><br>Dados retornados pela API Claro: <br><br> ${p}`)}{const e=o[0],a=parseFloat(e.lat),r=parseFloat(e.lon),n=L.icon({iconUrl:"./img/marker-icon-blue.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[0,-41]});L.marker([a,r],{icon:n}).addTo(t).bindPopup(p).openPopup(),t.panTo(new L.LatLng(a,r)),t.setView([a,r],16)}}}catch(e){I(e)}}else I(`Erro ao consultar a API: ${n.status} - ${n.statusText}`)}catch(e){I(`Erro ao processar a solicitação: ${e}`)}w()}L.control.layers(b,f).addTo(t),async function(){fetch("./js/locations/locations-data-lista.json").then((e=>{if(!e.ok)throw new Error("Erro ao carregar lista de dados passados.");return e.json()})).then((e=>{const a=document.getElementById("lista-data-dados");if(e.forEach(((e,a)=>{const t=new Date(e.data),o=`${t.getDate()+1}/${t.getMonth()+1}/${t.getFullYear()}`,r=new Option(e.informacaoExtra?`${o} - ${e.informacaoExtra}`:`${o}`,e.valorCampo);document.getElementById("lista-data-dados").appendChild(r);const n=document.getElementById("dados-info"),s=document.createElement("span");if(s.setAttribute("id",`dados-info-${a}`),s.style.display="none",e.textoUrl){const a=document.createElement("a");a.setAttribute("href",e.url),a.setAttribute("target","_blank"),a.textContent=e.textoUrl,s.appendChild(a),n.appendChild(s)}})),verData)a.value=verData;else{a.options[a.options.length-1].selected=!0}if(document.getElementById(`dados-info-${a.selectedIndex}`)){document.getElementById(`dados-info-${a.selectedIndex}`).style.display="block"}})).catch((e=>{I(e)}))}(),u.forEach((async(e,a)=>{try{await Promise.race([e[2]()]);e[0]&&async function(e){const a=y[e];a?a.addTo(t):I(`Camada não encontrada: ${e}`)}(e[1])}catch(e){I(`Erro ao carregar dados: ${e}`)}})),h.addTo(t),document.getElementById("formulario").addEventListener("submit",(function(e){e.preventDefault(),C()})),document.getElementById("busca").addEventListener("submit",(function(e){e.preventDefault(),function(){const e=document.getElementById("busca-valor").value;fetch("https://nominatim.openstreetmap.org/search?format=json&q="+e).then((e=>e.json())).then((a=>{if(!(a.length>0)){const a=`https://www.openstreetmap.org/search?query=${encodeURIComponent(e)}`;throw new mensagemErro(`Local não encontrado na base de geolocalização <a href="${a}#map=5/-13.240/-50.383" target="_blank">OpenStreetMap <img src="./img/osm_icon.svg" style="height: 20px;width: 20px;" /></a></b> <br><br>`)}v(),t.setView([parseFloat(a[0].lat),parseFloat(a[0].lon)],10),L.marker([parseFloat(a[0].lat),parseFloat(a[0].lon)]).addTo(t)})).catch((e=>{I(e)}))}()}))}));