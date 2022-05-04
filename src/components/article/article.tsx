import React, { Dispatch, SetStateAction, useEffect } from 'react';
//import agent from '../../../src_old/agent';
import { connect } from 'react-redux';
//import marked from 'marked';
import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
} from '../../../src_old/constants/actionTypes';
import {
  TArticle,
  TAuthor,
  TComment,
  TErrors,
  TUser,
} from 'utils/types';
import CommentContainer from './components/comment-container/comment-container';
import ArticleMeta from './components/article-meta/ArticleMeta';
import api from '../../utils/api';
import { AxiosResponse } from 'axios';
import styles from './article.module.scss';
import ArticleActions from '../article/components/article-actions/article-actions';
interface IArticle {
  article: TArticle;
  comments: TComment[];
  currentUser: TUser | null;
  // commentErrors: TErrors | undefined;
  // inProgress: boolean | undefined;
  // tagList: string[];
  // title: string;
  // description: string;
  // body: string;
  // tagInput: string;
  // articleSlug: string;
  // onUpdateField: (key: string, value: string) => void;
  // onAddTag: () => Dispatch<SetStateAction<string>>;
  // onRemoveTag: (tag: string) => Dispatch<SetStateAction<string>>;
  // onLoad: (
  //   payload: [AxiosResponse<any, any>, AxiosResponse<any, any>]
  // ) => Dispatch<SetStateAction<string>>;
  // onLoad: any;
  // onUnload: () => void;
  // onSubmit: (promise: Promise<string>) => Dispatch<SetStateAction<string>>;
  // match: any;
}

// const mapStateToProps = (state) => ({
//   ...state.article,
//   currentUser: state.common.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onLoad: (payload) => dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
//   onUnload: () => dispatch({ type: ARTICLE_PAGE_UNLOADED }),
// });

export const Article: React.FC<IArticle> = ({
  article,
  comments,
  //commentErrors,
  currentUser,
  //match,
  //onLoad,
  //onUnload,
}) => {
  // useEffect(() => {
  //   onLoad(
  //     // Promise.all([
  //     //   api.getArticlesBy(match.params.id),
  //     //   api.getComments(match.params.id),
  //     // ])
  //   );
  //   return () => {
  //     onUnload();
  //   };
  // }, [onLoad, onUnload]);

  // if (article) {
  //   const markup = {
  //     __html: marked(article.body, { sanitize: true }),
  //   };

  const canModify =
    currentUser && currentUser.username === article.author.username;

  return (
    <div className="article-page">
      <div className="banner">
        <ArticleActions
          canModify={canModify}
          article={article}
          onClickDelete={(function (
            payload: Promise<string>
          ): Dispatch<SetStateAction<string>> {
            throw new Error('Function not implemented.');
          })}
        />
        <div className={styles.container}>
          <h1 className={styles.container__header}>{article.title}</h1>
          <ArticleMeta article={article} canModify={canModify} />
        </div>
      </div>
      <div className={styles.container}>
        <div className="row article-content">
          <div className="col-xs-12">
            {/* <div dangerouslySetInnerHTML={markup}></div> */}
            <div className={styles.container__text}>
              По местной традиции рассказываю историю моего трудоустройства.
              Это моя первая работа после четырёхлетнего перерыва. Сначала случился декрет, потом переезд в Амстердам. В новой стране я решила получать новую профессию и оказалась в 22-й когорте направления «Веб-разработка». В сентябре 2021 года я получила диплом. Два месяца, с октября по декабрь, стажировалась (удалённо, бесплатно и part-time) в российской веб-студии P.A.Group, они размещали партнёрскую вакансию через программу акселерации. С нового года я возобновила поиски работы, но уже в Нидерландах.
              В моей excel-табличке 65 позиций, из них 31 — прямые отказы, остальные — отклики без ответа. Технических интервью было всего четыре, и я все завалила по банальной причине: решала мало задач с CodeWars. Этот навык критически важен, но я их ненавижу, эти задачи, и по вечерам вместо курсов по JS смотрю мультики с дочкой. Тогда через знакомых я познакомилась с девушкой-джуном, и теперь вместе раз-два в неделю мы разбираемся с методами сортировки массивов. Так я нашла подругу и преодолела внутреннее сопротивление.
              Я обсудила мои неудачи ещё с двумя знакомыми-фронтами. Один прислал интересную задачу для тренировки и предложил сделать её ревью, а второй пригласил помочь ему с pet-проектом, до которого у него самого не доходят руки. И осевшие на дне памяти знания начали всплывать. И это единственный мой совет: если вы не можете собраться в кучу и тонете в ощущении собственной бестолковости, попросите помощи у друзей и знакомых. Возможно, вам нужна одна решённая задачка, чтобы вы снова почувствовали веру в себя.
              Оффер я приняла от компании, создающей веб-приложения с использованием low-code/no-code платформы. HR сама нашла меня в LinkedIn. Я прошла два интервью: звонок-знакомство и детальное обсуждение позиции. Технического интервью не было, потому что работа не предполагает разработку приложений с нуля. Если вы не смотрели в сторону компаний low-code или, как я, даже не знали о них, погуглите. Возможно, это и ваш путь.
              Казалось бы, к чему тогда задачки, pet-проекты и все буквы выше? Я надеюсь, что всё пригодится. Да, я не могу за выходные освоить библиотеку или написать тестовое на неизвестном мне фреймворке — значит, пойду маленькими шагами. Пожелайте мне удачи ))

            </div>
            <ul className={styles.container__tags}>
              {article.tagList.map((tag) => {
                return (
                  <li className={styles.container__tag} key={tag}>
                    {'# ' + tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="article-actions"></div>
        <div className="row">
          <CommentContainer
            comments={comments || []}
            //errors={commentErrors}
            slug={article.slug}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
  // }
  // return null;
};

// export default connect(mapStateToProps, mapDispatchToProps)(Article);
export default Article;
