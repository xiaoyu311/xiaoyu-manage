import fetch from './fetch';

// 添加分类
export const saveCategories = (CateName, Alias, Link, Img) => fetch('post', '/admin/saveCategories', {
  CateName,
  Alias,
  Link,
  Img
});

// 查看所有分类
export const getCategory = () => fetch('get', '/admin/getCategory');

