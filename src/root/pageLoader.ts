const pagesContext = require.context("./level1Root/", true, /\.(t|j)sx?$/);
const nameFromFileName = (pageName: string) => {
  return pageName.replace(/\.\/(\w*)\.(t|j)sx?/, "$1");
};
const pathFromFileName = (pageName: string) => {
  return pageName.replace(/\.\/(\w*)\.(t|j)sx?/, "/$1/").toLowerCase();
};
export const pages = pagesContext
  .keys()
  .map(page => ({
    name: nameFromFileName(page),
    path: pathFromFileName(page),
    filePath: page,
    component: pagesContext(page).default
  }));
