const departamentos = [
    { departamento_id: 1, departamento_nombre: 'Petén' },
    { departamento_id: 2, departamento_nombre: 'Izabal' },
    { departamento_id: 3, departamento_nombre: 'Alta Verapaz' },
    { departamento_id: 4, departamento_nombre: 'Quiché' },
    { departamento_id: 5, departamento_nombre: 'Huehuetenango' },
    { departamento_id: 6, departamento_nombre: 'Escuintla' },
    { departamento_id: 7, departamento_nombre: 'San Marcos' },
    { departamento_id: 8, departamento_nombre: 'Jutiapa' },
    { departamento_id: 9, departamento_nombre: 'Baja Verapaz' },
    { departamento_id: 10, departamento_nombre: 'Santa Rosa' },
    { departamento_id: 11, departamento_nombre: 'Zacapa' },
    { departamento_id: 12, departamento_nombre: 'Suchitepéquez' },
    { departamento_id: 13, departamento_nombre: 'Chiquimula' },
    { departamento_id: 14, departamento_nombre: 'Guatemala' },
    { departamento_id: 15, departamento_nombre: 'Jalapa' },
    { departamento_id: 16, departamento_nombre: 'Chimaltenango' },
    { departamento_id: 17, departamento_nombre: 'Quetzaltenango' },
    { departamento_id: 18, departamento_nombre: 'El Progreso' },
    { departamento_id: 19, departamento_nombre: 'Retalhuleu' },
    { departamento_id: 20, departamento_nombre: 'Sololá' },
    { departamento_id: 21, departamento_nombre: 'Totonicapán' },
    { departamento_id: 22, departamento_nombre: 'Sacatepéquez' }
]

