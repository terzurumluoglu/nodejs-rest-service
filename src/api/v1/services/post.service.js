const users = [
  {
    id: 1,
    title: 'Title 1',
    desc: 'Description 1',
    body: 'Body 1',
  },
  {
    id: 2,
    title: 'Title 2',
    desc: 'Description 2',
    body: 'Body 2',
  },
];

const getAllPosts = () => {
  return users;
};

const getPostById = (postId) => {
  return users.find((f) => f.id === postId);
};

module.exports = { getAllPosts, getPostById };
