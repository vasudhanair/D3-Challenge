// @TODO: YOUR CODE HERE!
// SVG dimensions to be used later
var svgWidth = 960;
var svgHeight = 620;

// Borders set for the SVG
var margin = {
    top: 20,
    right: 40,
    bottom: 200,
    left: 100
};

// Create the width and height using the margins and parameters
var width = svgWidth - margin.right - margin.left;
var height = svgHeight - margin.top - margin.bottom;

// Append a div classed chart to the scatter element
var chart = d3.select("#scatter").append("div").classed("chart", true);


// Append an SVG element to the chart with appropriate height and width
var svg = chart.append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Parameters
var chosenXAxis = "poverty";
var chosenYAxis = "healthcare";