const municipios = [
    // Municipios de Peten
    { municipio_id: 1, municipio_nombre: 'Flores', departamento_id: 1 },
    { municipio_id: 2, municipio_nombre: 'San José', departamento_id: 1 },
    { municipio_id: 3, municipio_nombre: 'San Benito ', departamento_id: 1 },
    { municipio_id: 4, municipio_nombre: 'San Andrés', departamento_id: 1 },
    { municipio_id: 5, municipio_nombre: 'La Libertad', departamento_id: 1 },
    { municipio_id: 6, municipio_nombre: 'San Francisco', departamento_id: 1 },
    { municipio_id: 7, municipio_nombre: 'Santa Ana', departamento_id: 1 },
    { municipio_id: 8, municipio_nombre: 'Dolores', departamento_id: 1 },
    { municipio_id: 9, municipio_nombre: 'San Luis', departamento_id: 1 },
    { municipio_id: 10, municipio_nombre: 'Sayaxche', departamento_id: 1 },
    { municipio_id: 11, municipio_nombre: 'Melchor de Mencos', departamento_id: 1 },
    { municipio_id: 12, municipio_nombre: 'Poptún', departamento_id: 1 },
    // Municipios de Izabal
    { municipio_id: 13, municipio_nombre: 'Puerto Barrios', departamento_id: 2 },
    { municipio_id: 14, municipio_nombre: 'Livingston', departamento_id: 2 },
    { municipio_id: 15, municipio_nombre: 'El Estor', departamento_id: 2 },
    { municipio_id: 16, municipio_nombre: 'Morales', departamento_id: 2 },
    { municipio_id: 17, municipio_nombre: 'Los Amates', departamento_id: 2 },
    // Municipios de Alta Verapaz
    { municipio_id: 18, municipio_nombre: 'Cobán', departamento_id: 3 },
    { municipio_id: 19, municipio_nombre: 'Santa Cruz Verapaz', departamento_id: 3 },
    { municipio_id: 20, municipio_nombre: 'San Cristobal Verapaz', departamento_id: 3 },
    { municipio_id: 21, municipio_nombre: 'Tactíc', departamento_id: 3 },
    { municipio_id: 22, municipio_nombre: 'Tamahú', departamento_id: 3 },
    { municipio_id: 23, municipio_nombre: 'San Miguel Tucurú', departamento_id: 3 },
    { municipio_id: 24, municipio_nombre: 'Panzos ', departamento_id: 3 },
    { municipio_id: 25, municipio_nombre: 'Senahú ', departamento_id: 3 },
    { municipio_id: 26, municipio_nombre: 'San Pedro Carchá', departamento_id: 3 },
    { municipio_id: 27, municipio_nombre: 'SanJuan Chamelco', departamento_id: 3 },
    { municipio_id: 28, municipio_nombre: 'Lanquín', departamento_id: 3 },
    { municipio_id: 29, municipio_nombre: 'Santa María Cahabón', departamento_id: 3 },
    { municipio_id: 30, municipio_nombre: 'Chisec', departamento_id: 3 },
    { municipio_id: 31, municipio_nombre: 'Chahal', departamento_id: 3 },
    { municipio_id: 32, municipio_nombre: 'Fray Bartolomé de las Casas', departamento_id: 3 },
    { municipio_id: 33, municipio_nombre: 'Santa Catarina La Tinta', departamento_id: 3 },
    // Municipios de El Quiché 
    { municipio_id: 34, municipio_nombre: 'Santa Cruz del Quiche', departamento_id: 4 },
    { municipio_id: 35, municipio_nombre: 'Chiche', departamento_id: 4 },
    { municipio_id: 36, municipio_nombre: 'Chinique', departamento_id: 4 },
    { municipio_id: 37, municipio_nombre: 'Zacualpa', departamento_id: 4 },
    { municipio_id: 38, municipio_nombre: 'Chajul', departamento_id: 4 },
    { municipio_id: 39, municipio_nombre: 'Santo Tomás Chichicstenango', departamento_id: 4 },
    { municipio_id: 40, municipio_nombre: 'Patzité', departamento_id: 4 },
    { municipio_id: 41, municipio_nombre: 'San Antonio Ilotenango', departamento_id: 4 },
    { municipio_id: 42, municipio_nombre: 'San Pedro Jocopilas', departamento_id: 4 },
    { municipio_id: 43, municipio_nombre: 'Cunén', departamento_id: 4 },
    { municipio_id: 44, municipio_nombre: 'San Juan Cotzal', departamento_id: 4 },
    { municipio_id: 45, municipio_nombre: 'Joyabaj', departamento_id: 4 },
    { municipio_id: 46, municipio_nombre: 'Santa María Nebaj', departamento_id: 4 },
    { municipio_id: 47, municipio_nombre: 'San Andrés Sajcabajá', departamento_id: 4 },
    { municipio_id: 48, municipio_nombre: 'San Miguel Uspatán', departamento_id: 4 },
    { municipio_id: 49, municipio_nombre: 'Sacapulas', departamento_id: 4 },
    { municipio_id: 50, municipio_nombre: 'San Bartolomé Jocotenango', departamento_id: 4 },
    { municipio_id: 51, municipio_nombre: 'Canilla', departamento_id: 4 },
    { municipio_id: 52, municipio_nombre: 'Chicaman', departamento_id: 4 },
    { municipio_id: 53, municipio_nombre: 'Playa Grande - Ixcán', departamento_id: 4 },
    { municipio_id: 54, municipio_nombre: 'Pachalúm', departamento_id: 4 },
    // Municipios de Huehuetenango 
    { municipio_id: 55, municipio_nombre: 'Huehuetenango', departamento_id: 5 },
    { municipio_id: 56, municipio_nombre: 'Chiantla', departamento_id: 5 },
    { municipio_id: 57, municipio_nombre: 'Malacatancito', departamento_id: 5 },
    { municipio_id: 58, municipio_nombre: 'Cuilco', departamento_id: 5 },
    { municipio_id: 59, municipio_nombre: 'Nentón', departamento_id: 5 },
    { municipio_id: 60, municipio_nombre: 'San Pedro Necta', departamento_id: 5 },
    { municipio_id: 61, municipio_nombre: 'Jacaltenango', departamento_id: 5 },
    { municipio_id: 62, municipio_nombre: 'San Pedro Soloma', departamento_id: 5 },
    { municipio_id: 63, municipio_nombre: 'San Ildelfonso Ixtahuac´n', departamento_id: 5 },
    { municipio_id: 64, municipio_nombre: 'Santa Bárbara', departamento_id: 5 },
    { municipio_id: 65, municipio_nombre: 'La Libertad', departamento_id: 5 },
    { municipio_id: 66, municipio_nombre: 'La Democracia', departamento_id: 5 },
    { municipio_id: 67, municipio_nombre: 'San Miguel Acatán', departamento_id: 5 },
    { municipio_id: 68, municipio_nombre: 'San Rafael La Independencia', departamento_id: 5 },
    { municipio_id: 69, municipio_nombre: 'Todos Santos Chuchcumatán', departamento_id: 5 },
    { municipio_id: 70, municipio_nombre: 'San Juan Atitán', departamento_id: 5 },
    { municipio_id: 71, municipio_nombre: 'Santa Eulalia', departamento_id: 5 },
    { municipio_id: 72, municipio_nombre: 'San Mateo Ixtatán', departamento_id: 5 },
    { municipio_id: 73, municipio_nombre: 'Colotenango', departamento_id: 5 },
    { municipio_id: 74, municipio_nombre: 'San Sebastián Huehuetenango', departamento_id: 5 },
    { municipio_id: 75, municipio_nombre: 'Tectitán', departamento_id: 5 },
    { municipio_id: 76, municipio_nombre: 'Concepción Huista', departamento_id: 5 },
    { municipio_id: 77, municipio_nombre: 'San Juan Ixcoy', departamento_id: 5 },
    { municipio_id: 78, municipio_nombre: 'San Antonio Huista', departamento_id: 5 },
    { municipio_id: 79, municipio_nombre: 'San Sebastián Coatán', departamento_id: 5 },
    { municipio_id: 80, municipio_nombre: 'Santa Cruz Barillas', departamento_id: 5 },
    { municipio_id: 81, municipio_nombre: 'Aguacatán', departamento_id: 5 },
    { municipio_id: 82, municipio_nombre: 'San Rafael Petzal', departamento_id: 5 },
    { municipio_id: 83, municipio_nombre: 'San Gaspar Ixchil', departamento_id: 5 },
    { municipio_id: 84, municipio_nombre: 'Santiago Chimaltenango', departamento_id: 5 },
    { municipio_id: 85, municipio_nombre: 'Santa Ana Huista', departamento_id: 5 },
    // Municipios de Escuintla
    { municipio_id: 86, municipio_nombre: 'Escuintla', departamento_id: 6 },
    { municipio_id: 87, municipio_nombre: 'Santa Lucía Cotzumalguapa', departamento_id: 6 },
    { municipio_id: 88, municipio_nombre: 'La Democracia', departamento_id: 6 },
    { municipio_id: 89, municipio_nombre: 'Siquinalá', departamento_id: 6 },
    { municipio_id: 90, municipio_nombre: 'Masagua', departamento_id: 6 },
    { municipio_id: 91, municipio_nombre: 'Pueblo Nuevo Tiquisate', departamento_id: 6 },
    { municipio_id: 92, municipio_nombre: 'La Gomera', departamento_id: 6 },
    { municipio_id: 93, municipio_nombre: 'Guanagazapa', departamento_id: 6 },
    { municipio_id: 94, municipio_nombre: 'Puerto de San José', departamento_id: 6 },
    { municipio_id: 95, municipio_nombre: 'Iztapa', departamento_id: 6 },
    { municipio_id: 96, municipio_nombre: 'Palín', departamento_id: 6 },
    { municipio_id: 97, municipio_nombre: 'San Vicente Pacaya', departamento_id: 6 },
    { municipio_id: 98, municipio_nombre: 'Nueva Concepción', departamento_id: 6 },
    // Municipios de San Marcos
    { municipio_id: 99, municipio_nombre: 'San Marcos', departamento_id: 7 },
    { municipio_id: 100, municipio_nombre: 'San Pedro Sacatepéquez', departamento_id: 7 },
    { municipio_id: 101, municipio_nombre: 'Comitancillo', departamento_id: 7 },
    { municipio_id: 102, municipio_nombre: 'San Antonio Sacatepéquez', departamento_id: 7 },
    { municipio_id: 103, municipio_nombre: 'San Miguel Ixtahuacan', departamento_id: 7 },
    { municipio_id: 104, municipio_nombre: 'Concepción Tutuapa', departamento_id: 7 },
    { municipio_id: 105, municipio_nombre: 'Tacaná', departamento_id: 7 },
    { municipio_id: 106, municipio_nombre: 'Sibinal', departamento_id: 7 },
    { municipio_id: 107, municipio_nombre: 'Tajumulco', departamento_id: 7 },
    { municipio_id: 108, municipio_nombre: 'Tejutla', departamento_id: 7 },
    { municipio_id: 109, municipio_nombre: 'San Rafael Pié de la Cuesta', departamento_id: 7 },
    { municipio_id: 110, municipio_nombre: 'Nuevo Progreso', departamento_id: 7 },
    { municipio_id: 111, municipio_nombre: 'El Tumbador', departamento_id: 7 },
    { municipio_id: 112, municipio_nombre: 'San José El Rodeo', departamento_id: 7 },
    { municipio_id: 113, municipio_nombre: 'Malacatán', departamento_id: 7 },
    { municipio_id: 114, municipio_nombre: 'Catarina', departamento_id: 7 },
    { municipio_id: 115, municipio_nombre: 'Ayutla', departamento_id: 7 },
    { municipio_id: 116, municipio_nombre: 'Ocos', departamento_id: 7 },
    { municipio_id: 117, municipio_nombre: 'San Pablo', departamento_id: 7 },
    { municipio_id: 118, municipio_nombre: 'El Quetzal', departamento_id: 7 },
    { municipio_id: 119, municipio_nombre: 'La Reforma', departamento_id: 7 },
    { municipio_id: 120, municipio_nombre: 'Pajapita', departamento_id: 7 },
    { municipio_id: 121, municipio_nombre: 'Ixchiguan', departamento_id: 7 },
    { municipio_id: 122, municipio_nombre: 'San José Ojetenán', departamento_id: 7 },
    { municipio_id: 123, municipio_nombre: 'San Cristóbal Cucho', departamento_id: 7 },
    { municipio_id: 124, municipio_nombre: 'Sipacapa', departamento_id: 7 },
    { municipio_id: 125, municipio_nombre: 'Esquipulas Palo Gordo', departamento_id: 7 },
    { municipio_id: 126, municipio_nombre: 'Río Blanco', departamento_id: 7 },
    { municipio_id: 127, municipio_nombre: 'San Lorenzo', departamento_id: 7 },
    // Municipios de Jutiapa
    { municipio_id: 128, municipio_nombre: 'Jutiapa', departamento_id: 8 },
    { municipio_id: 129, municipio_nombre: 'El Progreso', departamento_id: 8 },
    { municipio_id: 130, municipio_nombre: 'Santa Catarina Mita', departamento_id: 8 },
    { municipio_id: 131, municipio_nombre: 'Agua Blanca', departamento_id: 8 },
    { municipio_id: 132, municipio_nombre: 'Asunción Mita', departamento_id: 8 },
    { municipio_id: 133, municipio_nombre: 'Yupiltepeque', departamento_id: 8 },
    { municipio_id: 134, municipio_nombre: 'Atescatempa', departamento_id: 8 },
    { municipio_id: 135, municipio_nombre: 'Jerez', departamento_id: 8 },
    { municipio_id: 136, municipio_nombre: 'El Adelanto', departamento_id: 8 },
    { municipio_id: 137, municipio_nombre: 'Zapotitlán', departamento_id: 8 },
    { municipio_id: 138, municipio_nombre: 'Comapa', departamento_id: 8 },
    { municipio_id: 139, municipio_nombre: 'Jalpatagua', departamento_id: 8 },
    { municipio_id: 140, municipio_nombre: 'Conguaco', departamento_id: 8 },
    { municipio_id: 141, municipio_nombre: 'Moyuta', departamento_id: 8 },
    { municipio_id: 142, municipio_nombre: 'Pasaco', departamento_id: 8 },
    { municipio_id: 143, municipio_nombre: 'San José Acatempa', departamento_id: 8 },
    { municipio_id: 144, municipio_nombre: 'Quezada', departamento_id: 8 },
    // Municipios de Baja Verapaz
    { municipio_id: 145, municipio_nombre: 'Salamá', departamento_id: 9 },
    { municipio_id: 146, municipio_nombre: 'San Miguel Chicaj', departamento_id: 9 },
    { municipio_id: 147, municipio_nombre: 'Rabinal', departamento_id: 9 },
    { municipio_id: 148, municipio_nombre: 'Cubulco', departamento_id: 9 },
    { municipio_id: 149, municipio_nombre: 'Granados', departamento_id: 9 },
    { municipio_id: 150, municipio_nombre: 'Santa Cruz El Chol', departamento_id: 9 },
    { municipio_id: 151, municipio_nombre: 'San Jerónimo', departamento_id: 9 },
    { municipio_id: 152, municipio_nombre: 'Purulhá', departamento_id: 9 },
    // Municipios de Santa Rosa
    { municipio_id: 153, municipio_nombre: 'Cuilapa', departamento_id: 10 },
    { municipio_id: 154, municipio_nombre: 'Berberena', departamento_id: 10 },
    { municipio_id: 155, municipio_nombre: 'San Rosa de Lima', departamento_id: 10 },
    { municipio_id: 156, municipio_nombre: 'Casillas', departamento_id: 10 },
    { municipio_id: 157, municipio_nombre: 'San Rafael Las Flores', departamento_id: 10 },
    { municipio_id: 158, municipio_nombre: 'Oratorio', departamento_id: 10 },
    { municipio_id: 159, municipio_nombre: 'San Juan Tecuaco', departamento_id: 10 },
    { municipio_id: 160, municipio_nombre: 'Chiquimulilla', departamento_id: 10 },
    { municipio_id: 161, municipio_nombre: 'Taxisco', departamento_id: 10 },
    { municipio_id: 162, municipio_nombre: 'Santa María Ixhuatan', departamento_id: 10 },
    { municipio_id: 163, municipio_nombre: 'Guazacapán', departamento_id: 10 },
    { municipio_id: 164, municipio_nombre: 'Santa Cruz Naranjo', departamento_id: 10 },
    { municipio_id: 165, municipio_nombre: 'Pueblo Nuevo Viñas', departamento_id: 10 },
    { municipio_id: 166, municipio_nombre: 'Nueva Santa Rosa', departamento_id: 10 },
    // Municipios de Zacapa
    { municipio_id: 167, municipio_nombre: 'Zacapa', departamento_id: 11 },
    { municipio_id: 168, municipio_nombre: 'Estanzuela', departamento_id: 11 },
    { municipio_id: 169, municipio_nombre: 'Río Hondo', departamento_id: 11 },
    { municipio_id: 170, municipio_nombre: 'Gualán', departamento_id: 11 },
    { municipio_id: 171, municipio_nombre: 'Teculután', departamento_id: 11 },
    { municipio_id: 172, municipio_nombre: 'Usumatlán', departamento_id: 11 },
    { municipio_id: 173, municipio_nombre: 'Cabañas', departamento_id: 11 },
    { municipio_id: 174, municipio_nombre: 'San Diego', departamento_id: 11 },
    { municipio_id: 175, municipio_nombre: 'La Unión', departamento_id: 11 },
    { municipio_id: 176, municipio_nombre: 'Huite', departamento_id: 11 },
    // Municipios de Suchitepéquez
    { municipio_id: 177, municipio_nombre: 'Mazatenango', departamento_id: 12 },
    { municipio_id: 178, municipio_nombre: 'Cuyotenango', departamento_id: 12 },
    { municipio_id: 179, municipio_nombre: 'San Francisco Zapotitlán', departamento_id: 12 },
    { municipio_id: 180, municipio_nombre: 'San Bernardino', departamento_id: 12 },
    { municipio_id: 181, municipio_nombre: 'San José El Ídolo', departamento_id: 12 },
    { municipio_id: 182, municipio_nombre: 'Santo Domingo Suchitepequez', departamento_id: 12 },
    { municipio_id: 183, municipio_nombre: 'San Lorenzo', departamento_id: 12 },
    { municipio_id: 184, municipio_nombre: 'Samayac', departamento_id: 12 },
    { municipio_id: 185, municipio_nombre: 'San Pablo Jocopilas', departamento_id: 12 },
    { municipio_id: 186, municipio_nombre: 'San Antonio Suchitepéquez', departamento_id: 12 },
    { municipio_id: 187, municipio_nombre: 'San Miguel Panán', departamento_id: 12 },
    { municipio_id: 188, municipio_nombre: 'San Gabriel', departamento_id: 12 },
    { municipio_id: 189, municipio_nombre: 'Chicacao', departamento_id: 12 },
    { municipio_id: 190, municipio_nombre: 'Patulul', departamento_id: 12 },
    { municipio_id: 191, municipio_nombre: 'Santa Bárbara', departamento_id: 12 },
    { municipio_id: 192, municipio_nombre: 'San Juan Bautista', departamento_id: 12 },
    { municipio_id: 193, municipio_nombre: 'Santo Tomás La Unión', departamento_id: 12 },
    { municipio_id: 194, municipio_nombre: 'Zunilito', departamento_id: 12 },
    { municipio_id: 195, municipio_nombre: 'Pueblo Nuevo Suchitepéque', departamento_id: 12 },
    { municipio_id: 196, municipio_nombre: 'Río Bravo', departamento_id: 12 },
    // Municipios de Chiquimulao
    { municipio_id: 197, municipio_nombre: 'Chiquimula', departamento_id: 13 },
    { municipio_id: 198, municipio_nombre: 'San José La Arada', departamento_id: 13 },
    { municipio_id: 199, municipio_nombre: 'San Juan Hermita', departamento_id: 13 },
    { municipio_id: 200, municipio_nombre: 'Jocotán', departamento_id: 13 },
    { municipio_id: 201, municipio_nombre: 'Camotán', departamento_id: 13 },
    { municipio_id: 202, municipio_nombre: 'Olopa', departamento_id: 13 },
    { municipio_id: 203, municipio_nombre: 'Esquipulas', departamento_id: 13 },
    { municipio_id: 204, municipio_nombre: 'Concepción Las Minas', departamento_id: 13 },
    { municipio_id: 205, municipio_nombre: 'Quezaltepeque', departamento_id: 13 },
    { municipio_id: 206, municipio_nombre: 'San Jacinto', departamento_id: 13 },
    { municipio_id: 207, municipio_nombre: 'Ipala', departamento_id: 13 },
    // Municipios de Guatemala
    { municipio_id: 208, municipio_nombre: 'Guatemala', departamento_id: 14 },
    { municipio_id: 209, municipio_nombre: 'Santa Catarina Pinula', departamento_id: 14 },
    { municipio_id: 210, municipio_nombre: 'San José Pinula', departamento_id: 14 },
    { municipio_id: 211, municipio_nombre: 'San José del Golfo', departamento_id: 14 },
    { municipio_id: 212, municipio_nombre: 'Palencia', departamento_id: 14 },
    { municipio_id: 213, municipio_nombre: 'Chinautla', departamento_id: 14 },
    { municipio_id: 214, municipio_nombre: 'San Pedro Ayampuc', departamento_id: 14 },
    { municipio_id: 215, municipio_nombre: 'Mixco', departamento_id: 14 },
    { municipio_id: 216, municipio_nombre: 'San Pedro Sacatepequez', departamento_id: 14 },
    { municipio_id: 217, municipio_nombre: 'San Juan Sacatepequez', departamento_id: 14 },
    { municipio_id: 218, municipio_nombre: 'San Raymundo', departamento_id: 14 },
    { municipio_id: 219, municipio_nombre: 'Chuarrancho', departamento_id: 14 },
    { municipio_id: 220, municipio_nombre: 'Fraijanes', departamento_id: 14 },
    { municipio_id: 221, municipio_nombre: 'Amatitlán', departamento_id: 14 },
    { municipio_id: 222, municipio_nombre: 'Villa Nueva', departamento_id: 14 },
    { municipio_id: 223, municipio_nombre: 'Villa Canales', departamento_id: 14 },
    { municipio_id: 224, municipio_nombre: 'San Miguel Petapa', departamento_id: 14 },
    // Municipios de Jalapa
    { municipio_id: 225, municipio_nombre: 'Jalapa', departamento_id: 15 },
    { municipio_id: 226, municipio_nombre: 'San Pedro Pinula', departamento_id: 15 },
    { municipio_id: 227, municipio_nombre: 'San Luis Jilotepeque', departamento_id: 15 },
    { municipio_id: 228, municipio_nombre: 'San Manuel Chaparrón', departamento_id: 15 },
    { municipio_id: 229, municipio_nombre: 'San Carlos Alzatate', departamento_id: 15 },
    { municipio_id: 230, municipio_nombre: 'Monjas', departamento_id: 15 },
    { municipio_id: 231, municipio_nombre: 'Mataquescuintla', departamento_id: 15 },
    // Municipios de Chimaltenangoo
    { municipio_id: 232, municipio_nombre: 'Chimaltenango', departamento_id: 16 },
    { municipio_id: 233, municipio_nombre: 'San José Poaquil', departamento_id: 16 },
    { municipio_id: 234, municipio_nombre: 'San Martín Jilotepeque', departamento_id: 16 },
    { municipio_id: 235, municipio_nombre: 'San Juan Comalapa', departamento_id: 16 },
    { municipio_id: 236, municipio_nombre: 'Santa Apolonia', departamento_id: 16 },
    { municipio_id: 237, municipio_nombre: 'Tecpán Guatemala', departamento_id: 16 },
    { municipio_id: 238, municipio_nombre: 'Patzun', departamento_id: 16 },
    { municipio_id: 239, municipio_nombre: 'San Miguel Pochuta', departamento_id: 16 },
    { municipio_id: 240, municipio_nombre: 'Patzicia', departamento_id: 16 },
    { municipio_id: 241, municipio_nombre: 'Santa Cruz Balanyá', departamento_id: 16 },
    { municipio_id: 242, municipio_nombre: 'Acatenango', departamento_id: 16 },
    { municipio_id: 243, municipio_nombre: 'San Pedro Yepocapa', departamento_id: 16 },
    { municipio_id: 244, municipio_nombre: 'San Andrés Itzapa', departamento_id: 16 },
    { municipio_id: 245, municipio_nombre: 'Parramos', departamento_id: 16 },
    { municipio_id: 246, municipio_nombre: 'Zaragoza', departamento_id: 16 },
    { municipio_id: 247, municipio_nombre: 'El Tejar', departamento_id: 16 },
    // Municipios de Quetzaltenango
    { municipio_id: 248, municipio_nombre: 'Quetzaltenango', departamento_id: 17 },
    { municipio_id: 249, municipio_nombre: 'Salcajá', departamento_id: 17 },
    { municipio_id: 250, municipio_nombre: 'Olintepeque', departamento_id: 17 },
    { municipio_id: 251, municipio_nombre: 'San Carlos Sija', departamento_id: 17 },
    { municipio_id: 252, municipio_nombre: 'Sibilia', departamento_id: 17 },
    { municipio_id: 253, municipio_nombre: 'Cabrican', departamento_id: 17 },
    { municipio_id: 254, municipio_nombre: 'Cajola', departamento_id: 17 },
    { municipio_id: 255, municipio_nombre: 'San Miguel Siguilça', departamento_id: 17 },
    { municipio_id: 256, municipio_nombre: 'San Juan Ostuncalco', departamento_id: 17 },
    { municipio_id: 257, municipio_nombre: 'San Mateo', departamento_id: 17 },
    { municipio_id: 258, municipio_nombre: 'Concepción Chiquirichapa', departamento_id: 17 },
    { municipio_id: 259, municipio_nombre: 'San Martín Sacatepequez', departamento_id: 17 },
    { municipio_id: 260, municipio_nombre: 'Almolonga', departamento_id: 17 },
    { municipio_id: 261, municipio_nombre: 'Cantel', departamento_id: 17 },
    { municipio_id: 262, municipio_nombre: 'Huitán', departamento_id: 17 },
    { municipio_id: 263, municipio_nombre: 'Zunil', departamento_id: 17 },
    { municipio_id: 264, municipio_nombre: 'Colomba', departamento_id: 17 },
    { municipio_id: 265, municipio_nombre: 'San Francisco La Unión', departamento_id: 17 },
    { municipio_id: 266, municipio_nombre: 'Coatepeque', departamento_id: 17 },
    { municipio_id: 267, municipio_nombre: 'Génova', departamento_id: 17 },
    { municipio_id: 268, municipio_nombre: 'Flores Costa Cuca', departamento_id: 17 },
    { municipio_id: 269, municipio_nombre: 'La Esperanza', departamento_id: 17 },
    { municipio_id: 270, municipio_nombre: 'Palestina de los Altos', departamento_id: 17 },
    // Municipios de El Progreso
    { municipio_id: 271, municipio_nombre: 'Guastatoya', departamento_id: 18 },
    { municipio_id: 272, municipio_nombre: 'Morazán', departamento_id: 18 },
    { municipio_id: 273, municipio_nombre: 'San Agustín Acasaguastlan', departamento_id: 18 },
    { municipio_id: 274, municipio_nombre: 'San Cristóbal Acasaguastla', departamento_id: 18 },
    { municipio_id: 275, municipio_nombre: 'El Jícaro', departamento_id: 18 },
    { municipio_id: 276, municipio_nombre: 'Sansare', departamento_id: 18 },
    { municipio_id: 277, municipio_nombre: 'Sanarate', departamento_id: 18 },
    { municipio_id: 278, municipio_nombre: 'San Antonio La Paz', departamento_id: 18 },
    // Municipios de Retalhuleu
    { municipio_id: 279, municipio_nombre: 'Retalhuelu', departamento_id: 19 },
    { municipio_id: 280, municipio_nombre: 'San Sebastián', departamento_id: 19 },
    { municipio_id: 281, municipio_nombre: 'Santa Cruz Mulúa', departamento_id: 19 },
    { municipio_id: 282, municipio_nombre: 'San Martín Zapotitlán', departamento_id: 19 },
    { municipio_id: 283, municipio_nombre: 'San Felipe Retalhuleu', departamento_id: 19 },
    { municipio_id: 284, municipio_nombre: 'San  Andrés Villa Seca', departamento_id: 19 },
    { municipio_id: 285, municipio_nombre: 'Champerico', departamento_id: 19 },
    { municipio_id: 286, municipio_nombre: 'Nuevo San Carlos', departamento_id: 19 },
    { municipio_id: 287, municipio_nombre: 'El Asintal', departamento_id: 19 },
    // Municipios de Sololá
    { municipio_id: 288, municipio_nombre: 'Sololá', departamento_id: 20 },
    { municipio_id: 289, municipio_nombre: 'San José Chacaya', departamento_id: 20 },
    { municipio_id: 290, municipio_nombre: 'Santa María Visitación', departamento_id: 20 },
    { municipio_id: 291, municipio_nombre: 'Santa Lucía Utatlán', departamento_id: 20 },
    { municipio_id: 292, municipio_nombre: 'Nahualá', departamento_id: 20 },
    { municipio_id: 293, municipio_nombre: 'Santa Catarina Ixtahuacán', departamento_id: 20 },
    { municipio_id: 294, municipio_nombre: 'Santa Clara La Laguna', departamento_id: 20 },
    { municipio_id: 295, municipio_nombre: 'Concepción', departamento_id: 20 },
    { municipio_id: 296, municipio_nombre: 'San Andrés Semetabaj', departamento_id: 20 },
    { municipio_id: 297, municipio_nombre: 'Panajachel', departamento_id: 20 },
    { municipio_id: 298, municipio_nombre: 'Santa Catarina Palopó', departamento_id: 20 },
    { municipio_id: 299, municipio_nombre: 'San Antonio Palopó', departamento_id: 20 },
    { municipio_id: 300, municipio_nombre: 'San Lucas Tolimán', departamento_id: 20 },
    { municipio_id: 301, municipio_nombre: 'Santa Cruz La Laguna', departamento_id: 20 },
    { municipio_id: 302, municipio_nombre: 'San Pablo La Laguna', departamento_id: 20 },
    { municipio_id: 303, municipio_nombre: 'San Marcos La Laguna', departamento_id: 20 },
    { municipio_id: 304, municipio_nombre: 'San Juan La Laguna', departamento_id: 20 },
    { municipio_id: 305, municipio_nombre: 'San Pedro La Laguna', departamento_id: 20 },
    { municipio_id: 306, municipio_nombre: 'Santiago Atitlán', departamento_id: 20 },
    // Municipios de Totonicapán
    { municipio_id: 307, municipio_nombre: 'Totonicapán', departamento_id: 21 },
    { municipio_id: 308, municipio_nombre: 'San Cristóbal Totonicapán', departamento_id: 21 },
    { municipio_id: 309, municipio_nombre: 'San Francisco El Alto', departamento_id: 21 },
    { municipio_id: 310, municipio_nombre: 'San Andrés Xecul', departamento_id: 21 },
    { municipio_id: 311, municipio_nombre: 'Momostenango', departamento_id: 21 },
    { municipio_id: 312, municipio_nombre: 'Santa María Chiquimula', departamento_id: 21 },
    { municipio_id: 313, municipio_nombre: 'Santa Lucía La Reforma', departamento_id: 21 },
    { municipio_id: 314, municipio_nombre: 'San Bartolo Aguas Calientes', departamento_id: 21 },
    // Municipios de Sacatepéquez
    { municipio_id: 315, municipio_nombre: 'Antigua Guatemala', departamento_id: 22 },
    { municipio_id: 316, municipio_nombre: 'Jocotenango', departamento_id: 22 },
    { municipio_id: 317, municipio_nombre: 'Pastores', departamento_id: 22 },
    { municipio_id: 318, municipio_nombre: 'Sumpango', departamento_id: 22 },
    { municipio_id: 319, municipio_nombre: 'Santo Domingo Xenacoj', departamento_id: 22 },
    { municipio_id: 320, municipio_nombre: 'Santiago Sacatepequez', departamento_id: 22 },
    { municipio_id: 321, municipio_nombre: 'San Bartolomé Milpas Altas', departamento_id: 22 },
    { municipio_id: 322, municipio_nombre: 'San Lucas Sacatepequez', departamento_id: 22 },
    { municipio_id: 323, municipio_nombre: 'Santa Lucía Milpas Altas', departamento_id: 22 },
    { municipio_id: 324, municipio_nombre: 'Magdalena Milpas Altas', departamento_id: 22 },
    { municipio_id: 325, municipio_nombre: 'Santa María de Jesús', departamento_id: 22 },
    { municipio_id: 326, municipio_nombre: 'Ciudad Vieja', departamento_id: 22 },
    { municipio_id: 327, municipio_nombre: 'San Miguel Dueñas', departamento_id: 22 },
    { municipio_id: 328, municipio_nombre: 'San Juan Alotenango', departamento_id: 22 },
    { municipio_id: 329, municipio_nombre: 'San Antonio Aguas Calientes', departamento_id: 22 },
    { municipio_id: 330, municipio_nombre: 'Santa Catarina Barahona', departamento_id: 22 }
]

