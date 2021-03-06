var delegaciones=[
{"nombre":"Álvaro Obregón","contador":0,"dx":304,"dy":399},
{"nombre":"Azcapotzalco","contador":0,"dx":399,"dy":61},
{"nombre":"Coyoacan","contador":0,"dx":484,"dy":448},
{"nombre":"Cuajimalpa de Morelos","contador":0,"dx":148,"dy":393},
{"nombre":"Gustavo A. Madero","contador":0,"dx":565,"dy":54},
{"nombre":"Cuauhtémoc","contador":0,"dx":495,"dy":213},
{"nombre":"Iztapalapa","contador":0,"dx":720,"dy":443},
{"nombre":"Magdalena Contreras","contador":0,"dx":0,"dy":0},
{"nombre":"Miguel Hidalgo","contador":0,"dx":186,"dy":526},
{"nombre":"Milpa Alta","contador":0,"dx":548,"dy":550},
{"nombre":"Tlahuac","contador":0,"dx":764,"dy":566},
{"nombre":"Tlalpan","contador":0,"dx":397,"dy":550},
{"nombre":"Venustiano Carranza","contador":0,"dx":637,"dy":207},
{"nombre":"Xochimilco","contador":0,"dx":757,"dy":551},
];

var tipos={
    
    "General": {"nombre":"General","contador":0,"pos_y":200},
    "Materno Infantil": {"nombre":"Maternal Infantil","contador":0,"pos_y":605},
    "Pediatrico": {"nombre":"Pediatrico","contador":0,"pos_y":862},
    "Perinatologia": {"nombre":"Perinatologia","contador":0,"pos_y":1120},
    "Atencion a la mujer":{"nombre":"Atencion a la mujer","contador":0,"pos_y":1384},
    "Especialidades":{"nombre":"Especialidades","contador":0,"pos_y":1659},
    "Cirugia":{"nombre":"Cirugia","contador":0,"pos_y":1959},
    "T-II":    {"nombre":"T-II","contador":0,"pos_y":2199},
};


