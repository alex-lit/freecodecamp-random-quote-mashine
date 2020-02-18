<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component<QuoteBox>({})
  export default class QuoteBox extends Vue {}
</script>

<template>
  <div id="quote-box">
    <div class="quote-text"><i class="fa fa-quote-left"> </i><span id="text"></span></div>
    <div class="quote-author">- <span id="author"></span></div>
    <div class="buttons">
      <a class="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
        <i class="fa fa-twitter"></i>
      </a>
      <a class="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
        <i class="fa fa-tumblr"></i>
      </a>
      <button class="button" id="new-quote">New quote</button>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
