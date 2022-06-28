import { PrismaClient } from "@prisma/client";
import { Query, Resolver, Mutation, Arg } from "type-graphql";
import shortid from "shortid";
import { UrlData } from "../graphql/types/UrlData";
import { UrlDataInput } from "../graphql/types/UrlDataInput";


const prisma = new PrismaClient();

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
