<template>
  <div class="menu-wrapper">
    <template v-for="route in routes">
      <template v-if="route.meta.types == types">
        <router-link v-if="route.children.length===1" :to="route.path+'/'+route.children[0].path" :key="route.children[0].name">
          <el-menu-item :index="route.path+'/'+route.children[0].path" class="submenu-title-noDropdown">
            <awesome :awesclass="route.children[0].meta.icon"></awesome>
            <span>{{ route.children[0].meta.title}}</span>
          </el-menu-item>
        </router-link>

        <el-submenu v-else :index="route.name||route.path" :key="route.name">
          <template slot="title">
            <awesome :awesclass="route.meta.icon"></awesome>
            <span>{{ route.meta.title }}</span>
          </template>
          <template v-for="child in route.children" v-if="!child.meta.hidden">
            <router-link :to="route.path+'/'+child.path" :key="child.name">
              <el-menu-item :index="route.path+'/'+child.path">
                <awesome :awesclass="child.meta.icon"></awesome>
                <span>{{ child.meta.title}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>

      </template>
    </template>



    <!-- <template v-for="route in routes" v-if="route.meta.types === types">
      <router-link v-if="route.children.length===1" :to="route.path+'/'+route.children[0].path" :key="route.children[0].name">
        <el-menu-item :index="route.path+'/'+route.children[0].path" class="submenu-title-noDropdown">
          <awesome :awesclass="route.children[0].meta.icon"></awesome>
          <span>{{ route.children[0].meta.title}}</span>
          <span>{{ route }}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="route.name||route.path" :key="route.name">
        <template slot="title">
          <awesome :awesclass="route.meta.icon"></awesome>
          <span>{{ route.meta.title }}</span>
          <span>{{ route }}</span>
        </template>
        <template v-for="child in route.children" v-if="!child.meta.hidden">
          <router-link :to="route.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="route.path+'/'+child.path">
              <awesome :awesclass="child.meta.icon"></awesome>
              <span>{{ child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template> -->

  </div>
</template>

<script>
  import Awesome from "@/components/Awesome/index";
  export default {
    components: {Awesome},
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      },
      types: {
        type: String
      }
    }
    // watch: {
    //   route:function(){
    //     console.log()
    //   }
    // }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .menu-wrapper a{
    text-decoration: none;
  }
</style>
