import {FunctionComponent} from "react";

import TranscriptPreview from "./TranscriptPreview";
import {TranscriptData} from "../../model/Transcript";

import './transcriptList.scss';

export interface TranscriptListProps {
    transcripts: TranscriptData[],
    onTranscriptSelected: (transcript: TranscriptData) => void;
    unlockedTitles: string[]
}

export const TranscriptList: FunctionComponent<TranscriptListProps> = ({transcripts, onTranscriptSelected,
                                                                       unlockedTitles}) => {
    return (
        <div className="transcript-list">
            {transcripts.map(transcript =>
                <TranscriptPreview key={transcript.title} transcript={transcript}
                                   onTranscriptSelected={onTranscriptSelected}
                                   isNewUnlock={!unlockedTitles.includes(transcript.title)} />)}
        </div>
    );
}

export default TranscriptList;