// Configuration
const config = {
  width: 800,
  height: 800,
  dataUrl: '../data/provinces.json'
};

// Get container and tooltip elements
const mapContainer = document.getElementById('map-container');
const tooltip = document.querySelector('.tooltip');

// Create SVG
const svg = d3.create('svg')
  .attr('viewBox', `0 0 ${config.width} ${config.height}`)
  .attr('preserveAspectRatio', 'xMidYMid meet');

// Tooltip functions
function showTooltip(event, data) {
  const properties = data.properties;

  tooltip.innerHTML = `
    <div class="tooltip-name">${properties.name}</div>
    <div class="tooltip-id">ID: ${data.id}</div>
  `;

  tooltip.classList.add('visible');

  // Position tooltip
  const tooltipRect = tooltip.getBoundingClientRect();
  tooltip.style.left = `${event.pageX - tooltipRect.width / 2}px`;
  tooltip.style.top = `${event.pageY - tooltipRect.height - 10}px`;
}

function hideTooltip() {
  tooltip.classList.remove('visible');
}

function moveTooltip(event) {
  const tooltipRect = tooltip.getBoundingClientRect();
  tooltip.style.left = `${event.pageX - tooltipRect.width / 2}px`;
  tooltip.style.top = `${event.pageY - tooltipRect.height - 10}px`;
}

// Load and render map
async function loadMap() {
  try {
    // Fetch data
    const data = await d3.json(config.dataUrl);

    // Convert TopoJSON to GeoJSON
    const provinces = topojson.feature(data, data.objects.provinces);

    // Create projection
    const projection = d3.geoMercator()
      .fitSize([config.width, config.height], provinces);

    // Create path generator
    const pathGenerator = d3.geoPath().projection(projection);

    // Draw provinces
    svg.selectAll('path')
      .data(provinces.features)
      .join('path')
      .attr('class', 'province')
      .attr('d', pathGenerator)
      .attr('aria-label', d => d.properties.name)
      .on('mouseover', (event, d) => showTooltip(event, d))
      .on('mousemove', moveTooltip)
      .on('mouseout', hideTooltip)
      .on('click', (event, d) => {
        console.log('Province clicked:', d.properties);
      });

    // Clear loading message and append SVG
    mapContainer.innerHTML = '';
    mapContainer.appendChild(svg.node());

    // Log success
    console.log('Morocco provinces map loaded successfully!');
    console.log(`Loaded ${provinces.features.length} provinces`);

  } catch (error) {
    console.error('Error loading map:', error);

    mapContainer.innerHTML = `
      <div class="error-message">
        <strong>Error loading map data</strong><br>
        ${error.message || 'Failed to fetch map data. Please try again later.'}
      </div>
    `;
  }
}

// Initialize map
loadMap();