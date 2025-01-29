import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonesModule } from './phones/phones.module';

@Module({
  imports: [PhonesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
