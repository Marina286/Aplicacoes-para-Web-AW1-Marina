function init(robot) {
	// your code goes here
}

function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins % 2 == 1) {
		robot.action.amount = -40;
	}
}
