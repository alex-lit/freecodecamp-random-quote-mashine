<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  import QuoteBox from '@/components/quote-box';

  @Component<App>({
    components: { QuoteBox },
  })
  export default class App extends Vue {}
</script>

<template>
  <main class="app">
    <quote-box></quote-box>
  </main>
</template>

<style lang="postcss" scoped>
  .app {
    display: flex;
    min-width: 800px;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
</style>
