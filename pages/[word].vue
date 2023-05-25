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

        <Transition>
            <div v-if="loading">
                <Loader />
            </div>
        </Transition>

    </div>
</template>

<script setup>

let { word } = useRoute().params
let data = ref()
let error = ref(false)

let loading = ref(true)

async function apiCall() {
    loading.value = true
    let api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    if (api.status == 200) {
        error.value = false

        data.value = await api.json();
        loading.value = false
    } else {
        error.value = true
        loading.value = false
    }
}

apiCall()




</script>

<style scoped>

</style>