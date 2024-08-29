import { works } from './works.js'

export function load() {
    const data = works.find((work) => ({
        link: work.link,
        name: work.name,
        image: work.logoImage,
        year: work.year,
        type: work.type
    }))
    return {
        data
    }
}