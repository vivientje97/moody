import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useMoodList = defineStore('mood', {
	state: () => ({
		moods: useStorage('moods', [{id: '1', description: 'descr', emoji: '🙂', date: '02-02-2023 12:00'}, {id: '2', description: 'test1', emoji: '😢', date: '02-02-2023 12:00'}, {id: '3', description: 'helloworld', emoji: '😕', date: '02-02-2023 12:00'}]),
	}),
	getters: {
		emojiCount(state) {
			return state.moods.length
		},
		moodDescription(state) {
			return state.moods.description
		},
		moodEmoji(state) {
			return state.moods.emoji
		},
		moodDate(state) {
			return state.moods.date
		},

	},
	actions: {
		addMood( ) {
			this.moods.push( )
		}
	}
})