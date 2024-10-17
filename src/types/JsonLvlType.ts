export interface JsonLvlType {
    lvlId: number,
    lvlType: string,

    data: Array<{
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
    }>,
}
