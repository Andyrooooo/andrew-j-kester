import { works } from '../works.js'

export function load({ params }) {
    const link = works.find((work) => work.link === params.link)

    return {
        link
    }
}