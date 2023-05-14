<template>
    <div class="w-full">
        <label class="relative block">
            <span class="sr-only">Search</span>
            <input
             class="rounded-xl py-2 pr-9 pl-3 w-full bg-slate-100 focus:outline-none" 
             placeholder="Search for anything..." 
             type="text" 
             name="search"
             v-model="word"
             @keydown.enter="getData"
            />
            <span
             class="absolute inset-y-0 right-0 flex items-center px-4 text-sm cursor-pointer"
             @click="getData"
            >
                <i class="bi bi-search"></i>
            </span>
        </label>
    </div>
</template>

<script setup>
const emit = defineEmits(['getData', 'getWord'])

let word = ref(null)

async function getData(){
    if (word.value) {
        let api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
        const data = await api.json();
        emit('getData', data)
        emit('getWord', word.value)
        // console.log(useRoute().params);
    }
}

</script>

<style  scoped>

</style>