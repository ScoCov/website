export interface Pokemon {
  id?: number,
  name: string,
  url?: string,
  img_url?: string
}

export interface PokemonDetails extends Pokemon{
  abilities?: [],
  base_experience?: number,
  forms?: [],
  game_indicies?: [],
  height?: number,
  held_items?: [],
  is_default?: boolean,
  location_area_encounters?: string,
  moves?: [],
  order?: number,
  past_abilities?: [],
  past_types?: [],
  species?: [],
  sprites?: [],
  stats?: [],
  types?: [],
  weight?: number
}
