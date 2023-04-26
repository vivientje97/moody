<template>
    <div>
		<h2>Home</h2>
		<div class="pure-g center">
			<div class="container">
				<form class="pure-form container-form">
					<div class="pure-g emoji-container">
						<label for="emoji-happy" class="pure-u-1-5">
							<input type="radio"><p>😀</p>
						</label>
						<label for="emoji-meh" class="pure-u-1-5">
							<input type="radio"><p>😕</p>
						</label>
						<label for="emoji-unhappy" class="pure-u-1-5">
							<input type="radio"><p>🙁</p>
						</label>
						<label for="emoji-sad" class="pure-u-1-5">
							<input type="radio"><p>😢</p>
						</label>
						<label for="emoji-angry" class="pure-u-1-5">
							<input type="radio"><p>😠</p>
						</label>
					</div>
					<fieldset class="pure-group">
						<textarea class="pure-input-1" placeholder="Textareas work too"></textarea>
					</fieldset>
					<button type="submit" class="pure-button pure-input-1-3 pure-button-primary">Submit</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home'
}
</script>
