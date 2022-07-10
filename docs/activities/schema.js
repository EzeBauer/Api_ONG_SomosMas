module.exports = {
  Activities: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of activity',
        example: 'Apoyo escolar: Primario',
        required: true
      },
      content: {
        type: 'string',
        description: 'Activity content',
        example: 'Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno',
        required: true
      },
      image: {
        type: 'string',
        descrption: 'Image file for activity',
        example: 'https://cohorte-enero-835eb560.s3.amazonaws.com/4206d564-4918-4529-947c-4c11ef84005f.jpg',
        format: 'binary'
      }
    }
  }
}
