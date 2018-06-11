<template>
  <div class="newarticle_container">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <Form-item style="margin-top: 30px;" label='标题' prop="title">
        <Row>
          <Col span="15">
            <Input v-model="formValidate.title" placeholder="请输入标题。。。" />
          </Col>
          <Col span="6">
            <Form-item label='类型' prop="type">
              <Select v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </Form-item>
          </Col>
        </Row>
      </Form-item>
      <Form-item style="margin-top: 30px;" label="别名" prop="Alias">
        <Input v-model="formValidate.Alias" placeholder="请输入别名。。。" />
      </Form-item>
      <Form-item style="margin-top: 30px;" label="摘要" prop="Summary">
        <Input v-model="formValidate.Summary" placeholder="请输入摘要。。。" />
      </Form-item>
      <Form-item style="margin-top: 30px;" class="tab_form_item" label="标签" prop="Labels">
        <Input placeholder="Enter添加标签。。。" />
        <div style="margin-top: 10px;" class="tab_container">
          <Tag v-for="item in count" :key="item" color="blue" :name="item" type="dot" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
        </div>
      </Form-item>
    </Form>
    <div class="newarticle">
      <markdown-editor :configs="configs" ref="markdownEditor"></markdown-editor>
    </div>
  </div>
</template>
<script>
import markdownEditor from "vue-simplemde/src/markdown-editor";
import { Form, FormItem, Input, Row, Col, Select, Option, Tag } from "iview";
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
    Tag
  },
  data() {
    return {
      count: [0, 1, 2],
      formValidate: {
        title: "",
        Alias: "",
        Summary: ""
      },
      markEle: "",
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
      cityList: [
        {
          value: "beijing",
          label: "北京市"
        },
        {
          value: "shanghai",
          label: "上海市"
        },
        {
          value: "shenzhen",
          label: "深圳市"
        },
        {
          value: "hangzhou",
          label: "杭州市"
        },
        {
          value: "nanjing",
          label: "南京市"
        },
        {
          value: "chongqing",
          label: "重庆市"
        }
      ],
      model1: ""
    };
  },
  methods: {
    get() {
      let simplemdeValue = this.simplemde.value();
      let simplemdeHtml = this.simplemde.markdown(simplemdeValue);
      this.markEle = simplemdeHtml;
    },
    handleAdd() {
      if (this.count.length) {
        this.count.push(this.count[this.count.length - 1] + 1);
      } else {
        this.count.push(0);
      }
    },
    handleClose2(event, name) {
      const index = this.count.indexOf(name);
      this.count.splice(index, 1);
    }
  },
  computed: {
    simplemde() {
      return this.$refs.markdownEditor.simplemde;
    }
  },
  mounted() {
    // this.simplemde.togglePreview();
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

