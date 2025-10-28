self.onmessage = async (e) => {
    if (e.data.action === 'process') {
        self.postMessage({ status: 'start', message: '[Worker] Iniciando obtención y procesamiento de datos.' });

        // 1. Obtener los datos (incluidos aquí para simplicidad)
        const irisData = await fetchIrisData();
        self.postMessage({ status: 'data_loaded', message: `[Worker] ${irisData.length} registros de datos cargados.` });

        // 2. Mezclar los datos
        irisData.sort(() => Math.random() - 0.5);

        // 3. Separar características (features) y etiquetas (labels)
        const features = irisData.map(d => [d.sepal_length, d.sepal_width, d.petal_length, d.petal_width]);
        const labels = irisData.map(d => {
            if (d.species === 'setosa') return 0;
            if (d.species === 'versicolor') return 1;
            return 2; // virginica
        });

        // 4. Normalización Min-Max para las características
        const { normalizedFeatures, min, max } = normalize(features);
        self.postMessage({ status: 'processing', message: '[Worker] Datos normalizados.' });

        // 5. One-Hot Encode para las etiquetas
        const oneHotLabels = toOneHot(labels, 3);
        self.postMessage({ status: 'processing', message: '[Worker] Etiquetas convertidas a One-Hot.' });

        // 6. Dividir en conjuntos de entrenamiento y prueba (80/20)
        const splitIndex = Math.floor(irisData.length * 0.8);
        const trainFeatures = normalizedFeatures.slice(0, splitIndex);
        const trainLabels = oneHotLabels.slice(0, splitIndex);
        const testFeatures = normalizedFeatures.slice(splitIndex);
        const testLabels = oneHotLabels.slice(splitIndex);
        const testRawLabels = labels.slice(splitIndex);

        self.postMessage({ 
            status: 'complete', 
            message: '[Worker] Procesamiento completado.',
            payload: {
                trainFeatures, trainLabels, testFeatures, testLabels, testRawLabels,
                normalizationData: { min, max },
                originalData: irisData
            }
        });
    }
};

function normalize(data) {
    const numCols = data[0].length;
    const min = Array(numCols).fill(Infinity);
    const max = Array(numCols).fill(-Infinity);

    for (const row of data) {
        for (let i = 0; i < numCols; i++) {
            if (row[i] < min[i]) min[i] = row[i];
            if (row[i] > max[i]) max[i] = row[i];
        }
    }

    const normalized = data.map(row => 
        row.map((val, i) => (val - min[i]) / (max[i] - min[i]))
    );

    return { normalizedFeatures: normalized, min, max };
}

function toOneHot(labels, numClasses) {
    return labels.map(label => {
        const arr = Array(numClasses).fill(0);
        arr[label] = 1;
        return arr;
    });
}

