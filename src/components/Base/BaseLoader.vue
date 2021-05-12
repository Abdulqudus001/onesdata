<template>
  <div class="app-loader">
    <div></div>
    <div></div>
    <div></div>
  </div>  
</template>

<style lang="scss" scoped>
@keyframes pulse {
  from,
  50%,
  to {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }

  75% {
    transform: scale(1.2);
  }
}

.app-loader {
  display: flex;

  > div {
    width: 25px;
    height: 50px;
    background-color: #CCC;
    margin: 10px;
    border: 1px solid;
    animation: pulse 1.5s 0.5s linear infinite;
    padding: 2px;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.3s;
    }
  }
}
</style>
