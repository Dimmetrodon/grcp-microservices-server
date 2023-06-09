import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { join } from 'path';
import {Transport} from '@nestjs/microservices'

const logger = new Logger('Main');
const microserviceOptions = 
{
  transport: Transport.GRPC,
  options:
  {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};

async function bootstrap() 
{
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen();
}
bootstrap();
