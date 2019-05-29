/*
Template Name: Adminbite Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
  'use strict';

  // ==============================================================
  // Our Visitor
  // ==============================================================

  var chart = c3.generate({
    bindto: '#visitor',
    data: {
      columns: [['Desktop', 60], ['Tablet', 12], ['Mobile', 28]],

      type: 'donut',
      onclick: function(d, i) {
        console.log('onclick', d, i);
      },
      onmouseover: function(d, i) {
        console.log('onmouseover', d, i);
      },
      onmouseout: function(d, i) {
        console.log('onmouseout', d, i);
      }
    },
    donut: {
      label: {
        show: false
      },
      title: 'Visits',
      width: 25
    },

    legend: {
      hide: true
      //or hide: 'data1'
      //or hide: ['data1', 'data2']
    },
    color: {
      pattern: ['#4798e8', '#ff7676', '#f6f6f6']
    }
  });
  // ==============================================================
  // Our Visitor
  // ==============================================================
  var sparklineLogin = function() {
    $('#ravenue').sparkline([6, 10, 9, 11, 9, 10, 12], {
      type: 'bar',
      height: '55',
      barWidth: '4',
      width: '100%',
      resize: true,
      barSpacing: '8',
      barColor: '#16baf0'
    });
    $('#active-users').sparkline(
      [6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12],
      {
        type: 'bar',
        height: '60',
        barWidth: '4',
        width: '100%',
        resize: true,
        barSpacing: '8',
        barColor: '#ff7676'
      }
    );
  };
  var sparkResize;

  $(window).resize(function(e) {
    clearTimeout(sparkResize);
    sparkResize = setTimeout(sparklineLogin, 500);
  });
  sparklineLogin();

  // ==============================================================
  // Bounce rate
  // ==============================================================
  var ctx = document.getElementById('balance');
  var salesChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2012', '2013', '2014', '2015', '2016', '2017'],
      datasets: [
        {
          label: 'Balance $',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ['transparent'],
          borderColor: ['#bbb790'],
          borderWidth: 2
        }
      ]
    },
    options: {
      elements: { point: { radius: 2 } },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              display: false
            }
          }
        ]
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      }
    }
  });
  // ==============================================================
  // Foo1 total visit
  // ==============================================================
  var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.32, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.44, // // Relative to gauge radius
      strokeWidth: 0.04, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false, // If false, the max value of the gauge will be updated if value surpass max
    limitMin: false, // If true, the min value of the gauge will be fixed unless you set it manually
    colorStart: '#24d2b5', // Colors
    colorStop: '#24d2b5', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,

    highDpiSupport: true // High resolution support
  };
  var target = document.getElementById('foo'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 3000; // set max gauge value
  gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 45; // set animation speed (32 is default value)
  gauge.set(1850); // set actual value
  // ==============================================================
  // world map
  // ==============================================================
  jQuery('#visitfromworld').vectorMap({
    map: 'world_mill_en',
    backgroundColor: 'transparent',
    borderColor: '#000',
    borderOpacity: 0,
    borderWidth: 0,
    zoomOnScroll: false,
    color: '#93d5ed',
    regionStyle: {
      initial: {
        fill: '#bce2fb',
        'stroke-width': 1,
        stroke: '#fff'
      }
    },
    markerStyle: {
      initial: {
        r: 5,
        fill: '#93d5ed',
        'fill-opacity': 1,
        stroke: '#93d5ed',
        'stroke-width': 1,
        'stroke-opacity': 1
      }
    },
    enableZoom: true,
    hoverColor: '#79e580',
    markers: [
      {
        latLng: [21.0, 78.0],
        name: 'India : 9347',
        style: { fill: '#2961ff' }
      },
      {
        latLng: [-33.0, 151.0],
        name: 'Australia : 250',
        style: { fill: '#ff821c' }
      },
      {
        latLng: [36.77, -119.41],
        name: 'USA : 250',
        style: { fill: '#40c4ff' }
      },
      {
        latLng: [55.37, -3.41],
        name: 'UK   : 250',
        style: { fill: '#398bf7' }
      },
      {
        latLng: [25.2, 55.27],
        name: 'UAE : 250',
        style: { fill: '#6fc826' }
      }
    ],
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#93d5ed', '#93d5ee'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function(element, code, region) {
      var message =
        'You clicked "' +
        region +
        '" which has the code: ' +
        code.toUpperCase();
      alert(message);
    }
  });
  $('#file_export').DataTable({
    dom: 'Bfrtip',
    buttons: ['csv', 'excel']
  });
  $(
    '.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel'
  ).addClass('btn btn-info mr-1 ');
});
