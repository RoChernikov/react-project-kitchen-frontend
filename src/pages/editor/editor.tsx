import React, {
  FC,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import ListErrors from '../../components/list-errors';
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR,
} from '../../constants/actionTypes';
import { TErrors } from '../../utils/types';

const mapStateToProps = (state) => ({
  ...state.editor,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTag: () => dispatch({ type: ADD_TAG }),
  onLoad: (payload) => dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: (tag) => dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: (payload) => dispatch({ type: ARTICLE_SUBMITTED, payload }),
  onUnload: (payload) => dispatch({ type: EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_EDITOR, key, value }),
});

interface IEditorPage {
  errors: TErrors | undefined;
  inProgress: boolean | undefined;
  tagList: string[];
  title: string;
  description: string;
  body: string;
  tagInput: string;
  articleSlug: string;
  onUpdateField: (key: string, value: string) => void;
  onAddTag: () => Dispatch<SetStateAction<string>>;
  onRemoveTag: (tag: string) => Dispatch<SetStateAction<string>>;
  onLoad: (payload: Promise<string>) => Dispatch<SetStateAction<string>>;
  onUnload: () => void;
  onSubmit: (promise: Promise<string>) => Dispatch<SetStateAction<string>>;
  match;
}

const EditorPage: FC<IEditorPage> = ({
  errors,
  inProgress,
  tagList,
  title,
  description,
  body,
  tagInput,
  articleSlug,
  onUpdateField,
  onAddTag,
  onRemoveTag,
  onLoad,
  onUnload,
  onSubmit,
  match,
}) => {
  const updateFieldEvent = (key: string) => (evt) =>
    onUpdateField(key, evt.target.value);
  const setTitle = updateFieldEvent('title');
  const setDescription = updateFieldEvent('description');
  const setBody = updateFieldEvent('body');
  const setTagInput = updateFieldEvent('tagInput');

  const watchForEnter = useCallback(
    (evt) => {
      if (evt.keyCode === 13) {
        evt.preventDefault();
        onAddTag();
      }
    },
    [onAddTag]
  );

  const removeTagHandler = (tag) => () => {
    onRemoveTag(tag);
  };

  const submitForm = (etv) => {
    etv.preventDefault();
    const article = {
      title: title,
      description: description,
      body: body,
      tagList: tagList,
    };

    const slug = { slug: articleSlug };
    const promise = articleSlug
      ? agent.Articles.update(Object.assign(article, slug))
      : agent.Articles.create(article);
    onSubmit(promise);
  };

  useEffect(() => {
    onLoad(agent.Articles.get(match.params.slug));
    return () => {
      onUnload();
    };
  }, [onLoad, onUnload, match.params.slug]);

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ListErrors errors={errors}></ListErrors>

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Article Title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e);
                    }}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What's this article about?"
                    value={description}
                    onChange={(e) => {
                      setDescription(e);
                    }}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    value={body}
                    onChange={(e) => {
                      setBody(e);
                    }}
                  ></textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter tags"
                    value={tagInput}
                    onChange={(e) => {
                      setTagInput(e);
                    }}
                    onKeyUp={watchForEnter}
                  />

                  <div className="tag-list">
                    {(tagList || []).map((tag) => {
                      return (
                        <span className="tag-default tag-pill" key={tag}>
                          <i
                            className="ion-close-round"
                            onClick={removeTagHandler(tag)}
                          ></i>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </fieldset>

                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  disabled={inProgress}
                  onClick={submitForm}
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);
