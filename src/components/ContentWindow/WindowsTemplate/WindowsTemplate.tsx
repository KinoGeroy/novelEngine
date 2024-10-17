import React from "react";
import {JsonLvlType} from "../../../types/JsonLvlType.ts";
// import Speaker from "./Speaker.tsx";
import Messages from "./Messages.tsx";

const WindowsTemplate: React.FC<{ jsonData: JsonLvlType }> = ({jsonData}) => {

    const LvlType = (jsonData: JsonLvlType) => {
        return  jsonData.data.map((element) => {
            switch (element.dataType) {
                case "text":

                    if (element.messages) {
                        console.log();
                        return <Messages key={element.dataId} messagesData={element} />;
                    }
                    break;
                case "img":
                    console.log(element)
                    break;
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
