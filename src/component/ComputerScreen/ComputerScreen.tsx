import React, {FunctionComponent, useState, useEffect} from "react";

import {searchTranscripts} from "../../service/transcript/transcriptService";
import {TranscriptData} from "../../model/Transcript";
import TranscriptList from "../TranscriptList/TranscriptList";
import Transcript from "../Transcript";
import Search from "../Search";
import {playRecordFound} from "../../service/audioService";
import {findUserById, getUserId} from "../../service/userService";
import {User} from "../../model/User";
import {saveTranscripts} from "../../service/savedGameService";

import './computerScreen.scss';

export const ComputerScreen: FunctionComponent = () => {
    const userId = getUserId();
    const [user, setUser] = useState<User>();
    const [transcripts, setTranscripts] = useState<TranscriptData[]>();
    const [transcript, setTranscript] = useState<TranscriptData | null>();

    useEffect(() => {
        (async() => {
            setUser(await findUserById(userId))
        })();
    }, []);

    const onSearch = async (search: string) => {
        const {hasNewTranscripts, newTranscripts, previousTranscripts, lockedTranscripts} =
            await searchTranscripts(search)
        setTranscripts(newTranscripts.concat(previousTranscripts).concat(lockedTranscripts));
        if (hasNewTranscripts) {
            saveTranscripts(newTranscripts, userId);
            playRecordFound();
        }
    }

    const onTranscriptSelected = (newTranscript: TranscriptData) => {
        setTranscript(newTranscript);
    }

    return (
        <div className="computer-screen">
            {user && (<h4 className="user">{`Welcome, ${user.firstName}`}</h4>)}
            {!transcript && (<Search onSearch={onSearch} />)}
            {transcripts && !transcript && (
                <TranscriptList transcripts={transcripts} onTranscriptSelected={onTranscriptSelected}/>)}
            {transcript && (
                <Transcript transcript={transcript} onBack={() => setTranscript(null)}></Transcript>)}
        </div>
    );
}