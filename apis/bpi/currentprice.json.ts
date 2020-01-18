export interface Time {
  updated: string
  updatedISO: string
  updateduk: string
}

export interface CurrencyContent {
  code: string
  symbol: string
  rate: string
  description: string
  ratefloat: number
}

export interface Bpi {
  countryname: CurrencyContent[]
}

export interface Data {
  time: Time
  disclaimer: string
  chartName: string
  bpi: Bpi
}

export interface Methods {
  get: {
    resData: Data
  }
}
