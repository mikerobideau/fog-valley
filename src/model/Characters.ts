import {TranscriptSimple} from "./Transcript";

export interface CharacterTranscripts {
    name: string;
    transcripts: TranscriptSimple[]
}

export type Character = 'Professor' | 'Helen';