/*
Template Name: Adminbite Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
  'use strict';
  // ==============================================================
  // Product Sales
  // ==============================================================
  Morris.Area({
    element: 'product-sales',
    data: [
      {
        period: '2012',
        iphone: 50,
        ipad: 80,
        itouch: 20
      },
      {
        period: '2013',
        iphone: 130,
        ipad: 100,
        itouch: 80
      },
      {
        period: '2014',
        iphone: 80,
        ipad: 60,
        itouch: 70
      },
      {
        period: '2015',
        iphone: 70,
        ipad: 200,
        itouch: 140
      },
      {
        period: '2016',
        iphone: 180,
        ipad: 150,
        itouch: 140
      },
      {
        period: '2017',
        iphone: 105,
        ipad: 100,
        itouch: 80
      },
      {
        period: '2018',
        iphone: 250,
        ipad: 150,
        itouch: 200
      }
    ],
    xkey: 'period',
    ykeys: ['iphone', 'ipad'],
    labels: ['iPhone', 'iPad'],
    pointSize: 2,
    fillOpacity: 0,
    pointStrokeColors: ['#ccc', '#4798e8', '#9675ce'],
    behaveLikeLine: true,
    gridLineColor: '#e0e0e0',
    lineWidth: 2,
    hideHover: 'auto',
    lineColors: ['#ccc', '#4798e8', '#9675ce'],
    resize: true
  });
  // ==============================================================
  // City weather
  // ==============================================================
  var chart = new Chartist.Line(
    '#ct-weather',
    {
      labels: ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
      series: [[2, 0, 5, 2, 5, 2]]
    },
    {
      showArea: true,
      showPoint: false,

      chartPadding: {
        left: -35
      },
      axisX: {
        showLabel: true,
        showGrid: false
      },
      axisY: {
        showLabel: false,
        showGrid: true
      },
      fullWidth: true
    }
  );
  // ==============================================================
  // Ct Barchart
  // ==============================================================
  new Chartist.Bar(
    '#weeksales-bar',
    {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [[50, 40, 30, 70, 50, 20, 30]]
    },
    {
      axisX: {
        showLabel: false,
        showGrid: false
      },

      chartPadding: {
        top: 15,
        left: -25
      },
      axisX: {
        showLabel: true,
        showGrid: false
      },
      axisY: {
        showLabel: false,
        showGrid: false
      },
      fullWidth: true,
      plugins: [Chartist.plugins.tooltip()]
    }
  );

  // ==============================================================
  // Our Income
  // ==============================================================
  var chart = c3.generate({
    bindto: '#income',
    data: {
      columns: [
        ['Growth Income', 100, 200, 300, 300, 400, 200],
        ['Net Income', 130, 100, 440, 200, 320, 100]
      ],
      type: 'bar'
    },
    bar: {
      space: 0.2,
      // or
      width: 15 // this makes bar width 100px
    },
    axis: {
      y: {
        tick: {
          count: 3,
          outer: false
        }
      }
    },
    legend: {
      hide: true
      //or hide: 'data1'
      //or hide: ['data1', 'data2']
    },
    grid: {
      x: {
        show: false
      },
      y: {
        show: true
      }
    },
    size: {
      height: 270
    },
    color: {
      pattern: ['#4798e8', '#ccc']
    }
  });

  // ==============================================================
  // Sales Different
  // ==============================================================

  var chart = c3.generate({
    bindto: '#sales',
    data: {
      columns: [['One+', 50], ['T', 60], ['Samsung', 10]],

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
      title: '',
      width: 18
    },
    size: {
      height: 150
    },
    legend: {
      hide: true
      //or hide: 'data1'
      //or hide: ['data1', 'data2']
    },
    color: {
      pattern: ['#ffffff', '#4798e8', '#24d2b5', '#20aee3']
    }
  });
  // ==============================================================
  // Sales Prediction
  // ==============================================================

  var chart = c3.generate({
    bindto: '#prediction',
    data: {
      columns: [['data', 91.4]],
      type: 'gauge',
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

    color: {
      pattern: ['#20aee3', '#20aee3', '#20aee3', '#24d2b5'], // the three color levels for the percentage values.
      threshold: {
        //            unit: 'value', // percentage is default
        //            max: 200, // 100 is default
        values: [30, 60, 90, 100]
      }
    },
    gauge: {
      width: 22
    },
    size: {
      height: 120,
      width: 150
    }
  });
});
