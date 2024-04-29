import { datasource } from "../data-source";
import { CreateConversationDto } from "./message.dto";

export class MessageService {
  constructor() {}

  async newMessage(inputs: CreateConversationDto) {

    
    const user = await datasource.user.findUnique({
      where: { username_role: { username: inputs.username, role: "user" } },
    });

    if (!user) {
      await datasource.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            role: "user",
            username: inputs.username,
          },
        });

        const conversation = await tx.conversation.create({
          data: {
            title: inputs.title,
            userId: user.id,
            canal: inputs.canal
          },
        });

        const message = await tx.message.create({
          data: {
            text: inputs.text,
            conversationId: conversation.id,
            userId: user.id,
          },
        });
      });
    } else {
      const conversation = await datasource.conversation.findFirst({
        where: {
          status: { not: "close" },
          userId: user.id,
        },
      });

      if (conversation) {
        await datasource.message.create({
          data: {
            text: inputs.text,
            userId: user.id,
            conversationId: conversation.id,
          },
        });
      }else{
        await datasource.$transaction(async (tx) => {

          const conversation = await tx.conversation.create({
            data:{
              title: inputs.title,
              userId: user.id,
              canal: inputs.canal
            }
          })

          await tx.message.create({
            data:{
              conversationId: conversation.id,
              text: inputs.text,
              userId: user.id
            }
          })
        });

      }
    }

    return "OK"
  }
}
