<template>
  <el-button v-bind="$attrs"><slot></slot> </el-button>
</template>

<script>
import { ElButton } from 'element-plus';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MyButton',
  components: { ElButton },
});
</script>
<style lang="scss" scoped></style>
