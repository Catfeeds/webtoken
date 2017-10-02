webpackJsonp([13],{480:function(e,t,a){var o=a(179)(a(510),a(549),null,null);e.exports=o.exports},485:function(e,t,a){e.exports={default:a(486),__esModule:!0}},486:function(e,t,a){a(490),e.exports=a(56).Object.assign},487:function(e,t,a){"use strict";var o=a(181),l=a(488),i=a(489),n=a(182),s=a(180),r=Object.assign;e.exports=!r||a(124)(function(){var e={},t={},a=Symbol(),o="abcdefghijklmnopqrst";return e[a]=7,o.split("").forEach(function(e){t[e]=e}),7!=r({},e)[a]||Object.keys(r({},t)).join("")!=o})?function(e,t){for(var a=n(e),r=arguments.length,d=1,c=l.f,u=i.f;r>d;)for(var g,f=s(arguments[d++]),m=c?o(f).concat(c(f)):o(f),p=m.length,h=0;p>h;)u.call(f,g=m[h++])&&(a[g]=f[g]);return a}:r},488:function(e,t){t.f=Object.getOwnPropertySymbols},489:function(e,t){t.f={}.propertyIsEnumerable},490:function(e,t,a){var o=a(123);o(o.S+o.F,"Object",{assign:a(487)})},510:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(485),l=a.n(o);t.default={data:function(){return{url:"/role",tableData:[],addRoleDialog:!1,editRoleDialog:!1,rightDialog:!1,role:{id:"",name:""},allModules:[],defaultProps:{children:"child",label:"name"},selectedKey:[],rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}]}}},mounted:function(){this.getData(),this.getModules()},methods:{getData:function(){var e=this;e.$emit("changeLoading"),e.$axios.get(e.url).then(function(t){e.$emit("changeLoading"),e.tableData=t.data.data.list})},getModules:function(){var e=this;e.$axios.get("/module").then(function(t){e.allModules=t.data.data.list})},formatter:function(e,t){return e.created_at},handleAdd:function(){this.role={}},postAdd:function(e){var t=this;t.$refs[e].validate(function(e){if(!e)return!1;t.$emit("changeLoading"),t.$axios.post(t.url,t.role).then(function(e){if(t.$emit("changeLoading"),4e3!=e.data.code)return t.$message({message:e.data.msg,type:"error"}),!1;t.$message({message:e.data.msg,type:"success"}),t.getData(),t.addRoleDialog=!1})})},handleEdit:function(e,t){this.role=l()({},t)},putEdit:function(e){var t=this;t.$refs[e].validate(function(e){if(!e)return!1;t.$emit("changeLoading"),t.$axios.put(t.url+"/"+t.role.id,t.role).then(function(e){if(t.$emit("changeLoading"),4e3!=e.data.code)return t.$message({message:e.data.msg,type:"error"}),!1;t.$message({message:e.data.msg,type:"success"}),t.getData(),t.editRoleDialog=!1})})},handleDelete:function(e,t){var a=this;a.$emit("changeLoading"),a.$axios.delete(a.url+"/"+t.id).then(function(e){a.$emit("changeLoading"),4e3==e.data.code?(a.$message({message:e.data.msg,type:"success"}),a.getData()):a.$message({message:e.data.msg,type:"error"})})},handleRole:function(e){var t=this;e.module_ids&&setTimeout(function(){t.$refs.tree.setCheckedKeys(e.module_ids.split(","))},0),this.role=l()({},e)},postRole:function(){var e=this;e.$emit("changeLoading"),e.$axios.put("/module/"+e.role.id,this.$refs.tree.getCheckedKeys()).then(function(t){e.$emit("changeLoading"),4e3==t.data.code?(e.$message({message:t.data.msg,type:"success"}),e.getData()):e.$message({message:t.data.msg,type:"error"})})}}}},549:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-menu"}),e._v(" 角色管理")]),e._v(" "),a("el-breadcrumb-item",[e._v("列表")])],1)],1),e._v(" "),a("div",{staticClass:"z-title"},[a("el-button",{staticClass:"z-right",attrs:{type:"primary"},on:{click:function(t){e.addRoleDialog=!0,e.handleAdd()}}},[e._v("添加\n        ")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"角色名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",formatter:e.formatter}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.editRoleDialog=!0,e.handleEdit(t.$index,t.row)}}},[e._v("编辑\n                ")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){e.rightDialog=!0,e.handleRole(t.row)}}},[e._v("权限\n                ")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除\n                ")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:"角色添加",visible:e.addRoleDialog},on:{"update:visible":function(t){e.addRoleDialog=t}}},[a("el-form",{ref:"addRole",attrs:{model:e.role,rules:e.rules}},[a("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[a("el-input",{model:{value:e.role.name,callback:function(t){e.role.name=t},expression:"role.name"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(t){e.addRoleDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postAdd("addRole")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"角色编辑",visible:e.editRoleDialog},on:{"update:visible":function(t){e.editRoleDialog=t}}},[a("el-form",{ref:"editRole",attrs:{model:e.role,rules:e.rules}},[a("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[a("el-input",{model:{value:e.role.name,callback:function(t){e.role.name=t},expression:"role.name"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(t){e.editRoleDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.putEdit("editRole")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"权限管理",visible:e.rightDialog},on:{"update:visible":function(t){e.rightDialog=t}}},[a("el-tree",{ref:"tree",attrs:{data:e.allModules,"show-checkbox":"","default-expand-all":!0,"default-checked-keys":e.selectedKey,"node-key":"id","highlight-current":"",props:e.defaultProps}}),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(t){e.rightDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.rightDialog=!1,e.postRole()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=13.086bc927b19e211ec345.js.map