var paises = [
    { pais_id: 1, pais_nombre: "Afganistán	" },
    { pais_id: 2, pais_nombre: "Albania" },
    { pais_id: 3, pais_nombre: "Alemania" },
    { pais_id: 4, pais_nombre: "Andorra" },
    { pais_id: 5, pais_nombre: "Angola	" },
    { pais_id: 6, pais_nombre: "Antigua y Barbuda" },
    { pais_id: 7, pais_nombre: "Arabia Saudita" },
    { pais_id: 8, pais_nombre: "Argelia" },
    { pais_id: 9, pais_nombre: "Argentina" },
    { pais_id: 10, pais_nombre: "Armenia" },
    { pais_id: 11, pais_nombre: "Australia" },
    { pais_id: 12, pais_nombre: "Austria" },
    { pais_id: 13, pais_nombre: "Azerbaiyán" },
    { pais_id: 14, pais_nombre: "Bahamas" },
    { pais_id: 15, pais_nombre: "Bangladés" },
    { pais_id: 16, pais_nombre: "Barbados" },
    { pais_id: 17, pais_nombre: "Baréin" },
    { pais_id: 18, pais_nombre: "Bélgica" },
    { pais_id: 19, pais_nombre: "Belice" },
    { pais_id: 20, pais_nombre: "Benín" },
    { pais_id: 21, pais_nombre: "Bielorrusia" },
    { pais_id: 22, pais_nombre: "Birmania" },
    { pais_id: 23, pais_nombre: "Bolivia" },
    { pais_id: 24, pais_nombre: "Bosnia y Herzegovina" },
    { pais_id: 25, pais_nombre: "Botsuana" },
    { pais_id: 26, pais_nombre: "Brasil" },
    { pais_id: 27, pais_nombre: "Brunéi" },
    { pais_id: 28, pais_nombre: "Bulgaria" },
    { pais_id: 29, pais_nombre: "Burkina Faso" },
    { pais_id: 30, pais_nombre: "Burundi" },
    { pais_id: 31, pais_nombre: "Bután" },
    { pais_id: 32, pais_nombre: "Cabo Verde" },
    { pais_id: 33, pais_nombre: "Camboya" },
    { pais_id: 34, pais_nombre: "Camerún" },
    { pais_id: 35, pais_nombre: "Canadá" },
    { pais_id: 36, pais_nombre: "Catar" },
    { pais_id: 37, pais_nombre: "Chad" },
    { pais_id: 38, pais_nombre: "Chile" },
    { pais_id: 39, pais_nombre: "China" },
    { pais_id: 40, pais_nombre: "Chipre" },
    { pais_id: 41, pais_nombre: "Ciudad del Vaticano" },
    { pais_id: 42, pais_nombre: "Colombia" },
    { pais_id: 43, pais_nombre: "Comoras" },
    { pais_id: 44, pais_nombre: "Corea del Norte" },
    { pais_id: 45, pais_nombre: "Corea del Sur" },
    { pais_id: 46, pais_nombre: "Costa de Marfil" },
    { pais_id: 47, pais_nombre: "Costa Rica" },
    { pais_id: 48, pais_nombre: "Croacia" },
    { pais_id: 49, pais_nombre: "Cuba" },
    { pais_id: 50, pais_nombre: "Dinamarca" },
    { pais_id: 51, pais_nombre: "Dominica" },
    { pais_id: 52, pais_nombre: "Ecuador" },
    { pais_id: 53, pais_nombre: "Egipto" },
    { pais_id: 54, pais_nombre: "El Salvador" },
    { pais_id: 55, pais_nombre: "Emiratos Árabes Unidos" },
    { pais_id: 56, pais_nombre: "Eritrea" },
    { pais_id: 57, pais_nombre: "Eslovaquia" },
    { pais_id: 58, pais_nombre: "Eslovenia" },
    { pais_id: 59, pais_nombre: "España" },
    { pais_id: 60, pais_nombre: "Estados Unidos" },
    { pais_id: 61, pais_nombre: "Estonia" },
    { pais_id: 62, pais_nombre: "Etiopía" },
    { pais_id: 63, pais_nombre: "Filipinas" },
    { pais_id: 64, pais_nombre: "Finlandia" },
    { pais_id: 65, pais_nombre: "Fiyi" },
    { pais_id: 66, pais_nombre: "Francia" },
    { pais_id: 67, pais_nombre: "Gabón" },
    { pais_id: 68, pais_nombre: "Gambia" },
    { pais_id: 69, pais_nombre: "Georgia" },
    { pais_id: 70, pais_nombre: "Ghana" },
    { pais_id: 71, pais_nombre: "Granada" },
    { pais_id: 72, pais_nombre: "Grecia" },
    { pais_id: 73, pais_nombre: "Guatemala" },
    { pais_id: 74, pais_nombre: "Guyana" },
    { pais_id: 75, pais_nombre: "Guinea" },
    { pais_id: 76, pais_nombre: "Guinea ecuatorial" },
    { pais_id: 77, pais_nombre: "Guinea-Bisáu" },
    { pais_id: 78, pais_nombre: "Haití" },
    { pais_id: 79, pais_nombre: "Honduras" },
    { pais_id: 80, pais_nombre: "Hungría" },
    { pais_id: 81, pais_nombre: "India" },
    { pais_id: 82, pais_nombre: "Indonesia" },
    { pais_id: 83, pais_nombre: "Irak" },
    { pais_id: 84, pais_nombre: "Irán" },
    { pais_id: 85, pais_nombre: "Irlanda" },
    { pais_id: 86, pais_nombre: "Islandia" },
    { pais_id: 87, pais_nombre: "Islas Marshall" },
    { pais_id: 88, pais_nombre: "Islas Salomón" },
    { pais_id: 89, pais_nombre: "Israel" },
    { pais_id: 90, pais_nombre: "Italia" },
    { pais_id: 91, pais_nombre: "Jamaica" },
    { pais_id: 92, pais_nombre: "Japón" },
    { pais_id: 93, pais_nombre: "Jordania" },
    { pais_id: 94, pais_nombre: "Kazajistán" },
    { pais_id: 95, pais_nombre: "Kenia" },
    { pais_id: 96, pais_nombre: "Kirguistán" },
    { pais_id: 97, pais_nombre: "Kiribati" },
    { pais_id: 98, pais_nombre: "Kuwait" },
    { pais_id: 99, pais_nombre: "Laos" },
    { pais_id: 100, pais_nombre: "Lesoto" },
    { pais_id: 101, pais_nombre: "Letonia" },
    { pais_id: 102, pais_nombre: "Líbano" },
    { pais_id: 103, pais_nombre: "Liberia" },
    { pais_id: 104, pais_nombre: "Libia" },
    { pais_id: 105, pais_nombre: "Liechtenstein" },
    { pais_id: 106, pais_nombre: "Lituania" },
    { pais_id: 107, pais_nombre: "Luxemburgo" },
    { pais_id: 108, pais_nombre: "Madagascar" },
    { pais_id: 109, pais_nombre: "Malasia" },
    { pais_id: 110, pais_nombre: "Malaui" },
    { pais_id: 111, pais_nombre: "Maldivas" },
    { pais_id: 112, pais_nombre: "Malí" },
    { pais_id: 113, pais_nombre: "Malta" },
    { pais_id: 114, pais_nombre: "Marruecos" },
    { pais_id: 115, pais_nombre: "Mauricio" },
    { pais_id: 116, pais_nombre: "Mauritania" },
    { pais_id: 117, pais_nombre: "México" },
    { pais_id: 118, pais_nombre: "Micronesia" },
    { pais_id: 119, pais_nombre: "Moldavia" },
    { pais_id: 120, pais_nombre: "Mónaco" },
    { pais_id: 121, pais_nombre: "Mongolia" },
    { pais_id: 122, pais_nombre: "Montenegro" },
    { pais_id: 123, pais_nombre: "Mozambique" },
    { pais_id: 124, pais_nombre: "Namibia" },
    { pais_id: 125, pais_nombre: "Nauru" },
    { pais_id: 126, pais_nombre: "Nepal" },
    { pais_id: 127, pais_nombre: "Nicaragua" },
    { pais_id: 128, pais_nombre: "Níger" },
    { pais_id: 129, pais_nombre: "Nigeria" },
    { pais_id: 130, pais_nombre: "Noruega" },
    { pais_id: 131, pais_nombre: "Nueva Zelanda" },
    { pais_id: 132, pais_nombre: "Omán" },
    { pais_id: 133, pais_nombre: "Países Bajos" },
    { pais_id: 134, pais_nombre: "Pakistán" },
    { pais_id: 135, pais_nombre: "Palaos" },
    { pais_id: 136, pais_nombre: "Panamá" },
    { pais_id: 137, pais_nombre: "Papúa Nueva Guinea" },
    { pais_id: 138, pais_nombre: "Paraguay" },
    { pais_id: 139, pais_nombre: "Perú" },
    { pais_id: 140, pais_nombre: "Polonia" },
    { pais_id: 141, pais_nombre: "Portugal" },
    { pais_id: 142, pais_nombre: "Reino Unido" },
    { pais_id: 143, pais_nombre: "República Centroafricana" },
    { pais_id: 144, pais_nombre: "República Checa" },
    { pais_id: 145, pais_nombre: "República de Macedonia" },
    { pais_id: 146, pais_nombre: "República del Congo" },
    { pais_id: 147, pais_nombre: "República Democrática del Congo" },
    { pais_id: 148, pais_nombre: "República Dominicana" },
    { pais_id: 149, pais_nombre: "República Sudafricana" },
    { pais_id: 150, pais_nombre: "Ruanda" },
    { pais_id: 151, pais_nombre: "Rumanía" },
    { pais_id: 152, pais_nombre: "Rusia" },
    { pais_id: 153, pais_nombre: "Samoa" },
    { pais_id: 154, pais_nombre: "San Cristóbal y Nieves" },
    { pais_id: 155, pais_nombre: "San Marino" },
    { pais_id: 156, pais_nombre: "San Vicente y las Granadinas" },
    { pais_id: 157, pais_nombre: "Santa Lucía" },
    { pais_id: 158, pais_nombre: "Santo Tomé y Príncipe" },
    { pais_id: 159, pais_nombre: "Senegal" },
    { pais_id: 160, pais_nombre: "Serbia" },
    { pais_id: 161, pais_nombre: "Seychelles" },
    { pais_id: 162, pais_nombre: "Sierra Leona" },
    { pais_id: 163, pais_nombre: "Singapur" },
    { pais_id: 164, pais_nombre: "Siria" },
    { pais_id: 165, pais_nombre: "Somalia" },
    { pais_id: 166, pais_nombre: "Sri Lanka" },
    { pais_id: 167, pais_nombre: "Suazilandia" },
    { pais_id: 168, pais_nombre: "Sudán" },
    { pais_id: 169, pais_nombre: "Sudán del Sur" },
    { pais_id: 170, pais_nombre: "Suecia" },
    { pais_id: 171, pais_nombre: "Suiza" },
    { pais_id: 172, pais_nombre: "Surinam" },
    { pais_id: 173, pais_nombre: "Tailandia" },
    { pais_id: 174, pais_nombre: "Tanzania" },
    { pais_id: 175, pais_nombre: "Tayikistán" },
    { pais_id: 176, pais_nombre: "Timor Oriental" },
    { pais_id: 177, pais_nombre: "Togo" },
    { pais_id: 178, pais_nombre: "Tonga" },
    { pais_id: 179, pais_nombre: "Trinidad y Tobago" },
    { pais_id: 180, pais_nombre: "Túnez" },
    { pais_id: 181, pais_nombre: "Turkmenistán" },
    { pais_id: 182, pais_nombre: "Turquía" },
    { pais_id: 183, pais_nombre: "Tuvalu" },
    { pais_id: 184, pais_nombre: "Ucrania" },
    { pais_id: 185, pais_nombre: "Uganda" },
    { pais_id: 186, pais_nombre: "Uruguay" },
    { pais_id: 187, pais_nombre: "Uzbekistán" },
    { pais_id: 188, pais_nombre: "Vanuatu" },
    { pais_id: 189, pais_nombre: "Venezuela" },
    { pais_id: 190, pais_nombre: "Vietnam" },
    { pais_id: 191, pais_nombre: "Yemen" },
    { pais_id: 192, pais_nombre: "Yibuti" },
    { pais_id: 193, pais_nombre: "Zambia" },
    { pais_id: 194, pais_nombre: "Zimbabue" },
]

