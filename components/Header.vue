<template>
    <div class="flex flex-row text-xl w-full sm:w-full py-7">
        <i class="bi bi-journal text-2xl basis-1/3"></i>

        <div class="basis-2/3 flex justify-end text-lg">
            <div class="px-3 select-container">
                <select class="select rounded-md" :class="(darkMode) ? 'dark-mode' : ''">
                    <option value="font">Serif</option>
                    <option value="font">Font</option>
                    <option value="font">font</option>
                    <option value="font">font</option>
                </select>
            </div>

            <div class="mt-[-25px]">
                <span>
                    <label>
                        <input @click="$emit('toggleMode')" type="checkbox" class="appearance-none peer rounded-md" />
                        <span class="w-10 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-slate-600 rounded-full duration-300 ease-in-out peer-checked:bg-gray-500 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4"></span>
                    </label>
                </span>
            </div>

            <div class="ml-5">
                <i class="bi text-2xl" :class="(darkMode) ? 'bi-moon' : 'bi-sun'"></i>
            </div>
        </div>

    </div>

</template>

<script setup>
const props = defineProps([ 'darkMode' ])

let input = ref(null)
console.log(input);

let isDark = ref('sun')

// if(props.darkMode){
//     isDark.value = sun
// }
</script>

<style scoped>
.select{
    width:80px;
}

option{
    display: block;
    padding: 7px;
}

.select-container{
    border-right: 2px solid rgb(185, 192, 200);
}

.dark-mode{
    background: #4d5b60;
}
</style>