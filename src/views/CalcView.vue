<script>
// 引入元件
import MyButton from '@/components/customButton/MyButton.vue';

export default {
  // 宣告即將用到的元件
  components: {
    MyButton,
  },

  // 放置所有變數的位置
  data() {
    return {
      numA: 0,
      numB: 0,
      result: 0,
      html: `
            <div>
                我是html文字
            </div>
      `,
    };
  },
  //   放置所有function的位置
  methods: {
    add() {
      // 先判斷numA numB 不為空
      if (
        this.numA.toString().trim() === '' ||
        this.numB.toString().trim() === ''
      )
        return;
      this.result = this.numA + this.numB;
    },
  },
};
</script>

<template>
  <!-- v-if -->
  <!-- v-else-if -->
  <!-- v-else -->

  <!-- v-show -->

  <!-- v-for 記得要補:key -->

  <!-- v-html 最常用於所見即所得編輯器 -->

  <!-- v-bind 省略的寫法":" -->
  <!-- v-model => input與變數的連結 -->

  <!-- v-on 省略的寫法"@" 後面連接觸發的事件名稱 -->

  <div class="calc">
    計算機
    <div v-html="html"></div>
    <div>
      <label>
        數字A:
        <!-- v-model => 將輸入框跟變數綁訂在一起 -->
        <input v-model="numA" type="number" />
      </label>
    </div>
    <div>
      <label>
        數字B:
        <input v-model="numB" type="number" />
      </label>
    </div>

    <div class="btns">
      <!-- 方法一 原寫法 -->
      <!-- <button class="btn" type="button" @click="add()">+</button> -->
      <!-- <button class="btn" type="button">-</button>
      <button class="btn" type="button">*</button>
      <button class="btn" type="button">/</button> -->

      <!--方法二 引用component寫法 -->
      <MyButton @click="add()">+</MyButton>
      <MyButton @click="add()">-</MyButton>
      <MyButton @click="add()">*</MyButton>
      <MyButton @click="add()">/</MyButton>
    </div>

    <div class="output text-main-deep">輸出結果: {{ result }}</div>
  </div>
</template>

<style lang="scss" scoped>
// .calc {
// }

.btns {
  /* 原本寫法
   display: flex;
   gap: 30px;
  */

  // tailwind寫法\\
  @apply flex gap-[30px];

  /*  改寫到component中的MyButton.vue裡面
  .btn {
    @apply border-black border-[3px] px-[10px] py-[5px] hover:text-[blue] bg-main-deep;

    // 原本寫法\\
    padding: 5px 10px;
    
  }
  */
}
</style>
