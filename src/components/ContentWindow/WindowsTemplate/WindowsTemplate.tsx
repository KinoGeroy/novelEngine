import React from "react";
import {JsonLvlType} from "../../../types/JsonLvlType.ts";
import Speaker from "./Speaker.tsx";
import Messages from "./Messages.tsx";

const WindowsTemplate: React.FC<{ jsonData: JsonLvlType }> = ({jsonData}) => {
    console.log(jsonData);

    const LvlType = (jsonData: JsonLvlType) => {
        return  jsonData.data.map((element) => {
            switch (element.dataType) {
                case 1:
                    return 'qwe';
                case 2:
                    return <Speaker key={element.dataId} speakerData={element}/>;
                case 3:
                    return <Messages key={element.dataId} messagesData={element}/>;
            }
        });
    }

    return (
        <div>
            {LvlType(jsonData)}
        </div>
    );
};

export default WindowsTemplate;
