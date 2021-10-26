import {FunctionComponent} from "react";

import {TranscriptData} from "../../model/Transcript";

import './transcriptPreview.scss';

export interface TranscriptPreviewProps {
  transcript: TranscriptData;
  onTranscriptSelected: (transcript: TranscriptData) => void;
  isNewUnlock: boolean;
};

export const TranscriptPreview: FunctionComponent<TranscriptPreviewProps> =
    ({transcript, onTranscriptSelected, isNewUnlock}) =>
      <div key={transcript.title}
           className={`transcript-preview ${isNewUnlock ? 'transcript-preview-new' : ''} `}
           onClick={() => onTranscriptSelected(transcript)}>
        {transcript.title}
      </div>

export default TranscriptPreview;