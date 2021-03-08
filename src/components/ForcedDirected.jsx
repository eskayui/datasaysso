import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";

const ForcedDirected = ({data}) => {

    useEffect(() => {
        let chart = am4core.create('chartdiv', am4plugins_forceDirected.ForceDirectedTree);
        let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
        chart.legend = new am4charts.Legend();
        chart.zoomable = true;
        chart.exporting.menu = new am4core.ExportMenu();
        chart.responsive.enabled = true;
        series.data = data;
        series.dataFields.value = "value";
        series.dataFields.name = "name";
        series.dataFields.children = "children";
        series.nodes.template.label.text = "{name}";
        series.nodes.template.tooltipText = "{name}: [bold]{tooltip}[/]";
        series.fontSize = 10;
        series.minRadius = 20;
        series.maxRadius = 40;
        series.dataFields.id = "id";
        series.dataFields.linkWith = "link";
        series.links.template.strokeWidth = 2;
        series.nodes.template.togglable = true;
        series.maxLevels = 1;
    }, []);

    return (
        <div id="chartdiv" style={{ width: "100%", height: "100vh" }}></div>
    )
}

export default ForcedDirected
