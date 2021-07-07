<template>
	<div>
		<nav class="navbar navbar-light navbar-bg">
			<div class="container-fluid">
				<b-button v-b-toggle.sidebar><font-awesome-icon icon="bars" /></b-button>
				<router-link to="/" class="navbar-brand" style="float: left">WaterlooStudies</router-link>
			</div>
		</nav>
		<b-sidebar id="sidebar" title="WaterlooStudies" shadow>
			<div class="px-3 py-2">
				<router-link to="/credit_tracker" class="sidebar-item">
					<p>
						<font-awesome-icon icon="calculator" /><span class="sidebar-item-text">Credit Tracker</span>
					</p>
				</router-link>
				<router-link to="/course_catalog" class="sidebar-item">
					<p>
						<font-awesome-icon icon="lightbulb" /><span class="sidebar-item-text">Course Catalog</span>
					</p>
				</router-link>
				<router-link to="/course_prereq" class="sidebar-item">
					<p>
						<font-awesome-icon icon="book-reader" /><span class="sidebar-item-text">Course Prerequisites</span>
					</p>
				</router-link>
				<router-link to="/favorite_course" class="sidebar-item">
					<p>
						<font-awesome-icon icon="heart" /><span class="sidebar-item-text">Favorite Course</span>
					</p>
				</router-link>
			</div>
		</b-sidebar>
		<div id="app">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
@import './custom.scss';
html, body {
	height: 100%;
	width: 100%;
}
body {
	background-color: $themeColor
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	text-align: center;
}
.navbar-bg {
	background-color: $header-footer-bgColor
}
.sidebar-item {
	font-size: 1.2rem;
	color: black;
}

.sidebar-item:hover { 
	text-decoration: none !important;
}

.sidebar-item-text {
	padding-left: 1em;
}
</style>
