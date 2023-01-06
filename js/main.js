// 获取视窗高度
getClientHeight = () => {
	let clientHeight = 0

	if (document.body.clientHeight && document.documentElement.clientHeight) {
		clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
	}
	else {
		clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
	}
	return clientHeight
}

// 获取视窗宽度
getClientWidth = () => {
	let clientWidth = 0

	if (document.body.clientWidth && document.documentElement.clientWidth) {
		clientWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth
	}
	else {
		clientWidth = (document.body.clientWidth > document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth
	}
	return clientWidth
}

// 滑动函数
scrollToDest = (pos, time) => {
	const currentPos = window.pageYOffset
	if (currentPos > pos) pos = pos - 50

	if ('scrollBehavior' in document.documentElement.style) {
		window.scrollTo({
			top: pos,
			behavior: 'smooth'
		})
		return
	}

	let start = null
	pos = +pos
	window.requestAnimationFrame(step = (currentTime) => {
		start = !start ? currentTime : start
		const progress = currentTime - start
		if (currentPos < pos) {
			window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos)
		} else {
			window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time))
		}
		if (progress < time) {
			window.requestAnimationFrame(step)
		} else {
			window.scrollTo(0, pos)
		}
	})
}

// banner定位滑动
scrollDownInIndex = () => {
	let scrollDownEle = document.getElementById('scroll-down')
	scrollDownEle.addEventListener('click', () => {
		scrollToDest(document.getElementById('page-area').offsetTop, 300)
	})
}

// 顶栏渐变
topbarFadeChange = () => {
	let topbar = document.getElementById('lab-top')
	let banner = document.getElementById('banner')
	let page = document.getElementById('page-area')

	let startHeight, endHeight
	let maxOpacity = 0.7
	let maxBlur = 16

	startHeight = banner.offsetTop
	endHeight = page.offsetTop

	window.addEventListener('resize', () => {
		startHeight = banner.offsetTop
		endHeight = page.offsetTop
	})

	changeTopbarTransparency = () => {
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if (scrollTop < startHeight) {
			topbar.style.setProperty('background-color', 'rgba(var(--topbar-color), 0)', 'important')
			topbar.style.setProperty('box-shadow', 'none')
			topbar.style.setProperty('backdrop-filter', 'blur(0px)')
			return
		}
		if (scrollTop > endHeight) {
			topbar.style.setProperty('background-color', 'rgba(var(--topbar-color), ' + maxOpacity + ')', 'important')
			topbar.style.setProperty('box-shadow', '0 4px 4px rgba(var(--topbar-shadow),' + maxOpacity + ')', 'important')
			topbar.style.setProperty('backdrop-filter', 'blur(16px)')
			return
		}
		let transparency = (scrollTop - startHeight) / (endHeight - startHeight) * maxOpacity
		let transblur = (scrollTop - startHeight) / (endHeight - startHeight) * maxBlur
		topbar.style.setProperty('background-color', 'rgba(var(--topbar-color), ' + transparency + ')', 'important')
		topbar.style.setProperty('box-shadow', '0 4px 4px rgba(var(--topbar-shadow),' + transparency + ')', 'important')
		if ((scrollTop - startHeight) / (endHeight - startHeight) > 0.1) {
			topbar.style.setProperty('backdrop-filter', 'blur(' + transblur + 'px)')
		}
		else {
			topbar.style.setProperty('backdrop-filter', 'blur(0px)')
		}
	}
	changeTopbarTransparency()
	document.addEventListener('scroll', changeTopbarTransparency, { passive: true })
}

// 动态标题
feedbackTitle = () => {
	let OriginTitile = document.title
	let welcome
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			document.title = '记得回来肝球'
			clearTimeout(welcome)
		} else {
			document.title = '欢迎来到真实宇宙'
			welcome = setTimeout(() => {
				document.title = OriginTitile
			}, 1500)
		}
	})
}

