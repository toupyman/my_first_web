const dateTimeDisplay = document.querySelector("#current-datetime");
const koreanDateTime = new Intl.DateTimeFormat("ko-KR", {
	dateStyle: "long",
	timeStyle: "medium",
	hourCycle: "h23",
});

function updateDateTime() {
	const now = new Date();
	dateTimeDisplay.dateTime = now.toISOString();
	dateTimeDisplay.textContent = koreanDateTime.format(now);
}

updateDateTime();
window.setInterval(updateDateTime, 1000);
