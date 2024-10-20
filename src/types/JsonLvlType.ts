export interface JsonLvlType {
    lvlId: number,
    lvlLanguage: string,
    lvlName: string,
    lvlType: string,

    data: Array<{
        dataType: string,
        dataId: number,
        speakers?: Array<{
            dataType: string,
            speakerId: number,
            speaker: {
                speakerName: string,
                avatar?: string,
            },
        }>,
        messages?: Array<{
            messageText: string,
            messageTextID: number,
            speakerId: number,
        }>,
        button?: {
            buttonText: string,
            buttonTypeClass: number,
            nextLvl: string
        }
    }>,
}
