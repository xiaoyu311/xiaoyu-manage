import fetch from './fetch';

// 添加分类
export const saveCategories = (CateName, Alias, Link, Img) => fetch('post', '/admin/saveCategories', {
  CateName,
  Alias,
  Link,
  Img
});

// 添加文章
export const saveArticle = (Title, CategoryId, Content, Labels, Alias, Summary, Url) => fetch('post', '/admin/saveArticle', {
  Title,
  CategoryId,
  Content,
  Labels,
  Alias,
  Summary,
  Url,
});

// 查看所有分类
export const getCategory = () => fetch('get', '/admin/getCategory');