// 按钮事件
buttonEvent = () => {
	// 顶栏
	let sideBarTrigger = document.getElementById('side-menu-trigger')

	// 边栏
	let sideBar = document.getElementById('side-content')
	let sideBarClose = document.getElementById('sidebar-close')
	let sideBarMask = document.getElementById('sidebar-mask')

	// 浮动
	let toTop = document.getElementById('back-to-top')
	let share = document.getElementById('page-share')
	let sitting = document.getElementById('page-sitting')
	let chooseMod = document.getElementById('sitting-content')
	let eventMask = document.getElementById('event-mask')
	let sittingClose = document.getElementById('sitting-close')

	// 窗体
	let bodyStyle = document.body

	// 暗色遮罩消失
	maskFadeOut = (theMask) => {
		theMask.classList.add('dark-mask-hide')
		theMask.classList.remove('dark-mask-show')
		setTimeout(() => {
			theMask.classList.remove('dark-mask-hide')
			theMask.style.removeProperty('display', 'block')
		}, 500)
	}

	// 边栏事件
	sideBarTrigger.addEventListener('click', () => {
		sideBar.classList.add('sidebar-show')
		bodyStyle.style.setProperty('overflow', 'hidden')
		sideBarMask.classList.add('dark-mask-show')
		sideBarMask.style.setProperty('display', 'block')
	})

	shutSidebar = () => {
		sideBar.classList.remove('sidebar-show')
		bodyStyle.style.removeProperty('overflow', 'hidden')
		maskFadeOut(sideBarMask)
	}

	sideBarClose.addEventListener('click', () => {
		shutSidebar()
	})

	sideBarMask.addEventListener('click', () => {
		shutSidebar()
	})

	// 一键置顶
	toTop.addEventListener('click', () => {
		scrollToDest(bodyStyle.offsetTop, 300)
	})

	// 一键分享
	share.addEventListener('click', () => {
		linkShare()
	})

	// 关闭设置列表
	shutModContent = () => {
		chooseMod.classList.remove('content-show')
		toTop.classList.remove('sitting-mod')
		share.classList.remove('sitting-mod')
		eventMask.style.removeProperty('display', 'block')
	}

	// 设置列表事件
	sitting.addEventListener('click', () => {
		if (chooseMod.classList.contains('content-show')) {
			shutModContent()
		}
		else {
			chooseMod.classList.add('content-show')
			toTop.classList.add('sitting-mod')
			share.classList.add('sitting-mod')
			eventMask.style.setProperty('display', 'block')
		}
	})

	eventMask.addEventListener('click', () => {
		shutModContent()
	})

	sittingClose.addEventListener('click', () => {
		shutModContent()
	})
}

// 浮动按钮状态
floatButtonMovement = () => {
	let buttons = document.getElementById('float-button')
	let mask = document.getElementById('event-mask')

	notTop = () => {
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		if (scrollTop > 100) {
			buttons.classList.add('float-in')
			mask.style.removeProperty('z-index')
		}
		else {
			buttons.classList.remove('float-in')
			mask.style.setProperty('z-index', '-3')
		}
	}

	notTop()
	document.addEventListener('scroll', notTop, { passive: true })
}

// 一键复制
quickCopy = (content) => {
	if (navigator.clipboard && window.isSecureContext) {
		// 写入剪切板
		navigator.clipboard.writeText(content).then(() => {
			alert("复制成功", 0);
		}, () => {
			alert("复制失败", 1);
		});
	}
}

// 网页分享
linkShare = () => {
	let url = window.location.href
	shareText = 'CIDT荣誉出品：' + url + '，欢迎各位伊卡洛斯莅临！'
	quickCopy(shareText)
}

