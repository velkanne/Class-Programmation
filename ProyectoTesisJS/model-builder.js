export function createModel() {
    const model = tf.sequential();

    // Capa de entrada y primera capa oculta
    model.add(tf.layers.dense({
        inputShape: [4], // 4 características de entrada
        units: 10,
        activation: 'relu'
    }));

    // Segunda capa oculta
    model.add(tf.layers.dense({
        units: 10,
        activation: 'relu'
    }));

    // Capa de salida
    model.add(tf.layers.dense({
        units: 3, // 3 clases de salida (especies)
        activation: 'softmax'
    }));

    return model;
}

export async function trainModel(model, trainFeatures, trainLabels, onEpochEnd) {
    model.compile({
        optimizer: tf.train.adam(0.01),
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });

    const history = await model.fit(trainFeatures, trainLabels, {
        epochs: 100,
        validationSplit: 0.1,
        callbacks: {
            onEpochEnd: (epoch, logs) => {
                onEpochEnd(epoch, logs);
            }
        }
    });

    return history;
}

export function evaluateModel(model, testFeatures, testRawLabels) {
    const predictions = model.predict(testFeatures);
    const predictedClasses = predictions.argMax(-1).dataSync();
    
    const classNames = ['setosa', 'versicolor', 'virginica'];
    const numClasses = classNames.length;
    const confusionMatrix = Array(numClasses).fill(0).map(() => Array(numClasses).fill(0));

    for (let i = 0; i < testRawLabels.length; i++) {
        const trueClass = testRawLabels[i];
        const predClass = predictedClasses[i];
        confusionMatrix[trueClass][predClass]++;
    }

    const accuracy = (predictedClasses.filter((p, i) => p === testRawLabels[i]).length / testRawLabels.length) * 100;

    return { confusionMatrix, accuracy, classNames };
}