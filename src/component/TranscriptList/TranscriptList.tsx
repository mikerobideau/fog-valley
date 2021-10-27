import React, {FunctionComponent} from "react";

import TranscriptPreview from "./TranscriptPreview";
import {TranscriptData} from "../../model/Transcript";

import './transcriptList.scss';

export interface TranscriptListProps {
    transcripts: TranscriptData[],
    onTranscriptSelected: (transcript: TranscriptData) => void;
}

export const TranscriptList: FunctionComponent<TranscriptListProps> = ({transcripts, onTranscriptSelected}) => {
    return (
        <div className="transcript-list">
            {transcripts.map(transcript =>
                <TranscriptPreview key={transcript.title} transcript={transcript}
                                   onTranscriptSelected={onTranscriptSelected}
                                   isNewUnlock={false} />)}
        </div>
    );
}

export default TranscriptList;