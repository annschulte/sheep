import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { PieArcDatum } from 'd3-shape'

export namespace Types {
  export type Data = {
    name: string
    value: number
  }
}

export const PieChart = (props: IPieChartProps) => {
  useEffect(() => {
    draw()
  })

  const draw = () => {
    const width = props.width - props.left - props.right
    const height = props.height - props.top - props.bottom
    const radius = Math.min(width, height) / 2
    const colors = props.colors

    const svg = d3
      .select('.PieChart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`)

    d3.dsv(',', data, (d) => {
      const res = (d as unknown) as Types.Data
      return {
        name: res.name,
        value: res.value,
      }
    }).then((data) => {
      const pie = d3
        .pie<Types.Data>()
        .sort(null)
        .value((record) => record.value)

      const path = d3.arc<PieArcDatum<Types.Data>>().innerRadius(0).outerRadius(radius)

      const pieData = pie(data)

      const arch = svg
        .selectAll('.arc')
        .data(pieData)
        .enter()
        .append('g')
        .attr('class', 'arc')
        .attr('fill', (d, i) => {
          return colors[i]
        })

      arch.append('path').attr('d', path)
    })
  }

  return <div className="PieChart" />
}

interface IPieChartProps {
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
  colors: Array<string>
  data: any
}
