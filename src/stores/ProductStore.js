import { defineStore } from 'pinia'

export const useMoodList = defineStore('mood', {
	state: () => ({
		moods: [ 'descr', 'test', 'test2'],
		emojis: [ 'happy', 'meh', 'unhappy', 'sad', 'angry' ]
	}),
	getters: {
		emojiCount(state) {
			return state.moods.length
		},
		emojiCheaperThan(state) {
			return (price) => (
				state.moods.filter(product =>
					product.price < price
				)
			)
		}
	},
	actions: {
		addMood( ) {
			this.moods.push( )
			this.emojis.push( )
		}
	}
})