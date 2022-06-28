import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class UrlData {
  @Field(type => ID)
  readonly id: number;

  @Field()
  url: string;

  @Field()
  shortId: string;

  @Field({ nullable: true })
  createdAt: Date
}


export interface IURLPayload {
  id: number;
  url: string;
  shortId: string;
  createdAt?: Date
}
