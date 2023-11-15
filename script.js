function obtenerDensidadMaterial(material) {
    switch (material) {
        case 'pla':
            return 1.24;
        case 'abs':
            return 1.04;
        case 'tpu':
            return 1.21;
        case 'petg':
            return 1.27;
        default:
            return 1.0;
    }
}

function mostrarCarga() {
    document.getElementById('loader').style.display = 'flex';
    iniciarBarraDeCarga();
}

function ocultarCarga() {
    document.getElementById('loader').style.display = 'none';
}

function calcularFilamento() {
    mostrarCarga();

    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const material = document.getElementById('material').value;

    const volume = length * width * height;
    const density = obtenerDensidadMaterial(material);
    const filamentAmount = volume * density;

    setTimeout(() => {
        ocultarCarga();
        document.getElementById('result').innerHTML = `Cantidad de filamento necesaria: ${filamentAmount.toFixed(2)} gramos`;
    }, 2000);
}

function iniciarBarraDeCarga() {
    const barraDeCarga = document.getElementById('barraDeCarga');
    let porcentaje = 0;

    const intervalo = setInterval(() => {
        porcentaje += 1;
        barraDeCarga.style.width = porcentaje + '%';

        if (porcentaje >= 100) {
            clearInterval(intervalo);
        }
    }, 20); // Ajusta la velocidad de la barra de carga según sea necesario
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarCarga();

    setTimeout(() => {
        ocultarCarga();
    }, 2000);
});
// ... (código existente) ...

function seleccionarImpresora(tipo) {
    ocultarCarga();

    if (tipo === 'filamento') {
        document.getElementById('filamentoCalculadora').style.display = 'block';
        document.getElementById('resinaCalculadora').style.display = 'none';
    } else if (tipo === 'resina') {
        document.getElementById('resinaCalculadora').style.display = 'block';
        document.getElementById('filamentoCalculadora').style.display = 'none';
    }
}

// ... (resto del código) ...
// ... (código existente) ...

function calcularResina() {
    mostrarCarga();

    const resinType = document.getElementById('resinType').value;
    const layerHeight = parseFloat(document.getElementById('layerHeight').value);
    const printVolume = parseFloat(document.getElementById('printVolume').value);

    // Lógica de cálculo específica para la impresora de resina
    const resinAmount = calcularCantidadResina(resinType, layerHeight, printVolume);

    setTimeout(() => {
        ocultarCarga();
        document.getElementById('result').innerHTML = `Cantidad de resina necesaria: ${resinAmount.toFixed(2)} ml`;
    }, 2000);
}

function calcularCantidadResina(type, height, volume) {
    // Lógica de cálculo específica para la impresora de resina
    // Aquí puedes agregar fórmulas o lógica según las características de tu impresora
    let factor = 1.0;

    if (type === 'flexible') {
        factor = 1.2; // Por ejemplo, un 20% más para resinas flexibles
    }

    return height * volume * factor;
}

// ... (resto del código) ...
// ... (código existente) ...

function calcularResina() {
    mostrarCarga();

    const resinType = document.getElementById('resinType').value;
    const layerHeight = parseFloat(document.getElementById('layerHeight').value);
    const printVolume = parseFloat(document.getElementById('printVolume').value);

    // Lógica de cálculo específica para la impresora de resina
    const resinAmount = calcularCantidadResina(resinType, layerHeight, printVolume);

    setTimeout(() => {
        ocultarCarga();
        document.getElementById('result').innerHTML = `Cantidad de resina necesaria: ${resinAmount.toFixed(2)} ml`;
    }, 2000);
}

function calcularCantidadResina(type, height, volume) {
    // Lógica de cálculo específica para la impresora de resina
    let factor = 1.0;

    if (type === 'flexible') {
        factor = 1.2; // Por ejemplo, un 20% más para resinas flexibles
    }

    // Fórmula de cálculo de resina (ejemplo)
    const resinAmount = height * volume * factor;

    return resinAmount;
}

// ... (resto del código) ...