// 主题控制
colorScheme = () => {
	let target = document.documentElement
	let colorStorageKey = 'user-theme-scheme'
	let targetAttributeName = 'data-theme-scheme'

	let shortTheme = document.getElementById('mod-button')

	let colorModList = {
		'auto': true, 'light': true, 'dark': true, 'lowlight': true
	}

	let autoModList = {
		'dark': 'dark', 'auto': 'light'
	}

	let toggleStatement = {
		'light': 'dark', 'dark': 'light', 'lowlight': 'light'
	}

	let toggleSwitch = {
		'light': 'dark', 'dark': 'light'
	}

	let themeButtonStatement = {
		'auto': '1', 'light': '2', 'dark': '3', 'lowlight': '4'
	}

	let themeButtonEvent = {
		'1': 'auto', '2': 'light', '3': 'dark', '4': 'lowlight'
	}

	// 创建本地数据
	siteLocStorage = (key, value) => {
		try {
			localStorage.setItem(key, value)
		} catch (e) { }
	}

	// 清除本地数据
	removeLocStorage = (key) => {
		try {
			localStorage.removeItem(key)
		} catch (e) { }
	}

	// 读取本地数据
	getLocStorage = (key) => {
		try {
			return localStorage.getItem(key)
		} catch (e) {
			return null
		}
	}

	// 读取系统主题
	getMQMod = () => {
		let mod = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'auto'
		return mod
	}

	// 初始化主题
	resetModAttribute = () => {
		target.setAttribute(targetAttributeName, autoModList[getMQMod()])
		siteLocStorage(colorStorageKey, 'auto')
	}

	// 写入主题
	writeModAttribute = (value) => {
		if (value === 'auto') {
			target.setAttribute(targetAttributeName, autoModList[getMQMod()])
		} else {
			target.setAttribute(targetAttributeName, value)
		}
		siteLocStorage(colorStorageKey, value)
	}

	// 全局主题设置
	userModSitting = (mod) => {
		let siteMod = mod || getLocStorage(colorStorageKey)
		let mediaMod = getMQMod()

		if (siteMod === mediaMod) {
			writeModAttribute(mediaMod)
		}
		else if (colorModList[siteMod]) {
			writeModAttribute(siteMod)
		} else if (siteMod === null) {
			writeModAttribute(mediaMod)
		}
		else { resetModAttribute() }
	}

	// 选取按钮状态
	toggleModSitting = () => {
		let sitetoggle = getLocStorage(colorStorageKey)

		if (colorModList[sitetoggle]) {
			if (sitetoggle == 'auto') {
				sitetoggle = toggleStatement[autoModList[getMQMod()]]
			}
			else { sitetoggle = toggleStatement[sitetoggle] }
		}
		else {
			sitetoggle = toggleStatement[autoModList[getMQMod()]]
		}

		return sitetoggle
	}

	// 选取当前主题状态
	themeModSitting = () => {
		let sitetheme = getLocStorage(colorStorageKey)
		if (colorModList[sitetheme]) {
			sitetheme = themeButtonStatement[sitetheme]
		}
		else if (sitetheme = null) {
			sitetheme = themeButtonStatement[getMQMod()]
		} else {
			sitetheme = themeButtonStatement['auto']
		}

		return sitetheme
	}

	// 按钮状态
	toggleModSwitch = (mod) => {
		let theme = mod || toggleModSitting(),
			showButton = document.getElementById(theme + '-mod'),
			hideButton = document.getElementById(toggleSwitch[theme] + '-mod')

		showButton.style.display = 'flex'
		hideButton.style.display = 'none'
	}

	// 主题精选
	themeListSite = (mod) => {
		let theme = mod || themeModSitting(),
			floatMod = document.getElementById('mod-' + theme)

		floatMod.classList.add('be-actived')
	}

	// 主题清空
	themeListClean = (list) => {

		list.forEach((i) => {
			i.removeAttribute('class')
		})
	}

	// 主题链接
	themeListSwitch = () => {
		let floatList = document.querySelectorAll('.mod-box li')

		floatList.forEach((item, key) => {
			item.value = ++key
			item.onclick = () => {
				themeListClean(floatList)
				themeListSite(item.value)
				userModSitting(themeButtonEvent[item.value])
				toggleModSwitch(toggleStatement[themeButtonEvent[item.value]])
			}
		})
	}

	// 主题快速切换
	shortTheme.addEventListener('click', () => {
		let theme = toggleModSitting(),
			floatList = document.querySelectorAll('.mod-box li')
		userModSitting(theme)
		themeListClean(floatList)
		themeListSite(themeButtonStatement[theme])
		toggleModSwitch()
	})

	userModSitting()
	toggleModSwitch()
	themeListSite()
	themeListSwitch()
}

scrollDownInIndex()
topbarFadeChange()
feedbackTitle()
buttonEvent()
floatButtonMovement()
colorScheme()