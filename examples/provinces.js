const width = 800;
const height = 800;

document.querySelector('.container').setAttribute('width', width);

const svg = d3.select('svg').attr("width", width).attr("height", height);

const text = svg.append("text").attr('y', 100).attr('x', 300).attr("text-anchor", "end");

d3.json('../data/provinces.json')
  .then(data => {
    const provinces = topojson.feature(data, data.objects.provinces);

    const projection = d3.geoMercator().fitSize([width, height], provinces);
    const pathGenerator = d3.geoPath().projection(projection);


    svg.selectAll('path').data(provinces.features)
      .enter().append('path')
      .attr('class', 'region')
      .attr('d', pathGenerator)
      .on('mouseover', function (d, i) {
        text.text(d.properties['name'])
      })
      .on('mouseout', function (d, i) {
        text.text("")
      });
  });