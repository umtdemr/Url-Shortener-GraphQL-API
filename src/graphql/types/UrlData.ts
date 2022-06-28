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
