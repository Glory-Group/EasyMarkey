<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
}
html {
  font-size: calc(100 / 375 * 100vw);
}
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
html,
body {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 0.44rem;
  border-bottom: 1px solid #ccc;
  line-height: .44rem;
  display: flex;
  .header-back{
    flex:1;
    text-align: center;
  }
  .header-content{
    flex:8;
    text-align: center;
  }
  .header-right{
    flex:1
  }
}
.main {
  flex: 1;
  overflow: auto;
  background-color: #f5f5f9;
}
.footer {
  width: 100%;
  height: 0.44rem;
  display: flex;
  border-top: 1px solid #ccc;
  a {
    flex: 1;
    @extend %juzhong;
  }
}
</style>
