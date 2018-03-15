import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  data: any;
  dataTemp: any;
  
  constructor(public http: HttpClient) {
    this.data = [
      { 
        name:"academias",
        category: 1,
        items:[
          {
            id:1,
            title:"Shangri-Lá",
            tel:"3899157-8079",
            address:"Rua Travessa Governador Valadares, 58-A – Centro",
            facebook:"facebook.com/caiomelzer",
            twitter:"twitter.com/caiomelzer",
            googleplus:"plus.com/caiomelzer",
            mail:"melzer.caio@gmail.com",
            whatsapp:"+5511980872469"
          },
          {
            id:2,
            title:"Power Fitness",
            tel:"3899128-6542",
            address:"Rua Raul Barbosa, 115 – Centro",
            facebook:"facebook.com/caiomelzer",
            twitter:"twitter.com/caiomelzer",
            googleplus:"plus.com/caiomelzer",
            mail:"melzer.caio@gmail.com",
            whatsapp:"+5511980872469"
          },
		   {
            id:3,
            title:"Fitness Club",
 
            address:"Rua Marechal Deodoro da Fonseca, 53 – Centro",
            facebook:"facebook.com/caiomelzer",
            twitter:"twitter.com/caiomelzer",
            googleplus:"plus.com/caiomelzer",
            mail:"melzer.caio@gmail.com",
            whatsapp:"+5511980872469"
          },
		  {
            id:4,
            title:"Academia Fitness",
            tel:"38991204862",
            address:"",
            facebook:"facebook.com/caiomelzer",
            twitter:"twitter.com/caiomelzer",
            googleplus:"plus.com/caiomelzer",
            mail:"melzer.caio@gmail.com",
            whatsapp:"+5511980872469"
          },
        ]
      },
      { 
        name:"açougues",
        category: 2,
        items:[
          {
            id:1,
            title:"Açougue Kilão",
            tel:"383831-1753",
            address:"Avenida Arthur Bernardes, 179 - Centro",
           
          },
          {
            id:2,
            title:"Açougue Nobre",
            address:"Avenida Arthur Bernardes, 266 - Centro",
           
          },
		  {
            id:3,
            title:"Casa de Carnes Algodões",
			tel:"383831-1114",
            address:"Rua Gentil Martins Ribeiro, 8 - Centro",
           
          },
		  {
            id:4,
            title:"Casa de Carnes Avenida",
			tel:"3899194-5469",
            address:"Avenida Artur Bernardes, 535 - Centro",
           
          },
		  {
            id:5,
            title:"Casa de Carnes Danny",
			tel:"383831-2011",
            address:"Rua Gentil Martins Ribeiro, 10 - Vila Kennedy",
           
          },
		  {
            id:6,
            title:"Casa de Carnes Marques",
			tel:"383831-1624",
            address:"Rua Benjamin Constant - Centro",
           
          },
		  {
            id:7,
            title:"Frigorífico Estevon",
			tel:"383831-1021",
            address:"Fazenda Covas de Mandioca, s/n - Zona rural",
           
          }
        ]
      },
	  { 
        name:"advogados",
        category: 31,
        items:[
          {
            id:1,
            title:"Adailson Mendes Brito",
            tel:"383831-1248",
            address:"Rua Marechal Deodoro, 101",
           
          },
		  {
            id:2,
            title:"Aldemir Fernando Martins",
            tel:"3899149-3171",
            address:"Rua Washington Luiz, 73-B – Centro",
           
          },
		  {
            id:3,
            title:"Allysson Matheus",
            tel:"388421-4664",
            address:"Rua Marechal Deodoro, 86-1ºAndar – Centro",
           
          },
		  {
            id:4,
            title:"Cássio Itamir de Souza Medrado",
            tel:"383831-2674",
            
          },
		  {
            id:5,
            title:"Dalvio Miranda",
            tel:"383831-1038",
          },
		  {
            id:6,
            title:"Danúbia Mendes",
            tel:"3899115-7474",
            address:"Avenida Governador Valadares, 519 – Centro",
           
          },
		  {
            id:7,
            title:"Gilmar Mendes Silva de Almeida",
            tel:"3899132-1000",
            address:"Rua Quintino Bocaiúva, 73A – Centro",
           
          },
		  {
            id:8,
            title:"Jefferson César Mendes Martins",
            tel:"3899234-5533",
            address:"Avenida Major Fidêncio Cangussu, 238 – Centro",
           
          },
		  {
            id:9,
            title:"Jodeir Mendes Cangussu",
            tel:"3899102-7227",
            address:"Rua Quintino Bocaiuva, 111 – Centro",
           
          },
		  {
            id:10,
            title:"José C Oliveira",
            tel:"3838311213",
            address:"Milton Teles, 52",
           
          },
		  {
            id:11,
            title:"José Carlos Coelho",
            tel:"383831-1213",
            address:"Praça Tiradentes, 270 – Centro",
           
          },
		  {
            id:12,
            title:"José Martins Ribeiro",
            tel:"383831-1438",
            address:"Avenida Presidente Vargas, 92",
           
          },
		  {
            id:13,
            title:"José Oliveira Sobrinho",
            tel:"3899109-2600",
            
          },
		  {
            id:14,
            title:"Kelsilene de Sousa Miranda Magalhães",
            tel:"83831-1038",
            
          },
		  {
            id:15,
            title:"Murilo de Oliveira",
            tel:"3899114-9050",
            address:"Avenida Presidente Vargas, 71 – Centro",
           
          },
		  {
            id:16,
            title:"Sidinei José dos Santos",
            tel:"3899186-0992",
            address:"Rua Quintino Bocaiúva, 73A – Centro",
           
          },
		  {
            id:17,
            title:"Welson Teixeira da Silva",
            tel:"389959-1553",
            address:"Avenida Governador Valadares, 495 -A",
           
          },
		  {
            id:18,
            title:"Ana Eg Silva",
            tel:"383831-1356",
            address:"Avenida Major Fidencio Cangussu, 273 – Centro",
           
          },
		  
		  ]
		  },
	  
	  
	  { 
        name:"agropecuaria",
        category: 3,
        items:[
          {
            id:1,
            title:"Agro Martins",
            tel:"383831-1664",
            address:"Rua Professora Zanotte Bezerra, 130 - Centro",
           
          },
          {
            id:2,
            title:"Agro Rocha",
            tel:"3899192-9403",
            address:"Avenida Artur Bernardes, 180 - Centro",
            
          },
		  {
            id:3,
            title:"Agro Vet",
            tel:"383831-1903",
            address:"Rua Pedro Caires, 336",
            
          },{
            id:4,
            title:"Agro Vinte Produtos Veterinários",
            tel:"383831-2020",
            address:"Praça São Joaquim, 231 - Centro",
            
          },{
            id:5,
            title:"Agropecuária Costa",
            tel:"3899113-0555",
            address:"Rua Gerson Martins Ribeiro, Mercado Municipal - Bloco 3",
            
          },{
            id:6,
            title:"Casa do Fazendeiro",
            tel:"383831-1491",
            address:"Rua Quintino Bocaiuva, 20 - Centro",
            
          },{
            id:7,
            title:"Edinaldo C Chaves",
           
            address:"Praça Anfrísio Coelho, 156 - Centro",
            
          },{
            id:8,
            title:"Nascebem",
            
            address:"Avenida Major Fidêncio Cangussu, 259 - Centro",
            
          },{
            id:9,
            title:"Sabra Sementes",
            tel:"383831-1425",
            address:"Avenida Arthur Bernardes, 541 - Bairro: Ouro Branco",
            
          },{
            id:10,
            title:"Sitio Novo",
            tel:"3899210-2424",
            address:"Avenida Arthur Bernardes - Centro",
            
          },{
            id:11,
            title:"S.O.S Eucaliptos",
            tel:"3899957-6784",
            address:"Rua Olegário Maciel, 1255",
            
          },{
            id:12,
            title:"Weja Mercadão Rural",
            tel:"383831-2300",
            address:"Avenida Governador Valadares, 628 - Centro",
            
          }
        ]
      },	
	  
	  
	  
	{ 
        name:"antenas",
        category: 4,
        items:[
          {
            id:1,
            title:"Atual Sat",
            tel:"3899191-1081",
            address:"Avenida Governador Valadares, 671 - Centro",
           
          },
          {
            id:2,
            title:"Luciano Antenas",
            tel:"3899149-4165",
            address:"Rua José Izidio, 548 - Centro",
            
          },
		  {
            id:3,
            title:"SOS Antenas",
            tel:"3899152-3295",
            address:"Rua José Izidio, 548 - Centro",
           
          },
		  {
            id:4,
            title:"Vinicius Antenas",
            tel:"38992683690",
            
           
          }
        ]
      },  
	  { 
        name:"autônomos",
        category: 5,
        items:[
		{
            id:1,
            title:"Elizeu Bombeiro Hidráulico",
            tel:"3899925-1429",
           
           
          },
		  {
            id:2,
            title:"Adriana Cozinheira",
            tel:"389139-2313",
           
           
          },
		  {
            id:3,
            title:"Cida Diarista",
            tel:"3899151-3110",
           
           
          },
		  {
            id:4,
            title:"Jeniffer Diarista",
            tel:"3899210-7724",
           
           
          },
		  {
            id:5,
            title:"Sirlene Diarista",
            tel:"3899132-6033",
           
           
          },{
            id:6,
            title:"André Brito Eletricista",
            tel:"3899925-1429",
           
           
          },{
            id:7,
            title:"Edilson Ferreira da Silva Eletricista",
            tel:"3899160-3360",
			address:"Rua Estrada Municipal, 169 –  Bairro: São Sebastião",
           
           
          },{
            id:8,
            title:"Geraldo César Silva Eletricista",
            tel:"3899202-5078",
			address:" Rua São Joaquim,202 - Vila Serranópolis",
           
           
          },
		  {
            id:9,
            title:"Izaias Eletricista",
            tel:"3899218-2271",
           
           
          },
		  {
            id:10,
            title:"José Roberto Souza Eletricista",
            tel:"3899140-3858",
           
           
          },
		  {
            id:11,
            title:"Reine Eletricista",
            tel:"38991489922",
           
           
          },
		  {
            id:12,
            title:"Adriana Faxineira",
            tel:"389139-2313",
           
           
          },
		  {
            id:13,
            title:"João Paulo Jardineiro",
            tel:"3898480059",
           
           
          },
		  {
            id:14,
            title:"Maria Mirtes Lavadeira",
            tel:"3899148-7145",
           
           
          },
		  {
            id:15,
            title:"Adeilton Borges dos Santos Pedreiro",
            tel:"3899181-1197",
           
           
          },
		  {
            id:16,
            title:"Fernando Alves Lima Pedreiro",
            tel:"38991735015",
           
           
          },{
            id:17,
            title:"João Pedreiro",
            tel:"3899157-5909",
           
           
          },
		  {
            id:18,
            title:"João Pedreiro",
            tel:"389155-6599",
           
           
          },
		  {
            id:19,
            title:"Sidval Pedreiro",
            tel:"38991613961",
           
           
          },
		  {
            id:20,
            title:"Wanderley Barbosa Silva Pedreiro",
            tel:"38991330594",
           
           
          },
		  {
            id:21,
            title:"Aldete Pintor",
            tel:"389143-9365",
           
           
          },
		  {
            id:22,
            title:"Edmarcos Pintor",
            tel:"3899158-4686",
           
           
          },
		  {
            id:23,
            title:"Fernando Pintor",
            tel:"38992140480",
           
           
          },
		  {
            id:24,
            title:"Francisco Jorge Santana Pintor",
            tel:"3899127-8123",
			address:"Rua Travessa Bela Vista, 31 – Centro",
           
           
           
          },
		  {
            id:25,
            title:"Charlim",
            tel:"3899220-1501",
           
           
          },
		  ]
		},
		{ 
        name:"bancos",
        category: 6,
        items:[
		{
            id:1,
            title:" Banco Bradesco",
            tel:"383831-1131",
			address:"Praça Coronel Odilon Coelho, 436 – Centro",
           
           
          },
		  {
            id:2,
            title:" Banco do Brasil",
            tel:"383831-1220",
			address:"Praça Coronel Odilon Coelho, 167 – Centro",
           
           
          },
		  {
            id:3,
            title:"Banco do Nordeste",
            tel:"383831-1235",
			address:"Praça Odilon Coelho, 217 – Centro",
           
           
          },
		  {
            id:4,
            title:"Sicoob",
            tel:"383831-1479",
			address:"Rua Pedro Caíres, 271 – Centro",
           
           
          },
		  {
            id:5,
            title:"Casa Lotérica – Ponto da Sorte",
            tel:"383831-1376",
			address:"Rua Barão do Rio Branco – Centro",
           
           
          },
	  
	 
	  ]
	  },
	  { 
        name:"bares",
        category: 7,
        items:[
		{
            id:1,
            title:"Bar e Lanchonete Fim de Tarde",
			address:"Rua Dr. Amerindo A. de Brito, 26 - Bairro: Ouro Branco",
           
           
          },
		  {
            id:2,
            title:"Baruk Bar e Restaurante",
			address:"Rua Olimpio Guimarães, 87 - bairro São Joaquim",
           
           
          },
		  {
            id:3,
            title:"Gringos",
            tel:"383831-2062",
			address:"Rua Bernardo Guimarães, 368 - Centro",
           
           
          },
		  {
            id:4,
            title:"Bar e Lanchonete Fim de Tarde",
            tel:"383831-1131",
			address:"Rua Dr. Amerindo A. de Brito, 26 - Bairro: Ouro Branco",
           
           
          },
		  
		  
		  
		  ]
		  },
		  { 
        name:"beleza",
        category: 8,
        items:[
		{
            id:1,
            title:"Estética Nova",
			tel:"3899128-7557",
			address:"Rua Belo Horizonte, 327-A - Centro",
           
           
          },
		  {
            id:2,
            title:"Ateliê de Maquiagem Aline Valentin",
			tel:"3899143-5670",
			address:"Rua Dalmo Pereira dos Santos, 377",
           
           
          },
		  {
            id:3,
            title:"Brenda Martins Centro Estético",
			tel:"3899202-0899",
			address:"Rua Arlindo Pinheiro 25, - Centro",
           
           
          },
		  {
            id:4,
            title:"D'Léia",
			tel:"3899159-9991",
			address:"Rua Washington Luiz, 246 - Centro",
           
           
          },
		  {
            id:5,
            title:"Geanne Cabeleireira",
			tel:"3899134-1373",
			address:"Rua Major Fidêncio Cangussu, 144 - Centro",
           
           
          },
		  {
            id:6,
            title:"Jack Cabeleireiro",
			address:"Avenida Clemente Martins Ribeiro",
           
           
          },
		  {
            id:7,
            title:"Maramassagem",
			tel:"3899107-8206",
			address:"Rua Jovito Batista, 239 - Vila Serranópolis",
           
           
          },
		  {
            id:8,
            title:"Márcia Cabeleireira",
			tel:"3899136-1145",
			address:"Rua Benjamin Constant, 274 - Centro",
           
           
          },
		  {
            id:9,
            title:"Nethy Cabeleireira",
			tel:"3899102-8741",
			address:" Rua Tomaz Gonzaga, 137 - Centro",
           
           
          },
		  {
            id:10,
            title:"Ponto da Beleza",
			address:"Rua Deputado Edgar Pereira, 61 - Centro",
           
           
          },
		  {
            id:11,
            title:"Rose Mello",
			address:"Rua Tomáz Gonzaga, 244 - Centro",
           
           
          },
		  {
            id:12,
            title:"Salão Flor de Menina",
			tel:"3899128-7557",
			address:"Rua Tomáz Gonzaga, 244 - Centro",
           
           
          },
		  {
            id:13,
            title:"Salão Nova Imagem",
			tel:"3899169-2371",
			address:"Rua Benjamin Constant, 599 - Centro",
           
           
          },
		  {
            id:14,
            title:"Salão Performance",
			tel:"3899137-3159",
			address:"Rua Doutor Clóvis Sávio de Almeida, 125",
           
           
          },
		  {
            id:15,
            title:"Salão Visual Fashion",
			tel:"3899109-4691",
			address:"Praça Anfrísio Coelho, 220 - Centro",
           
           
          },
		  
		  
		  ]
		  },
		  { 
        name:"casa e construção",
        category: 9,
        items:[
		{
            id:1,
            title:"Cerâmica Doutor Clóvis",
			tel:"383831-1101",
			address:"Avenida Dona Caçula Mendes, s/n - Bairro: Renascença",
           
           
          },
		  {
            id:2,
            title:"Alzi C Oliveira Madeireira",
			address:"Rua Antonino Mendes, 160",
           
           
          },
		  {
            id:3,
            title:"Madeireira Avenida",
			tel:"383831-2255",
			address:"Avenida Governador Valadares, 03 - Centro",
           
           
          },
		  {
            id:4,
            title:"Madeireira Dois Irmãos",
			tel:"383831-1483",
			address:"Avenida Clemente Martins Ribeiro, 91 - Vila Serranópolis",
           
           
          },
		  {
            id:5,
            title:"Madeireira Eucatora",
			tel:"389916-0520",
			address:"Rua José Isídio Santos, 38 - Centro",
           
           
          },
		  {
            id:6,
            title:"Madenorte",
			address:"Avenida Governador Valadares, 65",
           
           
          },
		  {
            id:7,
            title:"Madeport",
			tel:"383831-2751",
			address:"Avenida Arthur Bernardes, 126 - Centro",
           
           
          },
		  {
            id:8,
            title:"Madeireira Tolentino",
			tel:"383831-1101",
			address:"Avenida Dona Caçula Mendes, s/n - Bairro: Renascença",
           
           
          },
		  {
            id:9,
            title:"Madeireira Mega Bom",
			tel:"3899218-2121",
			address:"Avenida Pedro José Freire, 285",
           
           
          },
		  {
            id:10,
            title:"Madeireira Porteirinha",
			address:"Rua Antonino Mendes, 209 - Vila Kennedy",
           
           
          },
		  {
            id:11,
            title:"GranPort Mamoraria",
			tel:"3899974-2596",
			address:"Avenida Pedro José Freire 225, - Vila Guará",
           
           
          },
		  {
            id:12,
            title:"Marmoraria Amorim",
			tel:"3899195-3350",
			address:"Rua Mestre Silvano 1228, - Eldorado",
           
           
          },
		  {
            id:13,
            title:"MDS Marmoraria",
			address:" Rua Deputado Edgar Pereira, 535 - Vila Kennedy",
           
           
          },
		  {
            id:14,
            title:"Pedra Forte Mamoraria",
			address:"Avenida Dalton Cunha, 170 - Bairro: Eldorado",
           
           
          },
		  {
            id:15,
            title:"ZND Mamoraria",
			address:"Rua José Izidio Santos, 360 - Centro",
           
           
          },
		  {
            id:16,
            title:"Alberto Ferragens",
			tel:"3899226-0023",
			address:"Rua Aprigio Pereira Dias, 105 - Bairro: Beira Rio",
           
           
          },
		  {
            id:17,
            title:"Cerâmica Doutor Clóvis",
			tel:"383831-1101",
			address:"Avenida Dona Caçula Mendes, s/n - Bairro: Renascença",
           
           
          },
		  {
            id:18,
            title:"Center Casa",
			tel:"383831-2568",
			address:"Avenida Presidente Vargas, 80 - Centro",
           
           
          },
		  {
            id:19,
            title:"Casa das Ferramentas",
			tel:"3899163-3217",
			address:"Rua José Isídio dos Santos, 360 - Centro",
           
           
          },
		  {
            id:20,
            title:"ConstruFácil",
			tel:"3899230-4031",
			address:"Avenida Arthur Bernardes, 480 - Centro",
           
           
          },{
            id:21,
            title:"ConstruKennedy",
			address:"Rua Antonino Mendes, 120 - Vila Kennedy",
           
           
          },
		  {
            id:22,
            title:"ConstruMais",
			tel:"383831-1910",
			address:"Avenida Pedro José Freire 110, - Saída para Mulungu",
           
           
          },
		  {
            id:23,
            title:"Cerâmica Doutor Clóvis",
			tel:"383831-1101",
			address:"Avenida Dona Caçula Mendes, s/n - Bairro: Renascença",
           
           
          },
		  {
            id:24,
            title:"ConstruMar",
			tel:"383831-1448",
			address:"Rua Pedro Caires - Centro",
           
           
          },
		  {
            id:25,
            title:"ConstruMendes",
			tel:"383831-1670 ",
			address:"Avenida Clemente Martins Ribeiro, 280 - Vila Serranópolis",
           
           
          },
		  {
            id:26,
            title:"ConstruPort",
			tel:"383831-1808",
			address:"Avenida Dalton Cunha, 105 - Bairro: Eldorado",
           
           
          },
		  {
            id:27,
            title:"ConstruReal",
			tel:"383831-1754",
			address:"Avenida Arthur Bernardes, 280 - Bairro: Ouro Branco",
           
           
          },
		  {
            id:28,
            title:"ConstruSilva",
			tel:"383831-1619",
			address:"Avenida Clemente Martins Ribeiro, 186 - Vila Serranópolis",
           
           
          },
		  {
            id:29,
            title:"ConstruTrevo",
			address:"Avenida Governador Valadares, 652 - Centro",
           
           
          },
		  {
            id:30,
            title:"Construvan",
			tel:"3899128-8014",
			address:"Rua K - Bairro São Sebastião",
           
           
          },
		  {
            id:31,
            title:"Decori Pisos e Acabamentos",
			
			address:"Rua José Izidio dos Santos, 209 - Centro",
           
           
          },
		  {
            id:32,
            title:"Deposito Nossa Senhora Aparecida",
			tel:"3899103-6670",
			address:"Rua Felisberto Mendes, 155 - Vila Serranópolis",
           
           
          },
		   {
            id:33,
            title:"DM Concreto",
			tel:"3899170-0569",
			address:"Avenida Pedro José Freire 1170, - Vila Guará",
           
           
          },
		   {
            id:34,
            title:"Gesso Novo Lar",
			tel:"3899117-5312",
			
           
          },
		   {
            id:35,
            title:"HW",
			tel:"3899137-4958",
			address:"Rua Felisberto Mendes, 155 - Vila Serranópolis",
           
           
          },
		   {
            id:36,
            title:"KAKA Ferro e Aço",
			tel:"383831-2945",
			address:"Rua Olegário Marciel - Centro",
           
           
          },
		   {
            id:37,
            title:"NG Deposito",
			tel:"383831-1387",
			address:"Avenida Governador Valadares 115",
           
           
          }, {
            id:38,
            title:"MetalPort",
			tel:"3899150-0095",
			address:"Rua José Izidio, 370 – Centro",
           
           
          },
		   {
            id:39,
            title:"Silmara",
			tel:"3899106-8800",
			address:"Rua Montes Claros 360, - Vila Kennedy",
           
           
          },
		   {
            id:40,
            title:"Sukar Parafusos",
			tel:"383831-1093",
			address:"Avenida Arthur Bernardes, 476",
           
           
          },
		   {
            id:41,
            title:"Tons e Cores",
			tel:"383831-2434",
			address:"Avenida Governador Valadares, 424 - Centro",
           
           
          },
		   {
            id:42,
            title:"Unilar",
			tel:"383831-1065",
			address:"Avenida Arthur Bernardes, 630 - Centro",
           
           
          },
		   {
            id:43,
            title:"Zicasa",
			tel:"3899149-1314",
			address:" Avenida Gabriel Mendes Santos, 222",
           
           
          },
		   {
            id:44,
            title:"Elétrica Porteirinha",
			tel:"383831-1423",
			address:"Rua Raul Barbosa, 33 - Centro",
           
           
          },
		   {
            id:45,
            title:"EletroCenter",
			tel:"383831-1818",
			address:"Avenida Governador Valadares, 256 - Centro",
           
           
          },
		  {
            id:46,
            title:"Eletrônica G-Nobre",
			tel:"3899133-0483",
			address:" Avenida Governador Valadares, 663 - Centro",
           
           
          },
		  {
            id:47,
            title:"Ferro Forte Ltda",
			tel:"383831-1096",
			address:"Rua Etelvino José Silva 20, - Renascença",
           
           
          },
		  {
            id:48,
            title:"HN Materiais Elétricos",
			tel:"3899108-1817",
			address:"Avenida Arthur Bernardes, 212 - Centro",
           
           
          },
		  {
            id:49,
            title:"Art Ferro",
			tel:"3899198-9977",
			address:"Rua Mestre Silvano, 76 - Vila Kennedy",
           
           
          },
		  {
            id:50,
            title:"ConstruFerro",
			tel:"3899143-4784",
			address:" Avenida Governador Valadares, 641 - Centro",
           
           
          },
		  {
            id:51,
            title:"Serralheria Vila Nova",
			tel:"3899122-1410",
			address:"Rua José Lopes 41, - Vila Serranópolis",
           
           
          },
		  
		  ]
		  },
		  { 
        name:"celulares",
        category: 10,
        items:[
		{
            id:1,
            title:"Cell Port",
			tel:"383831-1749",
			address:"Rua Quintino Bocaiuva, 27",
           
           
          },
		  {
            id:2,
            title:"Inter Celular",
			tel:"383831-1895",
			address:"Rua Barão do Rio Branco, 279",
           
           
          },
		  {
            id:3,
            title:"Lunna Cell",
			tel:"389916-4060",
			address:"Avenida Presidente Castelo Branco, 223 - Centro",
           
           
          },
		  {
            id:4,
            title:"Multi Celulares",
			tel:"3899124-6494",
			address:"Rua Barão do Rio Branco 204, - Centro",
           
           
          },
		  {
            id:5,
            title:"Norte Cell",
			tel:"3899153-9877",
			address:"Praça Anfrísio Coelho 274, - Centro",
           
           
          },
		  {
            id:6,
            title:"UTI Celulares",
			address:"Rua Barão do Rio Branco, 143 - Centro",
           
           
          },
		  {
            id:7,
            title:"Smart Cell",
			tel:"3899146-5369",
			address:"Avenida Major Fidencio Cangussu",
           
           
          },
		  
		  ]
		  },
		  { 
        name:"confeitarias",
        category: 11,
        items:[
		{
            id:1,
            title:"Confeitaria Bolos e Cia",
			tel:"3899143-5799",
			address:"Rua Washington Luiz, 73 - Centro",
           
           
          },
		  {
            id:2,
            title:"Panificadora Aliança",
			address:"Rua Tomás Gonzaga, 340 - Centro",
           
           
          },
		  ]
		  },
		  { 
        name:"contabilidade",
        category: 12,
        items:[
		{
            id:1,
            title:"Antonio Eustáquio B Teixeira",
			tel:"383831-1013",
			address:"Praça Coronel Odilon Coelho, 342 – Centro",
           
           
          },
		  {
            id:2,
            title:"ACEM – Assistência Contábil e Empresarial Ltda",
			address:"Rua Marechal Deodoro, 27",
           
           
          },
		  {
            id:3,
            title:"Demetrio Moraes Santos",
			tel:"383831-1539",
			address:"Rua Marechal Deodoro, 71",
           
           
          },
		  {
            id:4,
            title:"Exata Contabilidade",
			tel:"3899124-5844 ",
			address:"Rua Tomas Gonzaga,269 Sala 1  – Centro",
           
           
          },
		  {
            id:5,
            title:"Helio Soares Fernandes",
			address:"Rua Washington Luiz, 20 – Centro",
           
           
          },
		  {
            id:6,
            title:"HG Assessoria Contábil",
			address:"Praça Jason Mendes Batista, 283 – Bairro: Ouro Branco",
           
           
          },
		  {
            id:7,
            title:"HS Contabilidade",
			tel:"383831-2664",
			address:"Avenida Clemente Martins Ribeiro, 162 – Vila Serranópolis",
           
           
          },
		  {
            id:8,
            title:"Innove Assessoria Contábil",
			tel:"3899125-5060",
			address:"Rua Coronel Ananias José 106, – Centro",
           
           
          },
		  {
            id:9,
            title:"JC Contabilidade",
			tel:"383831-1377",
			address:"Avenida Presidente Vargas, 10 – Centro",
           
           
          },
		  {
            id:10,
            title:"Real Contabilidade",
			tel:"383831-1670",
			address:"Rua Marechal Deodoro, 96 – Centro",
           
           
          },
		  {
            id:11,
            title:"São Jorge Contabilidade",
			tel:"383831-1063",
			address:"Rua Pedro Caires, 276 – Centro",
           
           
          },
		  {
            id:12,
            title:"Wilson G Caldeira",
			tel:"383831-1443",
			
           
          },
		  
	  
	  ]
	  },
	  { 
        name:"crédito",
        category: 13,
        items:[
		{
            id:1,
            title:"Idealiza Serviços",
			tel:" 3899123-4041",
			address:"Rua Benjamin Constant, 183 – Centro",
           
           
          },
		  {
            id:2,
            title:"Minas Crédito",
			address:"Praça Coronel Odilon Coelho, 342 – Centro",
           
           
          },
		  {
            id:3,
            title:"Rede Mais",
			tel:"3899973-6994",
			address:"Rua Barão do Rio Branco, 209-A",
           
           
          },
	  ]
	  },
	  { 
        name:"decorações e festas",
        category: 14,
        items:[
		{
            id:1,
            title:"Ana Edna Decorações & Floricultura Sempre Viva",
			address:"Rua Major Cangussu, 220 - Centro",
           
           
          },
		  {
            id:2,
            title:"Cerimonial Géssica",
			tel:"3899194-4353",
			address:"Praça São Joaquim, 17 - Centro",
           
           
          },
		  {
            id:3,
            title:"Gê Festas",
			tel:"3899120-1165",
			address:"Rua Benjamin Costant, 109 - Centro",
           
           
          },
		  {
            id:4,
            title:"Helena",
			tel:"383831-1813",
			address:"Rua Santos Reis, 120 - Centro",
           
           
          },
		  {
            id:5,
            title:"Mania de Festa",
			tel:"3899134-1860",
			address:"Rua Arlindo Pinheiro, 136 - Centro",
           
           
          },
		  {
            id:6,
            title:"Marisete",
			address:"Rua Zanote Bezerra, 105 - Centro",
           
           
          },
		  
		  
		  ]
		  },
		  { 
        name:"dentistas",
        category: 32,
        items:[
          {
            id:1,
            title:"Agaene G Cangussu",
            tel:"383831-1116",
            address:"Rua Coronel Ananias José Alves, 24",
           
          },
		  {
            id:2,
            title:"Augusta Ariane D Xavier",
            tel:"3899159-7919",
            address:"Rua Raul Barbosa, 26 – Centro",
           
          },
		  {
            id:3,
            title:"Azul Odontologia",
            tel:"3899141-6565",
           
          },
		  {
            id:4,
            title:"Bruno Sérgio Rodrigues",
            tel:"383831-1251",
            address:"Rua Marechal Deodoro, 57 – Centro",
           
          },
		  {
            id:5,
            title:"Humberto C S Cangussu",
            tel:"383831-1218",
            address:"Rua Olegário Maciel, 222 – Centro",
           
          },
		  {
            id:6,
            title:"Jamila Havenna B. Dias",
            tel:"3899228-2951",
            address:"Avenida Major Fidêncio Cangussu, 39 – Centro",
           
          },
		  {
            id:7,
            title:"Odonto Class",
            tel:"383831-1693",
            address:"Avenida Governador Valadares, 627 – Centro",
           
          },
		  {
            id:8,
            title:"Odonto Ville",
            tel:"383831-1907",
            address:"Avenida Clemente Martins Rineiro, 105-A – Vila Serranópolis",
           
          },
		  {
            id:9,
            title:"Stenio M Santos",
            tel:"383831-1514",
            address:"Avenida Major Fidencio Cangussu, 317 – Centro",
           
          },
		  {
            id:10,
            title:"Valdeir F Martins",
            address:"Praça Tiradentes, 51 – Centro",
           
          },
		  {
            id:11,
            title:"Vânia Maria Santos Rodrigues",
            address:"Rua Marechal Deodoro, 57",
           
          },
		  ]
		  },
		  { 
        name:"despachantes",
        category: 15,
        items:[
		{
            id:1,
            title:"Cláudio Despachante",
			tel:"383831-1119",
			address:"Avenida Governador Valadares, 533 - Centro",
           
           
          },
		  {
            id:2,
            title:"Cláudio Despachante",
			address:"Avenida Governador Valadares, 420 - Centro",
           
           
          },
		  {
            id:3,
            title:"Pereira Despachante",
			tel:"3899176-7831",
			address:"Avenida Governador Valadares, 494",
           
           
          },
		  ]
		  },
		  { 
        name:"distribuidoras",
        category: 16,
        items:[
		{
            id:1,
            title:"Embaplasti",
			address:"Rua Deputado Edgar Pereira, 60 - Vila Kennedy",
           
           
          },
		  {
            id:2,
            title:"Gela Guela",
			tel:"3899214-4014",
			address:"Rua Belo Horizonte, 321-A - Centro",
           
           
          },
		  {
            id:3,
            title:"Laticínio Nova Esperança",
			tel:"383831-2356",
			address:"Rua das Industrias, s/n - Bairro: Renascença",
           
           
          },
		  {
            id:4,
            title:"Santana",
			tel:"383831-2555",
			address:"Avenida José Silveira Lopes, 139 - Vila Serranópolis",
           
           
          },
		  
		  ]
		  },
		  { 
        name:"doces",
        category: 17,
        items:[
		{
            id:1,
            title:"Sabor de Minas",
			tel:"383831-1731",
			address:"Rua Tomás Gonzaga, 420 - Centro",
           
           
          },
		  {
            id:2,
            title:"Doce Encanto",
			tel:"3899118-3781",
			address:"Rua Tomáz Gonzaga, 55 - Centro",
           
           
          },
		  {
            id:3,
            title:"Requinte Gastronomia",
			tel:"3899170-0188",
			
           
          },
		  ]
		 },
		 { 
        name:"drogarias e farmácias",
        category: 18,
        items:[
		{
            id:1,
            title:"Droga Centro",
			tel:"383831-1626",
			address:"Rua Quintino Bocaiuva, 38 - Centro",
           
           
          },
		  {
            id:2,
            title:"Droga Marques",
			tel:"3899227-5301",
			address:"Avenida Governador Valadares 612, - Centro",
           
           
          },
		  {
            id:3,
            title:"Droga Norte",
			tel:"383831-1155",
			address:"Praça Anfrísio Coelho, 273 - Centro",
           
           
          },
		  {
            id:4,
            title:"Drogaria Aguiar",
			tel:"383831-2820",
			address:"Rua Barão do Rio Branco, 269 - Centro",
           
           
          },
		  {
            id:5,
            title:"Drogaria Bacaninha",
			tel:"383831-1625",
			address:"Praça São Joaquim , 22-A",
           
           
          },
		  {
            id:6,
            title:"Drogaria Brasil",
			tel:"383831-1600",
			address:"Rua Benjamin Constant, 225 - Centro",
           
           
          },
		  {
            id:7,
            title:"Droga Centro",
			tel:"383831-1626",
			address:"Rua Quintino Bocaiuva, 38 - Centro",
           
           
          },
		  {
            id:8,
            title:"Drogaria Grande Minas",
			tel:"383831-1667",
			address:"Avenida Arthur Bernardes, 25 - Bairro: Ouro Branco",
           
           
          },
		  {
            id:9,
            title:"Drogaria Horizonte",
			tel:"383831-1309",
			address:"Avenida Arthur Bernardes, 66 - Centro",
           
           
          },
		  {
            id:10,
            title:"Drogaria Med Minas",
			tel:"383831-3132",
			address:"Avenida Governador Valadares, 297 - Centro",
           
           
          },
		  {
            id:11,
            title:"Drogaria Minas Farma",
			tel:"383831-1289",
			address:"Rua Raul Barbosa, 99 - Centro",
           
           
          },
		  {
            id:12,
            title:"Drogaria Mundial",
			tel:"383831-1077",
			address:"Rua Benjamin Constant, 59 - Centro",
           
           
          },
		  {
            id:13,
            title:"Drogaria Pague Menos",
			tel:"383831-2169",
			address:"Rua Benjamin Constant, 59-A - Centro",
           
           
          },
		  {
            id:14,
            title:"Drogaria Porteirinha",
			tel:"383831-2244",
			address:"Avenida Arthur Bernardes, 310 - Centro",
           
           
          },
		  {
            id:15,
            title:"Drogaria Silva",
			tel:"383831-1341",
			address:" Rua Barão do Rio Branco, 278 - Centro",
           
           
          },
		  {
            id:16,
            title:"Drogaria Unyminas",
			tel:"383831-3000",
			address:"Avenida Arthur Bernardes, 260 - Centro",
           
           
          },
		  {
            id:17,
            title:"Drogaria Viva Bem",
			tel:"383831-2079",
			address:"Avenida Arthur Bernardes, 529 - Centro",
           
           
          },
		  {
            id:18,
            title:"Farma Vida",
			address:"Praça Coronel Odilon Coelho, 406 - Centro",
           
           
          },
		  {
            id:19,
            title:"Farmácia do Trabalhador do Brasil",
			address:"Avenida Arthur Bernardes, 181",
           
           
          },
		  {
            id:20,
            title:"Farmácia JM",
			tel:"383831-1276",
			address:"Avenida Arthur Bernardes, 239 - Centro",
           
           
          },
		  ]
		  },
		  { 
        name:"engenharia",
        category: 19,
        items:[
		{
            id:1,
            title:"DELTA",
			tel:"3899192-5041",
			address:"Avenida Governador Valadares, 636",
           
           
          },
		  {
            id:2,
            title:"Edificare",
			tel:"3899142-2665",
			address:"Praça Tiradentes 57, - Centro",
           
           
          },
		  {
            id:3,
            title:"Facillity Engenharia",
			tel:"3899113-1430",
			address:"Rua Antonina Dos Santos, 269 - Pedra Azul",
           
           
          },
		  {
            id:4,
            title:"FG",
			tel:"3899152-3049",
			address:"Rua Montes Claros, 103 - Vila Kennedy",
           
           
          },
		  ]
		  },
		  {
		  name:"ensino",
        category: 20,
        items:[
		{
            id:1,
            title:"FASARC - Faculdade Santa Rita de Cássia",
			tel:"3838311092",
			address:"Avenida Governador Valadares, 209 - Centro",
           
           
          },
		  {
            id:2,
            title:"FAVEPORT - Faculdade Favenorte Campus Porteirinha",
			tel:"38992160337",
			address:"Avenida Dalton Cunha, 851 - Bairro: Eldorado",
           
           
          },
		  {
            id:3,
            title:"UNIPAC - Universidade Presidente Antônio Carlos",
			tel:"3838311614",
			address:"Rua José Isídio dos Santos, 429 - Vila Serranópolis",
           
           
          },
		  {
            id:4,
            title:"Creche Amor e Luz",
			tel:"383831-1834",
			address:"Rua Antônio Santos, 600 - Renascer",
           
           
          },
		  {
            id:5,
            title:"Instituto Pedagógico Crescer",
			tel:"3838312676",
			address:"Praça Tiradentes - Centro",
           
           
          },
		  {
            id:6,
            title:"NEP - Núcleo Educacional De Porteirinha",
			tel:"3838311649",
			address:"Rua Barão do Rio Branco - Centro",
           
           
          },
		  {
            id:7,
            title:"Micronorte Educação Profissional",
			tel:"383831-2001",
			address:"Rua Barão do Rio Branco, 262 - 1º Andar",
           
           
          },
		  ]
		  },
		  {
		  name:"fotógrafos",
        category: 21,
        items:[
		{
            id:1,
            title:"Foto Studio São José",
			tel:" 3899152-1361",
			address:"Rua Marechal Deodoro, 42 - Centro",
           
           
          },
		  {
            id:2,
            title:"Fox Studio",
			tel:"3899108-4573",
			address:"Avenida Arthur Bernades, 179 - Centro",
           
           
          },
		  {
            id:3,
            title:"Rocha Vídeo",
			address:"Rua Barão do Rio Branco, 229",
           
           
          },
		  {
            id:4,
            title:"Vídeo Som",
			tel:"3899124-4117",
			address:"Rua Geraldo Lourenço Chaves,185 - Vila Serranópolis",
           
           
          },
		  ]
		  },
		  {
		  name:"funerárias",
        category: 22,
        items:[
		{
            id:1,
            title:"Funerária Norte Minas",
			tel:"3899160-0964",
			address:"Rua Dr. José Cardoso Farias, 72 - Centro",
           
           
          },
		  {
            id:2,
            title:"Funerária Porteirinha",
			address:"Rua Belo Horizonte, 311 - Centro",
           
           
          },
		  {
            id:3,
            title:"Funerária São Joaquim",
			address:"Rua Benjamin Constant 71, - Centro",
           
           
          },
		  ]
		  },
		  {
		  name:"gás",
        category: 23,
        items:[
		{
            id:1,
            title:"GásPort",
			tel:"3899215-2142",
			address:"Rua Colatina 225, - Bairro Pedra Azul",
           
           
          },
		  {
            id:2,
            title:"Gás Marques",
			tel:"99853-8796",
			address:"Rua Batista Machado 280, Vila Serranópolis",
           
           
          },
		  {
            id:3,
            title:"Minas Gás",
			tel:"0800 283-1460",
			address:"Avenida Dalton Cunha, 200",
           
           
          },
		  {
            id:4,
            title:"PortGás",
			tel:"383831-1120",
			address:"Avenida Governador Valadares, 247 - Centro",
           
           
          },
		  {
            id:5,
            title:"Real Gás",
			tel:"383831-1736",
			address:"Rua Olegário Maciel, 205 - Centro",
           
           
          },
		  {
            id:6,
            title:"Supergasbras",
			tel:"383831-1460",
			address:"Avenida Dalton Cunha 209, - Eldorado",
           
           
          },
		  ]
		  },
		  {
		  name:"gráficas",
        category: 24,
        items:[
		{
            id:1,
            title:"Espaço Office",
			tel:"99110-9642",
			address:"Rua Barão do Rio Branco, 525-A – Centro",
           
           
          },
		  {
            id:2,
            title:"Alan Multimídia",
			tel:"3899147-9725",
			address:"Praça Coronel Odilon Coelho – Centro",
           
           
          },
		  {
            id:3,
            title:"ArtFilm",
			address:"Avenida Clemente Martins Ribeiro, 14 – Vila Serranópolis",
           
           
          },
		  {
            id:4,
            title:"Criações Ajaema Indústria e Comércio Ltda",
			tel:"383831-1441",
			address:"Rua Gentil Martins Ribeiro, 70 – Vila Kenedy",
           
           
          },
		  {
            id:5,
            title:"Espaço Office",
			tel:"99110-9642",
			address:"Rua Barão do Rio Branco, 525-A – Centro",
           
           
          },
		  {
            id:6,
            title:"Gráfica 2 Irmãos",
			tel:"99110-9642",
			address:"Rua Barão do Rio Branco, 525-A – Centro",
           
           
          },
		  {
            id:7,
            title:"Imprint Gráfica",
			tel:"3899100-7086",
			address:"Avenida Governador Valadares, 01",
           
           
          },
		  {
            id:8,
            title:"Natal Placas",
			tel:"3899109-7871",
			address:"Avenida Clemente Martins Ribeiro, 176 – Vila Serranópolis",
           
           
          },
		  ]
		  },
		  {
		  name:"hospedagem",
        category: 25,
        items:[
		{
            id:1,
            title:"Hotel Brisa Da Serra",
			tel:"3899121-5050",
			address:"Rua Barão do Rio Branco, 95",
           
           
          },
		  {
            id:2,
            title:"Hotel Clássico",
			tel:"3899134-2128",
			address:"Avenida Arthur Bernardes, 770",
           
           
          },
		  {
            id:3,
            title:"Hotel Guanabara",
			tel:"383831-1264",
			address:"Avenida Governador Valadares, 336",
           
           
          },{
            id:4,
            title:"Hotel Francielle",
			tel:"383831-1717",
			address:"Rua Marechal Deodoro, 67 ",
           
           
          },
		  {
            id:5,
            title:"Hotel Minas Port",
			tel:"383831-1022",
			address:"Rua Benjamim Constant, 370 - Centro",
           
           
          },
		  {
            id:6,
            title:"Hotel Skala",
			tel:"3899889-4343",
			address:"Avenida Governador Valadares, 333",
           
           
          },
		  {
            id:7,
            title:"Portal Palace Hotel",
			tel:"383831-1898",
			address:"Rua Marechal Deodoro da Fonseca, 27 - Centro",
           
           
          },
		  {
            id:8,
            title:"Pousada Bem Estar",
			tel:"3899103-4959",
			address:"Rua Benjamin Constant, 382 - Centro",
           
           
          },
		  {
            id:9,
            title:"Sítio Brisa do Serrado",
			tel:"383831-1521",
			address:"Serrado",
           
           
          },
		  {
            id:10,
            title:"Sítio Vivenda da Serra",
			tel:"3899168-5848",
			address:"Serrado",
           
           
          },
		  {
            id:11,
            title:"Super Nosso Hotel",
			tel:"383831-2013",
			address:"Avenida Gentil Martins Ribeiro, 40 - Centro",
           
           
          },
		  
		  ]
		  },
		  {
		  name:"imóveis",
        category: 26,
        items:[
		{
            id:1,
            title:"Edilberto Ferreira - Corretor de Imóveis",
			tel:"3899215-3810",
			address:"Rua São Vicente de Paula, 60 - B - 1° Andar",
           
           
          },
		  {
            id:2,
            title:"Habite Construtora",
			tel:"383831-1000",
			address:"Avenida Major Fidêncio Cangussu, 179-B - Centro",
           
           
          },
		  ]
		  },
		  {
		  name:"informática e internet",
        category: 27,
        items:[
		{
            id:1,
            title:"Alpha Informática",
			tel:"3899171-8969",
		
           
          },
		  {
            id:2,
            title:"CentralTech",
			tel:"383831-2000",
			address:"Rua Quintino Bocaiuva, 59",
           
           
          },
		  {
            id:3,
            title:"G-Nobre Eletrônica",
			tel:"389133-0483",
			address:"Avenida Governador Valadares, 663",
           
           
          },
		  {
            id:4,
            title:"Gerson S Rocha",
			address:"Praça São Joaquim, 17 - Centro",
           
           
          },
		  {
            id:5,
            title:"Alpha Informática",
			tel:"3899171-8969",
			address:"Rua São Vicente de Paula, 60 - B - 1° Andar",
           
           
          },
		  {
            id:6,
            title:"GlobalTec",
			address:"Rua Olegário Marciel 162, - Centro",
           
           
          },
		  {
            id:7,
            title:"i9 - Consultoria & Tecnologia",
			tel:"3899127-8081",
			address:"Avenida Clemente Martins Ribeiro, 230-A - Vila Serranópolis",
           
           
          },
		  {
            id:8,
            title:"Ideal Informática e Eletrônicos",
			tel:"3899930-4110",
			address:"Avenida Governador Valadares, 539 - Centro",
           
           
          },
		  {
            id:9,
            title:"Info Center",
			tel:"383831-1329",
			address:"Avenida Arthur Bernardes, 67-A - Bairro: Ouro Branco",
           
           
          },
		  {
            id:10,
            title:"Microtell",
			tel:"3899185-5150",
			address:"Rua Pedro Caires, 261 - Centro",
           
           
          },
		  {
            id:11,
            title:"Tec Port - Informática e Tecnologia",
			tel:"383831-1227",
			address:"Avenida Major Fidêncio Cangussu, 26 - Centro",
           
           
          },
		  {
            id:12,
            title:"ViaNorte",
			tel:"3899236-8828",
			address:"Rua Olegário Maciel, 215 - Centro",
           
           
          },
		  ]
		  },
		  {
		  name:"lanchonetes",
        category: 28,
        items:[
		{
            id:1,
            title:"Alencar Lanches",
			tel:"3899137-8351",
			address:"Praça Coronel Odilon Coelho - Centro",
           
           
          },
		  {
            id:2,
            title:"Barraca da Ritinha",
			tel:"3899160-6684",
			address:"Rua Batista Machado, 604 - Vila Serranópolis",
           
           
          },
		  {
            id:3,
            title:"Biggus Lanches",
			address:"Rua Jovito Batista - Vila Serranópolis",
           
           
          },
		  {
            id:4,
            title:"Alencar Lanches",
			tel:"3899137-8351",
			address:"Praça Coronel Odilon Coelho - Centro",
           
           
          },
		  {
            id:5,
            title:"Brasas Grill",
			address:"Avenida Arthur Bernardes, 490",
           
           
          },
		  {
            id:6,
            title:"Casa de Massas Porteirinha",
			address:"Centro",
           
           
          },
		  {
            id:7,
            title:"Delivery Lanches",
			tel:"3899147-0530",
			address:"Rua Miguel Cunha, 239 - Bairro Aurora",
           
           
          },
		  {
            id:8,
            title:"Frutalanches",
			tel:"3899121-6800",
			address:"Rua Benjamin Constant, 215 - Centro",
           
           
          },
		  {
            id:9,
            title:"Gula Mania",
			tel:"3899105-0477",
			address:"Avenida Arthur Bernardes",
           
           
          },
		  {
            id:10,
            title:"Kão Kente",
			address:"Praça Coronel Odilon Coelho - Centro",
           
           
          },
		  {
            id:11,
            title:"Lanchonete Aguiar",
			tel:"383831-3100",
			address:"Avenida Arthur Bernardes, 633 CM 1",
           
           
          },
		  {
            id:12,
            title:"Lanchonete Center Lanches",
			tel:"383831-1536",
			address:"Rua Benjamim Constant, 374 - Centro",
           
           
          },
		  {
            id:13,
            title:"Lanchonete Dan Burguer",
			tel:"3899145-5998",
			address:" Rua Orozimbo Martins , 10 - Eldorado",
           
           
          },
		  {
            id:14,
            title:"Lanchonete MegBurg",
			tel:"899115-6238",
			address:"Rua Pedro Caires, 358 - Centro",
           
           
          },
		  {
            id:15,
            title:"Lanchonete Show de Bola",
			address:"Rua Washington Luiz, 63 - Centro",
           
           
          },
		  {
            id:16,
            title:"Pit Stop Pizzaria",
			tel:"3899172-0410",
			address:"Avenida Governador Valadares, 277 - Centro",
           
           
          },
		  {
            id:17,
            title:"Pizzaria Zio Bello",
			tel:"3899177-9702",
			address:"Rua Zanotte Bezerra, 290 - Centro",
           
           
          },
		
		]
		},
		{
		  name:"lava-jato",
        category: 29,
        items:[
		{
            id:1,
            title:"Lava Jato Central",
			tel:"3899137-8836",
			address:"Praça Coronel Odilon Coelho - Centro",
           
           
          },
		  {
            id:2,
            title:"Lava Jato Mil Grau",
			tel:"3899136-0018",
			address:"Fundo Banco do Nordeste",
           
           
          },
		  ]
		  },
		  {
		  name:"malharias e confecções",
        category: 30,
        items:[
		{
            id:1,
            title:"Ateliê Daniel Ribeiro",
			address:"Avenida Arthur Bernardes, 120 - Centro",
           
           
          },
		  {
            id:2,
            title:"Rampa Malharia LTDA",
			tel:"383831-1353",
			address:"Antão Vieira, 50 - Bairro Floresta",
           
           
          },
		  {
            id:3,
            title:"Rede ALbatroz",
			tel:"383831-1014",
			address:"Rua Benjamin Constant, nº 139 A - Centro",
           
           
          },
		  {
            id:4,
            title:"Xavier",
			tel:"383831-1730",
			address:"Rua Felicidade Evangelista de Lima, 25",
           
           
          },
		  ]
		  },
		  { 
        name:"médicos e clínicas",
        category: 33,
        items:[
          {
            id:1,
            title:"Clínica Nucleus",
            tel:"383831-1349",
            address:"Rua Dr. Clóves Fábio de Almeida, 21 - Bairro: Ouro Branco",
           
          },
		  {
            id:2,
            title:"Análizys",
            tel:"383831-1648",
            address:"Praça Coronel Odilon Coelho, 400 - Centro",
           
          },
		  {
            id:3,
            title:"Biolab",
            tel:"383831-2404",
            address:"Rua Olegário Marciel 1051, - Ouro Branco",
           
          },
		  {
            id:4,
            title:"Clínica MedVida",
            tel:"3899137-7868",
            address:"Avenida Governador Valadares, 590 - Centro",
           
          },
		  {
            id:5,
            title:"Clínica de Olhos",
            tel:"383831-1540",
            address:"Rua Marechal Deodoro da Fonseca, 116 - Centro",
           
          },
		  {
            id:6,
            title:"Clínica Pediátrica Vovó Ica",
            tel:"383831-2686",
            address:"Rua Professora Zanotte Bezerra, 201, Centro",
           
          },
		  {
            id:7,
            title:"Clínica Dr. Edinar Mendes da Silva",
            tel:"3899125-5949",
            address:"Rua Belo Horizonte, 971 - Ouro Branco",
           
          },
		  {
            id:8,
            title:"Clínica Vivare",
            tel:"3899183-2323",
            address:"Rua Mestre Silvano, 501",
           
          },
		  {
            id:9,
            title:"Consultório Psicológico",
            address:"Rua Batista Machado, 770 - Bairro: Pedra Azul",
           
          },
		  {
            id:10,
            title:"Drª Ana Luisa Maia Oftalmologista",
            tel:"3831-2836",
            address:"Avenida Arthur Bernardes, 179 - Centro",
           
          },
		  {
            id:11,
            title:"Drª Juliana Teixeira Silveira",
            tel:"383831-2500",
            address:"Avenida Arthur Bernardes, 239",
           
          },
		  {
            id:12,
            title:"Clínica Nucleus",
            tel:"383831-1349",
            address:"Rua Dr. Clóves Fábio de Almeida, 21 - Bairro: Ouro Branco",
           
          },
		  {
            id:13,
            title:"IPAC - Instituto de Pesquisas e Análises Clínicas",
            tel:"383831-1519",
            address:"Rua Doutor Clóvis Fábio de Almeida, 99 - Centro",
           
          },
		  {
            id:14,
            title:"LaboPorte",
            tel:"383831-1144",
            address:"Rua Belo Horizonte, 1005 - Bairro: Ouro Branco",
           
          },
		  {
            id:15,
            title:"Policlinica Mariana",
            tel:"3899137-7700",
            address:"Avenida Governador Valadares, 563 - Centro",
           
          },
		  ]
		  },
		  { 
        name:"moda",
        category: 34,
        items:[
          {
            id:1,
            title:"Lojas Pábula",
            tel:"383831-2425",
            address:"Praça Coronel Odilon Coelho, 390",
           
          },
		  {
            id:2,
            title:"Audácia Feminina",
            tel:"3899115-0309",
            address:"Rua Ermínio Marques de Aguiar, 120 - Renascença",
           
          },
		  {
            id:3,
            title:"Atelier Ana-Bakana",
            address:"Rua Tomáz Gonzaga, 261 - Centro",
           
          },
		  {
            id:4,
            title:"Atrevida Modas",
            tel:"3899160-6684",
            address:"Avenida Clemente Martins Ribeiro, 604 A - Vila Serranópolis",
           
          },
		  {
            id:5,
            title:"Babylândia",
            address:"Rua Barão do Rio Branco, 311",
           
          },
		  {
            id:6,
            title:"Bigus Modas",
            tel:"3899125-6102",
            address:"Avenida Arthur Bernardes, 106 - Centro",
           
          },
		  {
            id:7,
            title:"D'Luna",
            tel:"3899115-2965",
            address:"Rua Barão do Rio Branco, 315 - Centro",
           
          },
		  {
            id:8,
            title:"Dany Modas",
            tel:"3899127-8986",
            address:"Rua Raul Barbosa, 35 - Centro",
           
          },{
            id:9,
            title:"Elegance Modas",
            tel:"3899148-0156",
            address:"Rua Barão do Rio Branco, 230 - Centro",
           
          },
		  {
            id:10,
            title:"Espaço Noivas e Festas",
            tel:"3899123-7903",
            address:"Rua Marechal Deodoro, 105 - Centro",
           
          },
		  {
            id:11,
            title:"Eutímia Modas",
            address:"Rua Barão do Rio Branco, 313 - Centro",
           
          },
		  {
            id:12,
            title:"Exclusiva Modas",
            tel:"389136-6666",
            address:"Avenida Arthur Bernardes, 215",
           
          },
		  {
            id:13,
            title:"Focco",
            tel:"383831-1473",
            address:"Rua Benjamin Constant, 185 – Centro",
           
          },
		  {
            id:14,
            title:"Gamma Moda Livre",
            tel:"383831-1522",
            address:"Rua Marechal Deodoro, 37 - Centro",
           
          },
		  {
            id:15,
            title:"Heylon Bolsas",
            tel:"3899108-8823",
            address:"Rua Dr. José Cardoso Farias, 334 - Centro",
           
          },
		  {
            id:16,
            title:"Hertielly Fashion",
            address:"Avenida Artur Bernardes, 300 - Centro",
           
          },
		  {
            id:17,
            title:"Kênia Enxovais",
            tel:"3899132-0395",
            address:"Rua Raul Barbosa, 115 A - Centro",
           
          },
		  {
            id:17,
            title:"Korum Modas",
            address:"Rua Raul Barbosa, 60 - Centro",
           
          },
		  {
            id:18,
            title:"Lafemme Moda Íntima",
            tel:"383831-2428",
            address:"Rua Marechal Deodoro 144 - Centro",
           
          },
		  {
            id:19,
            title:"Lanna Modas",
            tel:"383831-1381",
            address:"Rua Benjamin Constant, 305 - Centro",
           
          },
		  {
            id:20,
            title:"La Port",
            address:"Rua Barão do Rio Branco, 229 - Centro",
           
          },
		  {
            id:21,
            title:"Loja Primo",
            tel:"3899128-6935",
            address:"Rua Benjamin Constant, 61 - Centro",
           
          },
		  {
            id:22,
            title:"Lojão Bom Preço",
            address:"Rua Benjamin Constant - Centro",
           
          },
		  {
            id:23,
            title:"Lojas Carvalho",
            address:"Rua Benjamin Constant - Centro",
           
          },
		  {
            id:24,
            title:"Marlene Modas",
            tel:"3899160-0119",
            address:"Avenida Artur Bernardes 137, - Centro",
           
          },
		  {
            id:25,
            title:"Marry Noivas e Trajes Festivos",
            tel:"3899192-5041",
            address:"Rua Thomas Gonzaga 300, - Centro",
           
          },
		  {
            id:26,
            title:"Modas.com",
            address:"Rua Benjamin Constant, 278 - Centro",
           
          },
		  {
            id:27,
            title:"Opium Boutique",
            tel:"383831-2828",
            address:"Praça Odilon Coelho, 342 - Centro",
           
          },
		  {
            id:28,
            title:"Ousadia Moda Íntima",
            tel:"383831-1421",
            address:"Avenida Clemente Martins Ribeiro, 162 - Vila Serranópolis",
           
          },
		  {
            id:29,
            title:"Pabula Kids",
            tel:"383831-1785",
            address:"Rua Barão do Rio Branco, 225 - Centro",
           
          },
		  {
            id:30,
            title:"Pimenta Rosa",
            tel:"3899154-1486",
            address:"Praça Odilon Coelho - Centro",
           
          },
		  {
            id:31,
            title:"Ponto da Moda",
            address:"Rua Wenceslau Bras, 249",
           
          },
		  {
            id:32,
            title:"Ruas Esportes",
            tel:"383831-1602",
            address:"Rua Barão do Rio Branco, 292 - Centro",
           
          },
		  {
            id:33,
            title:"Sarita Fashion",
            tel:"3899161-9109",
            address:"Rua Tomáz Gonzaga, 128 - Centro",
           
          },
		  {
            id:34,
            title:"Sayonara Fancy",
            tel:"383831-1941",
            address:"Rua Marechal Deodoro, 113 - Centro",
           
          },
		  {
            id:35,
            title:"Sedução Noivas",
            tel:"3899148-4320",
            address:"Avenida Major Fidêncio Cangussu 325, - Centro",
           
          },
		  {
            id:36,
            title:"Top 10",
            address:"Rua Benjamin Constant, 169 - Centro",
           
          },
		  {
            id:37,
            title:"Villa Multimarcas",
            address:"Rua Wenceslau Bras, 506 - Centro",
           
          },
		  {
            id:38,
            title:"Vitória Régia Modas",
            tel:"3899728-4275",
            address:"Rua Benjamin Constant 156, - Centro",
           
          },
		  {
            id:39,
            title:"Versatium Modas",
            tel:"3899136-0332",
            address:"Praça Odilon Coelho, 310 - Centro",
           
          },
		  {
            id:40,
            title:"Ziza Modas",
            tel:"383831-1718",
            address:"Avenida Clemente Martins Ribeiro, 8 - Vila Serranópolis",
           
          },
		  ]
		  },
		  { 
        name:"mototaxistas",
        category: 35,
        items:[
          {
            id:1,
            title:"Deninha",
            tel:"3899109-1308",
            
          },
		  {
            id:2,
            title:"Lucas",
            tel:"3899144-9035",
            
          },
		  {
            id:3,
            title:"Otávio",
            tel:"3899116-2565",
            
          },
		  {
            id:4,
            title:"Toninho",
            tel:"3899151-1330",
            
          },
		 ]
		 },
		 { 
        name:"móveis e eletrodomésticos",
        category: 36,
        items:[
          {
            id:1,
            title:"Casa Aguiar",
            tel:"383831-1232",
            address:"Praça São Joaquim, 59 - Centro",
           
          },
		  {
            id:2,
            title:"Casa dos Colchões",
            tel:"383831-1496",
            address:"Praça São Joaquim, 214 - Centro",
           
          },
		  {
            id:3,
            title:"Casa Tânia",
            address:"Rua Quintino Bocaiuva, 15 - Centro",
           
          },
		  {
            id:4,
            title:"Danielle Móveis",
            tel:"383831-1869",
            address:"Rua Benjamin Constant, 125 - Centro",
           
          },
		  {
            id:5,
            title:"Eletro Som",
            address:"Praça Coronel Odilon Coelho - Centro",
           
          },
		  {
            id:6,
            title:"Eletro Zema",
            address:"Rua Benjamin Constant - Centro",
           
          },
		  {
            id:7,
            title:"Ludy Móveis",
            tel:"3899120-1049",
            address:"Rua Benjamin Constant, 311 - Centro",
           
          },
		  {
            id:8,
            title:"Leo Móveis",
            address:"Rua Wenceslau Braz, 650 - Centro",
           
          },
		  {
            id:9,
            title:"New Sat",
			tel:"3899110-9794",
            address:"Rua Barão do Rio Branco - 513A - Centro",
           
          },
		  ]
		  },
		  { 
        name:"óticas",
        category: 37,
        items:[
          {
            id:1,
            title:"Ótica Novo Olhar",
            tel:"3899158-2559",
            address:"Avenida Arthur Bernades, 26 - Centro",
           
          },
		  {
            id:2,
            title:"Ótica Porteirinha",
            tel:"383831-2947",
            address:"Rua Marechal Deodoro da Fonseca, 123 - Centro",
           
          },
		  ]
		  },
		  { 
        name:"padarias",
        category: 38,
        items:[
          {
            id:1,
            title:"Padaria Alvorada",
            tel:"3899143-5799",
            address:"Avenida Pedro Jose Freire, 567 - Vila Vitória",
           
          },
		  {
            id:2,
            title:"Padaria Boca De Forno",
            address:"Avenida Arthur Bernardes, 66 - Centro",
           
          },
		  {
            id:3,
            title:"Padaria Capixaba",
            address:"Avenida Arthur Bernardes, 379 - Centro",
           
          },
		  {
            id:4,
            title:"Padaria Imperial",
            address:"Avenida Clemente Martins Ribeiro - Vila Serranópolis",
           
          },
		  {
            id:5,
            title:"Padaria Nova Serrana",
            address:"Avenida Clemente Martins Ribeiro, 300 - Vila Serranópolis",
           
          },
		  {
            id:6,
            title:"Padaria e Confeitaria Ouro Branco",
            tel:"3899258-5095",
            address:"Rua Altivo Assis Fonseca 240, - Ouro Branco",
           
          },
		  {
            id:7,
            title:"Padaria Pão de Açúcar",
            address:"Avenida Dalton Cunha, 165 - Bairro: Eldorado",
           
          },
		  {
            id:8,
            title:"Padaria Pão de Mel",
            tel:"383831-1820",
            address:"Rua José Izidio Santos, 257 - Centro",
           
          },
		  ]
		  },
		  { 
        name:"pet-shop",
        category: 48,
        items:[
          {
            id:1,
            title:"Casa do Criador",
            tel:"3899141-8438",
            
          },
		  {
            id:2,
            title:"Alberto S Brito (Veterinário)",
            address:"Praça São Joaquim, 231 – Centro",
           
          },
		  ]
		  },
		  { 
        name:"postos de gasolina",
        category: 39,
        items:[
          {
            id:1,
            title:"Auto Posto Aguiar",
            tel:"383831-3100",
            address:"Avenida Arthur Bernardes, 633 - Bairro: Ouro Branco",
           
          },
		  {
            id:2,
            title:"Auto Posto GG",
            address:"Avenida Governador Valadares, 270 - Centro",
           
          },
		  {
            id:3,
            title:"Auto Posto São Geraldo (Zé Bona)",
            address:"Rua Barão do Rio Branco - Centro",
           
          },
		  {
            id:4,
            title:"Posto Guará",
            address:"Avenida Pedro Jose Freire, 109 - Bairro: Aurora",
           
          },
		  {
            id:5,
            title:"Posto Port Cangussú Ltda",
            tel:"383831-1205",
            address:"Rua Barão do Rio Branco 223, - Centro",
           
          },
		  ]
		  },
		  { 
        name:"rádios",
        category: 40,
        items:[
          {
            id:1,
            title:"Rádio Comunitária Liberdade FM",
            address:"Rua Bela Vista, 413 - Ouro Branco",
           
          },
		  {
            id:2,
            title:"Rádio Educadora",
            address:"Praça Coronel Odilon Coelho, 123 - Centro",
           
          },
		  {
            id:3,
            title:"Rádio Sociedade Independente",
            tel:"383831-1040",
            address:"Avenida Major Fidêncio Cangussú, 304",
           
          },
		  ]
		  },
		  { 
        name:"restaurantes",
        category: 41,
        items:[
          {
            id:1,
            title:"Martins Restaurante",
            tel:"3899157-1550",
            address:"Rua Thomaz Gonaga, 539 - Centro",
           
          },
		  {
            id:2,
            title:"Picanhas",
            tel:"383831-1128",
            address:"Rua Arlindo Pinheiro 179, - Centro",
           
          },
		  {
            id:3,
            title:"Restaurante Dona Lindaura",
            tel:"3899123-1940",
            address:"Rua Benjamin Constant - Centro",
           
          },
		  {
            id:4,
            title:"Restaurante e Churrascaria do Popô",
            tel:"3899109-1349",
            address:"Avenida Governador Valadares, 333 - Centro",
           
          },
		  {
            id:5,
            title:"Restaurante Mesa Farta",
            tel:"3899126-7106",
            address:"Avenida Governador Valadares - Centro",
           
          },
		  {
            id:6,
            title:"Restaurante Sabor Mineiro",
            address:"Rua Benjamin Constant - Centro",
           
          },
		  {
            id:7,
            title:"Uai Sô!",
            address:"Praça Capitão Domingos Lima, 197 - Centro",
           
          },
		  {
            id:8,
            title:"Varandas",
            address:"Rua Governador Valadares - Centro",
           
          },
		  ]
		  },
		  { 
        name:"seguradoras",
        category: 42,
        items:[
          {
            id:1,
            title:"Master DPVAT",
            tel:"383831-1173",
            address:"Rua Belo Horizonte, 1003-A - Centro",
           
          },
		  ]
		  },
		  { 
        name:"som",
        category: 43,
        items:[
          {
            id:1,
            title:"Áudio Car",
            tel:"3899195-7378",
            address:"Avenida Dalton Cunha 570, - Eldorado",
           
          },
		  {
            id:2,
            title:"MD Áudio",
            tel:"3899159-1909",
            address:"Rua Dalmo Pereira 125, - Renasçenca",
           
          },
		  {
            id:3,
            title:"Port Som",
            address:"Praça São Joaquim, 23 - Centro",
           
          },
		  {
            id:4,
            title:"Power Som",
            tel:"383831-1173",
            address:"Rua Antao Vieira, 295 - Bairro Eldorado",
           
          },
		  ]
		  },
		  { 
        name:"sorveterias",
        category: 44,
        items:[
          {
            id:1,
            title:"Milk Shake Mix",
            tel:"3899987-2332",
            address:"Rua Benjamin Constant, 185 - Centro",
           
          },
		  {
            id:2,
            title:"Docitta Gelateria",
            tel:"3899109-2758",
            address:"Praça Odilon Coelho, 310-A, Centro",
           
          },
		  {
            id:3,
            title:"Gelateria Italiana Entre Amigos",
            tel:"389104-4640",
            address:"Av Arthur Bernardes 180, - Centro",
           
          },
		  ]
		  },
		  { 
        name:"sacolões",
        category: 45,
        items:[
          {
            id:1,
            title:"Sacolão Opção",
            address:"Avenida Arthur Bernardes, 97 – Bairro: Ouro Branco",
           
          },
		  {
            id:2,
            title:"Sacolão Port Frut",
            tel:"383831-2024 ",
            address:"Rua José Izidio Santos, 548 – Centro",
           
          },
		  {
            id:3,
            title:"Sacolão Shopping Frutas",
            tel:"383831-1134 ",
            address:"Rua Benjamin Constant 418, – Centro",
           
          },
		  {
            id:4,
            title:"Sacolão Silva",
            tel:"3899146-9934 ",
            address:"Avenida José Lúcio de Brito, 56 – Vila São Sebastião",
           
          },
		  ]
		  },
		  { 
        name:"supermercados e mercearias",
        category: 46,
        items:[
          {
            id:1,
            title:"Center Compras Supermercado",
            tel:"3899267-2019",
            address:"Rua Etelvino José da Silva, 55",
           
          },
		  {
            id:2,
            title:"Comilão Supermercado",
            address:"Avenida Arthur Bernardes, 158 - Centro",
           
          },
		  {
            id:3,
            title:"Crisfa Supermercado",
            tel:"383831-2030",
            address:"Avenida Clemente Martins Ribeiro, 283 - Vila Serranópolis",
           
          },
		  {
            id:4,
            title:"Center Compras Supermercado",
            tel:"3899267-2019",
            address:"Rua Etelvino José da Silva, 55",
           
          },
		  {
            id:5,
            title:"Extra Bom Supermercado",
            tel:"383831-1125",
            address:"Rua Olegário Maciel, 929 - Centro",
           
          },
		  {
            id:6,
            title:"Ideal Supermercado",
            tel:"3899267-2019",
            address:"Rua Etelvino José da Silva, 55",
           
          },
		  {
            id:7,
            title:"Center Compras Supermercado",
            tel:"383831-1141",
            address:"Rua Geraldo Teles , 250",
           
          },
		  {
            id:8,
            title:"Ki-Barato Supermercado",
            tel:"3899191-6103",
            address:"Rua Montes Claros, 394",
           
          },
		  {
            id:9,
            title:"Martins Supermercado",
            tel:"383831-1664",
            address:"Avenida Arthur Bernardes, 258 - Centro",
           
          },
		  {
            id:10,
            title:"Master Supermercado",
            address:"Rua Benjamin Constant - Centro",
           
          },
		  {
            id:11,
            title:"Mega Bom Supermercado",
            tel:"383831-2231",
            address:"Avenida Clemente Martins Ribeiro, 256",
           
          },
		  {
            id:12,
            title:"Mercadinho Compre Bem",
            address:"Avenida José Lúcio de Brito, 82 - Vila São Sebastião",
           
          },
		  {
            id:13,
            title:"Mercadinho Bom Preço",
            tel:"3899175-0774",
            address:"Rua Projetada 11, - Bairro Ouro Branco",
           
          },
		  {
            id:14,
            title:"Mercearia Alves",
            tel:"3899968-5427",
            address:"Avenida Artur Bernardes 268, - Centro",
           
          },
		  {
            id:15,
            title:"Mercearia Guara",
            tel:"383831-2210",
            address:"Avenida Pedro José Freire, 445",
           
          },
		  {
            id:16,
            title:"Mercearia Junior",
            tel:"3899157-6645",
            address:"Avenida Governador Valadares, 209",
           
          },
		  {
            id:17,
            title:"Mercearia Mulungu",
            tel:"3899176-0100",
            address:"Praça Santo Pederneira dos Santos, 750",
           
          },
		  {
            id:18,
            title:"Mercearia Paiol",
            tel:"383831-1816",
            address:"Rua Benjamin Constant, 297",
           
          },
		  {
            id:19,
            title:"Mercearia Preço Bom",
            tel:"3899164-0851",
            address:"Rua Tomaz Gonzaga, 589 - Centro",
           
          },
		  {
            id:20,
            title:"Mercearia Rodrigues",
            address:"Avenida Arthur Bernardes, 385",
           
          },
		  {
            id:21,
            title:"Mercearia São Geraldo",
            tel:"383831-1737",
            address:"Avenida Arthur Bernardes, 320 - Bairro: Ouro Branco",
           
          },
		  {
            id:22,
            title:"Minimercado Júnior",
            address:"Rua Benjamim Constant, 112 - Centro",
           
          },
		  {
            id:23,
            title:"Nova Mercearia Jefferson",
            tel:"3899267-2019",
            address:"Rua Etelvino José da Silva, 55",
           
          },
		  {
            id:24,
            title:"S Supermercado",
            address:"Rua Tomáz Gonzaga, 261 - Centro",
           
          },
		  {
            id:25,
            title:"SE Supermercado",
            tel:"3899128-8716",
            address:"Rua Benjamin Constant - Centro",
           
          },
		  {
            id:26,
            title:"Super Nosso Supermercado",
            tel:"383831-2013",
            address:"Rua Gentil Martins Ribeiro, 40 - Centro",
           
          },
		  {
            id:27,
            title:"Supermercado Avenida",
            address:"Rua Benjamin Constant, 599 - Centro",
           
          },
		  {
            id:28,
            title:"Supermercado Batista",
            tel:"383831-1902",
            address:"Avenida Arthur Bernardes, 370",
           
          },
		  {
            id:29,
            title:"Supermercado Big Joy",
            address:"Rua Benjamin Constant, 247 - Centro",
           
          },
		  {
            id:30,
            title:"Supermercado Central",
            address:"Avenida Arthur Bernardes ",
           
          },
		  {
            id:31,
            title:"Supermercado Globo",
            address:"Avenida Arthur Bernardes, 158 - Centro",
           
          },
		  {
            id:32,
            title:"Supermercado Mais",
            tel:"383831-2100",
            address:"Rua Paraná, 310 - Ouro Branco",
           
          },
		  {
            id:33,
            title:"Supermercado Mineirão",
            address:"Avenida Arthur Bernardes, 660",
           
          },
		  {
            id:34,
            title:"Supermercado Mix",
            tel:"383831-1013",
            address:"Avenida João Antônio Cantuaria, 286",
           
          },
		  {
            id:35,
            title:"Supermercado Seu Boneco",
            tel:"3899143-8949",
            address:"Avenida Governador Valadares, 677 - Centro",
           
          },
		  {
            id:36,
            title:"Supermercado Silmara",
            tel:"383831-1500",
            address:"Rua Montes Claros, 339 - Vila Kennedy",
           
          },
		  {
            id:37,
            title:"Supermercado Sonaldo",
            tel:"383831-2913",
            address:"Praça Capitão Domingos Lima, 16 - Centro",
           
          },
		  {
            id:38,
            title:"Supermercado União",
            tel:"383831-1919",
            address:"Rua Doutor Altivo Fonseca, 220 - Centro",
           
          },
		  {
            id:39,
            title:"Teresinha G Barbosa",
            tel:"383831-1238",
            address:"Avenida Arthur Bernardes, 158 - Bairro: Ouro Branco",
           
          },
		  {
            id:40,
            title:"Weja Supermercado",
            tel:"383831-1201",
            address:"Praça Coronel Odilon Coelho, 36 - Centro",
           
          },
		  
		  ]
		  },
		  { 
        name:"taxistas",
        category: 47,
        items:[
          {
            id:1,
            title:"Aderval",
            tel:"38999109-0807",
            
          },
		  {
            id:2,
            title:"Carlinhos",
            tel:"38999144-5358 ",
            
          },
		  {
            id:3,
            title:"Cicero",
            tel:"38999171-8437 ",
            
          },
		  {
            id:4,
            title:"Chiquinhos Tax",
            tel:"38999364009",
            address:"Terminal rodoviário de Porteirinha",
           
          },
		  {
            id:5,
            title:"Dilsinho",
            tel:"3899968-5959",
            
          },
		  {
            id:6,
            title:"Dim",
            tel:"38999127-0073",
            address:"Praça Coronel Odilon Coelho – Centro",
           
          },
		  {
            id:7,
            title:"Edilson",
            tel:"383831-2970",
            address:"Praça Coronel Odilon Coelho – Centro",
           
          },
		  {
            id:8,
            title:"Edimar",
            tel:"38999109-0807",
            address:"Praça Coronel Odilon Coelho – Centro",
           
          },
		  {
            id:9,
            title:"Gildo",
            tel:"38999178-0403",
            
          },
		  {
            id:10,
            title:"Jorge",
            tel:"3899167-5775 ",
            
          },
		  {
            id:11,
            title:"Meira",
            tel:"3899109-0632",
           
          },
		  {
            id:12,
            title:"Reinaldo",
            tel:" 3899969-1029",
            
          },
		  {
            id:13,
            title:"Rejano",
            tel:"38999137-1970",
            
          },
		  {
            id:14,
            title:"Roberto",
            tel:"3899154-0577",
            address:"Rua Jesuíno Barbosa, 190 – Bairro: São Joaquim",
           
          },
		  {
            id:15,
            title:"Rogério",
            tel:"38999126-7186",
            address:"Praça Coronel Odilon Coelho – Centro",
           
          },
		  {
            id:16,
            title:"Taidão",
            tel:"38999109-7900",
            
          },
		  {
            id:17,
            title:"Vino",
            tel:"3899164-6908",
            address:"Rodoviária",
           
          },
		  {
            id:18,
            title:"Wilson",
            tel:"3899103-9342",
            address:"Praça Rodoviária – Centro",
           
          },
		  ]
		  },
		  { 
        name:"viagens e turismo",
        category: 49,
        items:[
          {
            id:1,
            title:"Carlos Turismo",
            tel:"3899187-5000",
            address:"Avenida Arthur Bernardes, 110",
           
          },
		  {
            id:2,
            title:"DWA Turismo",
            address:"Rua General Ananias José Alves, 149",
           
          },
		  {
            id:3,
            title:"GC Turismo",
            tel:"3899140-2482",
            
          },
		  {
            id:4,
            title:"GN Turismo",
            tel:"3899134-0069",
            address:"Rua Raul Barbosa, 357",
           
          },
		  {
            id:5,
            title:"Gontijo",
            address:"Avenida Dalton Cunha",
           
          },
		  {
            id:6,
            title:"JW Turismo",
            tel:"3899187-7399",
            address:"Avenida Arthur Bernardes, 370 – Centro",
           
          },
		  {
            id:7,
            title:"Arte Turismo",
            tel:"383831-1668",
            address:"Rua Arlindo Pinheiro, 139 –  Centro",
           
          },
		  {
            id:8,
            title:"Nei Transporte e Turismo",
            tel:"3899109-2461",
            address:"Avenida Arthur Bernardes, 66 A – Centro",
           
          },
		  {
            id:9,
            title:"Porteirinha Turismo",
            tel:"383522-1410",
           
          },
		  {
            id:10,
            title:"Primus Tur",
            tel:"3899225-1240",
            
          },
		  {
            id:11,
            title:"São Cristóvão Turismo",
            tel:"383831-1505",
            address:"Rua Montes Claros, 290",
           
          },
		  {
            id:12,
            title:"Túlio Turismo",
            tel:"3899144-1426",
            
          },
		  {
            id:13,
            title:"TS Turismo",
            tel:"383831-2800",
            address:"Avenida Governador Valadares, 333",
           
          },
		  ]
		  },
		  { 
        name:"vidraçarias",
        category: 50,
        items:[
          {
            id:1,
            title:"Vidraçaria Avenida",
            tel:"383831-1546",
            address:"Avenida Governador Valadares, 495 - Centro",
           
          },
		  {
            id:2,
            title:"Vidraçaria Cristal",
            tel:"3899129-6890",
            address:"Avenida Arthur Bernardes, 395 - Centro",
           
          },
		  {
            id:3,
            title:"Vidraçaria Eldorado",
            address:"Avenida Dalton Cunha, 100-B - Bairro: Eldorado",
           
          },
		  ]
		  },
    ];
    this.dataTemp = this.data;
  }

  getGuiaData(filter){
    if(filter !== null){
      return this.dataTemp.find(function (obj) { return obj.category=== filter; }).items;
    }
    else{
       return this.dataTemp;
    }
  }
 
}
