import React from "react";

interface SpeakerInterface {
    speaker: {
        dataType: string,
        speakerId: number,

        speaker?: {

            speakerName?: string,
            avatar?: string,
        },
    }
}

const Speaker: React.FC<SpeakerInterface> = ({speaker}) => {

    return (
        <div>
            {
                speaker.speaker?.speakerName
            }
        </div>
    );
};

export default Speaker;
