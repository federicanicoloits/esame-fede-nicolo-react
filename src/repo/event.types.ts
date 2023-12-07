export type EventType = {
  id: number;
  name: string;
  coverImage: string;
  date: Date;
  datatotale: string;
  dataora: Array<string>;
  description: {
    short: string;
    long: Array<string>;
  };
  dresscode: string;
  price: number;
  includedDrinks: Array<string>;
  tags: Array<string>;
  isAperitivoIncluded: boolean;
  includedDishes: {
    name: string;
    description: string;
    allergens: Array<string>;
  }[];
};

export type EventTypeTotal = {
  id: number;
  name: string;
  coverImage: string;
  date: Date;
  datatotale: string;
  dataora: Array<string>;
  description: {
    short: string;
  };
  dresscode: string;
  price: number;
  includedDrinks: Array<string>;
  tags: Array<string>;
  isAperitivoIncluded: boolean;
};
