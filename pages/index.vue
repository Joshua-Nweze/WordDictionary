<template>
    <div class="container mx-auto lg:w-3/6">
      <!-- <Header />
      <Search
       @getData="getData"
       @getWord="getWord" -->
  
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
  
  let wordData = ref(null)
  let word = ref(null)
  
  function getData(data){
    wordData.value = data
    console.log(wordData.value)
  }
  
  function getWord(data) {
    word.value = data
    // console.log(word.value)
  }
  
  
  </script>
  
  <style scoped>
  .v-enter-active, .v-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .v-enter-from, .v-leave-to {
    opacity: 0;
  }
  </style>