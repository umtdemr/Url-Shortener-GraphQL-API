import { PrismaClient } from "@prisma/client";
import { Query, Resolver, ObjectType, Field } from "type-graphql";


const prisma = new PrismaClient();

@ObjectType()
class UrlData {
  @Field()
  id: number;

  @Field()
  url: string;

  @Field()
  shortId: string;

  @Field({ nullable: true })
  createdAt: Date
}


@Resolver()
export class UrlDataResolver {
  @Query(() => [UrlData])
  async getUrls() {
    const urlData = await prisma.urlData.findMany();
    return urlData
  }
}
