<template>
  <div class="catrgory">
    <Table border :columns="columns" :data="data"></Table>
  </div>
</template>
<script>
import { Table } from "iview";
import { getCategory } from "../server";
export default {
  components: {
    Table
  },
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "_id",
          key: "_id"
        },
        {
          title: "分类名称",
          key: "CateName"
        },
        {
          title: "分类别名",
          key: "Alias"
        },
        {
          title: "图标地址",
          key: "Img"
        },
        {
          title: "链接地址",
          key: "Link"
        },
        {
          title: "创建时间",
          key: "CreateTime"
        },
        {
          title: "更新时间",
          key: "ModifyTime"
        },
        {
          title: "操作",
          key: "action",
          fixed: "right",
          width: 120,
          render() {
            return'sdd'
          }
        }
      ],
      data: []
    };
  },
  async created() {
    let res = await getCategory();
    if (res.status) {
      this.data = res.data;
    }
  }
};
</script>
<style lang="scss" scoped>
.catrgory {
  margin-top: 40px;
}
</style>

