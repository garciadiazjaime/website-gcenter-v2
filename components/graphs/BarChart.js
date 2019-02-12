import React, { Component } from 'react'
import * as d3 from 'd3';

function get12hrsFormat(hr) {
  const currentDate = new Date()
  const currentHour = currentDate.getHours() - hr

  if (currentHour < 0) {
    return `${currentHour + 12 < 10 ? '0':''}${currentHour + 12} pm`
  }
  if (currentHour === 0) {
    return '12 am'
  }
  if (currentHour < 12) {
    return `${currentHour < 10 ? '0':''}${currentHour} am`
  }
  if (currentHour === 12) {
    return '12 pm'
  }
  return `${currentHour < 22 ? '0': ''}${currentHour - 12} pm`
}

function getHrsFormat(hr) {
  return `${hr} hr${hr !== 1 ? 's':''}`
}

function arrayAverage(data) {
  return data.reduce((a,b) => a + b, 0) / data.length
}

function extractReport(data) {
  const report = [...Array(24).keys()].map(hr => {
    const { time } = data.sanYsidro.vehicle.standard[hr] || {}
    if (time && time.length) {
      const minutes = arrayAverage(time)
      const hours = Math.round(minutes / 60 * 100) / 100;
      return hours
    }
    return 0;
  });

  return report
}

class Graph24hrs extends Component {

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const { data } = this.props
    const report = extractReport(data)
    const maxValue = Math.max(...report)
    
    const margin = {top: 20, right: 20, bottom: 70, left: 60}
    const width = 300 - margin.left - margin.right
    const height = 420 - margin.top - margin.bottom
    
    const svg = d3.select('figure')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

    const x = d3.scaleLinear()
      .domain([0, Math.ceil(maxValue)])
      .range([0, width]);
    
    const y = d3.scaleLinear()
      .domain([0, 24])
      .range([0, height]);
                  
    svg.selectAll('rect')
      .data(report)
      .enter()
      .append('rect')
      .attr('x', () => margin.left)
      .attr('y', (d, i) => (i * height / report.length) + margin.top)
      .attr('width', d => x(d))
      .attr('height', () => (height / report.length) - 1)
      .attr('fill', (d, i) => {
        const currentHour = new Date().getHours() - i
        if (d === maxValue) {
          return '#4d1919'
        }
        if (currentHour < 12 && currentHour > 0) {
          return '#9da1af'
        }
        return '#343740'
      })
  
    
    // Add the X Axis
    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${margin.left}, ${height + margin.top})`)
      .call(d3.axisBottom(x)
        .tickValues([1, 2, 3, 4])
        .tickFormat(d => getHrsFormat(d))
      )
      .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
    
    // text label for the x axis
    svg.append('text')
      .attr('transform', `translate(${(width/2) - margin.right}, ${height + margin.top + 30})`)
      .style('font-size', 14)
      .text('Horas de espera');
    
    // Add the Y Axis
    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .call(d3.axisLeft(y).ticks(24).tickFormat(d => get12hrsFormat(d)));
    
       // text label for the y axis
    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', 0)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', 14)
      .text('Hora del día');
  }

  render() {
    return (
      <figure style={{ margin: '10px'}} />
    );
  }
}

export default Graph24hrs
