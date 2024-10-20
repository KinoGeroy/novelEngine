import React from "react";
import {JsonLvlType} from "../../../types/JsonLvlType.ts";
import Messages from "./Messages.tsx";
import Button from "../../Button/Button.tsx";
import {AppDispatch} from "../../../redux/Store.ts";
import {useDispatch} from "react-redux";
import {nextLvl} from "../../../redux/SliceLvls.ts";


const WindowsTemplate: React.FC<{ jsonData: JsonLvlType }> = ({jsonData}) => {
    const dispatch: AppDispatch = useDispatch();

    const LvlType = (jsonData: JsonLvlType) => {
        return  jsonData.data.map((element) => {
            switch (element.dataType) {
                case "text":
                    if (element.messages) {
                        return <Messages key={element.dataId} messagesData={element} />;
                    }
                    break;
                case "button":
                    return <Button key={element.dataId} classType={element.button?.buttonTypeClass}
                                   onClick={() => dispatch(nextLvl(element.button?.nextLvl))}>
                        {element.button?.buttonText}
                    </Button>
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