// Simula una llamada fetch para obtener los datos. En un caso real, esto sería una URL.
async function fetchIrisData() {
    // Datos de Iris incrustados para evitar problemas de CORS al abrir como archivo local
    return [
      { "sepal_length": 5.1, "sepal_width": 3.5, "petal_length": 1.4, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.9, "sepal_width": 3.0, "petal_length": 1.4, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.7, "sepal_width": 3.2, "petal_length": 1.3, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.6, "sepal_width": 3.1, "petal_length": 1.5, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.0, "sepal_width": 3.6, "petal_length": 1.4, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.4, "sepal_width": 3.9, "petal_length": 1.7, "petal_width": 0.4, "species": "setosa" },
      { "sepal_length": 4.6, "sepal_width": 3.4, "petal_length": 1.4, "petal_width": 0.3, "species": "setosa" },
      { "sepal_length": 5.0, "sepal_width": 3.4, "petal_length": 1.5, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.4, "sepal_width": 2.9, "petal_length": 1.4, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.9, "sepal_width": 3.1, "petal_length": 1.5, "petal_width": 0.1, "species": "setosa" },
      { "sepal_length": 5.4, "sepal_width": 3.7, "petal_length": 1.5, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.8, "sepal_width": 3.4, "petal_length": 1.6, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.8, "sepal_width": 3.0, "petal_length": 1.4, "petal_width": 0.1, "species": "setosa" },
      { "sepal_length": 4.3, "sepal_width": 3.0, "petal_length": 1.1, "petal_width": 0.1, "species": "setosa" },
      { "sepal_length": 5.8, "sepal_width": 4.0, "petal_length": 1.2, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.7, "sepal_width": 4.4, "petal_length": 1.5, "petal_width": 0.4, "species": "setosa" },
      { "sepal_length": 5.4, "sepal_width": 3.9, "petal_length": 1.3, "petal_width": 0.4, "species": "setosa" },
      { "sepal_length": 5.1, "sepal_width": 3.5, "petal_length": 1.4, "petal_width": 0.3, "species": "setosa" },
      { "sepal_length": 5.7, "sepal_width": 3.8, "petal_length": 1.7, "petal_width": 0.3, "species": "setosa" },
      { "sepal_length": 5.1, "sepal_width": 3.8, "petal_length": 1.5, "petal_width": 0.3, "species": "setosa" },
      { "sepal_length": 5.4, "sepal_width": 3.4, "petal_length": 1.7, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.1, "sepal_width": 3.7, "petal_length": 1.5, "petal_width": 0.4, "species": "setosa" },
      { "sepal_length": 4.6, "sepal_width": 3.6, "petal_length": 1.0, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.1, "sepal_width": 3.3, "petal_length": 1.7, "petal_width": 0.5, "species": "setosa" },
      { "sepal_length": 4.8, "sepal_width": 3.4, "petal_length": 1.9, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.0, "sepal_width": 3.0, "petal_length": 1.6, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.0, "sepal_width": 3.4, "petal_length": 1.6, "petal_width": 0.4, "species": "setosa" },
      { "sepal_length": 5.2, "sepal_width": 3.5, "petal_length": 1.5, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.2, "sepal_width": 3.4, "petal_length": 1.4, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.7, "sepal_width": 3.2, "petal_length": 1.6, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.8, "sepal_width": 3.1, "petal_length": 1.6, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.4, "sepal_width": 3.4, "petal_length": 1.5, "petal_width": 0.4, "species": "setosa" },
      { "sepal_length": 5.2, "sepal_width": 4.1, "petal_length": 1.5, "petal_width": 0.1, "species": "setosa" },
      { "sepal_length": 5.5, "sepal_width": 4.2, "petal_length": 1.4, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.9, "sepal_width": 3.1, "petal_length": 1.5, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.0, "sepal_width": 3.2, "petal_length": 1.2, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.5, "sepal_width": 3.5, "petal_length": 1.3, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.9, "sepal_width": 3.6, "petal_length": 1.4, "petal_width": 0.1, "species": "setosa" },
      { "sepal_length": 4.4, "sepal_width": 3.0, "petal_length": 1.3, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.1, "sepal_width": 3.4, "petal_length": 1.5, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.0, "sepal_width": 3.5, "petal_length": 1.3, "petal_width": 0.3, "species": "setosa" },
      { "sepal_length": 4.5, "sepal_width": 2.3, "petal_length": 1.3, "petal_width": 0.3, "species": "setosa" },
      { "sepal_length": 4.4, "sepal_width": 3.2, "petal_length": 1.3, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.0, "sepal_width": 3.5, "petal_length": 1.6, "petal_width": 0.6, "species": "setosa" },
      { "sepal_length": 5.1, "sepal_width": 3.8, "petal_length": 1.9, "petal_width": 0.4, "species": "setosa" },
      { "sepal_length": 4.8, "sepal_width": 3.0, "petal_length": 1.4, "petal_width": 0.3, "species": "setosa" },
      { "sepal_length": 5.1, "sepal_width": 3.8, "petal_length": 1.6, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 4.6, "sepal_width": 3.2, "petal_length": 1.4, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.3, "sepal_width": 3.7, "petal_length": 1.5, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 5.0, "sepal_width": 3.3, "petal_length": 1.4, "petal_width": 0.2, "species": "setosa" },
      { "sepal_length": 7.0, "sepal_width": 3.2, "petal_length": 4.7, "petal_width": 1.4, "species": "versicolor" },
      { "sepal_length": 6.4, "sepal_width": 3.2, "petal_length": 4.5, "petal_width": 1.5, "species": "versicolor" },
      { "sepal_length": 6.9, "sepal_width": 3.1, "petal_length": 4.9, "petal_width": 1.5, "species": "versicolor" },
      { "sepal_length": 5.5, "sepal_width": 2.3, "petal_length": 4.0, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 6.5, "sepal_width": 2.8, "petal_length": 4.6, "petal_width": 1.5, "species": "versicolor" },
      { "sepal_length": 5.7, "sepal_width": 2.8, "petal_length": 4.5, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 6.3, "sepal_width": 3.3, "petal_length": 4.7, "petal_width": 1.6, "species": "versicolor" },
      { "sepal_length": 4.9, "sepal_width": 2.4, "petal_length": 3.3, "petal_width": 1.0, "species": "versicolor" },
      { "sepal_length": 6.6, "sepal_width": 2.9, "petal_length": 4.6, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 5.2, "sepal_width": 2.7, "petal_length": 3.9, "petal_width": 1.4, "species": "versicolor" },
      { "sepal_length": 5.0, "sepal_width": 2.0, "petal_length": 3.5, "petal_width": 1.0, "species": "versicolor" },
      { "sepal_length": 5.9, "sepal_width": 3.0, "petal_length": 4.2, "petal_width": 1.5, "species": "versicolor" },
      { "sepal_length": 6.0, "sepal_width": 2.2, "petal_length": 4.0, "petal_width": 1.0, "species": "versicolor" },
      { "sepal_length": 6.1, "sepal_width": 2.9, "petal_length": 4.7, "petal_width": 1.4, "species": "versicolor" },
      { "sepal_length": 5.6, "sepal_width": 2.9, "petal_length": 3.6, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 6.7, "sepal_width": 3.1, "petal_length": 4.4, "petal_width": 1.4, "species": "versicolor" },
      { "sepal_length": 5.6, "sepal_width": 3.0, "petal_length": 4.5, "petal_width": 1.5, "species": "versicolor" },
      { "sepal_length": 5.8, "sepal_width": 2.7, "petal_length": 4.1, "petal_width": 1.0, "species": "versicolor" },
      { "sepal_length": 6.2, "sepal_width": 2.2, "petal_length": 4.5, "petal_width": 1.5, "species": "versicolor" },
      { "sepal_length": 5.6, "sepal_width": 2.5, "petal_length": 3.9, "petal_width": 1.1, "species": "versicolor" },
      { "sepal_length": 5.9, "sepal_width": 3.2, "petal_length": 4.8, "petal_width": 1.8, "species": "versicolor" },
      { "sepal_length": 6.1, "sepal_width": 2.8, "petal_length": 4.0, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 6.3, "sepal_width": 2.5, "petal_length": 4.9, "petal_width": 1.5, "species": "versicolor" },
      { "sepal_length": 6.1, "sepal_width": 2.8, "petal_length": 4.7, "petal_width": 1.2, "species": "versicolor" },
      { "sepal_length": 6.4, "sepal_width": 2.9, "petal_length": 4.3, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 6.6, "sepal_width": 3.0, "petal_length": 4.4, "petal_width": 1.4, "species": "versicolor" },
      { "sepal_length": 6.8, "sepal_width": 2.8, "petal_length": 4.8, "petal_width": 1.4, "species": "versicolor" },
      { "sepal_length": 6.7, "sepal_width": 3.0, "petal_length": 5.0, "petal_width": 1.7, "species": "versicolor" },
      { "sepal_length": 6.0, "sepal_width": 2.9, "petal_length": 4.5, "petal_width": 1.5, "species": "versicolor" },
      { "sepal_length": 5.7, "sepal_width": 2.6, "petal_length": 3.5, "petal_width": 1.0, "species": "versicolor" },
      { "sepal_length": 5.5, "sepal_width": 2.4, "petal_length": 3.8, "petal_width": 1.1, "species": "versicolor" },
      { "sepal_length": 5.5, "sepal_width": 2.4, "petal_length": 3.7, "petal_width": 1.0, "species": "versicolor" },
      { "sepal_length": 5.8, "sepal_width": 2.7, "petal_length": 3.9, "petal_width": 1.2, "species": "versicolor" },
      { "sepal_length": 6.0, "sepal_width": 2.7, "petal_length": 5.1, "petal_width": 1.6, "species": "versicolor" },
      { "sepal_length": 5.4, "sepal_width": 3.0, "petal_length": 4.5, "petal_width": 1.5, "species": "versicolor" },
      { "sepal_length": 6.0, "sepal_width": 3.4, "petal_length": 4.5, "petal_width": 1.6, "species": "versicolor" },
      { "sepal_length": 6.7, "sepal_width": 3.1, "petal_length": 4.7, "petal_width": 1.5, "species": "versicolor" },
      { "sepal_length": 6.3, "sepal_width": 2.3, "petal_length": 4.4, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 5.6, "sepal_width": 3.0, "petal_length": 4.1, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 5.5, "sepal_width": 2.5, "petal_length": 4.0, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 5.5, "sepal_width": 2.6, "petal_length": 4.4, "petal_width": 1.2, "species": "versicolor" },
      { "sepal_length": 6.1, "sepal_width": 3.0, "petal_length": 4.6, "petal_width": 1.4, "species": "versicolor" },
      { "sepal_length": 5.8, "sepal_width": 2.6, "petal_length": 4.0, "petal_width": 1.2, "species": "versicolor" },
      { "sepal_length": 5.0, "sepal_width": 2.3, "petal_length": 3.3, "petal_width": 1.0, "species": "versicolor" },
      { "sepal_length": 5.6, "sepal_width": 2.7, "petal_length": 4.2, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 5.7, "sepal_width": 3.0, "petal_length": 4.2, "petal_width": 1.2, "species": "versicolor" },
      { "sepal_length": 5.7, "sepal_width": 2.9, "petal_length": 4.2, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 6.2, "sepal_width": 2.9, "petal_length": 4.3, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 5.1, "sepal_width": 2.5, "petal_length": 3.0, "petal_width": 1.1, "species": "versicolor" },
      { "sepal_length": 5.7, "sepal_width": 2.8, "petal_length": 4.1, "petal_width": 1.3, "species": "versicolor" },
      { "sepal_length": 6.3, "sepal_width": 3.3, "petal_length": 6.0, "petal_width": 2.5, "species": "virginica" },
      { "sepal_length": 5.8, "sepal_width": 2.7, "petal_length": 5.1, "petal_width": 1.9, "species": "virginica" },
      { "sepal_length": 7.1, "sepal_width": 3.0, "petal_length": 5.9, "petal_width": 2.1, "species": "virginica" },
      { "sepal_length": 6.3, "sepal_width": 2.9, "petal_length": 5.6, "petal_width": 1.8, "species": "virginica" },
      { "sepal_length": 6.5, "sepal_width": 3.0, "petal_length": 5.8, "petal_width": 2.2, "species": "virginica" },
      { "sepal_length": 7.6, "sepal_width": 3.0, "petal_length": 6.6, "petal_width": 2.1, "species": "virginica" },
      { "sepal_length": 4.9, "sepal_width": 2.5, "petal_length": 4.5, "petal_width": 1.7, "species": "virginica" },
      { "sepal_length": 7.3, "sepal_width": 2.9, "petal_length": 6.3, "petal_width": 1.8, "species": "virginica" },
      { "sepal_length": 6.7, "sepal_width": 2.5, "petal_length": 5.8, "petal_width": 1.8, "species": "virginica" },
      { "sepal_length": 7.2, "sepal_width": 3.6, "petal_length": 6.1, "petal_width": 2.5, "species": "virginica" },
      { "sepal_length": 6.5, "sepal_width": 3.2, "petal_length": 5.1, "petal_width": 2.0, "species": "virginica" },
      { "sepal_length": 6.4, "sepal_width": 2.7, "petal_length": 5.3, "petal_width": 1.9, "species": "virginica" },
      { "sepal_length": 6.8, "sepal_width": 3.0, "petal_length": 5.5, "petal_width": 2.1, "species": "virginica" },
      { "sepal_length": 5.7, "sepal_width": 2.5, "petal_length": 5.0, "petal_width": 2.0, "species": "virginica" },
      { "sepal_length": 5.8, "sepal_width": 2.8, "petal_length": 5.1, "petal_width": 2.4, "species": "virginica" },
      { "sepal_length": 6.4, "sepal_width": 3.2, "petal_length": 5.3, "petal_width": 2.3, "species": "virginica" },
      { "sepal_length": 6.5, "sepal_width": 3.0, "petal_length": 5.5, "petal_width": 1.8, "species": "virginica" },
      { "sepal_length": 7.7, "sepal_width": 3.8, "petal_length": 6.7, "petal_width": 2.2, "species": "virginica" },
      { "sepal_length": 7.7, "sepal_width": 2.6, "petal_length": 6.9, "petal_width": 2.3, "species": "virginica" },
      { "sepal_length": 6.0, "sepal_width": 2.2, "petal_length": 5.0, "petal_width": 1.5, "species": "virginica" },
      { "sepal_length": 6.9, "sepal_width": 3.2, "petal_length": 5.7, "petal_width": 2.3, "species": "virginica" },
      { "sepal_length": 5.6, "sepal_width": 2.8, "petal_length": 4.9, "petal_width": 2.0, "species": "virginica" },
      { "sepal_length": 7.7, "sepal_width": 2.8, "petal_length": 6.7, "petal_width": 2.0, "species": "virginica" },
      { "sepal_length": 6.3, "sepal_width": 2.7, "petal_length": 4.9, "petal_width": 1.8, "species": "virginica" },
      { "sepal_length": 6.7, "sepal_width": 3.3, "petal_length": 5.7, "petal_width": 2.1, "species": "virginica" },
      { "sepal_length": 7.2, "sepal_width": 3.2, "petal_length": 6.0, "petal_width": 1.8, "species": "virginica" },
      { "sepal_length": 6.2, "sepal_width": 2.8, "petal_length": 4.8, "petal_width": 1.8, "species": "virginica" },
      { "sepal_length": 6.1, "sepal_width": 3.0, "petal_length": 4.9, "petal_width": 1.8, "species": "virginica" },
      { "sepal_length": 6.4, "sepal_width": 2.8, "petal_length": 5.6, "petal_width": 2.1, "species": "virginica" },
      { "sepal_length": 7.2, "sepal_width": 3.0, "petal_length": 5.8, "petal_width": 1.6, "species": "virginica" },
      { "sepal_length": 7.4, "sepal_width": 2.8, "petal_length": 6.1, "petal_width": 1.9, "species": "virginica" },
      { "sepal_length": 7.9, "sepal_width": 3.8, "petal_length": 6.4, "petal_width": 2.0, "species": "virginica" },
      { "sepal_length": 6.4, "sepal_width": 2.8, "petal_length": 5.6, "petal_width": 2.2, "species": "virginica" },
      { "sepal_length": 6.3, "sepal_width": 2.8, "petal_length": 5.1, "petal_width": 1.5, "species": "virginica" },
      { "sepal_length": 6.1, "sepal_width": 2.6, "petal_length": 5.6, "petal_width": 1.4, "species": "virginica" },
      { "sepal_length": 7.7, "sepal_width": 3.0, "petal_length": 6.1, "petal_width": 2.3, "species": "virginica" },
      { "sepal_length": 6.3, "sepal_width": 3.4, "petal_length": 5.6, "petal_width": 2.4, "species": "virginica" },
      { "sepal_length": 6.4, "sepal_width": 3.1, "petal_length": 5.5, "petal_width": 1.8, "species": "virginica" },
      { "sepal_length": 6.0, "sepal_width": 3.0, "petal_length": 4.8, "petal_width": 1.8, "species": "virginica" },
      { "sepal_length": 6.9, "sepal_width": 3.1, "petal_length": 5.4, "petal_width": 2.1, "species": "virginica" },
      { "sepal_length": 6.7, "sepal_width": 3.1, "petal_length": 5.6, "petal_width": 2.4, "species": "virginica" },
      { "sepal_length": 6.9, "sepal_width": 3.1, "petal_length": 5.1, "petal_width": 2.3, "species": "virginica" },
      { "sepal_length": 5.8, "sepal_width": 2.7, "petal_length": 5.1, "petal_width": 1.9, "species": "virginica" },
      { "sepal_length": 6.8, "sepal_width": 3.2, "petal_length": 5.9, "petal_width": 2.3, "species": "virginica" },
      { "sepal_length": 6.7, "sepal_width": 3.3, "petal_length": 5.7, "petal_width": 2.5, "species": "virginica" },
      { "sepal_length": 6.7, "sepal_width": 3.0, "petal_length": 5.2, "petal_width": 2.3, "species": "virginica" },
      { "sepal_length": 6.3, "sepal_width": 2.5, "petal_length": 5.0, "petal_width": 1.9, "species": "virginica" },
      { "sepal_length": 6.5, "sepal_width": 3.0, "petal_length": 5.2, "petal_width": 2.0, "species": "virginica" },
      { "sepal_length": 6.2, "sepal_width": 3.4, "petal_length": 5.4, "petal_width": 2.3, "species": "virginica" },
      { "sepal_length": 5.9, "sepal_width": 3.0, "petal_length": 5.1, "petal_width": 1.8, "species": "virginica" }
    ];
}