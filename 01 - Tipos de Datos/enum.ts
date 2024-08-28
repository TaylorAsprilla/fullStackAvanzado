// En TypeScript, los enums son una característica que permite definir un conjunto de nombres asociados a valores específicos.
// Puedes utilizar enums para representar conjuntos fijos de valores constantes de una manera más legible y mantenible. 

enum DiaSemana {
    LUNES = 1,
    MARTES = 2,
    MIERCOLES = 3,
    JUEVES = 4,
    VIERNES = 5,
    SABADO = 6,
    DOMINGO = 7
}

enum PuntoCardinal {
    NORTE = 'Norte',
    SUR = 'Sur',
    ESTE = 'Este',
    OESTE = 'Oeste'
}

enum EstadoPedido {
    PENDIENTE = 'Pedido Pendiente',
    EN_PROCESO = 'En Proceso',
    COMPLETADO = 'Pedido Completado'
}

enum NotaMusical {
    DO = 1,
    RE = 2,
    MI = 3,
    FA = 4,
    SOL = 5,
    LA = 6,
    SI = 7
}

enum ColorArcoiris {
    ROJO = '#FF0000',
    NARANJA = '#FFA500',
    AMARILLO = '#FFFF00',
    VERDE = '#008000',
    AZUL = '#0000FF',
    INDIGO = '#4B0082',
    VIOLETA = '#EE82EE'
}

enum CategoriaProducto {
    ELECTRONICA = 'Electrónica',
    ROPA = 'Ropa',
    ALIMENTOS = 'Alimentos',
    HOGAR = 'Hogar'
}

enum NavegadorWeb {
    CHROME = 'Google Chrome',
    FIREFOX = 'Mozilla Firefox',
    EDGE = 'Microsoft Edge',
    SAFARI = 'Safari'
}
