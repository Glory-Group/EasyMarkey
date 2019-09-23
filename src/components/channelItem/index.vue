<template>
   <div class="channelBox">
               <div class="channel-item" v-for="(item) in channel" :key="item.id"  >
                  <span> <img v-lazy="item.icon_url" :alt="item.name"> </span><span>{{item.name}}</span>
               </div>
   </div>
</template>
<script>
export default {
  props: {
      channel:{
          type:Array
      }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">

</style>