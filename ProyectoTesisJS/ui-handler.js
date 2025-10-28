const logElement = document.getElementById('log');
const startButton = document.getElementById('start-button');
const dataChartCtx = document.getElementById('data-chart').getContext('2d');
const confusionMatrixCtx = document.getElementById('confusion-matrix-chart').getContext('2d');

let dataChart, confusionMatrixChart;

export function log(message) {
    console.log(message);
    logElement.innerHTML += message + '\n';
    logElement.scrollTop = logElement.scrollHeight;
}

export function clearLog() {
    logElement.innerHTML = '';
}

export function setButtonState(disabled) {
    startButton.disabled = disabled;
    startButton.textContent = disabled ? 'Procesando...' : 'Iniciar Proceso de Entrenamiento';
}

export function plotData(data) {
    if (dataChart) dataChart.destroy();
    const species = ['setosa', 'versicolor', 'virginica'];
    const colors = {
        setosa: 'rgba(255, 99, 132, 0.8)',
        versicolor: 'rgba(54, 162, 235, 0.8)',
        virginica: 'rgba(75, 192, 192, 0.8)'
    };

    dataChart = new Chart(dataChartCtx, {
        type: 'scatter',
        data: {
            datasets: species.map(s => ({
                label: s,
                data: data.filter(d => d.species === s).map(d => ({ x: d.sepal_length, y: d.petal_length })),
                backgroundColor: colors[s]
            }))
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: 'Longitud del Sépalo' } },
                y: { title: { display: true, text: 'Longitud del Pétalo' } }
            }
        }
    });
}

export function plotConfusionMatrix(matrix, labels) {
    if (confusionMatrixChart) confusionMatrixChart.destroy();
    
    const data = {
        labels: labels,
        datasets: matrix.map((row, i) => ({
            label: `Predicho ${labels[i]}`,
            data: row,
            backgroundColor: row.map((val, j) => {
                const alpha = val / Math.max(...matrix.flat());
                return i === j ? `rgba(75, 192, 192, ${alpha})` : `rgba(255, 99, 132, ${alpha})`;
            }),
            borderWidth: 1
        }))
    };

    confusionMatrixChart = new Chart(confusionMatrixCtx, {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            responsive: true,
            scales: {
                x: { stacked: true, title: { display: true, text: 'Número de Muestras' } },
                y: { stacked: true, title: { display: true, text: 'Clase Verdadera' } }
            },
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Matriz de Confusión'
                }
            }
        }
    });
}