/* VENTANA DE REGISTRO 
    -VALIDACIONES
*/

$(function () {
    // InsertarDepartamentos();
    // InsertarMunicipios();
    MostrarTemas();
    MostrarPrestamos(1);
    
    MostrarAutores();
    $("#tabla_0").show();
    $("#listado_0").show();
    // $(".tbl_libros").show()
    MostrarLibros();
    $(".fecha_ingreso").val(new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + (new Date().getFullYear()));
    $(".fecha_ingreso").prop("disabled", true);
    $("#ocultar_terminos").hide();
    toastr.info("Bienvenido");
    MostrarLibros(1)



    // $("#tb_insertar_tabla").html("")
})


// FUNCION QUE VALIDARA LOS CAMPOS DE TEXTO QUE EL USUARIO DEBERA INGRESAR
function Validaciones() {

    var nombre = $("#txt_nombre").val();
    var apellido = $("#txt_apellido").val();
    var direccion = $("#txt_direccion").val();
    var telefono = $("#txt_telefono").val();
    var contrasena = $("#txt_contrasena").val();
    var correo = $("#txt_correo").val();
    var contrasena_confirmar = $("#txt_confirmar_contrasena").val();
    var CUI = $("#txt_cui").val();
    var nacimiento_fecha = $("#txt_nacimiento").val();
    var genero = $("input:radio[name=rad_genero]:checked").val();
    var departamento = $("#slc_departamento").val();
    var municipio = $("#slc_municipio").val();
    var error = false;
    var mensaje = "";

    //validacio nombre
    if (nombre == "") {
        error = true;
        mensaje += "casilla nombre no puede estar vacia";
    } else {
        if (/^[a-zA-Z\s]+$/.test(nombre)) {
            mensaje += "\nNombre: " + nombre;
        } else {
            error = true;
            mensaje += "\nNombre solo puede contener letras"
        }
    }
    // validacion apellido
    if (apellido == "") {
        error = true;
        mensaje += "\ncasilla appellido no puede ir vacia";
    } else {
        if (/^[a-zA-Z\s]+$/.test(apellido)) {
            mensaje += "\nApellido: " + apellido;
        } else {
            error = true;
            mensaje += "\nApellido solo puede contener letras";
        }
    }

    // validacion direccion 
    if (direccion == "") {
        error = true;
        mensaje += "\ncasilla direccion no puede ir vacia";
    } else {
        if (/^[a-zA-Z0-9_\.\-\s]+$/.test(direccion)) {
            mensaje += "\nDireccion: " + direccion;
        } else {
            error = true;
            mensaje += "\ncasilla direccion no puede contener caracteres especiales";
        }
    }

    //validacion telefono
    if (telefono == "") {
        error = true;
        mensaje += "\ncasilla telefono no puede ir vacias";

    } else {
        if (telefono.length < 8) {
            error = true;
            mensaje += "\ntelefono debe tener 8 caracteres"
        } else {
            mensaje += "\nTelefono: " + telefono;
        }

    }

    //validacion correo
    var error_correo = false;
    var validar_correo = JSON.parse(localStorage.getItem("usuarios"))
    if (validar_correo && validar_correo.length > 0) {
        $.each(validar_correo, function (index, valor) {
            if (validar_correo[index].correo == correo) {
                error_correo = true;
            }

        });
        if (error_correo == true) {
            error = true;
            toastr.error("Este correo ya existe \npor favor inserta otro");
        } else {
            if (correo == "") {
                error = true;
                mensaje += "\nDebe de insertar un correo"
            } else {
                if (/^[a-zA-Z]+[a-z0-9A-Z\_\.\-]+@[a-z]{1,}\.[a-z0-9]{2,}$/.test(correo)) {
                    mensaje += "\nCorreo: " + correo;
                } else {
                    error = true;
                    mensaje += "\nCorreo invalido";
                }
            }
        }
    }
    console.log(error_correo);

    // validacion contrasena

    if (contrasena == "") {
        mensaje += '\nNo puede estar vacio contrasena';
        error = true;
    }
    else {
        if (!(contrasena.length >= 8)) {
            error = true;
            mensaje += "La contrasena debe tener 8 o mas digitos"
        }
        ValidarContrasena(contrasena, error, mensaje);
        error = ValidarContrasena(contrasena, error, mensaje)

    }

    // validacion contrasenas iguales
    if (contrasena_confirmar == contrasena && contrasena.length > 1) {
        mensaje += '\ncontrasenas correctas';

    } else {
        mensaje += '\nlas contrasenas no son iguales';
        error = true;
    }

    // validacion seleccion de genero

    if (!genero) {
        mensaje += "\nDebe seleccionar un genero";
        error = true;
    } else {
        if (genero == "1") {
            mensaje += "\nGenero: Masculino"
        } else {
            mensaje += "\nGenero: Femenino"
        }
    }

    // validacion nacimiento 
    if (nacimiento_fecha == "") {
        mensaje += "\nCasilla nacimiento no puede ir vacia";
        error = true;
    } else {
        if (/^[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4}$/.test(nacimiento_fecha)) {
            var validar_fecha = nacimiento_fecha.split("/")
            console.log(validar_fecha);
            var error_fecha = "";
            var contador_errores = 0;

            if (parseInt(validar_fecha[0]) > 31) {
                error_fecha += "\nEl dia no puede tener mas de 31";
                contador_errores += 1;

            }
            if (parseInt(validar_fecha[1]) > 12) {
                error_fecha += "\nEl mes no puede contener mas de 12";
                contador_errores += 1;

            }
            if (contador_errores == 0) {
                mensaje += "\nfecha valida";
            } else {
                toastr.warning(error_fecha)
            }
        } else {
            console.log('formato invalido');
        }
    }

    // validacion CUI

    if (CUI == "") {
        mensaje += "\nel cui no puede estar vacio";
        error = true;
    } else {
        if (CUI.length == 13) {
            mensaje += "\nCUI: " + CUI;
        } else {
            mensaje += "\nEl CUI debe tener 13 caracteres";
            error = true;
        }

    }

    if ($("#txt_zona").val() == "") {
        error = true;
        mensaje += "\nDebe de ingresar la zona";
    }

    if ($("#slc_escolaridad").val() > 0) {
        if ($("#txt_institucion").val() == "") {
            error = true;
            mensaje += "\nDebe de insertar institucion educativa para continuar";
        } else {
            toastr.info("institucion insertada");
        }
    }

    //validacion aceptar terminos
    var aceptar_terminos_chk = $("#chk_aceptar_terminos").prop("checked")
    if (aceptar_terminos_chk == true) {
        console.log("correcto");
    } else {
        toastr.warning("Debe aceptar los terminos y condiciones para continuar");
    }

    if (error) {
        alert(mensaje);
    } else {

        var numero_usuario = JSON.parse(localStorage.getItem("numero_usuario")) + 1;
        console.log(numero_usuario);

        if (numero_usuario < 2) {
            var usuarios = [];
        } else {
            var usuarios = JSON.parse(localStorage.getItem("usuarios"))
        }

        usuarios[numero_usuario - 1] = {};
        usuarios[numero_usuario - 1].prestamos = 0;
        usuarios[numero_usuario - 1].nombre = nombre;
        usuarios[numero_usuario - 1].apellido = apellido;
        usuarios[numero_usuario - 1].direccion = direccion;
        usuarios[numero_usuario - 1].telefono = telefono;
        usuarios[numero_usuario - 1].contrasena = contrasena;
        usuarios[numero_usuario - 1].validar_contrasena = contrasena_confirmar;
        usuarios[numero_usuario - 1].genero = genero;
        usuarios[numero_usuario - 1].fecha_de_nacimiento = nacimiento_fecha;
        usuarios[numero_usuario - 1].departamento = departamento
        usuarios[numero_usuario - 1].municipio = municipio;
        usuarios[numero_usuario - 1].cui = CUI;
        usuarios[numero_usuario - 1].correo = correo;
        usuarios[numero_usuario - 1].id = numero_usuario;
        usuarios[numero_usuario - 1].zona = $("#txt_zona").val();
        usuarios[numero_usuario - 1].estado = 1;
        let image = localStorage.getItem("imagen");
        usuarios[numero_usuario - 1].perfil = imagen;
        usuarios[numero_usuario - 1].escolaridad = $("#slc_escolaridad").val();
        if ($("#slc_escolaridad").val() > 0) {
            usuarios[numero_usuario - 1].instucion_educativa = $("#txt_institucion").val();
        }
        localStorage.setItem("numero_usuario", numero_usuario);
        var usuarios_str = JSON.stringify(usuarios);
        localStorage.setItem("usuarios", usuarios_str);

        console.log(usuarios);




        // limpiar campos de registro 
        $("#txt_nombre").val("");
        $("#txt_apellido").val("");
        $("#txt_direccion").val("");
        $("#txt_telefono").val("");
        $("#txt_contrasena").val("");
        $("#txt_confirmar_contrasena").val("");
        $("#txt_nacimiento").val("");
        $("#txt_correo").val("");
        $("#txt_cui").val("");
        console.log(localStorage.getItem("numero_usuario"));
        location.href = "biblioteca_login.html";
    }
}

