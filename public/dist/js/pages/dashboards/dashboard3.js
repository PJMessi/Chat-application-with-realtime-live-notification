/*
Template Name: Material Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
  'use strict';
  // ==============================================================
  // Last month earning
  // ==============================================================
  var sparklineLogin = function() {
    $('.bandwidth').sparkline(
      [4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9],
      {
        type: 'bar',
        width: '100%',
        height: '70',
        barWidth: '2',
        resize: true,
        barSpacing: '6',
        barColor: 'rgba(255, 255, 255, 0.3)'
      }
    );
    $('.spark-count').sparkline(
      [4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9],
      {
        type: 'line',
        width: '100%',
        height: '70',
        barWidth: '2',
        resize: true,
        fillColor: 'transparent',
        lineColor: 'rgba(255, 255, 255, 0.6)'
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
  // Our Visitor
  // ==============================================================

  var chart = c3.generate({
    bindto: '#visitor',
    data: {
      columns: [['Iphone', 60], ['Samsung', 12], ['One+', 28]],

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
      title: 'Sales',
      width: 20
    },

    legend: {
      hide: true
      //or hide: 'data1'
      //or hide: ['data1', 'data2']
    },
    color: {
      pattern: ['#4798e8', '#01c0c8', '#f6f6f6']
    }
  });
  // ==============================================================
  // Sales income
  // ==============================================================
  var chart = c3.generate({
    bindto: '#income',
    data: {
      columns: [
        ['Growth Income', 250, 200, 100, 250, 300],
        ['Net Income', 190, 100, 140, 200, 190]
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
          count: 4,

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
      height: 300
    },
    color: {
      pattern: ['#4798e8', '#01c0c8']
    }
  });
});
