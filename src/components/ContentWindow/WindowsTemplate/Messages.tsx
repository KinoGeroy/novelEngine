import React from "react";
import Speaker from "./Speaker.tsx";
import style from './Messages.module.scss';

interface messagesInterface {
    messagesData: {
        dataType: string,
        dataId: number,
        speakers: Array<{
            dataType: string,
            dataId: number,

            speaker: {
                speakerId: number,
                speakerName: string,
                avatar: string,
            },
        }>,

        messages?: Array<{
            messageText: string,
            messageTextID: number,
            speakerId: number,
        }>,
    }
}

const Messages: React.FC<messagesInterface> = ({messagesData}) => {
    return (
        <div>
            <ul className={style.Messages}>
                {messagesData.messages?.map((message) => (
                    messagesData.speakers.map((speaker) => {
                        if (message.speakerId === speaker.speaker.speakerId) {
                            return (
                                <li key={message.messageTextID}>
                                    <Speaker speaker={speaker}/>
                                    <p>
                                        {message.messageText}
                                    </p>
                                </li>
                            );
                        }
                        return null;
                    })
                ))}
            </ul>
        </div>
    );
};

export default Messages;
