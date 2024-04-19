<template>
  <router-view name="header" />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
/*
    여러 함수들; 실제 component 생성시 이 순서대로 일어남
    1. beforeCreate
    2. created --
    3. beforeMount
    4. mounted --

    // 데이터가 변경/re-랜더링 시에는 beforeUpdate -> updated -- 이 세가지가 많이 쓰임
    // 데이터 삭제시에는 beforedUnmount(vue2 버전은 beforeDestory) -> unmounted (destroyed)
  */

// 여기가 setMovie 역할
</script>

<style></style>
