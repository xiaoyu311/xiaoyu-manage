<template>
  <div class="categorymanage">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <Form-item>
        <div class="margin demo-upload-list" v-for="(item, index) in uploadList" :key="index">
          <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
          </template>
          <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
          </template>
        </div>
        <Upload
            ref="upload"
            :show-upload-list="false"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-progress="handleProgress"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="/admin/uploadimg"
            style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="camera" size="20"></Icon>
            </div>
        </Upload>
        <Modal title="查看图片" v-model="visible">
            <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
        </Modal>
      </Form-item>
      <Form-item label="分类名称" prop="CateName">
        <Input v-model="formValidate.CateName" icon="ios-close-empty" placeholder="分类名称..." />
      </Form-item>
      <Form-item style="margin-top: 50px;" label="alias" prop="Alias">
        <Input v-model="formValidate.Alias" icon="ios-close-empty" placeholder="分类alias..." />
      </Form-item>
      <Form-item style="margin-top: 50px;" label="链接" prop="Link">
        <Input v-model="formValidate.Link" icon="ios-close-empty" placeholder="链接..." />
      </Form-item>
      <Form-item style="margin-top: 50px;">
        <Button type="success" @click="handleSubmit('formValidate')" long>确认提交</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
import { Input, Upload, Modal, Icon, Button, Form, FormItem } from "iview";
import { saveCategories } from "../server";
export default {
  components: {
    Input,
    Upload,
    Modal,
    Icon,
    Button,
    Form,
    FormItem
  },
  data() {
    return {
      formValidate: {
        CateName: "",
        Alias: "",
        Link: "",
        Img: ""
      },
      ruleValidate: {
        CateName: [
          { required: true, message: "名称不能为空", trigger: "blur" }
        ],
        Alias: [{ required: true, message: "alias不能为空", trigger: "blur" }]
      },
      imgName: "",
      visible: false,
      uploadList: []
    };
  },
  methods: {
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      // 从 upload 实例删除数据
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      // 因为上传过程为实例，这里模拟添加 url
      file.url = res.path;
      file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleFormatError(file) {
      console.log("error");
      this.$Notice.warning({
        title: "文件格式不正确",
        desc:
          "文件 " + file.name + " 格式不正确，请上传 jpg 或 png 格式的图片。"
      });
    },
    handleMaxSize(file) {
      console.log("size");
      this.$Notice.warning({
        title: "超出文件大小限制",
        desc: "文件 " + file.name + " 太大，不能超过 2M。"
      });
    },
    handleBeforeUpload() {
      console.log("update");
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "最多只能上传 5 张图片。"
        });
      }
      return check;
    },
    handleProgress(event, file, fileList) {
      console.log(file);
      console.log(fileList);
    },
    async handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          const { CateName, Alias, Link, Img } = this.formValidate;
          let res = saveCategories(CateName, Alias, Link, Img);
          console.log(res);
        } else {
          this.$Message.error("表单验证失败!");
        }
      });
    }
  },
  mounted() {
    this.uploadList = this.$refs.upload.fileList;
  }
};
</script>
<style lang="scss" scoped>
.categorymanage {
  margin-top: 40px;
}
.margin {
  margin-top: 20px;
}
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>


