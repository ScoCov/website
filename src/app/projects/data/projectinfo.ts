import { Project } from "../interfaces/project";

export const PROJECTS: Project[] = [
  {
    name:"PokeDex",
    description: "This project is meerly to demonstrate my capabilities with API and UI/UX design. There's no pratical use for this beyond novelty and practice in utilizing APIs. This project utilizes the pokedex api https://pokeapi.co/.",
    url: "pokedex",
    viewable: true,
    accessText: "Navigate To Page"
   },
   {
    name:"OldSchool Runescape Calculator",
    description: "This was a long term project that I developed through Excel. Development began before I went to college for programming. It's been developed over many years; off-and-on. It never left prototype stage. It's purpose was to help calculate combat statistics during the game; according to a myriad of data points.",
    url: "OSRSCalc",
    viewable: false,
   },
   {
    name:"My First Game",
    description: "This was my very first game made in Javascript. This was extremely early on in my career and while primitive I am very proud of this project. I taught myself how to program a game from complete scratch.",
    url: "stormthehouseclone",
    viewable: false,
   },
   {
    name:"Unnamed Survivor Game",
    description: "This project is being built in the Godot Engine. It's a long-term project that is being done in collaboration with a friend who is an artist. The game will be of the Rogue-Like 'Survivor' genre.",
    url: "stormthehouseclone",
    viewable: false,
   },
   {
    name:"Legaia Move Manager",
    description: "This was a quick program to help manage a complex system in a video game that my friend and I were playing through. It was designed to not just manage but develope the complexity of the 'attack moves'.",
    url: "legaiamanager",
    viewable: false,
   },
]
