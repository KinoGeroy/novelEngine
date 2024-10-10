import React from "react";
// import {dataType} from "../../../types/dataType.ts";

interface messagesInterface {
    messagesData: {
        dataType: number,
        dataId: number,
        messageData?: {
            messagesType: number,
            messages: Array<{
                messageText: string,
                messageTextID: number,
            }>,
        },
    },
}

const Messages: React.FC<messagesInterface> = ({messagesData}) => {
    console.log(messagesData.messageData?.messages)

    return (
        <div>
            <ul>
                {
                    messagesData.messageData?.messages.map((message) => (
                        <li key={message.messageTextID}>
                            <p>{message.messageText}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Messages;
