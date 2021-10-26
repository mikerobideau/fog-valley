import {Character} from "../model/Characters";

const RECORD_FOUND = new Audio('https://freesound.org/data/previews/571/571484_7114905-lq.mp3');
const CORRECT_ANSWER = new Audio('https://freesound.org/data/previews/528/528957_10334845-lq.mp3');
const CORRECT = new Audio('https://freesound.org/data/previews/421/421002_7614679-lq.mp3');
const FOOTSTEPS_DRY_LEAVES = new Audio("https://freesound.org/data/previews/329/329601_5121236-lq.mp3");
const GHOSTS = new Audio("https://freesound.org/data/previews/36/36147_205108-lq.mp3");
const DRAMATIC_NIGHTMARE = new Audio('https://freesound.org/data/previews/387/387510_6762561-lq.mp3');
const CINEMATIC_TRILLER = new Audio('https://freesound.org/data/previews/528/528957_10334845-lq.mp3');
const CROWD_IN_A_BAR = new Audio("https://freesound.org/data/previews/163/163995_59982-lq.mp3");

const PROFESSOR_THEME = new Audio('https://freesound.org/data/previews/474/474353_9497060-lq.mp3');
const ALLEN_THEME = CROWD_IN_A_BAR;

const characterThemes = new Map([
    ['The Professor', PROFESSOR_THEME],
    ['Allen', ALLEN_THEME]]);

export const playRecordFound = () => {
    CORRECT_ANSWER.play();
}

export const playCharacterTheme = (character: Character) => characterThemes.get(character)?.play();

export const pauseCharacterTheme = (character: Character) => characterThemes.get(character)?.pause();