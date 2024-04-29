import { DataSourceModule } from "@app/data-source";
import { Module } from "@nestjs/common";
import { AdminModule } from "./modules/admin/admin.module";
import { AgentModule } from "./modules/agent/agent.module";
import { AuthModule } from "./modules/auth/auth.module";
import { ConversationModule } from "./modules/conversation/conversation.module";
import { UserModule } from "./modules/user/user.module";
import { WorkerModule } from "./modules/worker/worker.module";

@Module({
  imports: [
    
    AuthModule,
    AdminModule,
    AgentModule,
    UserModule,
    ConversationModule,
    WorkerModule,
    DataSourceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
