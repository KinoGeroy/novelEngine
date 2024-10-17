import React from "react";

interface SpeakerInterface {
    speaker: {
        dataType: string,
        dataId: number,

        speaker: {
            speakerId: number,
            speakerName: string,
            avatar: string,
        },
    }
}

const Speaker: React.FC<SpeakerInterface> = ({speaker}) => {

    return (
        <div>
            {
                speaker.speaker.speakerName
            }
        </div>
    );
};

export default Speaker;
