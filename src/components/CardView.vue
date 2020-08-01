<template>
<div>
  <div class="card">
    {{ message }}
    <button class="bg-blue-500 hover:bg-blue-700 border-blue-500 text-black font-bold py-2 px-4 rounded" @click="onClick">
      Change
    </button>
  </div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="/static/zenSecurity.svg" alt="Mind Map">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>

<style>
.card {
  padding: 20px;
  background: whitesmoke;
  border: 2px dashed #fecd43;
}
</style>