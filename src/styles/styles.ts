import { createGlobalStyle } from 'styled-components';

export const BaseStyles = createGlobalStyle`
body,p,h1,h2,h3,h4,h5,h6,ul,ol,dl,li,dt,dd,div{
  /* 默认有边距，都要清除 */
  margin: 0;
  padding: 0;
  /*字体设置*/
  font-size: 14px;
  font-family:PingFangSC-Regular,PingFang SC;
  color: #565A70;
  /* 去掉列表的原点 */
  list-style: none;
  /* 默认鼠标 */
  cursor: default;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F3F7FD !important;
}

body ul,ol,dl {
  margin-bottom: 0;
}

h1,h2,h3,h4,h5,h6 {
  margin-bottom: 0 !important;
}

/*行内块元素*/
input,img{
  margin: 0;
  padding: 0;
  border: 0 none;
  outline-style: none;
  vertical-align: bottom; 
}

/*行内元素*/
a,a:active,a:visited{
  /*下划线和颜色*/
  text-decoration: none;
  color: rgba(54,113,241,0.8);
}

a:hover{
  color:rgba(54,113,241,1);
}

textarea{
  /* 边框清零 */
  border:none;
  /* 轮廓线清零 */
  outline: none;
  /* 防止文本域被随意拖拽 */
  resize: none;
}

i{
  /*文字样式*/
  font-style: normal; 
}

table{
  /*边框合并*/
  border-collapse:collapse;
  border-spacing:0;
}


/* 使用伪元素清除浮动 */
.clearfix::before,
.clearfix::after{
  content:"";
  height: 0;
  line-height: 0;
  display: block;
  visibility: none;
  clear: both;
}

.clearfix {
  *zoom: 1;
}

/*可选*/
/*单选框和复选框的配置，一般是分开的*/
input[type="radio"],input[type="checkbox"]{
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  display: none;
}

label{
  display: inline-block;
  cursor: pointer;
}

label input[type="radio"]+span,label input[type="checkbox"]+span{
  width: 16px;
  height: 16px;
  display: inline-block;
  background: url("../images/nocheck.png") no-repeat;
}

label input[type="radio"]:checked+span,label input[type="checkbox"]:checked+span{
  background: url("../images/check.png") no-repeat;
}

label input[type="radio"]:checked~i,label input[type="checkbox"]:checked~i{
  color: #38d6ff;
}

/*可选*/
/* 自定义数字框配置 */
input[type="number"]{
  width: 76px;
  height: 36px;
  background-color: rgba(5,45,82,0.4);
  border: 2px solid #ccc;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  padding: 0 10px;
}

input[type="number"]::-webkit-inner-spin-button{
  -webkit-appearance: none;
}

input[type="number"]+div{
  width: 30px;
  height: 40px;
  padding-left: 2px;
  cursor: pointer;
}

input[type="number"]+div > .count_add{
  display: block;
  width: 28px;
  height: 19px;
  background: url("../images/count_add.png") no-repeat;
  background-size: contain;
  margin-bottom: 2px;
}

input[type="number"]+div > .count_subtract{
  display: block;
  width: 28px;
  height: 19px;
  background: url("../images/count_subtract.png") no-repeat;
  background-size: contain;
}
`