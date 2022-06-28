import { PrismaClient } from "@prisma/client";
import { Query, Resolver, Mutation, Arg, Subscription, Root, PubSub } from "type-graphql";
import shortid from "shortid";
import { PubSubEngine } from "graphql-subscriptions";
import { IURLPayload, UrlData } from "../graphql/types/UrlData";
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
    @Arg('data') { url }: UrlDataInput,
    @PubSub() pubSub: PubSubEngine
  ) {
    const shortId = shortid.generate();
    const urlData = await prisma.urlData.create({
      data: { url, shortId }
    })
    const payload: IURLPayload = {
      ...urlData
    }
    await pubSub.publish("URLS", payload);
    return urlData
  } 

  @Subscription({
    topics: "URLS"
  })
  newUrl(
    @Root() urlPayload: IURLPayload
  ): UrlData {
    return {...urlPayload};
  }
}

