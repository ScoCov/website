export interface Pokedexresults {
  count: number,
  next: string | null,
  previous: string | null,
  results: {
    name: string,
    url: string,
    id?: string
  }[]
}
