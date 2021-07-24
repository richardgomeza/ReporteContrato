// eslint-disable-next-line
const modelo = [{
    id: "1",
    contrato: "Nombre",
    proyecto: "Proyecto al que pertenece",
    inicio: "Fecha desde la que es vigente",
    fin: "Fecha de finalización del contrato",
    cantidades: [ // Detalles del contrato, pueden ser mas de una
      {
        item: "id",
        descripción: "Acción que se realiza",
        unidad: "Unidad de medida",
        cantidad: "Cuanto fue necesario del item",
        unitario: "Valor unitario del item"
      }
      // ,{ // Ejemplo de más cantidades
      //   item: "id",
      //   descripción: "Acción que se realiza",
      //   unidad: "Unidad de medida",
      //   cantidad: "Cuanto fue necesario del item",
      //   unitario: "Valor unitario del item"
      // }
    ]},
    { 
      id: "2",
      contrato: "Obras Civiles",
      proyecto: "Edificio Milenio III",
      inicio: "21 julio 2021",
      fin: "21 julio 2022",
      cantidades: [ // Detalles del contrato, pueden ser mas de una
        {
          item: "id",
          descripción: "Acción que se realiza",
          unidad: "Unidad de medida",
          cantidad: "Cuanto fue necesario del item",
          unitario: "Valor unitario del item"
        }
        // ,{ // Ejemplo de más cantidades
        //   item: "id",
        //   descripción: "Acción que se realiza",
        //   unidad: "Unidad de medida",
        //   cantidad: "Cuanto fue necesario del item",
        //   unitario: "Valor unitario del item"
        // }
      ]
    },
    {
      id:"3",
      contrato: "Instalaciones Electricas",
      proyecto: "Edificio Milenio III",
      inicio: "21 julio 2021",
      fin: "21 julio 2022",
      cantidades: [ // Detalles del contrato, pueden ser mas de una
        {
          item: "id",
          descripción: "Acción que se realiza",
          unidad: "Unidad de medida",
          cantidad: "Cuanto fue necesario del item",
          unitario: "Valor unitario del item"
        }
        // ,{ // Ejemplo de más cantidades
        //   item: "id",
        //   descripción: "Acción que se realiza",
        //   unidad: "Unidad de medida",
        //   cantidad: "Cuanto fue necesario del item",
        //   unitario: "Valor unitario del item"
        // }
      ]
    },
    {
      id: "4",
      contrato: "Obras Mecánica",
      proyecto: "Edificio Milenio III",
      inicio: "21 julio 2021",
      fin: "21 julio 2022",
      cantidades: [ // Detalles del contrato, pueden ser mas de una
        {
          item: "id",
          descripción: "Acción que se realiza",
          unidad: "Unidad de medida",
          cantidad: "Cuanto fue necesario del item",
          unitario: "Valor unitario del item"
        }
        // ,{ // Ejemplo de más cantidades
        //   item: "id",
        //   descripción: "Acción que se realiza",
        //   unidad: "Unidad de medida",
        //   cantidad: "Cuanto fue necesario del item",
        //   unitario: "Valor unitario del item"
        // }
      ]
    }
  ];

export default modelo