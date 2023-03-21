(countime = () => {
	setTimeout(countime, 1000)
	let start = new Date('2021-03-11T00:00:00'),
		now = new Date(),
		timeDiff = (now.getTime() - start.getTime()),
		msPerMinute = 60 * 1000,
		msPerHour = 60 * msPerMinute,
		msPerDay = 24 * msPerHour,
		passDay = ~~(timeDiff / msPerDay),
		passHour = ~~((timeDiff % msPerDay) / 60 / 60 / 1000),
		passMinute = ~~((timeDiff % msPerHour) / 60 / 1000),
		passSecond = ~~((timeDiff % msPerMinute) / 1000),
		writing = document.getElementById("living-time")
	writing.innerHTML = ("已成立" + passDay + "天" + passHour + "小时" + passMinute + "分" + passSecond + "秒")
})(window);
