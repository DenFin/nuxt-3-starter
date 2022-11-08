export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    const { data, pending } = await $fetch(body.url)
    return { data, pending }
})
