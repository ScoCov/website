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
  sprites?: Sprites,
  stats?: [],
  types?: [],
  weight?: number
}

interface Sprites extends Sprites_Front, Sprites_Back {
  other: Sprites_Other,
  versions: Sprites_Versions
}

interface Sprites_Front {
  front_default: string,
  front_female: string,
}

interface Sprites_Front_Shiny {
  front_shiny: string,
  front_female_shiny: string,
}

interface Sprites_Back {
  back_default: string,
  back_female: string,
}

interface Sprites_Back_Shiny {
  back_default_shiny: string,
  back_female_shiny: string,
}


interface Sprites_Other {
  dream_world: Sprites_Front,
  home: Sprites_Other_Home
  official_artwork: Sprites_Front,
  showdown: Sprites_Other_Showdown
}

interface Sprites_Versions {
  generation_i: Sprites_Generation_I,
  generation_ii: Sprites_Generation_II,
}

interface Sprites_Other_Home extends Sprites_Front, Sprites_Front_Shiny{}

interface Sprites_Other_Showdown extends Sprites_Front, Sprites_Front_Shiny, Sprites_Back, Sprites_Back_Shiny{}

interface Sprites_Generation_I {
  red_blue: {
    back_default: string,
    back_gray: string,
    back_transparent: string,
    front_default: string,
    front_gray: string,
    front_transparent: string,
  }
  yellow: {
    back_default: string,
    back_gray: string,
    back_transparent: string,
    front_default: string,
    front_gray: string,
    front_transparent: string,
  }
}

interface Sprites_Generation_II {
  crystal: {
    back_default: string,
    back_shiny: string,
    back_transparent: string,
    back_shiny_transparent: string,
    front_default: string,
    front_shiny: string,
    front_transparent: string,
    front_shiny_transparent: string
  },
  gold: {
    back_default: string,
    back_shiny: string,
    front_default: string,
    front_shiny: string,
    front_transparent: string,
  },
  silver: {
    back_default: string,
    back_shiny: string,
    front_default: string,
    front_shiny: string,
    front_transparent: string,
  }
}
