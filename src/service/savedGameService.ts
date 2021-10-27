import {postJson} from "./apiService";
import {TranscriptData} from "../model/Transcript";
import {SAVE_TRANSCRIPTS_ENDPOINT} from "../model/Endpoint";

export const saveTranscripts = (transcripts: TranscriptData[], userId: string) =>
    postJson(SAVE_TRANSCRIPTS_ENDPOINT, {
        paths: transcripts.map(transcript => `${transcript.character}/${transcript.title}`),
        userId
    });
