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

export interface TranscriptResponse {
    hasNewTranscripts: boolean,
    totalTranscripts: number;
    totalUnlockedTranscripts: number;
    totalLockedTranscripts: number;
    totalNewTranscripts: number;
    newTranscripts: TranscriptData[],
    previousTranscripts: TranscriptData[],
    lockedTranscripts: TranscriptData[]
}