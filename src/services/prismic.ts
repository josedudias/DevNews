import * as Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
    const endpoint = Prismic.getEndpoint('devnewsjose');
    const accessToken = process.env.PRISMIC_ACCESS_TOKEN
    const prismic = Prismic.createClient(endpoint, { accessToken })

    return prismic;
}