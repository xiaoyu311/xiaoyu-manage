<template>
  <div class="newarticle">
    <markdown-editor :configs="configs" ref="markdownEditor"></markdown-editor>
    <div @click="get">获取</div>
    <div style="font-size: 18px;" v-html="markEle"></div>
  </div>
</template>
<script>
// import Vue from "vue";
// import VueSimplemde from "vue-simplemde";
// Vue.use(VueSimplemde);
import markdownEditor from "vue-simplemde/src/markdown-editor";
export default {
  components: {
    markdownEditor
  },
  data() {
    return {
      markEle: '',
      configs: {
        autofocus: true,
        placeholder: '请输入文章内容。。。',
        renderingConfig: {
          codeSyntaxHighlighting: true
        }
      }
    };
  },
  methods: {
    get() {
      let simplemdeValue = this.simplemde.value();
      let simplemdeHtml = this.simplemde.markdown(simplemdeValue);
      this.markEle = simplemdeHtml;
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
.CodeMirror-scroll{
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

