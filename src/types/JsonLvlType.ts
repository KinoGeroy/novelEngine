export interface JsonLvlType {
    lvlId: number,

    data: Array<{
        dataType: number,
        dataId: number,
        speaker?: {
            speakerId: number,
            avatar: string,
            avatarName: string,
            messagesType: number
        },
        messageData?: {
            messagesType: number,
            messages: Array<{
                messageText: string,
                messageTextID: number
            }>,
        }

    }>,
}
