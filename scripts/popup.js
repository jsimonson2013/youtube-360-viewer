document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('activate').addEventListener('click', () => {
		initializeGazeTracking()
	})
	document.getElementById('deactivate').addEventListener('click', () => {
		alert('Deactivated!')
	})
})
