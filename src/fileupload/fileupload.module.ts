import { Module } from "@nestjs/common";
import { FileUploadController } from "./fileupload.controller";

@Module({
  controllers: [FileUploadController]
})
export class FileUploadModule {}