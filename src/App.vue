<template>
  <v-app>
    <v-content>
    <v-container>
      <router-view/>
    </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">
  /* Default styles and helper classes */
  * {
    $transparent: rgba(0, 0, 0, 0);

    margin: 0;
    padding: 0;
    border: 0;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    word-break: break-word;
    hyphens: auto;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: $transparent;
  }

  [v-cloak] {
    display: none;
  }

  html,
  body {
    font-size: 100%;
  }

  body {
    min-height: 100vh;
    line-height: 1.25;
  }

  input {
    appearance: none;
  }

  ul {
    list-style: none;
  }

  a,
  input,
  button {
    transition: .25s;
  }

  .sr-only {
    position: absolute !important;
    top: 0;
    left: -999px;
    width: 1px !important;
    height: 1px !important;
    white-space: nowrap;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }

  .required label::after {
    top: -2px;
    content: '*';
    position: relative;
  }

  .v-content__wrap {
    display: flex;
    flex-direction: column;
  }

  .v-ripple__container {
  &,
  & * {
      max-width: none;
    }
  }

  a.router-link-active {
    color: #0d74d1;
  }
</style>
