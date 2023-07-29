var locationsHfc = [
/* CIDADES ADICIONADAS MANUALMENTE, POR ERRO NO CADASTRO DE CONSULTA API DA CLARO */
{ name: 'São Gonçalo, RJ <br> HFC', color: 'red', latitude: '-22.82679', longitude: '-43.063351' },
{ name: 'Criciúma, SC <br> HFC', color: 'red', latitude: '-28.672267', longitude: '-49.372887' },
{ name: 'Mogi das Cruzes, SP <br> HFC', color: 'red', latitude: '-23.52082', longitude: '-46.18541' },
{ name: 'Santa Branca, SP <br> HFC', color: 'red', latitude: '-23.393311', longitude: '-45.887521' },

/* CIDADES CONSULTADAS AUTOMATICAMENTE PELO SCRIPT */
{ name: 'Rio Branco, AC <br> HFC', color: 'red', latitude: '-9.97499', longitude: '-67.824348' },
{ name: 'Maceió, AL <br> HFC', color: 'red', latitude: '-9.665985', longitude: '-35.73496' },
{ name: 'Manaus, AM <br> HFC', color: 'red', latitude: '-3.118662', longitude: '-60.02123' },
{ name: 'Lauro de Freitas, BA <br> HFC', color: 'red', latitude: '-12.8978', longitude: '-38.321008' },
{ name: 'Salvador, BA <br> HFC', color: 'red', latitude: '-12.97178', longitude: '-38.501068' },
{ name: 'Vitória da Conquista, BA <br> HFC', color: 'red', latitude: '-14.861466', longitude: '-40.844159' },
{ name: 'Fortaleza, CE <br> HFC', color: 'red', latitude: '-3.716638', longitude: '-38.542298' },
{ name: 'Brasília, DF <br> HFC', color: 'red', latitude: '-15.779522', longitude: '-47.929657' },
{ name: 'Cachoeiro de Itapemirim, ES <br> HFC', color: 'red', latitude: '-20.846212', longitude: '-41.119829' },
{ name: 'Cariacica, ES <br> HFC', color: 'red', latitude: '-20.263202', longitude: '-40.416549' },
{ name: 'Serra, ES <br> HFC', color: 'red', latitude: '-20.121032', longitude: '-40.307408' },
{ name: 'Vila Velha, ES <br> HFC', color: 'red', latitude: '-20.341705', longitude: '-40.287458' },
{ name: 'Vitória, ES <br> HFC', color: 'red', latitude: '-20.315472', longitude: '-40.312806' },
{ name: 'Anápolis, GO <br> HFC', color: 'red', latitude: '-16.328095', longitude: '-48.952958' },
{ name: 'Aparecida de Goiânia, GO <br> HFC', color: 'red', latitude: '-16.819804', longitude: '-49.246856' },
{ name: 'Goiânia, GO <br> HFC', color: 'red', latitude: '-16.686439', longitude: '-49.264346' },
{ name: 'São Luís, MA <br> HFC', color: 'red', latitude: '-2.538742', longitude: '-44.282513' },
{ name: 'Belo Horizonte, MG <br> HFC', color: 'red', latitude: '-19.910183', longitude: '-43.926572' },
{ name: 'Betim, MG <br> HFC', color: 'red', latitude: '-19.966827', longitude: '-44.200775' },
{ name: 'Contagem, MG <br> HFC', color: 'red', latitude: '-19.932079', longitude: '-44.05392' },
{ name: 'Governador Valadares, MG <br> HFC', color: 'red', latitude: '-18.854452', longitude: '-41.95553' },
{ name: 'Ipatinga, MG <br> HFC', color: 'red', latitude: '-19.470275', longitude: '-42.547612' },
{ name: 'Juiz de Fora, MG <br> HFC', color: 'red', latitude: '-21.75952', longitude: '-43.339759' },
{ name: 'Nova Lima, MG <br> HFC', color: 'red', latitude: '-19.975763', longitude: '-43.850854' },
{ name: 'Sabará, MG <br> HFC', color: 'red', latitude: '-19.884045', longitude: '-43.82631' },
{ name: 'Sete Lagoas, MG <br> HFC', color: 'red', latitude: '-19.456902', longitude: '-44.241255' },
{ name: 'Teófilo Otoni, MG <br> HFC', color: 'red', latitude: '-17.859534', longitude: '-41.508717' },
{ name: 'Uberaba, MG <br> HFC', color: 'red', latitude: '-19.747205', longitude: '-47.938073' },
{ name: 'Uberlândia, MG <br> HFC', color: 'red', latitude: '-18.914142', longitude: '-48.274934' },
{ name: 'Varginha, MG <br> HFC', color: 'red', latitude: '-21.555581', longitude: '-45.436424' },
{ name: 'Campo Grande, MS <br> HFC', color: 'red', latitude: '-20.448589', longitude: '-54.629463' },
{ name: 'Dourados, MS <br> HFC', color: 'red', latitude: '-22.223099', longitude: '-54.812043' },
{ name: 'Cuiabá, MT <br> HFC', color: 'red', latitude: '-15.600979', longitude: '-56.097397' },
{ name: 'Rondonópolis, MT <br> HFC', color: 'red', latitude: '-16.467251', longitude: '-54.637173' },
{ name: 'Várzea Grande, MT <br> HFC', color: 'red', latitude: '-15.645816', longitude: '-56.132218' },
{ name: 'Ananindeua, PA <br> HFC', color: 'red', latitude: '-1.363914', longitude: '-48.374298' },
{ name: 'Belém, PA <br> HFC', color: 'red', latitude: '-1.455396', longitude: '-48.489756' },
{ name: 'Cabedelo, PB <br> HFC', color: 'red', latitude: '-6.987314', longitude: '-34.828409' },
{ name: 'Campina Grande, PB <br> HFC', color: 'red', latitude: '-7.221958', longitude: '-35.873144' },
{ name: 'João Pessoa, PB <br> HFC', color: 'red', latitude: '-7.11509', longitude: '-34.864121' },
{ name: 'Caruaru, PE <br> HFC', color: 'red', latitude: '-8.284547', longitude: '-35.969863' },
{ name: 'Jaboatão Dos Guararapes, PE <br> HFC', color: 'red', latitude: '-8.112982', longitude: '-35.014959' },
{ name: 'Olinda, PE <br> HFC', color: 'red', latitude: '-8.010166', longitude: '-34.854504' },
{ name: 'Paulista, PE <br> HFC', color: 'red', latitude: '-7.934007', longitude: '-34.868407' },
{ name: 'Recife, PE <br> HFC', color: 'red', latitude: '-8.046658', longitude: '-34.877065' },
{ name: 'Teresina, PI <br> HFC', color: 'red', latitude: '-5.091944', longitude: '-42.803364' },
{ name: 'Almirante Tamandaré, PR <br> HFC', color: 'red', latitude: '-25.318819', longitude: '-49.303733' },
{ name: 'Arapongas, PR <br> HFC', color: 'red', latitude: '-23.415296', longitude: '-51.42592' },
{ name: 'Araucária, PR <br> HFC', color: 'red', latitude: '-25.585939', longitude: '-49.404748' },
{ name: 'Campo Largo, PR <br> HFC', color: 'red', latitude: '-25.452535', longitude: '-49.529026' },
{ name: 'Cascavel, PR <br> HFC', color: 'red', latitude: '-24.957301', longitude: '-53.459005' },
{ name: 'Cianorte, PR <br> HFC', color: 'red', latitude: '-23.659859', longitude: '-52.605444' },
{ name: 'Colombo, PR <br> HFC', color: 'red', latitude: '-25.292487', longitude: '-49.22616' },
{ name: 'Curitiba, PR <br> HFC', color: 'red', latitude: '-25.419547', longitude: '-49.264622' },
{ name: 'Guarapuava, PR <br> HFC', color: 'red', latitude: '-25.390237', longitude: '-51.462317' },
{ name: 'Londrina, PR <br> HFC', color: 'red', latitude: '-23.303975', longitude: '-51.1691' },
{ name: 'Maringá, PR <br> HFC', color: 'red', latitude: '-23.420545', longitude: '-51.933298' },
{ name: 'Pinhais, PR <br> HFC', color: 'red', latitude: '-25.442949', longitude: '-49.19267' },
{ name: 'Ponta Grossa, PR <br> HFC', color: 'red', latitude: '-25.091622', longitude: '-50.166787' },
{ name: 'São José Dos Pinhais, PR <br> HFC', color: 'red', latitude: '-25.531343', longitude: '-49.203097' },
{ name: 'Barra Mansa, RJ <br> HFC', color: 'red', latitude: '-22.548084', longitude: '-44.175241' },
{ name: 'Belford Roxo, RJ <br> HFC', color: 'red', latitude: '-22.764042', longitude: '-43.39921' },
{ name: 'Campos Dos Goytacazes, RJ <br> HFC', color: 'red', latitude: '-21.762171', longitude: '-41.318055' },
{ name: 'Duque de Caxias, RJ <br> HFC', color: 'red', latitude: '-22.785801', longitude: '-43.304895' },
{ name: 'Macaé, RJ <br> HFC', color: 'red', latitude: '-22.376807', longitude: '-41.784828' },
{ name: 'Mesquita, RJ <br> HFC', color: 'red', latitude: '-22.802811', longitude: '-43.460066' },
{ name: 'Nilópolis, RJ <br> HFC', color: 'red', latitude: '-22.805658', longitude: '-43.423344' },
{ name: 'Niterói, RJ <br> HFC', color: 'red', latitude: '-22.88321', longitude: '-43.103367' },
{ name: 'Nova Iguaçu, RJ <br> HFC', color: 'red', latitude: '-22.755635', longitude: '-43.460325' },
{ name: 'Petrópolis, RJ <br> HFC', color: 'red', latitude: '-22.519963', longitude: '-43.192613' },
{ name: 'Resende, RJ <br> HFC', color: 'red', latitude: '-22.470473', longitude: '-44.45091' },
{ name: 'Rio Das Ostras, RJ <br> HFC', color: 'red', latitude: '-22.517378', longitude: '-41.947509' },
{ name: 'Rio de Janeiro, RJ <br> HFC', color: 'red', latitude: '-22.912897', longitude: '-43.200295' },
{ name: 'Teresópolis, RJ <br> HFC', color: 'red', latitude: '-22.416464', longitude: '-42.97519' },
{ name: 'Volta Redonda, RJ <br> HFC', color: 'red', latitude: '-22.520212', longitude: '-44.099555' },
{ name: 'Natal, RN <br> HFC', color: 'red', latitude: '-5.793567', longitude: '-35.198604' },
{ name: 'Parnamirim, RN <br> HFC', color: 'red', latitude: '-5.911156', longitude: '-35.271' },
{ name: 'Porto Velho, RO <br> HFC', color: 'red', latitude: '-8.760772', longitude: '-63.899902' },
{ name: 'Alvorada, RS <br> HFC', color: 'red', latitude: '-29.9914', longitude: '-51.080857' },
{ name: 'Bagé, RS <br> HFC', color: 'red', latitude: '-31.32965', longitude: '-54.09992' },
{ name: 'Cachoeirinha, RS <br> HFC', color: 'red', latitude: '-29.947222', longitude: '-51.101606' },
{ name: 'Campo Bom, RS <br> HFC', color: 'red', latitude: '-29.674694', longitude: '-51.060601' },
{ name: 'Canoas, RS <br> HFC', color: 'red', latitude: '-29.912758', longitude: '-51.185681' },
{ name: 'Capão da Canoa, RS <br> HFC', color: 'red', latitude: '-29.764242', longitude: '-50.028243' },
{ name: 'Caxias do Sul, RS <br> HFC', color: 'red', latitude: '-29.162905', longitude: '-51.179161' },
{ name: 'Cruz Alta, RS <br> HFC', color: 'red', latitude: '-28.645001', longitude: '-53.604831' },
{ name: 'Erechim, RS <br> HFC', color: 'red', latitude: '-27.63638', longitude: '-52.26969' },
{ name: 'Estância Velha, RS <br> HFC', color: 'red', latitude: '-29.65354', longitude: '-51.184339' },
{ name: 'Esteio, RS <br> HFC', color: 'red', latitude: '-29.851963', longitude: '-51.184065' },
{ name: 'Farroupilha, RS <br> HFC', color: 'red', latitude: '-29.222689', longitude: '-51.341853' },
{ name: 'Gravataí, RS <br> HFC', color: 'red', latitude: '-29.941319', longitude: '-50.986891' },
{ name: 'Lajeado, RS <br> HFC', color: 'red', latitude: '-29.459086', longitude: '-51.964427' },
{ name: 'Novo Hamburgo, RS <br> HFC', color: 'red', latitude: '-29.687548', longitude: '-51.132828' },
{ name: 'Passo Fundo, RS <br> HFC', color: 'red', latitude: '-28.257564', longitude: '-52.409112' },
{ name: 'Pelotas, RS <br> HFC', color: 'red', latitude: '-31.764898', longitude: '-52.337058' },
{ name: 'Porto Alegre, RS <br> HFC', color: 'red', latitude: '-30.031771', longitude: '-51.206533' },
{ name: 'Rio Grande, RS <br> HFC', color: 'red', latitude: '-32.034875', longitude: '-52.10705' },
{ name: 'Santa Cruz do Sul, RS <br> HFC', color: 'red', latitude: '-29.722021', longitude: '-52.434318' },
{ name: 'Santa Maria, RS <br> HFC', color: 'red', latitude: '-29.686817', longitude: '-53.814946' },
{ name: 'São Leopoldo, RS <br> HFC', color: 'red', latitude: '-29.754494', longitude: '-51.149773' },
{ name: 'Sapiranga, RS <br> HFC', color: 'red', latitude: '-29.634885', longitude: '-51.006446' },
{ name: 'Sapucaia do Sul, RS <br> HFC', color: 'red', latitude: '-29.827575', longitude: '-51.144975' },
{ name: 'Uruguaiana, RS <br> HFC', color: 'red', latitude: '-29.761436', longitude: '-57.085287' },
{ name: 'Viamão, RS <br> HFC', color: 'red', latitude: '-30.081899', longitude: '-51.019435' },
{ name: 'Balneário Camboriú, SC <br> HFC', color: 'red', latitude: '-26.992594', longitude: '-48.635152' },
{ name: 'Blumenau, SC <br> HFC', color: 'red', latitude: '-26.915501', longitude: '-49.070904' },
{ name: 'Brusque, SC <br> HFC', color: 'red', latitude: '-27.097706', longitude: '-48.910663' },
{ name: 'Chapecó, SC <br> HFC', color: 'red', latitude: '-27.100448', longitude: '-52.61519' },
{ name: 'Florianópolis, SC <br> HFC', color: 'red', latitude: '-27.594486', longitude: '-48.547696' },
{ name: 'Itajaí, SC <br> HFC', color: 'red', latitude: '-26.910097', longitude: '-48.670475' },
{ name: 'Itapema, SC <br> HFC', color: 'red', latitude: '-27.08607', longitude: '-48.616038' },
{ name: 'Joinville, SC <br> HFC', color: 'red', latitude: '-26.304497', longitude: '-48.848675' },
{ name: 'Navegantes, SC <br> HFC', color: 'red', latitude: '-26.894293', longitude: '-48.654593' },
{ name: 'Palhoça, SC <br> HFC', color: 'red', latitude: '-27.645518', longitude: '-48.669661' },
{ name: 'São José, SC <br> HFC', color: 'red', latitude: '-27.613577', longitude: '-48.636607' },
{ name: 'Aracaju, SE <br> HFC', color: 'red', latitude: '-10.909133', longitude: '-37.06766' },
{ name: 'Americana, SP <br> HFC', color: 'red', latitude: '-22.73736', longitude: '-47.333119' },
{ name: 'Aparecida, SP <br> HFC', color: 'red', latitude: '-22.849509', longitude: '-45.232496' },
{ name: 'Araçatuba, SP <br> HFC', color: 'red', latitude: '-21.207648', longitude: '-50.440106' },
{ name: 'Araraquara, SP <br> HFC', color: 'red', latitude: '-21.784511', longitude: '-48.178014' },
{ name: 'Araras, SP <br> HFC', color: 'red', latitude: '-22.357238', longitude: '-47.384235' },
{ name: 'Artur Nogueira, SP <br> HFC', color: 'red', latitude: '-22.572737', longitude: '-47.172679' },
{ name: 'Atibaia, SP <br> HFC', color: 'red', latitude: '-23.117059', longitude: '-46.556262' },
{ name: 'Barueri, SP <br> HFC', color: 'red', latitude: '-23.505689', longitude: '-46.879042' },
{ name: 'Bauru, SP <br> HFC', color: 'red', latitude: '-22.324569', longitude: '-49.087142' },
{ name: 'Bertioga, SP <br> HFC', color: 'red', latitude: '-23.848568', longitude: '-46.139586' },
{ name: 'Botucatu, SP <br> HFC', color: 'red', latitude: '-22.883697', longitude: '-48.443706' },
{ name: 'Bragança Paulista, SP <br> HFC', color: 'red', latitude: '-22.952681', longitude: '-46.54188' },
{ name: 'Caçapava, SP <br> HFC', color: 'red', latitude: '-23.099204', longitude: '-45.707645' },
{ name: 'Cachoeira Paulista, SP <br> HFC', color: 'red', latitude: '-22.666498', longitude: '-45.015384' },
{ name: 'Campinas, SP <br> HFC', color: 'red', latitude: '-22.905346', longitude: '-47.06595' },
{ name: 'Capivari, SP <br> HFC', color: 'red', latitude: '-22.995144', longitude: '-47.50715' },
{ name: 'Carapicuíba, SP <br> HFC', color: 'red', latitude: '-23.523471', longitude: '-46.840676' },
{ name: 'Cosmópolis, SP <br> HFC', color: 'red', latitude: '-22.641906', longitude: '-47.192578' },
{ name: 'Cotia, SP <br> HFC', color: 'red', latitude: '-23.602177', longitude: '-46.91902' },
{ name: 'Cruzeiro, SP <br> HFC', color: 'red', latitude: '-22.572764', longitude: '-44.96896' },
{ name: 'Cubatão, SP <br> HFC', color: 'red', latitude: '-23.891121', longitude: '-46.423968' },
{ name: 'Diadema, SP <br> HFC', color: 'red', latitude: '-23.681347', longitude: '-46.62052' },
{ name: 'Elias Fausto, SP <br> HFC', color: 'red', latitude: '-23.042822', longitude: '-47.368153' },
{ name: 'Franca, SP <br> HFC', color: 'red', latitude: '-20.53523', longitude: '-47.403861' },
{ name: 'Guaratinguetá, SP <br> HFC', color: 'red', latitude: '-22.807534', longitude: '-45.193788' },
{ name: 'Guarujá, SP <br> HFC', color: 'red', latitude: '-23.988798', longitude: '-46.257959' },
{ name: 'Guarulhos, SP <br> HFC', color: 'red', latitude: '-23.453758', longitude: '-46.533347' },
{ name: 'Hortolândia, SP <br> HFC', color: 'red', latitude: '-22.852854', longitude: '-47.214259' },
{ name: 'Indaiatuba, SP <br> HFC', color: 'red', latitude: '-23.081591', longitude: '-47.210093' },
{ name: 'Itapecerica da Serra, SP <br> HFC', color: 'red', latitude: '-23.716135', longitude: '-46.857193' },
{ name: 'Itapetininga, SP <br> HFC', color: 'red', latitude: '-23.588607', longitude: '-48.048326' },
{ name: 'Itapevi, SP <br> HFC', color: 'red', latitude: '-23.548774', longitude: '-46.932747' },
{ name: 'Itu, SP <br> HFC', color: 'red', latitude: '-23.254397', longitude: '-47.292688' },
{ name: 'Jacareí, SP <br> HFC', color: 'red', latitude: '-23.29829', longitude: '-45.965814' },
{ name: 'Jandira, SP <br> HFC', color: 'red', latitude: '-23.527537', longitude: '-46.902314' },
{ name: 'Jaú, SP <br> HFC', color: 'red', latitude: '-22.293585', longitude: '-48.559193' },
{ name: 'Jundiaí, SP <br> HFC', color: 'red', latitude: '-23.185218', longitude: '-46.897358' },
{ name: 'Limeira, SP <br> HFC', color: 'red', latitude: '-22.56605', longitude: '-47.396987' },
{ name: 'Lorena, SP <br> HFC', color: 'red', latitude: '-22.73338', longitude: '-45.11968' },
{ name: 'Marília, SP <br> HFC', color: 'red', latitude: '-22.217108', longitude: '-49.95006' },
{ name: 'Mauá, SP <br> HFC', color: 'red', latitude: '-23.66767', longitude: '-46.461263' },
{ name: 'Mogi Das Cruzes, SP <br> HFC', color: 'red', latitude: '-23.52082', longitude: '-46.18541' },
{ name: 'Mogi Guaçu, SP <br> HFC', color: 'red', latitude: '-22.367453', longitude: '-46.9428' },
{ name: 'Mogi Mirim, SP <br> HFC', color: 'red', latitude: '-22.431878', longitude: '-46.950514' },
{ name: 'Monte Mor, SP <br> HFC', color: 'red', latitude: '-22.945043', longitude: '-47.312182' },
{ name: 'Nova Odessa, SP <br> HFC', color: 'red', latitude: '-22.783186', longitude: '-47.294059' },
{ name: 'Osasco, SP <br> HFC', color: 'red', latitude: '-23.53239', longitude: '-46.791555' },
{ name: 'Paulínia, SP <br> HFC', color: 'red', latitude: '-22.754178', longitude: '-47.148776' },
{ name: 'Pindamonhangaba, SP <br> HFC', color: 'red', latitude: '-22.92463', longitude: '-45.461264' },
{ name: 'Piracicaba, SP <br> HFC', color: 'red', latitude: '-22.733801', longitude: '-47.647612' },
{ name: 'Poá, SP <br> HFC', color: 'red', latitude: '-23.533285', longitude: '-46.347292' },
{ name: 'Porto Feliz, SP <br> HFC', color: 'red', latitude: '-23.209318', longitude: '-47.52512' },
{ name: 'Potim, SP <br> HFC', color: 'red', latitude: '-22.834327', longitude: '-45.255205' },
{ name: 'Praia Grande, SP <br> HFC', color: 'red', latitude: '-24.008378', longitude: '-46.412057' },
{ name: 'Presidente Prudente, SP <br> HFC', color: 'red', latitude: '-22.120654', longitude: '-51.392526' },
{ name: 'Rafard, SP <br> HFC', color: 'red', latitude: '-23.010508', longitude: '-47.531795' },
{ name: 'Ribeirão Preto, SP <br> HFC', color: 'red', latitude: '-21.169923', longitude: '-47.809875' },
{ name: 'Rio Claro, SP <br> HFC', color: 'red', latitude: '-22.398378', longitude: '-47.554632' },
{ name: 'Salto, SP <br> HFC', color: 'red', latitude: '-23.199592', longitude: '-47.293087' },
{ name: 'Santana de Parnaíba, SP <br> HFC', color: 'red', latitude: '-23.442514', longitude: '-46.922215' },
{ name: 'Santo André, SP <br> HFC', color: 'red', latitude: '-23.67373', longitude: '-46.543154' },
{ name: 'Santos, SP <br> HFC', color: 'red', latitude: '-23.953543', longitude: '-46.335042' },
{ name: 'São Bernardo do Campo, SP <br> HFC', color: 'red', latitude: '-23.691412', longitude: '-46.564617' },
{ name: 'São Caetano do Sul, SP <br> HFC', color: 'red', latitude: '-23.62287', longitude: '-46.554797' },
{ name: 'São Carlos, SP <br> HFC', color: 'red', latitude: '-22.017395', longitude: '-47.885971' },
{ name: 'São José do Rio Preto, SP <br> HFC', color: 'red', latitude: '-20.811289', longitude: '-49.375767' },
{ name: 'São José Dos Campos, SP <br> HFC', color: 'red', latitude: '-23.189554', longitude: '-45.884115' },
{ name: 'São Paulo, SP <br> HFC', color: 'red', latitude: '-23.532905', longitude: '-46.63952' },
{ name: 'São Vicente, SP <br> HFC', color: 'red', latitude: '-23.957353', longitude: '-46.388333' },
{ name: 'Sertãozinho, SP <br> HFC', color: 'red', latitude: '-21.131596', longitude: '-47.987496' },
{ name: 'Sorocaba, SP <br> HFC', color: 'red', latitude: '-23.496886', longitude: '-47.445073' },
{ name: 'Sumaré, SP <br> HFC', color: 'red', latitude: '-22.820416', longitude: '-47.272823' },
{ name: 'Suzano, SP <br> HFC', color: 'red', latitude: '-23.544828', longitude: '-46.311181' },
{ name: 'Taboão da Serra, SP <br> HFC', color: 'red', latitude: '-23.601867', longitude: '-46.752637' },
{ name: 'Taubaté, SP <br> HFC', color: 'red', latitude: '-23.010414', longitude: '-45.55926' },
{ name: 'Tietê, SP <br> HFC', color: 'red', latitude: '-23.110098', longitude: '-47.716378' },
{ name: 'Valinhos, SP <br> HFC', color: 'red', latitude: '-22.969805', longitude: '-46.997367' },
{ name: 'Vargem Grande Paulista, SP <br> HFC', color: 'red', latitude: '-23.599338', longitude: '-47.022038' },
{ name: 'Vinhedo, SP <br> HFC', color: 'red', latitude: '-23.030184', longitude: '-46.983312' },
{ name: 'Votorantim, SP <br> HFC', color: 'red', latitude: '-23.54459', longitude: '-47.438753' },
{ name: 'Palmas, TO <br> HFC', color: 'red', latitude: '-10.239973', longitude: '-48.355751' }
];
