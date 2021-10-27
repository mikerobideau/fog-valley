import React, {FunctionComponent} from "react";
import Typewriter from "typewriter-effect";

import {pauseCharacterTheme, playCharacterTheme} from "../../service/audioService";
import {TranscriptData} from "../../model/Transcript";

import './transcript.scss';

export interface TranscriptProps {
    transcript: TranscriptData;
    onBack: () => void;
}

const Transcript: FunctionComponent<TranscriptProps> = ({transcript, onBack}) => {
    playCharacterTheme(transcript.character)

    const handleOnBack = () => {
        pauseCharacterTheme(transcript.character);
        onBack();
    }
    return (
        <div className="transcript" id="transcript">
            <div className="back" onClick={handleOnBack}>BACK</div>
            <Typewriter
                onInit={(typewriter)=> {
                    transcript.lines.forEach(line =>
                        typewriter
                            .changeDelay(50)
                            .typeString(line)
                            .typeString('<br />')
                            .pauseFor(1000)
                            .start());
                }}
            />
        </div>
    )
}

export default Transcript;