<template>
  <div id="app">
    <h1>巡检计划列表</h1>
    <add-plan></add-plan>
    <plan-list></plan-list>
  </div>
</template>

<script>
import addPlan from './components/addPlan.vue';
import planList from './components/planList.vue';

export default {
  components: {
    'add-plan': addPlan,
    'plan-list': planList
  }

}
</script>

<style>

</style>
