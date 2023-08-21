<template>
  <div id="add-plan">
    <form>
      <div>
        <label>巡检计划名称</label>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <label>负责人</label>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <label>计划状态</label>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <label>计划开始时间</label>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </div>
      <el-button type="primary">查询</el-button>
      <el-button type="info">重置</el-button>
      <el-button type="primary">添加计划</el-button>
    </form>
  </div>
</template>

<script></script>

<style scoped></style>
