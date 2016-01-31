import {articleService} from '../service'
import * as types from './mutation-types'


export const getAllArticle = ({ dispatch }) => {
  articleService.getAllArticle(articles => {
    dispatch(types.GET_MY_ARTICLE, articles)
  })
}
