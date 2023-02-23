<style scoped lang="less">
.main{
  text-align: center;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  background-color: grey;
  /*顶部信息*/
  &_header{
    height: 50px;
    background-color: red;
  }

  /*列表信息*/
  &_list{
    flex: 1;
    overflow: scroll;
    padding: 0 10px;
  }

  /*底部信息*/
  &_footer{
    height: 50px;
    background-color: hotpink;
  }
}
</style>

<template>
  <div class="main">
    <div class="main_header">我是顶部信息(定时器3秒加载数据)</div>
    <!--滚动列表-->
    <!---->
    <van-list class="main_list" offset="50" v-model:loading="loading" :finished="finished" @load="onLoad" >
      <!-- table等同于一个自定义的列表组件 -->
      <Table :columns="columns" :list="list"/>
    </van-list>
    <!--底部展示信息-->
    <div class="main_footer">我是底部信息</div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {ColumnProps} from "./components/table/types";
import Table from "./components/table/index.vue";//自定义组件props
export interface List {
  name:string,
  phone:string,
  email:string,
}
//table栏列
const columns = ref<ColumnProps[]>([
  { headerTitle: '姓名', key:'name', headerAlign:'center',contentAlign:'center'},
  { headerTitle: '手机', key:'phone',headerAlign:'center',contentAlign:'center' } ,
  { headerTitle: '邮箱', key:'email',headerAlign:'center',contentAlign:'center', }
])
//列表数据
const list = ref<List[]>([]);
//是否正在加载
const loading = ref<boolean>(false);
//数据总长度
const total = ref<number>(0);
//数据是否加载完成
const finished = computed<boolean>(() => !!total.value && list.value?.length >= total.value);







/* 请求加载数据(immediate-check	默认为true,所以会初次加载) */
const onLoad =  () => {
  console.log('我被执行了')
  loading.value = true;//加载中 //(也可以交给van-list进行双向绑定,这里就单向数据流的方式使用)
  //准备的假数据
  const mockData:List[] = [
    {
      "name": "Keith Luna",
      "phone": "1-776-470-4892",
      "email": "nisi.mauris@icloud.org"
    },
    {
      "name": "Kato Roman",
      "phone": "1-633-319-3562",
      "email": "porttitor.interdum@protonmail.ca"
    },
    {
      "name": "Nigel Tran",
      "phone": "(564) 534-1239",
      "email": "eros.non@outlook.com"
    },
    {
      "name": "Dorian Callahan",
      "phone": "(434) 337-6257",
      "email": "fusce@yahoo.ca"
    },
    {
      "name": "Owen Bryan",
      "phone": "1-282-836-1673",
      "email": "arcu.aliquam@google.edu"
    },
    {
      "name": "Pascale Mccall",
      "phone": "1-255-423-5670",
      "email": "vitae@yahoo.edu"
    },
    {
      "name": "Colt Cherry",
      "phone": "1-619-487-2543",
      "email": "euismod.ac@outlook.ca"
    },
    {
      "name": "Wayne Frederick",
      "phone": "(556) 423-1378",
      "email": "faucibus.id@yahoo.edu"
    },
    {
      "name": "Ralph Wilder",
      "phone": "(754) 571-6219",
      "email": "sit.amet@outlook.ca"
    },
    {
      "name": "Vladimir Rich",
      "phone": "(457) 641-3743",
      "email": "eleifend.non@outlook.edu"
    }
  ]
  setTimeout(() => {
    list.value = list.value.concat(mockData);//添加假数据
    loading.value = false;//加载完成
  },500)
}
</script>
