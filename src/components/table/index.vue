<style scoped lang="less">
@row-height: 36px;
@header-height: 30px;
.table {
  &-contain{
    border-radius: 12px;
    box-sizing: border-box;
    //padding: 4px 8px;
  }
  width: 100%;
  display: table;
  table-layout: fixed;
  &__header{
    display: table-header-group;
    &__cell{
      border-bottom: 1px solid grey;
      border-left: 1px solid grey;
      &:last-of-type{
        border-right: 1px solid grey;
      }
      height:@header-height;
      display: table-cell;
      font-size: 14px;
      font-weight: 400;
      color: #000000;
      line-height: @header-height;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &-center{ text-align: center;}
      &-left{text-align: left;}
      &-right{text-align: right;}
    }
  }
  &__body{
    &-wrapper{
      &::-webkit-scrollbar{display: none;}
      display: block;
      overflow-y: scroll;
      width: 100%;
    }
    display: table-row-group;
    &__row{
      margin: 4px 0;
      display: table-row;
      &__cell{
        border-bottom: 1px solid grey;
        border-left: 1px solid grey;
        &:last-of-type{
          border-right: 1px solid grey;
        }
        display: table-cell;
        height: @row-height;
        font-size: 14px;
        font-weight: 400;
        color: #000000;
        vertical-align: middle;
        line-height: @row-height;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &-center{
          text-align: center;
        }
        &-left{
          text-align: left;
        }
        &-right{
          text-align: right;
        }
      }
    }
  }
}
</style>
<template>
  <div class="table-contain">
    <template v-if="rows.length">
      <div class="table">
        <div class="table__header">
          <div class="table__header__cell"
               :class="`table__header__cell-${col.headerAlign ?? 'left'}`"
               :style="`width:${col.width ?? 'auto'}`"
               v-for="col of columns"
          >
            {{col.headerTitle}}
          </div>
        </div>
      </div>
      <div class="table">
        <div class="table__body" :style="`max-height:${props.maxHeight ?? 'auto'}`">
          <div class="table__body__row" v-for="row of rows">
            <div :class="`table__body__row__cell-${col.contentAlign ?? 'left'}`"
                 :style="`width:${col.width ?? 'auto'}!important`"
                 class="table__body__row__cell"
                 v-for="col of columns">
              <template v-if="!!col?.slot">
                <slot :name="col.key" :data="row?.[col.key]"></slot>
              </template>
              <template  v-else>
                {{row[col.key]}}
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <van-empty  description="暂无数据"></van-empty>
    </template>
  </div>

</template>

<script lang="ts" setup>
import {ColumnProps} from "./types";
import {useTable} from "./methods";
import {watchEffect} from "vue";

interface Props {
  list: any[]
  columns: ColumnProps[]
  maxHeight?:string
}
const props = defineProps<Props>()

const {
  columns,
  rows,
  setColumns,
  setData
} = useTable()
watchEffect(() => setColumns(props.columns))
watchEffect(() => setData(props.list))
</script>

