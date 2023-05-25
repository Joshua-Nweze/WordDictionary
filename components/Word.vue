<template>
    <div class="flex py-9 align-middle">
        <div class="basis-2/3">
            <div class="text-5xl">{{ word }}</div>
            <div class="text-purple-600">{{ data[0].phonetic }}</div>
        </div>

        <div class="basis-1/3 flex justify-end">
            <button class="">
                <i
                v-if="wordAudio"
                class="bi py-1 px-2 border rounded-full bi-play-fill text-purple-600 bg-purple-200 outline-inherit text-3xl"
                @click="playWordAudio"
                ></i>
                <audio :src="wordAudio" id="wordAudio"></audio>
            </button>
        </div>
        
    </div>
</template>

<script setup>
let props = defineProps(['data', 'word'])

let wordAudio = ref()

let phonetics = props.data[0].phonetics;

for (const key in phonetics) {
    if (Object.hasOwn(phonetics, key)) {
        const prop = phonetics[key];
        if (prop.audio !== '') {
            wordAudio.value = prop.audio
        }
    }
}

function playWordAudio() {
    document.getElementById('wordAudio').play()
}

</script>

<style scoped>

</style>