import React from 'react';
import highChartsConfig from './HighchartsConfig';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme';
ReactHighCharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
    {() =>
      <Tile>
        <ReactHighCharts config={highChartsConfig()} />
      </Tile>
    }
    </AppContext.Consumer>
  )
}