var hospitales=[
  {
    "id":"DFSSA003722",
    "Nombre":"HOSPITAL GENERAL BALBUENA",
    "id_delegacion":"17",
    "delegacion":"Venustiano Carranza",
    "longitud":"-99.1151513",
    "latitud":"19.4245577",
    "del_x":100*0.8,
    "del_y":-100*0.4,
    "tipo":"Hospital",
    "subtipo":"T-II"
  },
  {
    "id":"DFSSA018166",
    "Nombre":"HOSPITAL GENERAL AJUSCO MEDIO",
    "id_delegacion":"12",
    "delegacion":"Tlalpan",
    "longitud":"-99.2078452",
    "latitud":"19.272077",
    "del_x":-100 * 0.8,
    "del_y":-100 * 0.4,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA004096",
    "Nombre":"INSTITUTO NACIONAL DE PERINATOLOGIA ISIDRO ESPINOSA DE LOS REYES",
    "id_delegacion":"16",
    "delegacion":"Miguel Hidalgo",
    "longitud":"-99.205844",
    "latitud":"19.422941",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"Perinatologia"
  },
  {
    "id":"DFSSA003973",
    "Nombre":"HOSPITAL GENERAL DE MEXICO",
    "id_delegacion":"15",
    "delegacion":"Cuauhtémoc",
    "longitud":"-99.150805",
    "latitud":"19.414523",
    "del_x":-100 * 0.8,
    "del_y":-100 * 0.4,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA004265",
    "Nombre":"HOSPITAL DE ESPECIALIDADES DR. BELISARIO DOMINGUEZ",
    "id_delegacion":"7",
    "delegacion":"Iztapalapa",
    "longitud":"-99.113023",
    "latitud":"19.29856",
    "del_x":-100 * 0.8,
    "del_y":-100 * 0.4,
    "tipo":"Hospital",
    "subtipo":"Especialidades"
  },
  {
    "id":"DFSSA017886",
    "Nombre":"HOSPITAL GENERAL DR. ENRIQUE CABRERA",
    "id_delegacion":"10",
    "delegacion":"Álvaro Obregón",
    "longitud":"-99.224294",
    "latitud":"19.361524",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA002066",
    "Nombre":"HOSPITAL GENERAL MILPA ALTA",
    "id_delegacion":"9",
    "delegacion":"Milpa Alta",
    "longitud":"-99.011215",
    "latitud":"19.200165",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA003705",
    "Nombre":"HOSPITAL MATERNO INFANTIL INGUARAN",
    "id_delegacion":"17",
    "delegacion":"Venustiano Carranza",
    "longitud":"-99.1130344",
    "latitud":"19.4519392",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo": "Materno Infantil"
  },
  
 
 
  {
    "id":"DFSSA000596",
    "Nombre":"HOSPITAL MATERNO INFANTIL CUAJIMALPA",
    "id_delegacion":"4",
    "delegacion":"Cuajimalpa de Morelos",
    "longitud":"-99.141261",
    "latitud":"19.348269",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"Materno Infantil"
  },
  
  {
    "id":"DFSSA000864",
    "Nombre":"HOSPITAL GENERAL TICOMAN",
    "id_delegacion":"5",
    "delegacion":"Gustavo A. Madero",
    "longitud":"-99.300676",
    "latitud":"19.348269",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA001540",
    "Nombre":"HOSPITAL GENERAL REGIONAL IZTAPALAPA",
    "id_delegacion":"7",
    "delegacion":"Iztapalapa",
    "longitud":"-99.0502567",
    "latitud":"19.3427323",
    "del_x":0,
    "del_y":-100 * 0.9,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  
  {
    "id":"DFSSA003553",
    "Nombre":"HOSPITAL GENERAL DR. RUBEN LEÑERO",
    "id_delegacion":"16",
    "delegacion":"Miguel Hidalgo",
    "longitud":"-99.169196",
    "latitud":"19.451665",
    "del_x":-100 * 0.8,
    "del_y":100 * 0.4,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA003162",
    "Nombre":"HOSPITAL GENERAL XOCO",
    "id_delegacion":"3",
    "delegacion":"Coyoacan",
    "longitud":"-99.162536",
    "latitud":"19.360101",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA003384",
    "Nombre":"HOSPITAL GENERAL DR. GREGORIO SALAS FLORES",
    "id_delegacion":"15",
    "delegacion":"Cuauhtémoc",
    "longitud":"-99.129391",
    "latitud":"19.43772",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA018154",
    "Nombre":"HOSPITAL GENERAL TLAHUAC",
    "id_delegacion":"11",
    "delegacion":"Tlahuac",
    "longitud":"-99.0046066",
    "latitud":"19.2656937",
    "del_x":100 * 0.8,
    "del_y":-100 * 0.4,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA000881",
    "Nombre":"HOSPITAL GENERAL VILLA",
    "id_delegacion":"5",
    "delegacion":"Gustavo A. Madero",
    "longitud":"-99.103392",
    "latitud":"19.479876",
    "del_x":-100 * 0.8,
    "del_y":-100 * 0.4,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA002491",
    "Nombre":"HOSPITAL MATERNO INFANTIL TLAHUAC",
    "id_delegacion":"11",
    "delegacion":"Tlahuac",
    "longitud":"-99.320822",
    "latitud":"19.5700672",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"Materno Infantil"
  },
  {
    "id":"DFSSA018142",
    "Nombre":"CLINICA HOSPITAL EMILIANO ZAPATA",
    "id_delegacion":"7",
    "delegacion":"Iztapalapa",
    "longitud":"-98.978401",
    "latitud":"19.339163",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"Materno Infantil"
  },
  {
    "id":"DFSSA003944",
    "Nombre":"HOSPITAL JUAREZ DE MEXICO",
    "id_delegacion":"5",
    "delegacion":"Gustavo A. Madero",
    "longitud":"-99.136968",
    "latitud":"19.482221",
    "del_x":100*0.8,
    "del_y":-100*0.4,
    "tipo":"Hospital",
    "subtipo":"Cirugia"
  },
  {
    "id":"DFSSA003961",
    "Nombre":"HOSPITAL GENERAL DR. MANUEL GEA GONZALEZ",
    "id_delegacion":"12",
    "delegacion":"Tlalpan",
    "longitud":"-99.160656",
    "latitud":"19.290051",
    "del_x":-100*0.8,
    "del_y":100*0.4,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA004002",
    "Nombre":"HOSPITAL DE LA MUJER",
    "id_delegacion":"16",
    "delegacion":"Miguel Hidalgo",
    "longitud":"-99.170939",
    "latitud":"19.451878",
    "del_x":-100 * 0.8,
    "del_y":-100 * 0.4,
    "tipo":"Hospital",
    "subtipo":"Atencion a la mujer"
  },
  {
    "id":"DFSSA002672",
    "Nombre":"HOSPITAL GENERAL TORRE MEDICA TEPEPAN",
    "id_delegacion":"12",
    "delegacion":"Tlalpan",
    "longitud":"-99.174367",
    "latitud":"19.266357",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"General"
  },
  {
    "id":"DFSSA003372",
    "Nombre":"HOSPITAL PEDIATRICO PERALVILLO",
    "id_delegacion":"15",
    "delegacion":"Cuauhtémoc",
    "longitud":"-99.141261",
    "latitud":"19.459726",
    "del_x":-100 * 0.8,
    "del_y":100 * 0.4,
    "tipo":"Hospital",
    "subtipo":"Pediatrico"
  },
  {
    "id":"DFSSA002993",
    "Nombre":"HOSPITAL MATERNO PEDIATRICO XOCHIMILCO",
    "id_delegacion":"12",
    "delegacion":"Tlalpan",
    "longitud":"-99.141261",
    "latitud":"19.459726",
    "del_x":0,
    "del_y":0,
    "tipo":"Hospital",
    "subtipo":"Pediatrico"
  }
];