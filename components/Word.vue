<template>
    <div class="grid grid-cols-12 py-9 align-middle">
        <div class="col-span-11 ">
            <div class="text-5xl">{{ word }}</div>
            <div class="text-purple-600">{{ data[0].phonetic }}</div>
        </div>
        <div class="col-span-1 border rounded-full bg-purple-200 grid place-content-center h-14">
            <i class="bi bi-play-fill text-purple-600 text-3xl "></i>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['data', 'word'])
let { data, word } = props

console.log(data[0])
</script>

<style scoped>

</style>