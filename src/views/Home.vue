<template>
  <div>
    <h1>토스트 테스트</h1>
    <div>
      <v-btn @click="toastTest1">토스트 Info</v-btn>
      <v-btn @click="toastTest2">토스트 success</v-btn>
      <v-btn @click="toastTest3">토스트 error</v-btn>
      <v-btn @click="toastTest4">토스트 warning</v-btn>
      <v-btn @click="toastTest5">전역에러</v-btn>
    </div>
    <h1>프로그레스바 테스트</h1>
    <div>
      <v-btn @click="barTest1">Start</v-btn>
      <v-btn @click="barTest2">Finish</v-btn>
      <v-btn @click="barTest3">Fail</v-btn>
    </div>
    <h1>Notify테스트</h1>
    <div>
      <v-btn @click="notiTest1">alert</v-btn>
      <v-btn @click="notiTest2">confirm</v-btn>
      <v-btn @click="notiTest3">prompt</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      toastTest1() {
        this.$toast.info('Hello World');
      },
      toastTest2() {
        this.$toast.success('Hello success');
      },
      toastTest3() {
        this.$toast.error('Hello error');
      },
      toastTest4() {
        this.$toast.warning('Hello warring');
      },
      toastTest5() {
        throw new Error("전역 에러");
      },
      barTest1() {
        this.$Progress.start();
      },
      barTest2() {
        this.$Progress.finish();
      },
      barTest3() {
        this.$Progress.fail();
      },
      async notiTest1() {
        const res = await this.$notify.alert("테스트 내용입니다", "안내", {
          icon : "mdi-video-4k-box",
        })
        console.log(res);
      },
      async notiTest2() {
        const res = await this.$notify.confirm("테스트 내용입니다", "", {
          icon : "mdi-cube-scan",
          iconColor : "blue"
        })
        console.log(res);
      },
      async notiTest3() {
        const res = await this.$notify.prompt("입력하세요.", "프롬프트", {
          icon : "mdi-view-dashboard",
          iconColor : "gray",
          width : 200
        })
        console.log(res);
      },      
    }
  }
</script>
