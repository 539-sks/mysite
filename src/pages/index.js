import React from "react"

const name = "Gatsbyyy"

export default function Home() {
  return (
    <div>
<header class="header">
	<div class="container">
		<div class="site">
			<a href="base-index.html">
				<img src="/images/logo.svg" alt="ESSENTIALS" />
			</a>
		</div>
		
		<nav class="nav">
			<ul>
				<li><a href="base-index.html">TOP</a></li>
				<li><a href="base-about.html">ABOUT</a></li>
			</ul>
		</nav>
	</div>
</header>

<section class="hero">
	<figure>
		<img src="/images/hero.jpg" alt="" />
	</figure>
	<div class="catch">
		<h1>There is no love sincerer than<br /> the love of food.</h1>
		<p>食物を愛するよりも誠実な愛はない ― バーナード・ショー!!</p>
	</div>
	<div class="wave">
		<img src="/images/wave.svg" alt="" />
	</div>
</section>


<section class="food">
	<div class="container">
		<h2 class="bar">Food <span>Essence</span></h2>

		<div class="details">
			<div class="detail">
				<figure>
					<img src="/images/fruit.jpg" alt="" />
				</figure>
				<h3>フルーツ</h3>
				<p>FRUIT</p>
				<p>甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。</p>
			</div>

			<div class="detail">
				<figure>
					<img src="/images/grain.jpg" alt="" />
				</figure>
				<h3>穀物</h3>
				<p>GRAIN</p>
				<p>食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。</p>
			</div>

			<div class="detail">
				<figure>
					<img src="/images/beverage.jpg" alt="" />
				</figure>
				<h3>飲み物</h3>
				<p>BEVERAGE</p>
				<p>リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？</p>
			</div>
		</div>
	</div>
</section>

<section class="photo">
	<h2 class="sr-only">Photo</h2>
	<figure>
		<img src="/images/berry.jpg" alt="赤く熟したベリー" />
	</figure>
</section>

<footer class="footer">
	<div class="container">
		<div class="site">
		<a href="base-index.html">
			<img src="/images/logo-w.svg" alt="ESSENTIALS" />
			<p>おいしい食材と食事を探求するサイト</p>
		</a>
		</div>

		<ul class="sns">
			<li>
				<a href="https://twitter.com/">
					<i class="fab fa-twitter"></i>
					<span class="sr-only">Twitter</span>
				</a>
			</li>
			<li>
				<a href="https://facebook.com/">
					<i class="fab fa-facebook-square"></i>
					<span class="sr-only">Facebook</span>
				</a>
			</li>
			<li>
				<a href="http://instagram.com/">
					<i class="fab fa-instagram"></i>
					<span class="sr-only">Instagram</span>
				</a>
			</li>
		</ul>
	</div>
</footer>
    </div>
  )
}
