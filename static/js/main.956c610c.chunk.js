(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),d=a.n(i),l=(a(18),a(19),a(11)),s=a(2),c=a(3),r=a(4),u=a(7),h=a(5),m=a(1),p=a(6),b=(a(20),a(21),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this))).state={isEditing:!1,text:e.text,date:e.date},a.handleToggle=a.handleToggle.bind(Object(m.a)(a)),a.handleDelete=a.handleDelete.bind(Object(m.a)(a)),a.handleEdit=a.handleEdit.bind(Object(m.a)(a)),a.handleChangeText=a.handleChangeText.bind(Object(m.a)(a)),a.handleChangeDate=a.handleChangeDate.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.isDateOverdue=a.isDateOverdue.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleToggle",value:function(e){e.preventDefault(),this.props.toggleTodo(this.props.id)}},{key:"handleDelete",value:function(e){e.preventDefault(),this.props.removeTodo(this.props.id)}},{key:"handleEdit",value:function(e){e.preventDefault(),this.setState({isEditing:!0})}},{key:"handleChangeText",value:function(e){this.setState(Object(s.a)({},this.state,{text:e.target.value}))}},{key:"handleChangeDate",value:function(e){this.setState(Object(s.a)({},this.state,{date:e.target.value}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.updateTodo(this.props.id,this.state.text,this.state.date),this.setState(Object(s.a)({},this.state,{isEditing:!1}))}},{key:"formateDate",value:function(e){return new Date(e).toLocaleDateString()}},{key:"isDateOverdue",value:function(){return new Date(this.props.date)<new Date}},{key:"render",value:function(){var e;e=this.state.isEditing?o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:"Todo-Editing",onSubmit:this.handleSubmit},o.a.createElement("input",{name:"text",type:"text",value:this.state.text,onChange:this.handleChangeText}),o.a.createElement("input",{name:"date",type:"date",value:this.state.date,onChange:this.handleChangeDate}),o.a.createElement("input",{type:"submit",value:"save"}))):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:this.props.complete?"Todo-Complete":"",onClick:this.handleToggle},this.props.text," - ",this.formateDate(this.props.date)),o.a.createElement("div",null,o.a.createElement("i",{class:"fas fa-edit",onClick:this.handleEdit}),o.a.createElement("i",{class:"fas fa-trash-alt",onClick:this.handleDelete})));var t="Todo"+(this.isDateOverdue()&&!this.props.complete?" Todo-Overdue":"");return o.a.createElement("li",{className:t},e)}}]),t}(n.Component)),v=(a(22),a(10)),g=a.n(v),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={text:"",date:""},e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e.handleChangeText=e.handleChangeText.bind(Object(m.a)(e)),e.handleChangeDate=e.handleChangeDate.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleChangeText",value:function(e){this.setState(Object(s.a)({},this.state,{text:e.target.value}))}},{key:"handleChangeDate",value:function(e){this.setState(Object(s.a)({},this.state,{date:e.target.value}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addTodo(Object(s.a)({},this.state,{id:g()()})),this.setState({text:"",date:""})}},{key:"render",value:function(){return o.a.createElement("div",{className:"NewTodoForm"},o.a.createElement("h2",null,"New Todo"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"text",value:this.state.text,onChange:this.handleChangeText,required:!0}),o.a.createElement("input",{type:"date",name:"date",value:this.state.date,onChange:this.handleChangeDate,required:!0}),o.a.createElement("input",{type:"submit",value:"Add Todo"})))}}]),t}(n.Component),O=function(e){function t(){var e;Object(c.a)(this,t),e=Object(u.a)(this,Object(h.a)(t).call(this));var a=localStorage.getItem("todo-list");return e.state=a?Object(s.a)({},JSON.parse(a)):{todos:[]},e.addTodo=e.addTodo.bind(Object(m.a)(e)),e.toggleTodo=e.toggleTodo.bind(Object(m.a)(e)),e.removeTodo=e.removeTodo.bind(Object(m.a)(e)),e.updateTodo=e.updateTodo.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"addTodo",value:function(e){var t=Object(s.a)({},e,{complete:!1});this.setState({todos:[].concat(Object(l.a)(this.state.todos),[t])})}},{key:"toggleTodo",value:function(e){var t=this.state.todos.map(function(t){return t.id===e?Object(s.a)({},t,{complete:!t.complete}):t});this.setState({todos:t})}},{key:"removeTodo",value:function(e){this.setState({todos:this.state.todos.filter(function(t){return t.id!==e})})}},{key:"updateTodo",value:function(e,t,a){this.setState({todos:this.state.todos.map(function(n){return n.id===e?Object(s.a)({},n,{text:t||n.text,date:a||n.date}):n})})}},{key:"render",value:function(){var e=this;localStorage.setItem("todo-list",JSON.stringify(this.state));var t=this.state.todos.map(function(t){return o.a.createElement(b,{key:t.id,id:t.id,text:t.text,date:t.date,complete:t.complete,toggleTodo:e.toggleTodo,removeTodo:e.removeTodo,updateTodo:e.updateTodo})});return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h1",null,"Todo List!"),o.a.createElement("p",null,"A simple React Todo List App"),o.a.createElement("ul",null,t),o.a.createElement(f,{addTodo:this.addTodo}))}}]),t}(n.Component);var T=function(){return o.a.createElement(O,null)};d.a.render(o.a.createElement(T,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.956c610c.chunk.js.map