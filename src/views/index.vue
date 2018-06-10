<template>
  <div class="main">
    <div class="sidebar-menu-con" :style="{width: side ? '240px' : '60px', overflow: side? 'auto' : 'visible'}">
      <div class="ivu-shrinkable-menu" style="background: rgb(73, 80, 96);">
        <div class="logo-con">
          <img v-show="side" src="https://iview.github.io/iview-admin/dist/9f35d093728efc834cf6f8b15fd17eea.jpg" alt="">
          <img v-show="!side" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAYAAAAcNvmZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnhJREFUeNrs3U9LFGEcwPGf7ebaYWGhCBLCPQaRbNFd9w2YHrwF5dGTBtG1vIpit45l9AJ8BbmetQi6qCdB2EMprH/AXFzrN/qgo+2Ms+Mz0+P2/cLDoM4M8uHh2XkOy4gQEV2qjjgXPZiqDeqhT0dJR9GM/6GKjpqOBR1z318W1hLBVuCCHl7reK6jwDw9wZ9Q9Io1bIUeN9AgB6MPKXotNraZzTNmNlN4HnRZwb+1jG2g5826TBbAr4VcOAN0yx1NUJ2opcjYZo1m6YgP/j4Stu+pg+JXUsc3UWY2Tx12GjMTNxSb5cPecjIYiG12hsxqez0Lm9l9+FitPwybRz3L6WrRH4RdhCe5wP6H2AQ22AS2u2Wt3m3068XnbNwQmS8eH329KnfJk/udks91OAXUO711hWf2rT2RgdUzv/KQnz7KOQfdHstIriHSvevDvs6aTWCDTWCDDTa1Mfbm6aZm+WfDSZyVHw2HsT/3RDtv6Y7Ifubkx09f6lLdPnQKemf/t0xWfjm8XV+5KVLNi+TrwefUM39t1T3o4Y+7cu92puklA7rp8XaZUWejDaRlvY8H7i720ZToPB4xZtLi+kHTvz2+m7VyHz4g+YAksMEmsMEGm8AGm8AGm8AGG2wCG2wCG2ywCWywCWywCWywwSawwSawwQabwAabwAabwE637FX4J5fWD+RdxHOrW4dgXybv21+ufgOMZQRsAhvstmoN7JSg/W9pAjvZ5lhG0msW7HSqnH85ENjJ9YKnkZSgm73yCmz7fVDotzxnpwM9wqYmnaVjhB1kwk8dOh4GLR3+sljF3oJ7G5bZsJdtXoRdxrG1LTgR/RFgAEIioEX14WSDAAAAAElFTkSuQmCC" alt="">
        </div>
        <Menu v-show="side" theme="dark">
          <Menu-item name="2">
            <Icon type="stats-bars"></Icon>
            网站统计
          </Menu-item>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-book-outline"></Icon>
              博客管理
            </template>
            <Menu-item name="1-1">新的文章</Menu-item>
            <Menu-item name="1-2">新的分类</Menu-item>
            <Menu-item name="1-4">分类管理</Menu-item>
            <Menu-item name="1-3">文章管理</Menu-item>
          </Submenu>
          <Menu-item name="2">
            <Icon type="ios-chatbubble"></Icon>
            评论管理
          </Menu-item>
          <Menu-item name="3">
            <Icon type="android-create"></Icon>
            留言管理
          </Menu-item>
          <Menu-item name="4">
            <Icon type="android-person"></Icon>
            关于管理
          </Menu-item>
          <Menu-item name="5">
            <Icon type="jet"></Icon>
            缓存管理
          </Menu-item>
          <Menu-item name="6">
            <Icon type="alert"></Icon>
            异常管理
          </Menu-item>
          <Menu-item name="7">
            <Icon type="gear-b"></Icon>
            系统设置
          </Menu-item>
        </Menu>
        <div v-show="!side">
          <div style="text-align: center;">
            <div class="ivu-dropdown">
              <div class="ivu-dropdown-rel" style="position: relative;">
                <Button type="text" class="manage-sidebar">
                  <Icon type="stats-bars" color="#fff" size="20"></Icon>
                </Button>
              </div>
            </div>
          </div>
          <div style="text-align: center;">
            <div class="ivu-dropdown">
              <div class="ivu-dropdown-rel" style="position: relative;">
                <Button type="text" class="manage-sidebar">
                  <Icon type="ios-book-outline" color="#fff" size="20"></Icon>
                </Button>
              </div>
            </div>
          </div>
          <div style="text-align: center;">
            <div class="ivu-dropdown">
              <div class="ivu-dropdown-rel" style="position: relative;">
                <Button type="text" class="manage-sidebar">
                  <Icon type="ios-chatbubble" color="#fff" size="20"></Icon>
                </Button>
              </div>
            </div>
          </div>
          <div style="text-align: center;">
            <div class="ivu-dropdown">
              <div class="ivu-dropdown-rel" style="position: relative;">
                <Button type="text" class="manage-sidebar">
                  <Icon type="android-create" color="#fff" size="20"></Icon>
                </Button>
              </div>
            </div>
          </div>
          <div style="text-align: center;">
            <div class="ivu-dropdown">
              <div class="ivu-dropdown-rel" style="position: relative;">
                <Button type="text" class="manage-sidebar">
                  <Icon type="android-person" color="#fff" size="20"></Icon>
                </Button>
              </div>
            </div>
          </div>
          <div style="text-align: center;">
            <div class="ivu-dropdown">
              <div class="ivu-dropdown-rel" style="position: relative;">
                <Button type="text" class="manage-sidebar">
                  <Icon type="jet" color="#fff" size="20"></Icon>
                </Button>
              </div>
            </div>
          </div>
          <div style="text-align: center;">
            <div class="ivu-dropdown">
              <div class="ivu-dropdown-rel" style="position: relative;">
                <Button type="text" class="manage-sidebar">
                  <Icon type="alert" color="#fff" size="20"></Icon>
                </Button>
              </div>
            </div>
          </div>
          <div style="text-align: center;">
            <div class="ivu-dropdown">
              <div class="ivu-dropdown-rel" style="position: relative;">
                <Button type="text" class="manage-sidebar">
                  <Icon type="gear-b" color="#fff" size="20"></Icon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-header-con" :style="{ paddingLeft: side ? '240px' : '60px'}">
      <div class="main-header">
        <div class="navicon-con">
          <Button @click="sideNone" type="text" class="manage-sidebar" :style="{ transform: side ? 'rotateZ(0deg)' : 'rotateZ(-90deg)' }">
            <Icon type="navicon" size="32"></Icon>
          </Button>
        </div>
        <div class="header-avator-con">
          <div class="logout">
            <Button style="margin-top: 5px;" class="manage-sidebar" type="text">
              <Icon type="log-out" size="20" color="#495060"></Icon>
            </Button>
            <h3>退出登陆</h3>
          </div>
        </div>
      </div>
    </div>
    <div :style="{left: side ? '240px' : '60px'}" class="single-page-con">
      <div class="single-page">
        <div class="home-main">
          <h2>管理</h2>
        </div>
        <div class="pages">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Menu, Icon, Submenu, MenuItem, Button } from "iview";
