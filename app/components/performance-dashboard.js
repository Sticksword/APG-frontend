import Component from '@ember/component';
import moment from 'moment';

const BARCHARTDATA = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const BARCHARTOPTIONS = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      boxWidth: 0,
      fontColor: 'pink'
    }
  }
};

function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = moment(startDate);
  var endDate = moment(stopDate);
  while (currentDate <= endDate) {
    dateArray.push( moment(currentDate).format('MM-DD-YYYY') )
    currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;
}
const LINECHARTDATA = {
  labels: getDates('11-01-2019', '11-06-2019'),
  datasets: [{
    label: 'dataset 1',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 0.2)',
    fill: false,
    yAxisID: 'y-axis'
  }, {
    label: 'dataset 2',
    data: [1, 2, 3, 4, 5, 6],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 0.2)',
    fill: false,
    yAxisID: 'y-axis'
  }]
};

const LINECHARTOPTIONS = {
  hoverMode: 'index',
  stacked: false,
  scales: {
    yAxes: [
      {
        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: 'left',
        id: 'y-axis',
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const PIECHARTDATA = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const PIECHARTOPTIONS = {
  legend: {
    display: true,
    position: 'left',
  }
};

export default Component.extend({
  BARCHARTDATA,
  BARCHARTOPTIONS,
  LINECHARTDATA,
  LINECHARTOPTIONS,
  PIECHARTDATA,
  PIECHARTOPTIONS
});

