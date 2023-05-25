<template>
    <div class="flex flex-row text-xl w-full sm:w-full py-7">
        <i class="bi bi-journal text-2xl basis-1/3"></i>

        <div class="basis-2/3 flex justify-end text-lg">
            <div class="px-3 select-container">
                <div class="dropdown rounded-md">
                    <button class="" :class="(darkMode) ? 'dropbtn-dark' : 'dropbtn'">{{ font }}</button>
                    <div class="dropdown-content" :class="(darkMode) ? 'dropdown-dark' : 'dropdown-light'">
                        <span @click="setFont('font-sans')">Sans-serif</span>
                        <span @click="setFont('font-serif')">Serif</span>
                        <span @click="setFont('font-mono')">Monospace</span>
                    </div>
                </div>

                
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
defineProps([ 'darkMode' ])
let emit = defineEmits([ 'setFont' ])

let isDark = ref('sun')
let font = ref('Sans-serif')

let fonts = reactive({
    "font-sans": "San-serif",
    "font-serif": "Serif",
    "font-mono": "Monospace"
})

function setFont (fontFamily) {
    emit('setFont', fontFamily)

    for (const key in fonts) {
        if (Object.hasOwn(fonts, key)) {
             if (key == fontFamily) {
                font.value = fonts[key]
            }
         }
    }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  color: #333;
  border: none;
  cursor: pointer;
  width: fit-content;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-dark, .dropbtn-dark{
    background-color: #22282a;
    color: #f9f9f9;
}

.dropdown-light{
    background-color: #f9f9f9;
}

.dropdown-dark span:hover{
  background-color: rgb(92, 92, 92);
  cursor: pointer;
}

.dropdown-content span {
  padding: 5px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-light span:hover {
  background-color: #ddd;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.select-container{
    border-right: 2px solid rgb(185, 192, 200);
}

.dark-mode{
    background: #4d5b60;
}
</style>