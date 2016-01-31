const shares = [{
	title: 'xxxx',
	url: 'http://www.ihades.me',
	desc: '这是一个关于非常yyyy的好东西，简介，优美。希望大家都喜欢。',
	createDate: ''
}, {
	title: 'xxxx',
	url: 'http://www.ihades.me',
	desc: '这是一个关于非常yyyy的好东西，简介，优美。希望大家都喜欢。',
	createDate: ''
}, {
	title: 'xxxx',
	url: 'http://www.ihades.me',
	desc: '这是一个关于非常yyyy的好东西，简介，优美。希望大家都喜欢。',
	createDate: ''
}, {
	title: 'xxxx',
	url: 'http://www.ihades.me',
	desc: '这是一个关于非常yyyy的好东西，简介，优美。希望大家都喜欢。',
	createDate: ''
}, {
	title: 'xxxx',
	url: 'http://www.ihades.me',
	desc: '这是一个关于非常yyyy的好东西，简介，优美。希望大家都喜欢。',
	createDate: ''
}]

export default {
	getAllShare(cb) {
		//假装网络请求来的数据
		setTimeout(() => cb(shares), 100)
	}

}