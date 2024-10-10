
// import {JsonLvlType} from "../../../types/JsonLvlType.ts";
import React from "react";

//совместить\переделать, а то хуйня какая-то
interface SpeakerInterface {
    speakerData: {
        dataType: number,
        dataId: number,
        speaker?: {
            speakerId: number,
            avatar: string,
            avatarName: string,
            messagesType: number
        },
    },
}

const Speaker: React.FC<SpeakerInterface> = ({speakerData}) => {

    console.log(speakerData);

    return (
        <div>

        </div>
    );
};

export default Speaker;
