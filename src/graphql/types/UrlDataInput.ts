import { IsUrl } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UrlDataInput {
  @Field()
  @IsUrl()
  url: string;
}

