<template>
	<div class="container-fluid containerr">
		<div class="row">
			<div class="col contact">
				<div class="head">
					<h1 class="us">Bize Ulaşın</h1>
					<div class="arrow">
						<span class="material-symbols-outlined">north_east</span>
					</div>
				</div>
			</div>
			<div class="col member">
				<div class="head1">
					<h1 class="human">İnsan Kaynakları</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	.containerr {
		font-family: 'DM Sans', sans-serif;
	}

	.contact {
		width: 100%;
		background: linear-gradient(-45deg, #E8B892, #6170B1, #E2B48E, #6170B1);
		animation: change 10s ease-in-out infinite;
		height: 500px;
		background-size: 400% 400%;
		display: flex;
	}

	.member {
		width: 100%;
		background-color: #F2F4F8;
		display: flex;
	}

	.head1,.head {
		display: flex;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	.arrow{
		margin-left: 10px;
	}

	.us {
		color: black;
	}

	.head a {
		text-decoration: none;
	}

	.material-symbols-outlined {
		color: black;
		font-size: 30px;
		transition: transform 200ms;
		display: flex;
	}

	.material-symbols-outlined:hover {
		transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
	}

	@keyframes change {
		0% {
			background-position: 0 50%;
		}

		50% {
			background-position: 50% 50%;
		}

		100% {
			background-position: 0 50%;
		}
	}
</style>