let imagen = "";
function leerArchivo() {
    var inpute = document.getElementById("btn_insertar_foto");
    if (inpute.files.length > 0) {
        var archivo = inpute.files[0];
        console.log(archivo);
        var lector = new FileReader();
        lector.readAsDataURL(archivo);


        lector.addEventListener("load", function () {
            var img_result = this.result
            //document.getElementById("contenido-archivo").value = window.btoa(img_result);
            imagen = img_result;

        });

        // $(".eliminar").remove()
        const appContainer = document.getElementById('foto');
        const img = document.createElement('img');
        img.src = imagen;
        img.width = "150";
        appContainer.appendChild(img);

    }
}


/* Funcion que solo permitira el ingreso de numeros
    en las casillas necesarias bloqueando las letras
*/
function ValidarNumero(event, tipo) {
    var tecla = event.keyCode;
    switch (tipo) {
        case 0:
            if (tecla == 8) {
                return true;
            } else {
                var patron = /[0-9]/;

            }
            break;
        case 1:
            if (tecla == 8 || tecla == 32 || tecla == 11) {
                return true;
            } else {
                var patron = /[a-zA-Z]/
            }
            break;
    }

    var tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

// Funcion que validara la contrasena
function ValidarContrasena(_dato, error, mensaje) {
    $(".errores").remove();
    var verdad = 0;
    var contador_numeros = 0;
    var contador_minusculas = 0;
    var contador_mayusculas = 0;
    var contador_simbolos = 0;


    for (var i = 0; i < _dato.length; i++) {
        if (/[A-Z]/.test(_dato[i])) {
            contador_mayusculas += 1;
        }
        if (/[a-z]/.test(_dato[i])) {
            contador_minusculas += 1;
        }
        if (/[0-9]/.test(_dato[i])) {
            contador_numeros += 1;
        }
        if (/[\!\@\#\$\%\^\&\*\/\<\>\{\}\[\]]/.test(_dato[i])) {
            contador_simbolos += 1;
        }
    }



    if (contador_minusculas >= 2) {
        verdad = + 1;
    } else {
        $("#primera_columna").append('<br class="errores"><label class="errores">' + 'contrasena debe tener al menos 2 minusculas;' + '</label>');
        error = true;
    }

    if (contador_mayusculas >= 2) {
        verdad += 1;

    } else {
        $("#primera_columna").append('<br class="errores"><label class="errores">' + 'contrasena debe tener 2 mayusculas' + '</label>');
        error = true;
    }
    if (contador_numeros > 0) {
        verdad += 1;
    } else {
        $("#primera_columna").append('<br class="errores"><label class="errores">' + 'contrasena debe tener al menos 1 numero' + '</label>');
        error = true;
    }
    if (contador_simbolos > 0) {
        verdad += 1;
    } else {
        $("#primera_columna").append('<br class="errores"><label class="errores">' + 'contrasena debe tener al menos 1 simbolo' + '</label>');
        error = true;
    }
    if (verdad == 4) {
        $("#primera_columna").append('<br class="contrasena_valida"><label class="contrasena_valida">' +
            'contrasena valida'
            + '</label>');
        $(".contrasena_valida").fadeOut(6500);

    } else {
        return true;
    }

}


// Funciones que insertaran los departamentos y municipios en su orden correcto
function InsertarDepartamentos() {
    var departamento_insertar = "";

    $.each(departamentos, function (index, valor) {
        departamento_insertar += '<option value=' + departamentos[index].departamento_id + '>' + departamentos[index].departamento_nombre + ' </option>'
    });
    $("#slc_departamento").html(departamento_insertar);
}

function InsertarMunicipios() {
    var valor_departamentos = $("#slc_departamento").val()
    var municipios_insertar = "";

    $.each(municipios, function (index, valor) {
        if (valor_departamentos == valor.departamento_id) {
            municipios_insertar += '<option value=' + valor.municipio_id + '>' + valor.municipio_nombre + ' </option>'

        }
    });
    $("#slc_municipio").html(municipios_insertar);
}

function InsertarPais() {
    var pais = $("#slc_autor_nacionalidad").val();
    var insertar_pais = "";
    $.each(paises, function (index, valor) {
        insertar_pais += "<option id=" + paises[index].pais_id + ">" + paises[index].pais_nombre + "</option>"
    });
    $("#slc_autor_nacionalidad").append(insertar_pais);
}

// funcion que validara que el usuario llene todos los campos 
// y que valide si el usuario existe si el usuario existe validara que la contrasena sea la correcta

function LoginBiblioteca() {
    var error = 0;
    var usuario_cantidad = localStorage.getItem("numero_usuario");
    var usuario = JSON.parse(localStorage.getItem("usuarios"));
    if (usuario_cantidad != null) {
        $.each(usuario, function (index, valor) {
            console.log(usuario);
            if ($("#txt_correo").val().length > 0 && $("#txt_contrasena").val().length > 0) {
                if ($("#txt_correo").val() == valor.correo && $("#txt_contrasena").val() == valor.contrasena) {

                    var usuario_ingresado = index + 1;
                    location.href = "libros.html";
                    alert(valor.nombre + "\n" + usuario_ingresado);
                    console.log(usuario_cantidad);
                    var login_activo = JSON.parse(localStorage.setItem("Usuario Activo", usuario_ingresado));
                } else {
                    error += 1;
                }
                if (error == usuario_cantidad) {
                    alert("Datos Incorrectos");
                }
            } else {
                alert("Debe llenar todos los campos");
            };
        });

    } else {
        alert("registrese para continuar");
        location.href = "biblioteca.html"
    }
}

// funcion que ayudara a navegar entre los htmls
function Cambiar(_direccion) {
    location.href = _direccion + ".html"
}

// funcion que abrira y cerrara la ventana de los terminos en una ventana aparte
// llevando como parametro una accion que sera un numero, segun el numero abrira o cerrara la ventana
function AbrirTerminos(_accion) {
    if (_accion == 1) {
        window.open("terminos_condiciones.html");
    }
    else if (_accion == 2) {
        window.close("terminos_condiciones.html")

    }
}


// funcion que validara que la fecha que se ingresa sea correcta
// teniendo como parametro un _dato que este sera 1 o 2 depende 
// si es fecha de nacimiento o falleciemiento del autor
function ValidarFecha(_dato) {
    var error_fecha = 0;
    mensaje_error = "";
    if (_dato == 1) {
        if (!(/^[0-9]{1,2}$/.test($("#txt_dia_nacimiento_autor").val()) && $("#txt_dia_nacimiento_autor").val() < 32)) {
            error_fecha += 1;
            mensaje_error += "\nEl dia solo debe ser del 1 al 31";
        }
        if (!(/^[0-9]{1,2}$/.test($("#txt_mes_nacimiento_autor").val()) && $("#txt_mes_nacimiento_autor").val() <= 12)) {
            error_fecha += 1;
            mensaje_error += "\nEl mes solo debe ser del 1 al 12";
        }
        if (!(/^[0-9]{4,4}$/.test($("#txt_anio_nacimiento_autor").val()))) {
            error_fecha += 1;
            mensaje_error += "\nEl anio solo debe contener 4 digitos";
        }
        console.log(mensaje_error)
        if (error_fecha > 0) {
            return false;
        } else {
            return true;
        }
    }
    if (_dato == 2) {
        if (!(/^[1-9]{1,2}$/.test($("#txt_dia_fallecimiento_autor").val()) && $("#txt_dia_nacimiento_autor").val() < 32)) {
            error_fecha += 1;
            mensaje_error += "\nEl dia de fallecimiento solo debe ser del 1 al 31";
        }
        if (!(/^[1-9]{1,2}$/.test($("#txt_mes_fallecimiento_autor").val()) && $("#txt_mes_nacimiento_autor").val() <= 12)) {
            error_fecha += 1;
            mensaje_error += "\nEl mes de fallecimiento solo debe ser del 1 al 12";
        }
        if (!(/^[0-9]{4,4}$/.test($("#txt_anio_fallecimiento_autor").val()))) {
            error_fecha += 1;
            mensaje_error += "\nEl anio de fallecimiento solo debe contener 4 digitos";
        }
        console.log(mensaje_error)
        if (error_fecha > 0) {
            return false;
        } else {
            return true;
        }
    }
}

/*  funcion que insertara los autores que ya estan ingresados en el select 
    del html libros para asi poder seleccionarlos 
    se les dara un id a cada autor para poder insertarlo en las propiedades del
    objeto de libros 
*/
function InsertarAutores() {
    var autores = JSON.parse(localStorage.getItem("autores"));
    $("#slc_autor").html("")
    if (autores && autores.length > 0) {
        $.each(autores, function (index, valor) {
            $("#slc_autor").append("<option value=" + valor.autor_id + ">" + valor.nombre + "</option>");
        });

    }
}

// funcion que insertara los temas que ya estan ingresados en el select del html 
// libros disponibles para asi poder seleccionarlos
function InsertarTemas() {
    var temas = JSON.parse(localStorage.getItem("temas"));
    $("#slc_tema").html("");
    if (temas && temas.length > 0) {
        $.each(temas, function (index, valor) {
            $("#slc_tema").append("<option value=" + temas[index].tema_id + ">" + temas[index].nombre_tema + "</option>");
        });

    }
}

// funciones que con el arreglo de temas creara y armara un tabla 
// para poder mostrarla en el html correspondiente 

function MostrarTemas() {
    var temas = JSON.parse(localStorage.getItem("temas"));
    var tabla = "";
    var filas = 4;
    contador_paginas = 0;
    if (temas && temas.length > 0) {
        console.log("si entro prro");


        $.each(temas, function (index, valor) {
            if (index % filas == 0) { // esta operacion creara el inicio de la tabla depende el numero de filas que se desean mostrar
                tabla += "<table border='1' id='tabla_" + contador_paginas + "' class='tbl_temas listado'>"

                principio = index + 1;
                console.log(principio);
                console.log("si entro prro x2");
            }
            // despues se insertaran filas a la tabla segun los temas ingresados y filas determindadas
            tabla += "<tr>" +
                "<td class='numero'>" + (index + 1) + "</td>" +
                "<td class='nombre'>" + valor.nombre_tema + "</td>" +
                "<td class='fecha'>" + valor.ingreso_tema + "</td>" +
                "<td class='operaciones'>&#160<a href='javascript:Editar(2, " + index + ")'>editar</a> &#160 &#160<a href='javascript:Eliminar(1, " + index + ")'>eliminar</a></td>" +
                "</tr>";
            // para cerrar la etiqueta de la tabla se hara un operacion segun las filas y el tamano del arreglo de temas y se cerrara la tabla
            if (index % filas == filas - 1 || index == temas.length - 1) {
                tabla += "</table>";
                $("#div_botones_ingresar_temas").append("<label class='listado' id='listado_" + (contador_paginas) + "'>" +
                    "del " + principio +
                    " al " + (index + 1) +
                    " de " + temas.length +
                    "</label>");
                contador_paginas += 1;
            }

        });
        $("#div_tabla_temas").html(tabla)
    }
}


function MostrarLibros(_pagina) {
    var libros = JSON.parse(localStorage.getItem("libros"));
    var autores = JSON.parse(localStorage.getItem("autores"));
    var temas = JSON.parse(localStorage.getItem("temas"));
    $("#tb_insertar_tabla").html("")
    var autor_nombre = "";
    var tema_nombre = "";
    var tabla = "";
    var filas = 5;

    const inicio = (_pagina * filas) - filas;
    const final = (_pagina * filas);

    var filtro = FiltrarLibros();
    console.log(FiltrarLibros())

    if (libros && libros.length > 0) {
        $.each(filtro, function (index, valor) {
            // console.log("entra")
            $.each(autores, function (indice_autor, autor) {
                if (autor.autor_id == libros[index].autor_id) {
                    autor_nombre = autor.nombre;
                }
                $.each(temas, function (indice_tema, tema) {
                    if (tema.tema_id == libros[index].tema_libro) {
                        tema_nombre = tema.nombre_tema;
                    }
                })

            });
            if (index >= inicio && index < final) {
                tabla += "<tr>" +
                    "<td>" + (index + 1) + "</td>" +
                    "<td>" + libros[index].titulo + "</td>" +
                    "<td>" + autor_nombre + "</td>" +
                    "<td>" + tema_nombre + "</td>" +
                    "<td>" + libros[index].ubicacion + "</td>" +
                    "<td>" + libros[index].disponibles + "</td>"
                if (libros[index].disponibles > 0) {
                    tabla += "<td class='operaciones_libro libro_operacion'>&#160 &#160<a href='javascript:PrestarLibro(" + valor.id_libro + ")'>Prestar</a></td>" +
                        "</tr>";
                } else {
                    tabla += "<td class='operaciones_libro libro_operacion'>no disponible</td>" +
                        "</tr>";
                }
            }


        });

        $("#tb_insertar_tabla").html(tabla);
        console.log("tabla");
        const regresar = `<input type="button" value="Anterior" 
                            ${inicio > 0 ? `onclick="MostrarLibros('',${_pagina - 1})"` : ''}
                            class="siguiente">`;
        const siguiente = `<input type="button" value="Siguiente" 
                            ${final < libros.length ? `onclick="MostrarLibros('',${_pagina + 1})"` : ''}
                            class="siguiente">`;
        $("#botones_libros").html(regresar + siguiente);
    } else {
        console.log("Aun no hay ningun libro ingresado");
    }
}

function MostrarAutores() {
    var autor = JSON.parse(localStorage.getItem("autores"));
    var tabla = "";
    var filas = 4;
    contador_paginas_autor = 0;
    if (autor && autor.length > 0) {
        $.each(autor, function (index, valor) {
            if (index % filas == 0) {
                tabla += "<table border='1' id='tabla_" + contador_paginas_autor + "' class='tbl_autores listado' >"
                principio_autor = index + 1;
            }
            tabla += "<tr>" +
                "<td class='autor_numero'>" + (index + 1) + "</td>" +
                "<td class='nombre_autor' style='width:23.5%'>" + valor.nombre + "</td>" +
                "<td class='apellido_autor' style='width:17.6%'>" + valor.apellido + "</td>" +
                "<td class='nacionalidad_autor' style='width:17.7%'>" + valor.nacionalidad + "</td>" +
                "<td class='ingreso_autor' style='width:17.5%'>" + valor.nacimiento + "</td>" +
                "<td class='operaciones_autor' style='width:17.3%'>&#160<a href='javascript:Editar(3, " + index + ")'>editar</a> &#160 &#160<a href='javascript:Eliminar(2, " + index + ")'>eliminar</href></td>" +
                "</tr>";
            if (index % filas == filas - 1 || index == autor.length - 1) {
                tabla += "</table>";
                $("#div_botones_ingresar_autor").append("<label class='listado' id='listado_" + (contador_paginas_autor) + "'>" +
                    "del " + principio_autor +
                    " al " + (index + 1) +
                    " de " + autor.length +
                    "</label>");
                contador_paginas_autor += 1;
            }
        });
        $("#div_tabla_autores").html(tabla);
    }
}

// g

// funcion que reiniciara una variable guardada en almacenamiento local para cuando el usuario
// presione el boton salir 
// y asi no pueda acceder a ninguna otra ventana hasta loguarse
function Salir() {
    var usuario_login = localStorage.getItem("Usuario Activo");

    if (usuario_login > 0) {
        usuario_login = 0;
        localStorage.setItem("Usuario Activo", usuario_login);
        location.href = "biblioteca_login.html";
    }
    console.log(usuario_login)
}

function PrestarLibro(_posicion_libro) {
    localStorage.setItem("libro id", _posicion_libro);
    location.href = "biblioteca_prestar_libro.html"
}

function ConfirmarPrestamo() {
    var libros = JSON.parse(localStorage.getItem("libros"))
    var codigo = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "m",
        "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3",
        "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H",
        "J", "K", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
        "Z"];
    var nuevo_codigo = "";
    var posicion_prestamo = 0;
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    var extraer_prestamos = JSON.parse(localStorage.getItem("prestamos"));

    let pos_usuario = parseInt(localStorage.getItem("Usuario Activo"));
    console.log(pos_usuario);

    if (!(libros[pos_usuario - 1].disponibles > 0)) {
        for (var i = 0; i < 15; i++) {
            var numero = Math.floor(Math.random() * 55)
            nuevo_codigo += codigo[numero]
        }
        var token_repetido = false;



        if (usuarios[pos_usuario - 1].prestamos < limites[0]) {
            if (prestamos != null) {
                $.each(extraer_prestamos, function (index, prestamo) {
                    if (prestamo.token == nuevo_codigo) {
                        token_repetido = true;
                    }
                })
            }

            if (token_repetido) {
                for (var i = 0; i < 15; i++) {
                    var numero = Math.floor(Math.random() * 62)
                    nuevo_codigo += codigo[numero]
                }
            }


            let limites = JSON.parse(localStorage.getItem("limites"));
            var numero_prestamo = JSON.parse(localStorage.getItem("prestamo id")) + 1;
            //var numero_posicion_libro = JSON.parse(localStorage.getItem("posicion_libro")) + 1;
            if (numero_prestamo < 2) {
                var prestamos = [];
            } else {
                var prestamos = JSON.parse(localStorage.getItem("prestamos"));
            }

            let titulo = $("#titulo_prestamo").html();
            $.each(libros, function (index, libro) {
                if (titulo == libro.titulo) {
                    libro_id = libro.id_libro;
                    posicion_pres = index;
                }
            });

            var usuario_activo = parseInt(localStorage.getItem("Usuario Activo"));
            console.log(usuario_activo)
            prestamos[numero_prestamo - 1] = {};
            prestamos[numero_prestamo - 1].prestamo_id = numero_prestamo;
            prestamos[numero_prestamo - 1].libro_id = libro_id;
            prestamos[numero_prestamo - 1].usuario_id = usuario_activo;
            prestamos[numero_prestamo - 1].fecha_prestamo = $("#fecha_prestamo").html();
            prestamos[numero_prestamo - 1].fecha_devolucion = $("#fecha_devolucion").html();
            prestamos[numero_prestamo - 1].estado = 1;
            prestamos[numero_prestamo - 1].token = nuevo_codigo;
            $.each(usuarios, function (index, usuario) {
                if (usuario.id == usuario_activo) {
                    posicion_prestamo = index
                }
            })
            console.log(posicion_prestamo);

            libros[posicion_pres].disponibles -= 1;
            var libros_str = JSON.stringify(libros);
            localStorage.setItem("libros", libros_str);

            usuarios[posicion_prestamo].prestamos += 1;
            let usuarios_str = JSON.stringify(usuarios);
            localStorage.setItem("usuarios", usuarios_str);

            localStorage.setItem("prestamo id", numero_prestamo);
            var prestamos_str = JSON.stringify(prestamos);
            localStorage.setItem("prestamos", prestamos_str);
            //location.href = "libros.html"

        }
        else {
            alert("llego a su limite de prestamos")
        }
    } else {
        toastr.warning("No hay mas unidades disponibles de este libros");
    }
}



function FiltrarLibros(_tipo) {
    var libros = JSON.parse(localStorage.getItem("libros"));
    var autores = JSON.parse(localStorage.getItem("autores"));
    var temas = JSON.parse(localStorage.getItem("temas"));

    console.log($("#slc_buscar_libro").val());

    switch (parseInt($("#slc_buscar_libro").val())) {
        case 1:
            var lista = libros.filter(function (value) {
                let titulo = value.titulo;
                let titulo_buscar = $("#txt_buscar_libro").val();
                return titulo.indexOf(titulo_buscar) > -1;
            })
            break;
        case 2:
            var lista = autores.filter(function (value) {
                let nombre = value.nombre;
                console.log(nombre)
                let nombre_buscar = $("#txt_buscar_libro").val();
                return nombre.indexOf(nombre_buscar) > -1 ;
            })
            break;
    }
    return lista;
}



function MostrarPrestamos(_pagina) {

    var libros = JSON.parse(localStorage.getItem("libros"));
    var autores = JSON.parse(localStorage.getItem("autores"));
    var temas = JSON.parse(localStorage.getItem("temas"));
    var prestamos = JSON.parse(localStorage.getItem("prestamos"));
    var num_usuario = JSON.parse(localStorage.getItem("Usuario Activo"));
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    let autor_nombre = "";
    let tema_nombre = "";
    let posicion_libro = "";
    let filas = 10;
    var tabla = "";
    const inicio = (_pagina * filas) - filas;
    const final = (_pagina * filas);

    let list = prestamos.filter(valor => num_usuario == valor.usuario_id);

    if (prestamos && prestamos.length > 0) {
        $.each(list, function (index, prestamo) {
            $.each(libros, function (index, libro) {
                if (libro.id_libro == prestamo.libro_id) {
                    posicion_libro = libro.titulo;
                    $.each(autores, function (index, autor) {
                        if (libro.autor_id == autor.autor_id) {
                            autor_nombre = autor.nombre;
                        }
                    });
                    $.each(temas, function (index, tema) {
                        if (tema.tema_id == libro.tema_libro) {
                            tema_nombre = tema.nombre_tema;
                        }
                    });
                }
            });

            if (index >= inicio && index < final) {
                tabla += `<tr>
                                    <td>${index + 1}</td>
                                    <td>${prestamo.token}</td>
                                    <td>${posicion_libro}</td>
                                    <td>${autor_nombre}</td>
                                    <td>${tema_nombre}</td>
                                    <td>${prestamo.fecha_prestamo}</td>
                                    <td>${prestamo.fecha_devolucion}</td>            
                                `
                if (prestamo.estado == 1) {
                    tabla += `  <td style='color: blue'>Prestado</td>
                                    </tr>`
                }
                if (prestamo.estado == 2) {
                    tabla += `  <td style='color: red'>Mora</td>
                                    </tr>`
                }
                if (prestamo.estado == 3) {
                    tabla += `<td style='color: green'>Devuelto</td>
                                    </tr>`
                }
                if (prestamo.estado == 4) {
                    tabla += `  <td>Devuelto con Mora</td>
                                    </tr>`
                }
            }


        })

        $("#tbl_prestamos_realizados").html(tabla);

    }
}









