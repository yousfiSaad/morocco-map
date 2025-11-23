# Morocco Map 🇲🇦

[![npm version](https://img.shields.io/npm/v/morocco-map.svg)](https://www.npmjs.com/package/morocco-map)
[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
[![npm downloads](https://img.shields.io/npm/dm/morocco-map.svg)](https://www.npmjs.com/package/morocco-map)

TopoJSON files for Moroccan regions and provinces. Perfect for creating interactive maps and data visualizations of Morocco.

## Features

- 🗺️ **12 Moroccan regions** with ISO 3166-2 compliant IDs
- 🏛️ **Provinces and prefectures** with ISO 3166-2 compliant IDs
- 📦 **TopoJSON format** for optimal file size
- 🌐 **Multi-language support** (Arabic, English, Berber)
- 📘 **TypeScript definitions** included
- 🎨 **Ready-to-use examples** with D3.js

## Installation

### Using npm

```bash
npm install morocco-map
```

### Using yarn

```bash
yarn add morocco-map
```

### Using CDN

```html
<!-- Regions -->
<script src="https://cdn.jsdelivr.net/npm/morocco-map/data/regions.json"></script>

<!-- Provinces -->
<script src="https://cdn.jsdelivr.net/npm/morocco-map/data/provinces.json"></script>
```

## Usage

### With Node.js

```javascript
// Import regions
const regions = require('morocco-map');

// Or using ES6 imports
import regions from 'morocco-map';
import { provinces } from 'morocco-map/data/provinces.json';
```

### With D3.js

```javascript
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

// Load and render regions
d3.json('https://cdn.jsdelivr.net/npm/morocco-map/data/regions.json')
  .then(data => {
    const regions = topojson.feature(data, data.objects.regions);

    // Create your map visualization
    const projection = d3.geoMercator().fitSize([width, height], regions);
    const pathGenerator = d3.geoPath().projection(projection);

    svg.selectAll('path')
      .data(regions.features)
      .enter()
      .append('path')
      .attr('d', pathGenerator)
      .attr('class', 'region');
  });
```

### With TypeScript

```typescript
import { RegionsTopology, ProvincesTopology } from 'morocco-map';

const regions: RegionsTopology = require('morocco-map/data/regions.json');
const provinces: ProvincesTopology = require('morocco-map/data/provinces.json');
```

## Data Files

### regions.json

A TopoJSON file containing the **12 Moroccan regions**. Each region includes:

- **ISO 3166-2 compliant ID** (e.g., `MA-01` for Tanger-Tétouan-Al Hoceïma)
- **Multi-language names**: English, Arabic, and Berber
- **Accurate geographical boundaries**

**Size**: ~425 KB
**Download**: [regions.json](https://cdn.jsdelivr.net/npm/morocco-map/data/regions.json)

<img src="https://cdn.jsdelivr.net/npm/morocco-map/img/regions.png" width="480" alt="Morocco Regions Map">

#### Region List

| ID | English Name | Arabic Name |
|----|-------------|-------------|
| MA-01 | Tanger-Tétouan-Al Hoceïma | طنجة تطوان الحسيمة |
| MA-02 | L'Oriental | الشرقية |
| MA-03 | Fès-Meknès | فاس مكناس |
| MA-04 | Rabat-Salé-Kénitra | الرباط سلا القنيطرة |
| MA-05 | Béni Mellal-Khénifra | بني ملال خنيفرة |
| MA-06 | Casablanca-Settat | الدار البيضاء سطات |
| MA-07 | Marrakech-Safi | مراكش آسفي |
| MA-08 | Drâa-Tafilalet | درعة تافيلالت |
| MA-09 | Souss-Massa | سوس ماسة |
| MA-10 | Guelmim-Oued Noun | كلميم واد نون |
| MA-11 | Laâyoune-Sakia El Hamra | العيون الساقية الحمراء |
| MA-12 | Dakhla-Oued Ed-Dahab | الداخلة وادي الذهب |

### provinces.json

A TopoJSON file containing **Moroccan provinces and prefectures** with ISO 3166-2 compliant IDs.

**Size**: ~823 KB
**Download**: [provinces.json](https://cdn.jsdelivr.net/npm/morocco-map/data/provinces.json)

<img src="https://cdn.jsdelivr.net/npm/morocco-map/img/provinces.png" width="480" alt="Morocco Provinces Map">

## Examples

Live examples are available:
- [Regions Map Demo](http://yousfisaad.com/morocco-map/)
- [Provinces Map Demo](http://yousfisaad.com/morocco-map/provinces)

See the [examples folder](./examples) for complete source code.

### Running Examples Locally

```bash
# Clone the repository
git clone https://github.com/yousfiSaad/morocco-map.git
cd morocco-map

# Install dependencies
npm install

# Start local server
npm run example

# Open http://localhost:8080 in your browser
```

## Data Structure

### TopoJSON Format

Each file follows the [TopoJSON specification](https://github.com/topojson/topojson-specification):

```json
{
  "type": "Topology",
  "objects": {
    "regions": {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "MultiPolygon",
          "id": "MA-01",
          "properties": {
            "name:en": "Tanger-Tétouan-Al Hoceïma",
            "name:ar": "طنجة تطوان الحسيمة",
            "name": "..."
          },
          "arcs": [...]
        }
      ]
    }
  },
  "arcs": [...],
  "transform": {...}
}
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Data Source

This data is derived from [OpenStreetMap](https://www.openstreetmap.org/) and is made available under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/).

© OpenStreetMap contributors

## License

This project is licensed under the [ODbL-1.0 License](LICENSE) - see the LICENSE file for details.

## Roadmap

- [x] Set IDs in ISO 3166 standard for provinces/prefectures
- [ ] Add cities data
- [ ] Add GeoJSON format
- [ ] Add simplified versions for better performance
- [ ] Add additional metadata (population, area, etc.)

## Related Projects

- [topojson](https://github.com/topojson/topojson) - TopoJSON client and server
- [d3-geo](https://github.com/d3/d3-geo) - Geographic projections for D3
- [world-atlas](https://github.com/topojson/world-atlas) - TopoJSON files for the world

## Support

- **Issues**: [GitHub Issues](https://github.com/yousfiSaad/morocco-map/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yousfiSaad/morocco-map/discussions)

## Acknowledgments

- OpenStreetMap contributors for the geographical data
- The TopoJSON community for the format specification

---

Made with ❤️ for Morocco
