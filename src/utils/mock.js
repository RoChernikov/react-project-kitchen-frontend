export const mockStore = {
  articles: [
    {
      slug: 'title-4ez0lb',
      title: 'My article!',
      description: 'about my acticle',
      body: 'lorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      createdAt: '2022-04-25T02:21:26.643Z',
      updatedAt: '2022-04-25T02:21:26.643Z',
      tagList: ['tag1', 'tag2'],
      favorited: false,
      favoritesCount: 3,
      author: {
        username: 'John Smith',
        image: 'https://klike.net/uploads/posts/2019-05/1558692395_12.jpg',
        bio: 'My name is John',
        following: false,
      },
    },
    {
      slug: 'title-4ez0lc',
      title: 'My article 2!',
      description: 'About my acticle',
      body: 'lorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      createdAt: '2022-04-26T02:21:26.643Z',
      updatedAt: '2022-04-26T02:21:26.643Z',
      tagList: ['tag1', 'tag3'],
      favorited: false,
      favoritesCount: 2,
      author: {
        username: 'John Smith',
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        bio: 'My name is John',
        following: false,
      },
    },
  ],
  articlesCount: 2,
  comments: [
    {
      id: '626ee769ccf6c3001528370e',
      body: 'Awesome comment about anything!',
      createdAt: '2022-04-25T02:21:26.643Z',
      author: {
        username: 'John Smith',
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        bio: 'My name is John',
        following: false,
      },
    },
    {
      id: '626ee769ccf6c30015283705',
      body: 'Awesome comment about anything 2!',
      createdAt: '2022-04-25T02:21:26.643Z',
      author: {
        username: 'John Smith',
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        bio: 'My name is John',
        following: false,
      },
    },
    {
      id: '626ee769ccf6c30015283703',
      body: 'Awesome comment about anything 3!',
      createdAt: '2022-04-25T02:21:26.643Z',
      author: {
        username: 'John Smith',
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        bio: 'My name is John',
        following: false,
      },
    },
  ],
  user: {
    username: 'John Smith',
    email: 'john@gmail.com',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmVjZmNmNjQ4N2Y4MDAxNDJiNDFhYSIsInVzZXJuYW1lIjoiMTIzIiwiZXhwIjoxNjU2NjEzMzI3LCJpYXQiOjE2N',
    bio: 'My name is John',
    image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
  },
};
