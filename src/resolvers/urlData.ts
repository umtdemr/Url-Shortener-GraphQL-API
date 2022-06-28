import { PrismaClient } from "@prisma/client";
import { IsUrl } from "class-validator";
import { Query, Resolver, ObjectType, Field, InputType, Mutation, Arg, ID } from "type-graphql";
import shortid from "shortid";



const prisma = new PrismaClient();

@ObjectType()
class UrlData {
  @Field(type => ID)
  readonly id: number;

  @Field()
  url: string;

  @Field()
  shortId: string;

  @Field({ nullable: true })
  createdAt: Date
}


@InputType()
class UrlDataInput {
  @Field()
  @IsUrl()
  url: string;
}


@Resolver()
export class UrlDataResolver {
  @Query(() => [UrlData])
  async getUrls() {
    const urlData = await prisma.urlData.findMany();
    return urlData
  }

  @Query(() => UrlData)
  async getUrl(
    @Arg('shortId') shortId: string
  ) {
    const urlData = await prisma.urlData.findUnique({ where: { shortId } });
    return urlData
  }

  @Mutation(() => UrlData)
  async createShortenerUrl(
    @Arg('data') { url }: UrlDataInput
  ) {
    const shortId = shortid.generate();
    const urlData = await prisma.urlData.create({
      data: { url, shortId }
    })
    return urlData
  } 
}
