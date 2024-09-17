function encontrarNumeros(listaNumeros, consulta) {
    let masBajo = "X"; // más alto que sea inferior
    let masAlto = "X"; // más bajo que sea superior

    for (let num of listaNumeros) {
        if (num < consulta) masBajo = num; // encontrar el mayor inferior
        if (num > consulta && masAlto === "X") {
            masAlto = num; // encontrar el menor superior
            break;
        }
    }
    return `${masBajo} ${masAlto}`;
}

function procesarConsultas() {
    const tamaño = parseInt(document.getElementById('tamaño').value);
    const numeros = document.getElementById('numeros').value.split(" ").map(Number);
    const numConsultas = parseInt(document.getElementById('numConsultas').value);
    const listConsulta = document.getElementById('listConsulta').value.split(" ").map(Number);

    const resultados = listConsulta.map(consulta => encontrarNumeros(numeros, consulta)).join('\n');
    document.getElementById('resultado').textContent = resultados;
}
