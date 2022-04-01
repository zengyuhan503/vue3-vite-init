<template>
  <a-config-provider :locale="zhCN">
    <a-layout>
      <a-layout-header class="header">
        <PageHeaderView />
      </a-layout-header>
      <a-layout-content>
        <router-view >
        <!-- <router-view v-slot="{ Component }"> -->
          <!-- <keep-alive :max="4">
            <component :is="Component" :key="$route.name"  v-if="$route.meta.keepAlive" />
          </keep-alive>
          <component :is="Component" :key="$route.name"  v-if="!$route.meta.keepAlive" /> -->
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-config-provider>
</template>

<script langs="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import PageHeaderView from '@/layout/PageHeaderView.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { PageHeaderView },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  mounted() {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup() {
    const handleCloseConfirm = () => {}
    return {
      handleCloseConfirm,
      zhCN
    }
  }
})
</script>
<style lang="less">
#app,
body,
html {
  width: 100%;
  height: 100%;
  .ant-layout-header {
    background: transparent;
    height: 100px;
    padding: 0;
  }
  .ant-layout {
    min-width: 1400px;
    height: 100%;
    width: 100%;
  }
  .ant-layout-content {
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
  }
}
</style>
