import {
  articleService, historyService,shareService
}
from '../service'
import * as types from './mutation-types'

//发布文章
export const getAllArticle = ({
  dispatch
}) => {
  articleService.getAllArticle(articles => {
    dispatch(types.GET_MY_ARTICLE, articles)
  })
}

//阅读轨迹
export const getAllHistory = ({
  dispatch
}) => {
  historyService.getAllHistory(data => {
    const historys = data.values
    const datetime = data.dates
    dispatch(types.GET_MY_HISTORY, historys, datetime)
  })
}

//好东西分享
export const getAllShare = ({
  dispatch
}) => {
  shareService.getAllShare(shares => {
    dispatch(types.GET_MY_SHARE, shares)
  })
}
