<template>
  <div :class="(darkMode == true) ? 'dark-mode' : 'light-mode'" class="body">
    <div class="mx-auto lg:w-4/6 md:w-5/6 lg:text-base text-xl p-5">
      <Header
       @toggleMode="darkMode =! darkMode"
       :darkMode="darkMode"
      />
      <Search :darkMode="darkMode"/>

      <Transition :darkMode="darkMode">
        <slot/>
      </Transition>
    </div>
  </div>
    
</template>

<script setup>
let darkMode = ref(false)

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