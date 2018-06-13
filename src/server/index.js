import fetch from './fetch';

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
