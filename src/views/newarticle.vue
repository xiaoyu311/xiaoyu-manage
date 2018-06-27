<template>
  <div @keyup.enter="handleAdd" class="newarticle_container">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <Row>
        <Col span="15">
          <Form-item style="margin-top: 30px;" label='标题' prop="title">
            <Input v-model="formValidate.title" placeholder="请输入标题。。。" />
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item style="margin-top: 30px;" label='类型' prop="type">
            <Select v-model="defaultModel">
              <Option v-for="item in CateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Form-item>
        </Col>
      </Row>
      <Form-item style="margin-top: 30px;" label="链接" prop="Url">
        <Input v-model="formValidate.Url" placeholder="请输入标题链接。。。" />
      </Form-item>
      <Form-item style="margin-top: 30px;" label="别名" prop="Alias">
        <Input v-model="formValidate.Alias" placeholder="请输入别名。。。" />
      </Form-item>
      <Form-item style="margin-top: 30px;" label="摘要" prop="Summary">
        <Input v-model="formValidate.Summary" placeholder="请输入摘要。。。" />
      </Form-item>
      <Form-item style="margin-top: 30px;" class="tab_form_item" label="标签" prop="Labels">
        <Input placeholder="按Enter添加标签。。。" v-model="formValidate.Labels" />
        <div style="margin-top: 10px;" class="tab_container">
          <Tag v-for="item in Labels" :key="item" color="blue" :name="item" type="dot" closable @on-close="handleClose2">{{ item }}</Tag>
        </div>
      </Form-item>
    </Form>
    <div class="newarticle">
      <markdown-editor :configs="configs" ref="markdownEditor"></markdown-editor>
    </div>
    <div>
      <Button @click="Submit" type="success">发表</Button>
    </div>
  </div>
</template>
<script>
import { getCategory, saveArticle } from "../server";
import markdownEditor from "vue-simplemde/src/markdown-editor";
import { Form, FormItem, Input, Row, Col, Select, Option, Tag, Button, Message } from "iview";
export default {
  components: {
    markdownEditor,
    Form,
    FormItem,
    Input,
    Row,
    Col,
    Select,
    Option,
    Tag,
    Button
  },
  data() {
    return {
      Labels: [],
      formValidate: {
        title: "",
        Alias: "",
        Summary: "",
        Url: "",
        Labels: ""
      },
      configs: {
        autofocus: true,
        placeholder: "请输入文章内容。。。",
        renderingConfig: {
          codeSyntaxHighlighting: true
        }
      },
      ruleValidate: {
        title: [{ required: true, message: "标题不能为空", trigger: "blur" }]
      },
      CateList: [],
      defaultModel: ""
    };
  },
  methods: {
    handleAdd() {
      console.log(22)
      if (!this.formValidate.Labels) return;
      this.Labels.push(this.formValidate.Labels);
      this.formValidate.Labels = '';
    },
    handleClose2(event, name) {
      const index = this.Labels.indexOf(name);
      this.Labels.splice(index, 1);
    },
    async Submit() {
      const {title, Alias, Summary, Url} = this.formValidate;
      let simplemdeValue = this.simplemde.value();
      let simplemdeHtml = this.simplemde.markdown(simplemdeValue);
      console.log(simplemdeHtml)
      if (!title) return;
      if (!this.defaultModel) return;
      if (!simplemdeHtml) return;
      let res = await saveArticle(
        title,
        this.defaultModel,
        simplemdeHtml,
        this.Labels,
        Alias,
        Summary,
        Url,
      );
      if (res.status) {
        this.formValidate.title = "";
        this.formValidate.Alias = "";
        this.formValidate.Summary = "";
        this.formValidate.Url = "";
        this.formValidate.Labels = "";
        this.defaultModel = "";
        this.Labels = [];
        Message.success('发表成功');
        return;
      }
      Message.error('失败');
    }
  },
  computed: {
    simplemde() {
      return this.$refs.markdownEditor.simplemde;
    }
  },
  async mounted() {
    let res = await getCategory();
    if (res.status) {
      let CateList = res.data.map(item => ({label: item.CateName, value: item._id}));
      this.CateList = CateList;
    }
  }
};
</script>
<style lang='scss'>
@import "simplemde/dist/simplemde.min.css";
.CodeMirror-fullscreen {
  min-height: 500px;
  position: absolute !important;
  top: 50px;
  left: 0;
}
.editor-preview-side {
  position: absolute;
  min-height: 500px;
}

.editor-toolbar.fullscreen {
  position: absolute;
}
.CodeMirror-scroll {
  min-height: 500px;
}
.markdown-editor {
  position: relative;
  font-size: 18px;
}
.newarticle {
  margin-top: 30px;
}
</style>

