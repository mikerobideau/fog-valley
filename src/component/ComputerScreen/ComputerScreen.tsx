import {FunctionComponent, useState} from "react";

import {isNewTranscriptUnlocked, searchTranscripts} from "../../service/transcript/transcriptService";
import {TranscriptData} from "../../model/Transcript";
import TranscriptList from "../TranscriptList/TranscriptList";
import Transcript from "../Transcript";
import Search from "../Search";
import {playRecordFound} from "../../service/audioService";

import './computerScreen.scss';

export const ComputerScreen: FunctionComponent = () => {
    const [transcripts, setTranscripts] = useState<TranscriptData[]>();
    const [transcript, setTranscript] = useState<TranscriptData | null>();
    const [unlockedTitles, setUnlockedTitles] = useState<string[]>([]);

    const onSearch = async (search: string) => {
        const newTranscripts = await searchTranscripts(search, unlockedTitles)
        setTranscripts(newTranscripts);
        if (newTranscripts && isNewTranscriptUnlocked(newTranscripts, unlockedTitles)) {
            playRecordFound();
        }
    }

    const onTranscriptSelected = (newTranscript: TranscriptData) => {
        setTranscript(newTranscript);
        if (!unlockedTitles.includes(newTranscript.title)) {
            setUnlockedTitles(unlockedTitles.concat(newTranscript.title))
        }
    }

    return (
        <div className="computer-screen">
            {!transcript && (<Search onSearch={onSearch} />)}
            {transcripts && !transcript && (
                <TranscriptList transcripts={transcripts} onTranscriptSelected={onTranscriptSelected}
                                unlockedTitles={unlockedTitles}/>)}
            {transcript && (
                <Transcript transcript={transcript} onBack={() => setTranscript(null)}></Transcript>)}
        </div>
    );
}