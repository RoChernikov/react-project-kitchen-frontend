export const mockStore = {
  articles: [
    {
      slug: 'title-4ez0lb',
      title: 'My article!',
      description: 'about my acticle',
      body: `По местной традиции рассказываю историю моего трудоустройства.
      Это моя первая работа после четырёхлетнего перерыва. Сначала случился декрет, потом переезд в Амстердам. В новой стране я решила получать новую профессию и оказалась в 22-й когорте направления «Веб-разработка». В сентябре 2021 года я получила диплом. Два месяца, с октября по декабрь, стажировалась (удалённо, бесплатно и part-time) в российской веб-студии P.A.Group, они размещали партнёрскую вакансию через программу акселерации. С нового года я возобновила поиски работы, но уже в Нидерландах.
      В моей excel-табличке 65 позиций, из них 31 — прямые отказы, остальные — отклики без ответа. Технических интервью было всего четыре, и я все завалила по банальной причине: решала мало задач с CodeWars. Этот навык критически важен, но я их ненавижу, эти задачи, и по вечерам вместо курсов по JS смотрю мультики с дочкой. Тогда через знакомых я познакомилась с девушкой-джуном, и теперь вместе раз-два в неделю мы разбираемся с методами сортировки массивов. Так я нашла подругу и преодолела внутреннее сопротивление.
      Я обсудила мои неудачи ещё с двумя знакомыми-фронтами. Один прислал интересную задачу для тренировки и предложил сделать её ревью, а второй пригласил помочь ему с pet-проектом, до которого у него самого не доходят руки. И осевшие на дне памяти знания начали всплывать. И это единственный мой совет: если вы не можете собраться в кучу и тонете в ощущении собственной бестолковости, попросите помощи у друзей и знакомых. Возможно, вам нужна одна решённая задачка, чтобы вы снова почувствовали веру в себя.
      Оффер я приняла от компании, создающей веб-приложения с использованием low-code/no-code платформы. HR сама нашла меня в LinkedIn. Я прошла два интервью: звонок-знакомство и детальное обсуждение позиции. Технического интервью не было, потому что работа не предполагает разработку приложений с нуля. Если вы не смотрели в сторону компаний low-code или, как я, даже не знали о них, погуглите. Возможно, это и ваш путь.
      Казалось бы, к чему тогда задачки, pet-проекты и все буквы выше? Я надеюсь, что всё пригодится. Да, я не могу за выходные освоить библиотеку или написать тестовое на неизвестном мне фреймворке — значит, пойду маленькими шагами. Пожелайте мне удачи ))`,
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
    },
  ],
  articlesCount: 2,
  user: {
    username: 'John Smith',
    email: 'john@gmail.com',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmVjZmNmNjQ4N2Y4MDAxNDJiNDFhYSIsInVzZXJuYW1lIjoiMTIzIiwiZXhwIjoxNjU2NjEzMzI3LCJpYXQiOjE2N',
    bio: 'My name is John',
    image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
  },
};