export default {
  components: {
    Menu,
    Icon,
    Submenu,
    MenuItem,
    Button
  },
  data() {
    return {
      side: true
    };
  },
  methods: {
    sideNone() {
      this.side = !this.side;
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  .sidebar-menu-con {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 21;
    transition: width 0.3s;
    .ivu-shrinkable-menu {
      height: 100%;
      width: 100%;
      .logo-con {
        padding: 8px;
        text-align: center;
        img {
          height: 44px;
          width: auto;
        }
      }
    }
  }
  .main-header-con {
    box-sizing: border-box;
    position: fixed;
    display: block;
    padding-left: 240px;
    width: 100%;
    height: 60px;
    z-index: 20;
    box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
    transition: padding 0.3s;
    .main-header {
      height: 60px;
      background: #fff;
      box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
      position: relative;
      z-index: 11;
      .navicon-con {
        margin: 6px;
        display: inline-block;
      }
      .header-avator-con {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 300px;
        .logout {
          position: absolute;
          right: 0;
          top: 0;
          width: 130px;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .single-page-con {
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    overflow: auto;
    background-color: #f0f0f0;
    z-index: 1;
    transition: left 0.3s;
    .single-page {
      .home-main {
        height: 70px;
        padding: 10px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        background: #fff;
        h2 {
          padding-left: 7px;
          font-size: 30px;
          font-weight: 100;
        }
      }
      .pages {
        margin: 10px;
      }
    }
  }
}
.manage-sidebar {
  transition: all 0.2s;
}
.manage-sidebar:focus {
  outline: 0;
  box-shadow: none;
}
</style>


