import {JsonLvlType} from "../ContentWindow.tsx";
import React from "react";


const WindowsTemplate: React.FC<{ jsonData: JsonLvlType }> = ({jsonData}) => {
    console.log(jsonData);

    const LvlType = (jsonData: JsonLvlType) => {
        return  jsonData.data.map((element: { dataType: number }) => {
            switch (element.dataType) {
                case 1:
                    console.log("speaker1")
                    return element.dataType;
                case 2:
                    console.log("speaker")
                    return element.dataType;
                case 3:
                    return element.dataType;
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
