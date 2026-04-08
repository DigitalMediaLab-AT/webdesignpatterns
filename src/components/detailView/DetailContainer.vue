<template>
  <div class="detail-container">
    
    <DetailElement
      v-for="pattern in patterns"
      :pattern="pattern"
      :key="pattern.title"
    />
  </div>
</template>



<script>
  import DetailElement from "./DetailElement";

  export default {
    name: "DetailContainer",
    components: { DetailElement },
    props: ["patterns"],
  };
</script>

<style lang="scss" scoped>
@use "../../style/mainStyles.scss" as ms;

/*über 480px*/
@media (min-width:480px) {
    
  .detail-container {
    margin-top:55px;
    
  }
}

</style>
