import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScreenersAndDiagnosticsModule } from './screeners-and-diagnostics/screeners-and-diagnostics.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    ScreenersAndDiagnosticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
