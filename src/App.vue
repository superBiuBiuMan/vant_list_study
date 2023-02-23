<style scoped>

  .title{
    height: 40px;
    background-color: hotpink;
    width: 100%;
  }
  .wrapper{
    height: 100vh;
  }
  .list{
    background-color: blue;
    height: calc(100% - 40px);
    overflow: scroll;
  }
</style>

<template>
  <div class="wrapper">
    <div class="title">我是标题</div>
    <!--<van-list class="list" @load="onLoad" offset="50" :immediate-check="false" v-model:loading="loading" :finished="finished">-->
    <!--  <div v-for="item in list" style="border-bottom: 2px solid red">-->
    <!--    <div>{{ item.email }}</div>-->
    <!--    <div>{{ item.phone }}</div>-->
    <!--    <div>{{ item.name }}</div>-->
    <!--  </div>-->
    <!--</van-list>-->

    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" title="1213" />
    </van-list>


  </div>
</template>


<script setup lang="ts">
import {ref} from "vue"
const loading = ref(false);//是否正在加载
const finished = ref(false);//是否加载完成
/* 假列表数据 */
const list = ref<any[]>([
  {
    "email": "iaculis.aliquet.diam@protonmail.net",
    "phone": "073-491-3662",
    "name": "Amos V. Garcia"
  },
  {
    "email": "ultricies.sem@outlook.org",
    "phone": "066-765-8163",
    "name": "Ira W. Hopper"
  },
  {
    "email": "nisi.a.odio@google.ca",
    "phone": "051-919-1606",
    "name": "Edward U. O'donnell"
  },
  {
    "email": "pellentesque@icloud.com",
    "phone": "027-494-3676",
    "name": "Susan S. Patton"
  },
  {
    "email": "a@protonmail.com",
    "phone": "055-275-1380",
    "name": "Phyllis P. Cook"
  },
  {
    "email": "non.bibendum@hotmail.ca",
    "phone": "064-287-6295",
    "name": "Noble E. Doyle"
  },
  {
    "email": "ut.nulla.cras@google.net",
    "phone": "038-744-6383",
    "name": "Mohammad C. Buckner"
  },
  {
    "email": "convallis@protonmail.net",
    "phone": "057-684-7538",
    "name": "Cain G. Fletcher"
  },
  {
    "email": "purus@google.couk",
    "phone": "062-557-9365",
    "name": "Deirdre A. Booker"
  },
  {
    "email": "cras.interdum@protonmail.couk",
    "phone": "067-154-5658",
    "name": "Pamela Y. Mccoy"
  },
  {
    "email": "suspendisse.ac@icloud.com",
    "phone": "052-494-2627",
    "name": "Nita U. Sosa"
  },
  {
    "email": "justo.praesent@hotmail.net",
    "phone": "051-514-6890",
    "name": "Jana P. Moon"
  },
  {
    "email": "nullam.nisl@google.edu",
    "phone": "085-757-5754",
    "name": "Heidi G. Ryan"
  },
  {
    "email": "turpis.nulla@outlook.couk",
    "phone": "054-118-3427",
    "name": "Kay J. Webb"
  },
  {
    "email": "in@hotmail.couk",
    "phone": "025-283-5281",
    "name": "Jerome C. Witt"
  }
])

/*加载更多*/
const onLoad = () => {
  console.log('加载更多')
  const mockData = [
    {
      "email": "李白mi.tempor@hotmail.couk",
      "phone": "073-518-4889",
      "name": "Alma P. Little"
    },
    {
      "email": "李黑iaculis.aliquet@yahoo.net",
      "phone": "013-173-8625",
      "name": "Ruby H. Bird"
    },
  ]
  setTimeout(() =>{
    loading.value = false;//加载状态结束
    list.value.push(mockData);
    if(list.value.length >= 20){
      finished.value = true;
    }
  },2000)
}

</script>
