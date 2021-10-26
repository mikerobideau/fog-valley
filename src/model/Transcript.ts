import {Character} from "./Characters";

export interface TranscriptSimple {
    title: string;
    secret: string;
}

export interface TranscriptData {
    lines: string[];
    secret: string;
    title: string;
    character: Character;
}