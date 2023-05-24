<template>
    <div>
        <Transition v-if="data">
            <div>
                <Word
                :data="data"
                :word="word"
                />
                <Definitions :data="data"/>
            </div>
        </Transition>

        <Transition>
            <div v-if="error">
                <Error />
            </div>
        </Transition>
    </div>
</template>

<script setup>

let { word } = useRoute().params
let data = ref()
let error = ref(false)

let api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

if (api.status == 200) {
    error.value = false
    data = await api.json();
} else {
    error.value = true
}

</script>

<style scoped>

</style>