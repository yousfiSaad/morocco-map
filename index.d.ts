// Type definitions for morocco-map
// Project: https://github.com/yousfiSaad/morocco-map
// Definitions by: Yousfi Saad

export as namespace MoroccoMap;

/**
 * Properties for Moroccan regions
 */
export interface RegionProperties {
  /** Region name in English */
  "name:en": string;
  /** Region name in Arabic */
  "name:ar": string;
  /** Full region name with all languages */
  name: string;
}

/**
 * Properties for Moroccan provinces and prefectures
 */
export interface ProvinceProperties {
  /** Province/Prefecture name in multiple languages */
  name: string;
}

/**
 * TopoJSON Geometry for a region
 */
export interface RegionGeometry {
  type: "Polygon" | "MultiPolygon";
  /** ISO 3166-2 code for the region (e.g., "MA-01") */
  id: string;
  properties: RegionProperties;
  arcs: number[][] | number[][][];
}

/**
 * TopoJSON Geometry for a province
 */
export interface ProvinceGeometry {
  type: "Polygon" | "MultiPolygon";
  /** ISO 3166-2 code for the province (e.g., "MA-TNG") */
  id: string;
  properties: ProvinceProperties;
  arcs: number[][] | number[][][];
}

/**
 * TopoJSON Geometry Collection for regions
 */
export interface RegionsGeometryCollection {
  type: "GeometryCollection";
  name: "regions";
  crs: {
    type: "name";
    properties: {
      name: string;
    };
  };
  geometries: RegionGeometry[];
}

/**
 * TopoJSON Geometry Collection for provinces
 */
export interface ProvincesGeometryCollection {
  type: "GeometryCollection";
  name: "provinces";
  crs: {
    type: "name";
    properties: {
      name: string;
    };
  };
  geometries: ProvinceGeometry[];
}

/**
 * TopoJSON Arc
 */
export type Arc = Array<[number, number]>;

/**
 * TopoJSON Transform
 */
export interface Transform {
  scale: [number, number];
  translate: [number, number];
}

/**
 * TopoJSON Topology for Moroccan regions
 * Contains the 12 Moroccan regions following ISO 3166 standard
 */
export interface RegionsTopology {
  type: "Topology";
  objects: {
    regions: RegionsGeometryCollection;
  };
  arcs: Arc[];
  transform?: Transform;
  bbox?: [number, number, number, number];
}

/**
 * TopoJSON Topology for Moroccan provinces
 * Contains Moroccan provinces and prefectures following ISO 3166 standard
 */
export interface ProvincesTopology {
  type: "Topology";
  objects: {
    provinces: ProvincesGeometryCollection;
  };
  arcs: Arc[];
  transform?: Transform;
  bbox?: [number, number, number, number];
}

/**
 * The main export - TopoJSON data for Moroccan regions
 */
declare const regions: RegionsTopology;
export default regions;

/**
 * TopoJSON data for Moroccan provinces
 */
export const provinces: ProvincesTopology;
