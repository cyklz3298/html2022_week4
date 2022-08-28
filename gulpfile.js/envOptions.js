const srcPath = "./app";
const distPath = "./dist";
const nodePath = "./node_modules";

let envOptions = {
  string: "env",
  default: {
    env: "dev",
  },
  copyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/assets/js/**/*.js`,
      `!${srcPath}/assets/style/**/*.css`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: distPath,
  },
  html: {
    src: [`${srcPath}/**/*.html`],
    ejsSrc: [`${srcPath}/**/*.ejs`],
    path: distPath,
  },
  style: {
    src: [`${srcPath}/assets/style/**/*.css`],
    concat: "all.css",
    path: `${distPath}/assets/style`,
  },
  vendersCss: {
    src: [`${nodePath}/aos/dist/aos.css`],
    path: `${distPath}/assets/style/venders`,
  },
  javascript: {
    src: [`${srcPath}/assets/js/**/*.js`],
    concat: "all.js",
    path: `${distPath}/assets/js`,
  },
  vendersJs: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.min.js`,
      `${nodePath}/aos/dist/aos.js`,
    ],
    path: `${distPath}/assets/js/venders`,
  },
  img: {
    src: [`${srcPath}/assets/images/**/*`],
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
