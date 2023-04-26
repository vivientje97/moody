<template>
    <div>
		<h2>Home</h2>
		<div class="pure-g center">
			<div class="container">
				<form class="pure-form">
					<fieldset class="pure-group">
						<div class="pure-g emoji-container">
							<label for="emoji-happy" class="happy pure-u-1-5">
								<input class="radio" id="emoji-happy" value="happy" name="emoji" type="radio">😀
							</label>
							<label for="emoji-meh" class="meh pure-u-1-5">
								<input class="radio" id="emoji-meh" value="meh" name="emoji" type="radio">😕
							</label>
							<label for="emoji-unhappy" class="unhappy pure-u-1-5">
								<input class="radio" id="emoji-unhappy" value="unhappy" name="emoji" type="radio">🙁
							</label>
							<label for="emoji-sad" class="sad pure-u-1-5">
								<input class="radio" id="emoji-sad" value="sad" name="emoji" type="radio">😢
							</label>
							<label for="emoji-angry" class="angry pure-u-1-5">
								<input class="radio" id="emoji-angry" value="angry" name="emoji" type="radio">😠
							</label>
						</div>

						<textarea class="pure-input-1" id="description" placeholder="Textareas work too"></textarea>

						<button type="submit" class="pure-button pure-input-1-3 pure-button-primary" @click="emojiStore.addMood( )">Submit</button>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { useMoodList } from '../stores/MoodList.js'
import { mapStores } from 'pinia'

export default {
	name: 'Home',

	computed: {
		...mapStores(useMoodList)
	}
}
</script>
