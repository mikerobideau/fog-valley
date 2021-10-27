import {TranscriptResponse} from "../../model/Transcript";

import {TRANSCRIPTS_ENDPOINT} from "../../model/Endpoint";
import {postJson} from "../apiService";

export const searchTranscripts = (search: string): Promise<TranscriptResponse> =>
    postJson(TRANSCRIPTS_ENDPOINT, {keyword: search, userId: 'michael.d.robideau@gmail.com'});