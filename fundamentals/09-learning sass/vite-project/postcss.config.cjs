module.exports = {
  // postCSS不会更改我们的CSS
  // 我们要安装插件来操作CSS的输出（用第三方插件库 `npm install autoprefixer --save-dev`）
  // install后，我们就可以在这个文件配置它了⬇️
  plugins: [require("autoprefixer")],
};
