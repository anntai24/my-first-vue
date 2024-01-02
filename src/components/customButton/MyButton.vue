<script>
export default {};
</script>

<template>
  <section id="myBtn">
    <button class="btn" type="button">
      <slot />
    </button>
  </section>
</template>

<style lang="scss" scoped>
#myBtn {
  .btn {
    @apply border-black border-[3px] px-[10px] py-[5px] hover:text-[blue] bg-main-deep;
  }
}
</style>
