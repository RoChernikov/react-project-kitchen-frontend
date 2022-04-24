import Banner from './banner';
import MainView from './main-view';
import React from 'react';
import Tags from './tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
    APPLY_TAG_FILTER,
} from '../../constants/actionTypes';
import { useEffect } from 'react';
import { IArticleList } from '../article-list/article-list';
import { TPayload } from './tags';
import { FC, Dispatch, SetStateAction } from 'react';


//const Promise = global.Promise;

export interface IHome {
    onLoad: any;
    onUnload: () => void;
    appName: string;
    tags?: string[];
    onClickTag: (
        tag: string,
        pager: (page: number) => IArticleList,
        payload: TPayload
    ) => Dispatch<SetStateAction<string>>;
    token: string;

}


const mapStateToProps = (state) => ({
    ...state.home,
    appName: state.common.appName,
    token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
    onClickTag: (tag, pager, payload) =>
        dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
    onLoad: (tab, pager, payload) =>
        dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
    onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});

const Home: FC<IHome> = ({
    onLoad,
    onUnload,
    appName,
    tags,
    onClickTag,
    token
}) => {
    useEffect(() => {
        const tab = token ? 'feed' : 'all';

        const articlesPromise = token
            ? agent.Articles.feed
            : agent.Articles.all;


        onLoad(
            tab,
            articlesPromise,
            Promise.all<string>([agent.Tags.getAll(), articlesPromise()])
        );
    }, [onLoad]);

    useEffect(() => {
        return () => {
            onUnload();
        };
    }, [onUnload]);


    return (
        <div className="home-page">
            <Banner token={token} appName={appName} />
            <div className="container page">
                <div className="row">
                    <MainView />

                    <div className="col-md-3">
                        <div className="sidebar">
                            <p>Popular Tags</p>

                            <Tags
                                tags={tags}
                                onClickTag={onClickTag} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);