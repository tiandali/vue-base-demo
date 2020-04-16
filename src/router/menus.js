export const menus = [
  {
    name: "实体查询",
    path: "search",
    rightKey: "queryEntity",
    iconStyle: "el-icon-location",
    // children: [
    //   {
    //     name: "电站监控",
    //     iconStyle: "el-icon-location",
    //     path: "station",
    //     defaultPath: true,
    //     rightKey: "monitor_station"
    //   }
    // ]
  }, {
    name: "实体识别",
    path: "identifyEntity",
    rightKey: "queryEntity",
    iconStyle: "el-icon-menu",
  }, {
    name: "知识概览",
    path: "knowledgeOverview",
    rightKey: "queryEntity",
    iconStyle: "el-icon-document",
  }, {
    name: "知识问答",
    path: "quiz",
    rightKey: "queryEntity",
    iconStyle: "el-icon-setting",
  }

];


// menus: [
//   {
//     name: "实时监控",
//     path: "monitor",
//     rightKey: "monitor",
//     iconStyle: "el-icon-location",
//     children: [
//       {
//         name: "电站监控",
//         iconStyle: "el-icon-location",
//         path: "station",
//         defaultPath: true,
//         rightKey: "monitor_station"
//       },
//       {
//         name: "告警",
//         iconStyle: "icon-alarm1",
//         path: "alarm",
//         rightKey: "monitor_alarm",
//         children: [
//           {
//             name: "实时告警",
//             path: "realtime",
//             rightKey: "monitor_alarm_realTime"
//           },
//           {
//             name: "已转工单",
//             path: "transfer",
//             rightKey: "monitor_alarm_realTime"
//           },
//           {
//             name: "手动解除",
//             path: "relieve",
//             rightKey: "monitor_alarm_realTime"
//           },
//           {
//             name: "历史告警",
//             path: "history",
//             rightKey: "monitor_alarm_history"
//           },
//           {
//             name: "告警统计",
//             path: "statistic",
//             rightKey: "monitor_alarm_statistics"
//           }
//         ]
//       },
//       {
//         name: "光伏数据分析",
//         iconStyle: "icon-pvs",
//         path: "pvData",
//         rightKey: "monitor_dataAnalysis",
//         children: [
//           {
//             name: "历史趋势",
//             path: "history",
//             defaultPath: true,
//             rightKey: "dataAnalysis_historyTrend"
//           },
//           {
//             name: "实时数据",
//             path: "realtime",
//             rightKey: "dataAnalysis_realTime"
//           }
//         ]
//       },
//       {
//         name: "数据导出",
//         path: "dataExport",
//         rightKey: "dataAnalysis_dataExport"
//       }
//     ]
//   },

//   {
//     name: "运维管理",
//     path: "operation",
//     rightKey: "operation",
//     iconStyle: "el-icon-menu",
//     children: [
//       {
//         name: "工作台",
//         path: "workStage",
//         iconStyle: "el-icon-menu",
//         rightKey: "operation_workStation",
//         defaultPath: true
//       },
//       {
//         name: "工作计划管理",
//         path: "workPlan",
//         iconStyle: "icon-gzjh",
//         rightKey: "operation_planManage"
//       },
//       {
//         name: "员工定位",
//         path: "gps",
//         iconStyle: "icon-mapman",
//         rightKey: "operation_locate",
//         defaultPath: true
//       },

//       {
//         name: "工单",
//         iconStyle: "icon-gd2",
//         path: "workProcess",
//         rightKey: "operation_worklist",
//         children: [
//           {
//             name: "工单列表",
//             path: "view",
//             defaultPath: true,
//             rightKey: "operation_worklist_work"
//           }
//         ]
//       },
//       {
//         name: "两票管理",
//         path: "twoTickets",
//         iconStyle: "icon-gd1",
//         rightKey: "operation_twoTicket",
//         children: [
//           {
//             name: "审核人设置",
//             path: "examiner",
//             rightKey: "operation_twoTicket_config"
//           },
//           {
//             name: "工作票",
//             path: "workflow",
//             rightKey: "operation_twoTicket_work"
//           },
//           {
//             name: "操作票",
//             path: "operateflow",
//             rightKey: "operation_twoTicket_operation"
//           }
//         ]
//       },
//       {
//         name: "台账",
//         path: "book",
//         iconStyle: "icon-gd3",
//         rightKey: "operation_book",
//         children: [
//           {
//             name: "资产配置",
//             path: "assetsConfig",
//             defaultPath: true,
//             rightKey: "operation_book_assetConfig"
//           },
//           {
//             name: "设备管理",
//             path: "deviceManage",
//             rightKey: "operation_book_deviceManage"
//           },
//           {
//             name: "设备台账",
//             path: "deviceAccount",
//             rightKey: "operation_book_deviceBook"
//           },
//           {
//             name: "仓库配置",
//             path: "warehouse",
//             rightKey: "operation_book_warehouseConfig"
//           },
//           {
//             name: "仓库管理",
//             path: "warehouseManage",
//             rightKey: "operation_book_warehouseManage"
//           },
//           {
//             name: "出入库记录",
//             path: "stockRecords",
//             rightKey: "operation_book_warehouseRecord"
//           }
//         ]
//       },
//       {
//         name: "电站运行",
//         path: "running",
//         iconStyle: "icon-running",
//         rightKey: "operation_running",
//         children: [
//           {
//             name: "日报",
//             path: "dayReport",
//             rightKey: "operation_running_daily"
//           },
//           {
//             name: "月报",
//             path: "monthReport",
//             rightKey: "operation_running_monthly"
//           }
//         ]
//       },
//       {
//         name: "智能专家库",
//         path: "intelligentExpert",
//         iconStyle: "icon-pro",
//         rightKey: "operation_experience"
//       },
//       {
//         name: "案例集",
//         path: "caseSet",
//         iconStyle: "icon-gd4",
//         rightKey: "operation_case"
//       }
//     ]
//   }
// ]