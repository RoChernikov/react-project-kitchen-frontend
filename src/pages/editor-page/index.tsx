import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import styles from './editor-page.module.scss';

const EditorPage: FC = () => {
  const mockArticleData = {
    title: 'История трудоустройства',
    about:
      'Это моя первая работа после четырёхлетнего перерыва. Сначала случился декрет, потом переезд в Амстердам. В новой стране я решила получать новую профессию и оказалась в 22-й когорте направления «Веб-разработка».',
    image: 'http://site.ru/1351351.jpg',
    text: 'По местной традиции рассказываю историю моего трудоустройства. Это моя первая работа после четырёхлетнего перерыва. Сначала случился декрет, потом переезд в Амстердам. В новой стране я решила получать новую профессию и оказалась в 22-й когорте направления «Веб-разработка». В сентябре 2021 года я получила диплом. Два месяца, с октября по декабрь, стажировалась (удалённо, бесплатно и part-time) в российской веб-студии P.A.Group, они размещали партнёрскую вакансию через программу акселерации. С нового года я возобновила поиски работы, но уже в Нидерландах. В моей excel-табличке 65 позиций, из них 31 — прямые отказы, остальные — отклики без ответа. Технических интервью было всего четыре, и я все завалила по банальной причине: решала мало задач с CodeWars. Этот навык критически важен, но я их ненавижу, эти задачи, и по вечерам вместо курсов по JS смотрю мультики с дочкой. Тогда через знакомых я познакомилась с девушкой-джуном, и теперь вместе раз-два в неделю мы разбираемся с методами сортировки массивов. Так я нашла подругу и преодолела внутреннее сопротивление.Я обсудила мои неудачи ещё с двумя знакомыми-фронтами. Один прислал интересную задачу для тренировки и предложил сделать её ревью, а второй пригласил помочь ему с pet-проектом, до которого у него самого не доходят руки. И осевшие на дне памяти знания начали всплывать. И это единственный мой совет: если вы не можете собраться в кучу и тонете в ощущении собственной бестолковости, попросите помощи у друзей и знакомых. Возможно, вам нужна одна решённая задачка, чтобы вы снова почувствовали веру в себя.Оффер я приняла от компании, создающей веб-приложения с использованием low-code/no-code платформы. HR сама нашла меня в LinkedIn. Я прошла два интервью: звонок-знакомство и детальное обсуждение позиции. Технического интервью не было, потому что работа не предполагает разработку приложений с нуля. Если вы не смотрели в сторону компаний low-code или, как я, даже не знали о них, погуглите. Возможно, это и ваш путь. Казалось бы, к чему тогда задачки, pet-проекты и все буквы выше? Я надеюсь, что всё пригодится. Да, я не могу за выходные освоить библиотеку или написать тестовое на неизвестном мне фреймворке — значит, пойду маленькими шагами. Пожелайте мне удачи ))',
    tags: 'опыт, первая работа, стажировка, pet-проекты',
  };

  const [title, setTitle] = useState<string>(mockArticleData.title);
  const [about, setAbout] = useState<string>(mockArticleData.about);
  const [image, setImage] = useState<string>(mockArticleData.image);
  const [text, setText] = useState<string>(mockArticleData.text);
  const [tags, setTags] = useState<string>(mockArticleData.tags);

  const onTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setTitle(evt.target.value);
  };
  const onAboutChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setAbout(evt.target.value);
  };
  const onImageChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setImage(evt.target.value);
  };
  const onTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };
  const onTagsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTags(evt.target.value);
  };

  const onEditComfirm = (evt: SyntheticEvent) => {
    evt.preventDefault();
  };
  const onDeleteComfirm = (evt: SyntheticEvent) => {
    evt.preventDefault();
  };

  return (
    <div className={styles.editArticle}>
      <h1 className={styles.editArticle__title}>Редактировать запись</h1>
      <form className={styles.editArticle__form}>
        <label className={styles.editArticle__label}>
          <p className={styles.editArticle__labelText}>Название статьи</p>
          <input
            className={styles.editArticle__input}
            name="title"
            onChange={onTitleChange}
            value={title}
            required
          />
        </label>
        <label className={styles.editArticle__label}>
          <p className={styles.editArticle__labelText}>О чем статья</p>
          <textarea
            onChange={onAboutChange}
            name="about"
            className={`${styles.editArticle__input} ${styles.editArticle__input_textarea}`}
            rows={4}
            value={about}
            required
          />
        </label>
        <label className={styles.editArticle__label}>
          <p className={styles.editArticle__labelText}>
            URL изображения (опционально)
          </p>
          <input
            className={styles.editArticle__input}
            onChange={onImageChange}
            name="image"
            value={image}
          />
        </label>
        <label className={styles.editArticle__label}>
          <p className={styles.editArticle__labelText}>Текст статьи</p>
          <textarea
            onChange={onTextChange}
            name="text"
            className={`${styles.editArticle__input} ${styles.editArticle__input_textarea}`}
            rows={24}
            value={text}
            required
          />
        </label>
        <label className={styles.editArticle__label}>
          <p className={styles.editArticle__labelText}>Теги (через запятую)</p>
          <input
            className={styles.editArticle__input}
            onChange={onTagsChange}
            name="tags"
            value={tags}
            required
          />
        </label>
        <div className={styles.editArticle__buttons}>
          <button className={styles.editArticle__submitBtn} type="submit">
            Сохранить запись
          </button>
          <button className={styles.editArticle__deleteBtn} type="button">
            <div className={styles.editArticle__deleteIcon} />
            Удалить запись
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditorPage;
