<template>
	<transition appear appear-class="slide-fade-enter" appear-active-class="slide-fade-enter-active">
		<div>
			<div class="container">
				<h3>WaterlooStudies streamlines the Studies at Waterloo!</h3>
				<div class="row">
					<div class="col">
						<img src="../assets/man_with_lightbulb.jpg" alt="lightbulb" style="height: 80%" />
					</div>
					<div class="col" style="margin-top: 10%">
						<div class="row">
							<div class="col">
								<Menu :route="'/credit_tracker'" :faIcon="'calculator'" :toolTip="'Credit Tracker'"/>
							</div>
							<div class="col">
								<Menu :route="'/course_catalog'" :faIcon="'lightbulb'" :toolTip="'Course Catalog'" />
							</div>
							<div class="col">
								<Menu :route="'/course_prereq'" :faIcon="'book-reader'" :toolTip="'Course Prerequisites'"/>
							</div>
							<div class="col">
								<Menu :route="'/favorite_course'" :faIcon="'heart'" :toolTip="'Favorite Course'"/>
							</div>
						</div>
						<div style="text-align: left">
							<p>Avoid the hassle of the Excel credit tracking sheet <font-awesome-icon icon="check-circle" style="color: green" /> </p>
							<p>View all available courses for a specific term <font-awesome-icon icon="check-circle" style="color: green" /></p>
							<p>Get an overview of course prerequisites <font-awesome-icon icon="check-circle" style="color: green" /> </p>
							<p>Compare and contrast similar courses <font-awesome-icon icon="check-circle" style="color: green" /> </p>
						</div>
					</div>
				</div>
			</div>
			<div class="footer">
				Made with <font-awesome-icon icon="heart" style="color: lightpink" /> by team 17
			</div>
		</div>
	</transition>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
	name: 'Home',
	components: {
		Menu
	}
};
</script>

<style lang='scss' scoped>
@import '../custom.scss';
.footer {
	bottom: 1px;
    padding: 0.75rem 1.25rem;
    background-color: $header-footer-bgColor;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
	position: absolute;
	width: 100%;
}
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-enter {
  transform: translateX(5px);
  opacity: 0;
}
</style>
