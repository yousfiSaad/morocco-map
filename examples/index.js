const width = 800;
const height = 800;

document.querySelector('.container').setAttribute('width', width);

const svg = d3.select('svg').attr("width", width).attr("height", height);

const text = svg.append("text").attr('y', 100).attr('x', 300).attr("text-anchor", "end");

d3.json('https://cdn.jsdelivr.net/npm/morocco-map/data/regions.json')
  .then(data => {
    const regions = topojson.feature(data, data.objects.regions);

    const projection = d3.geoMercator().fitSize([width, height], regions);
    const pathGenerator = d3.geoPath().projection(projection);


    svg.selectAll('path').data(regions.features)
      .enter().append('path')
      .attr('class', 'region')
      .attr('d', pathGenerator)
      .on('mouseover', function (d, i) {
        text.text(d.properties['name:ar'])
      })
      .on('mouseout', function (d, i) {
        text.text("")
      });
  });