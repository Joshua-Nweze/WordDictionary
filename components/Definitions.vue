<template>
    <div v-for="word in data">
        <div v-for="word in word.meanings">
            <div class="flex">
                <span class="part-of-speech">{{ word.partOfSpeech }}</span>
                <span class="line grow h-px bg-slate-200 mt-3 ml-3"></span>
            </div>
            <div class="mt-6 mb-10">
                <div class="text-slate-500 text-base">Meaning</div>

                <div>
                    <div v-for="definition in word.definitions">
                    <li class="my-3 ml-7">{{ definition.definition }}</li>
                    <p
                     class="text-slate-500 ms-10"
                     :class="(darkMode) ? 'dark-mode' : ''"
                     v-if="definition.example"
                     >
                     "{{ definition.example }}"
                    </p>
                </div>

                <div class="flex-wrap flex" v-if="word.synonyms[0]">
                    Synonyms: <span class="text-purple-600 mx-1" v-for="synonym in word.synonyms">{{ synonym }}</span>
                </div>

                <div class="flex-wrap flex mt-4" v-if="word.antonyms[0]">
                    Opposite: <span class="text-purple-600 mx-1" v-for="antonym in word.antonyms">{{ antonym }}</span>
                </div>

                </div>
            </div>
        </div>
    
    </div>

    <div class="border-t pb-14 flex-wrap break-all flex" v-if="data[0].sourceUrls[0]">
        Source: <span class="pl-6 text-blue-600">
            <a :href="data[0].sourceUrls[0]" target="_blank">{{ data[0].sourceUrls[0] }}</a>
        </span>
    </div>
</template>
 
<script setup>
const props = defineProps(['data', 'darkMode'])
let { data } = props

</script>

<style scoped>
.part-of-speech{
    font-family: 'Lobster Two', cursive;
}

.a{
    margin-bottom: 10px;
}
.dark-mode{
    color: #00bbff;
}
</style>