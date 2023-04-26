<template>
    <div>
		<h2>History</h2>
		<div class="pure-g center">
			<div class="container">
				<thead>
					<th>Emoji</th>
					<th>Date</th>
				</thead>
				<tr v-for="mood in moodStore.moods" :key="mood.id">
					<td>{{ mood.emoji }}</td>
					<td>{{ mood.date }}</td>
				</tr>
					<div v-for="mood in moodStore.moods" :key="mood.id" class="pure-g emoji-container">
						<div  class="pure-u-1-2">
							{{ mood.emoji }}
						</div>
						<div class="pure-u-1-2">
							{{ mood.date }}
						</div>
					</div>
				<button type="submit" class="pure-button pure-input-1-3 pure-button-primary" >Details</button>
			</div>
		</div>
	</div>
</template>

<script>
import { useMoodList } from '../stores/MoodList.js'
import { mapStores } from 'pinia'

export default {
	name: 'History',

	data() {
		// return {
		// 	moods: [{ description: 'Foo', emoji: '🙂' }, { description: 'Bar', emoji: 'emoji-sad' }]
		// }
	},

	computed: {
		...mapStores(useMoodList),
	},

}
</script>