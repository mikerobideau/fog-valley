import {TranscriptData} from "../../model/Transcript";

import {BRUTE_FORCE_ENDPOINT} from "../../model/Endpoint";
import {postJson} from "../apiService";

export const searchTranscripts = (search: string, unlockedSecrets: string[]): Promise<TranscriptData[]> =>
    postJson(BRUTE_FORCE_ENDPOINT, {keyword: search});

export const isNewTranscriptUnlocked = (transcripts: TranscriptData[], unlockedTitles: string[]): boolean =>
    transcripts.some(transcript => !unlockedTitles.includes(transcript.title));