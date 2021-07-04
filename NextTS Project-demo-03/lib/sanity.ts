import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent,
} from "next-sanity"

const config = {
    projectId:"x0wxk0cq",
    dataset:"production",
    apiVersion:"2021-03-25",
    useCdn:false,
}

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (sources: string):any=>createImageUrlBuilder(config).image(sources);

export const PortableText = createPortableTextComponent({
    ...config,
    serializers:{}
})