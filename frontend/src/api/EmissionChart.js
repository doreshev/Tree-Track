function createChart(emissionData) {
  return {
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    labels: [
      emissionData[0].time.interval_start.slice(0, 7),
      emissionData[10].time.interval_start.slice(0, 7),
      emissionData[1].time.interval_start.slice(0, 7),
      emissionData[4].time.interval_start.slice(0, 7),
      emissionData[3].time.interval_start.slice(0, 7),
      emissionData[26].time.interval_start.slice(0, 7),
      emissionData[11].time.interval_start.slice(0, 7),
      emissionData[0].time.interval_start.slice(0, 7),
      emissionData[10].time.interval_start.slice(0, 7),
      emissionData[1].time.interval_start.slice(0, 7),
      emissionData[4].time.interval_start.slice(0, 7),
      emissionData[3].time.interval_start.slice(0, 7),
      emissionData[26].time.interval_start.slice(0, 7),
      emissionData[11].time.interval_start.slice(0, 7),
    ],
    datasets: [
      {
        label: 'Heilbronn',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [
         emissionData[0].value.average,
         emissionData[10].value.average,
         emissionData[1].value.average,
         emissionData[4].value.average,
         emissionData[3].value.average,
         emissionData[26].value.average,
         emissionData[11].value.average,
         emissionData[0].value.average,
         emissionData[10].value.average,
         emissionData[1].value.average,
         emissionData[4].value.average,
         emissionData[3].value.average,
         emissionData[26].value.average,
         emissionData[11].value.average
        ]
      }
    ]
  }
}

export {createChart};