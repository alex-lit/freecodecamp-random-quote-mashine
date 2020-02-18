<script lang="ts">
  import { random } from 'lodash';
  import { Component, Vue } from 'vue-property-decorator';

  const { quotes } = require('./quote-box.data.json');

  @Component<QuoteBox>({})
  export default class QuoteBox extends Vue {
    currentQuote = {};

    setRandomQuote() {
      this.currentQuote = quotes[random(0, quotes.length - 1)];
      console.log(this.currentQuote);
    }

    created() {
      this.setRandomQuote();
    }
  }
</script>

<template>
  <div id="quote-box" class="quote-box">
    <div class="quote-box__text">
      <i class="fa fa-quote-left"> </i>
      <span id="text">{{ currentQuote.quote }}</span>
    </div>
    <div class="quote-box__author">
      - <span id="author">{{ currentQuote.author }}</span>
    </div>
    <div class="quote-box__buttons-wrap">
      <a
        id="tweet-quote"
        class="quote-box__button"
        title="Tweet this quote!"
        target="_blank"
        :href="
          `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${currentQuote.quote}
      ${currentQuote.author}`
        "
      >
        <el-link>Tweet</el-link>
      </a>
      <el-button id="new-quote" class="quote-box__button" @click="setRandomQuote">
        New quote
      </el-button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .quote-box {
    width: 460px;
    padding: 40px;
    background-color: var(--white);
    border-radius: 4px;
    box-shadow: var(--box-shadow);
  }

  .quote-box__text {
    margin-bottom: 20px;
    font-size: 24px;

    & i {
      margin-right: 10px;
    }
  }

  .quote-box__author {
    display: block;
    margin-bottom: 20px;
    color: var(--gray--500);
    text-align: right;
  }

  .quote-box__buttons-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .quote-box__button {
  }
</style>
