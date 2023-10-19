const chartData = {
    labels: ["Wrong", "Correct"],
    data : [33.7,66.3]
}


const customColors = ['#9b1d8d', '#00ffff']

const myChart= document.querySelector('.myChart');

new Chart (myChart, {
    type: "doughnut",
data: {
    labels: chartData.labels,
    datasets: [
        {
            label:"Risposte Corrette",
            data: chartData.data,
           backgroundColor: customColors
        },
    ],
},
options:{
    borderWidth:0,
    cutout: '65%',
    plugins: {
        legend:{
            display:false
        }
    }
}
})