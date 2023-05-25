<template>
  <div :class="(darkMode == true) ? 'dark-mode' : 'light-mode', font" class="body">
    <div class="mx-auto lg:w-4/6 md:w-5/6 text-base p-5">
      <Header
       @toggleMode="darkMode =! darkMode"
       :darkMode="darkMode"
       @setFont="setFont"
      />
      <Search :darkMode="darkMode"/>

        <slot/>

    </div>
  </div>
    
</template>

<script setup>
let darkMode = ref(false)
let font = ref()

function setFont(fontValue) {
  font.value = fontValue
}

</script>

<style scoped>
.dark-mode{
  background: #22282a;
  color: white;
  transition: ease 1s;
}

.light-mode{
  transition: ease 1s;
}

.body{
  min-height: 100vh;
}

</style>