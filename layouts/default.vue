<template>
    <div class="container mx-auto lg:w-4/6">
      <Header />
      <Search
      />
      <!-- 
       @getData="getData"
       @getWord="getWord" -->
  
      <slot />
      <!-- <Transition>
        <div v-if="wordData">
          <Word
           :data="wordData"
           :word="word"
          />
          <Definitions :data="wordData"/>
        </div>
      </Transition> -->
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>