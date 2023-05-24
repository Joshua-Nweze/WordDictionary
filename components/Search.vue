<template>
    <div class="w-full">
        <label class="relative block">
            <span class="sr-only">Search</span>
            <input
             class="rounded-xl py-2 pr-9 pl-3 w-full bg-slate-100 focus:outline-none" 
             :class="(darkMode) ? 'dark-mode' : ''"
             placeholder="Search for anything..." 
             type="text" 
             name="search"
             v-model="word"
             @keydown.enter="getData"
            />
            <span 
             class="absolute inset-y-0 right-0 flex items-center px-4 text-sm cursor-pointer"
             :to="`/${word}`"
            @click="getData" 
            >
                <i class="bi bi-search"></i>
            </span>
        </label>
    </div>
</template>

<script setup>
const emit = defineEmits(['getData', 'getWord'])
const props = defineProps(['darkMode'])

let word = ref(null)

async function getData(){
    if (word.value) {
        useRouter().push(word.value)
    }
}

</script>

<style  scoped>
.dark-mode{
    background: #4d5b60;
}
</style>