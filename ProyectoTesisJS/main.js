import * as ui from './ui-handler.js';
import * as modelBuilder from './model-builder.js';

document.getElementById('start-button').addEventListener('click', runFullProcess);

async function runFullProcess() {
    ui.setButtonState(true);
    ui.clearLog();
    ui.log('Inicio del proceso...');

    try {
        // 1. Configurar backend de TensorFlow.js para usar la GPU
        await tf.setBackend('webgl');
        await tf.ready();
        ui.log(`-> Backend de TensorFlow.js configurado: ${tf.getBackend().toUpperCase()}`);
        ui.log('-> Este backend utiliza la GPU para acelerar los cálculos.');

        // 2. Iniciar el Web Worker para el procesamiento de datos
        ui.log('\nIniciando Web Worker para procesar datos en un hilo de CPU separado...');
        const worker = new Worker('data-worker.js');
        worker.postMessage({ action: 'process' });

        worker.onmessage = async (e) => {
            ui.log(e.data.message);

            if (e.data.status === 'complete') {
                const { trainFeatures, trainLabels, testFeatures, testLabels, testRawLabels, originalData } = e.data.payload;
                
                // Visualizar datos originales
                ui.log('\nVisualizando la distribución de los datos de entrada...');
                ui.plotData(originalData);

                // Convertir datos a tensores de TF.js
                const trainFeaturesTensor = tf.tensor2d(trainFeatures);
                const trainLabelsTensor = tf.tensor2d(trainLabels);
                const testFeaturesTensor = tf.tensor2d(testFeatures);

                // 3. Crear y entrenar el modelo
                ui.log('\nCreando el modelo de Red Neuronal...');
                const model = modelBuilder.createModel();
                model.summary(); // Imprime el resumen del modelo en la consola del navegador

                ui.log('Iniciando entrenamiento del modelo (acelerado por GPU)...');
                const history = await modelBuilder.trainModel(model, trainFeaturesTensor, trainLabelsTensor, (epoch, logs) => {
                    ui.log(`  Época ${epoch + 1}/100 - Pérdida: ${logs.loss.toFixed(4)}, Precisión: ${logs.acc.toFixed(4)}`);
                });
                ui.log('Entrenamiento finalizado.');

                // 4. Evaluar el modelo
                ui.log('\nEvaluando el modelo con el conjunto de datos de prueba...');
                const { confusionMatrix, accuracy, classNames } = modelBuilder.evaluateModel(model, testFeaturesTensor, testRawLabels);
                ui.log(`Precisión del modelo en datos de prueba: ${accuracy.toFixed(2)}%`);

                // 5. Visualizar resultados
                ui.log('Visualizando la matriz de confusión...');
                ui.plotConfusionMatrix(confusionMatrix, classNames);

                ui.log('\n--- Proceso completado --- ');
                ui.setButtonState(false);

                // Limpiar tensores de memoria
                trainFeaturesTensor.dispose();
                trainLabelsTensor.dispose();
                testFeaturesTensor.dispose();
                model.dispose();
            }
        };

        worker.onerror = (err) => {
            ui.log(`Error en el Web Worker: ${err.message}`);
            ui.setButtonState(false);
        };

    } catch (error) {
        ui.log(`\nERROR: ${error.message}`);
        console.error(error);
        ui.setButtonState(false);
    }
}
