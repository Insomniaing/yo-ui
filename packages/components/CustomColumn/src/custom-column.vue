<template>
  <div class="opt-custom">
    <el-popover
      placement="bottom-end"
      trigger="click"
      width="600px"
      popper-class="pop-opt"
    >
      <template #reference>
        <el-button>
          <el-icon size="large"><icon-ep-Setting /></el-icon>
        </el-button>
      </template>
      <el-checkbox-group v-model="checkList">
        <!-- <div v-for="item in props.customColumnData" :key="item.key"> -->
        <el-checkbox
          v-for="item in props.customColumnData"
          :key="item.key"
          :label="item.label"
          :value="item.key"
          @change="changeCheckBox($event, item)"
        />
        <!-- </div> -->
        <div class="hidden"></div>
        <div class="hidden"></div>
        <div class="hidden"></div>
        <div class="hidden"></div>
        <div class="hidden"></div>
      </el-checkbox-group>
    </el-popover>
  </div>
</template>

<script setup>
// import { customOpt } from "@/components/CustomColumn/index.js";
defineOptions({
  name: "CustomColumn",
});
const props = defineProps(["customColumnData", "localKey"]);
const emits = defineEmits(["changeBox", "getColumnShowData"]);
let custom = {};
let checkListProps = [];
const setColumnDataLocal = () => {
  localStorage.setItem(props.localKey, JSON.stringify(custom));
};
const updateColumnDataLocal = (val) => {
  custom[val.key].isShow = val.isShow;
  localStorage.setItem(props.localKey, JSON.stringify(custom));
};
const getShowColumn = () => {
  props.customColumnData.forEach((item) => {
    custom[item.key] = {
      key: item.key,
      isShow: item.isShow,
    };
  });
  //   return custom;
};
const initData = () => {
  if (JSON.parse(localStorage.getItem(props.localKey))) {
    custom = JSON.parse(localStorage.getItem(props.localKey));
    for (const key in custom) {
      if (Object.hasOwnProperty.call(custom, key)) {
        const item = custom[key];
        if (item.isShow) {
          checkListProps.push(item.key);
        }
      }
    }
  } else {
    checkListProps = props.customColumnData
      .filter((item) => item.isShow)
      .map((item) => {
        return item.key;
      });
    getShowColumn();
    setColumnDataLocal();
  }
  emits("getColumnShowData", custom);
};
initData();
const checkList = ref(checkListProps);
const changeCheckBox = (val, item) => {
  item.isShow = val;
  emits("changeBox", item);
  updateColumnDataLocal(item);
};
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.pop-opt {
  .el-checkbox-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // justify-content: left;
    .el-checkbox {
      margin-right: 0px;
      width: 100px;
    }
    .hidden {
      //   visibility: hidden;
      height: 0;
      width: 100px;
      //   margin-right: 5px;
    }
  }
  //   .el-checkbox:last-child {
  //     margin-right: auto;
  //   }
}
</style>
