export declare global {
  interface Window {
    longdo: any;
  }
}

export type Location = {
  lon: number;
  lat: number;
};

export declare namespace map {
  namespace value {
    class Map {
      constructor(options: { placeholder: HTMLElement });
      location(coordinates: Location): void;
      Polyline(coordinates: Location): void;
      zoom(zoomLevel: number): void;
    }
    class Polyline {
      constructor(line: Array<location>, option: { lineColor: string });
    }
    class Overlay {
      add(geometry: Polyline): void;
    }
  }
}

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}
