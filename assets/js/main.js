/*
	Portfolio by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$menu = $('#menu'),
		$main = $('#main'),
		$modal = $('#project-modal'),
		$close = $('.close');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$menu
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($header.length > 0) {

			// Header scroll.
				$window.on('scroll', function() {
					if ($window.scrollTop() > 50)
						$header.addClass('alt');
					else
						$header.removeClass('alt');
				});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			offset: function() { return $header.height(); }
		});

	// Tiles.
		var $tiles = $('.tiles article');

		$tiles.each(function() {

			var $this = $(this),
				$image = $this.find('.image'), $img = $image.find('img'),
				$link = $this.find('a'),
				x;

			// Image.

				// Set image.
					$this.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide original.
					$image.hide();

			// Link.
				if ($link.length > 0) {

					$x = $link.clone()
						.text('')
						.addClass('primary')
						.appendTo($this);

					$link = $link.add($x);

				}

		});

	// Project Modal functionality
	var projectData = {
		1: {
			title: "E-Commerce Platform",
			description: "A comprehensive full-stack e-commerce solution built with modern web technologies. This project demonstrates proficiency in React for the frontend, Node.js for the backend API, and MongoDB for data persistence. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
			images: [
				"images/fulls/01.jpg",
				"images/fulls/02.jpg",
				"images/fulls/03.jpg"
			],
			technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT Authentication"],
			timeline: "3 months",
			challenges: "Implementing secure payment processing and managing complex state across multiple components.",
			results: "Achieved 99.9% uptime and processed over 1000 transactions during testing phase."
		},
		2: {
			title: "Mobile App Development",
			description: "Cross-platform mobile application developed using React Native. The app provides a seamless user experience across iOS and Android platforms with native performance. Includes features like offline functionality, push notifications, and real-time data synchronization.",
			images: [
				"images/fulls/04.jpg",
				"images/fulls/05.jpg",
				"images/fulls/06.jpg"
			],
			technologies: ["React Native", "Redux", "Firebase", "Expo", "AsyncStorage"],
			timeline: "2 months",
			challenges: "Optimizing performance for both platforms and implementing complex navigation patterns.",
			results: "Successfully deployed to both App Store and Google Play Store with 4.8+ star rating."
		},
		3: {
			title: "Data Analytics Dashboard",
			description: "Interactive data visualization dashboard that processes large datasets and presents insights through dynamic charts and graphs. Built with Python for data processing and D3.js for visualization, this project showcases advanced data manipulation and presentation skills.",
			images: [
				"images/fulls/07.jpg",
				"images/fulls/08.jpg",
				"images/fulls/09.jpg"
			],
			technologies: ["Python", "Pandas", "D3.js", "SQL", "Flask", "Chart.js"],
			timeline: "6 weeks",
			challenges: "Handling large datasets efficiently and creating responsive visualizations.",
			results: "Reduced data analysis time by 70% for business stakeholders."
		},
		4: {
			title: "API Integration",
			description: "RESTful API development with comprehensive documentation and testing. This project demonstrates backend development skills including database design, authentication, rate limiting, and API versioning. Includes automated testing and CI/CD pipeline integration.",
			images: [
				"images/fulls/10.jpg",
				"images/fulls/11.jpg",
				"images/fulls/12.jpg"
			],
			technologies: ["Express.js", "PostgreSQL", "Jest", "Swagger", "Docker", "Redis"],
			timeline: "4 weeks",
			challenges: "Designing scalable architecture and implementing comprehensive error handling.",
			results: "API handles 10,000+ requests per minute with 99.95% uptime."
		},
		5: {
			title: "Cloud Infrastructure",
			description: "AWS cloud infrastructure setup with Docker containerization and Kubernetes orchestration. This project demonstrates DevOps skills including infrastructure as code, monitoring, logging, and automated deployment pipelines.",
			images: [
				"images/fulls/01.jpg",
				"images/fulls/02.jpg",
				"images/fulls/03.jpg"
			],
			technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
			timeline: "5 weeks",
			challenges: "Setting up high-availability clusters and implementing proper monitoring.",
			results: "Achieved 99.99% uptime with auto-scaling capabilities."
		},
		6: {
			title: "Machine Learning Model",
			description: "Predictive analytics model using Python and TensorFlow. This project involved data preprocessing, feature engineering, model training, and deployment. The model provides real-time predictions with high accuracy.",
			images: [
				"images/fulls/04.jpg",
				"images/fulls/05.jpg",
				"images/fulls/06.jpg"
			],
			technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Flask"],
			timeline: "6 weeks",
			challenges: "Feature selection and model optimization for maximum accuracy.",
			results: "Achieved 94% accuracy on test dataset with real-time inference."
		},
		7: {
			title: "UI/UX Design",
			description: "Complete user interface and experience design project using Figma and Adobe Creative Suite. This project demonstrates design thinking, user research, prototyping, and frontend implementation skills.",
			images: [
				"images/fulls/07.jpg",
				"images/fulls/08.jpg",
				"images/fulls/09.jpg"
			],
			technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "HTML/CSS", "JavaScript"],
			timeline: "3 weeks",
			challenges: "Creating intuitive user flows and maintaining design consistency.",
			results: "Improved user engagement by 40% through better UX design."
		},
		8: {
			title: "DevOps Pipeline",
			description: "Complete CI/CD pipeline implementation using Jenkins and GitLab. This project demonstrates automation skills including automated testing, deployment, and monitoring integration.",
			images: [
				"images/fulls/10.jpg",
				"images/fulls/11.jpg",
				"images/fulls/12.jpg"
			],
			technologies: ["Jenkins", "GitLab CI", "Docker", "Ansible", "SonarQube", "Nexus"],
			timeline: "4 weeks",
			challenges: "Setting up complex deployment strategies and ensuring pipeline reliability.",
			results: "Reduced deployment time from 2 hours to 15 minutes."
		},
		9: {
			title: "Database Design",
			description: "Relational database architecture and optimization project. This project involved database design, query optimization, indexing strategies, and performance tuning for high-traffic applications.",
			images: [
				"images/fulls/01.jpg",
				"images/fulls/02.jpg",
				"images/fulls/03.jpg"
			],
			technologies: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "SQL Server", "Elasticsearch"],
			timeline: "3 weeks",
			challenges: "Designing scalable schema and optimizing complex queries.",
			results: "Improved query performance by 85% through optimization."
		},
		10: {
			title: "Security Implementation",
			description: "Application security implementation including authentication, authorization, and data protection. This project demonstrates security best practices and vulnerability assessment skills.",
			images: [
				"images/fulls/04.jpg",
				"images/fulls/05.jpg",
				"images/fulls/06.jpg"
			],
			technologies: ["OAuth 2.0", "JWT", "HTTPS", "CORS", "Rate Limiting", "OWASP"],
			timeline: "4 weeks",
			challenges: "Implementing comprehensive security measures without affecting performance.",
			results: "Achieved zero security vulnerabilities in penetration testing."
		},
		11: {
			title: "Testing Framework",
			description: "Comprehensive testing framework implementation including unit tests, integration tests, and end-to-end testing. This project demonstrates quality assurance and test automation skills.",
			images: [
				"images/fulls/07.jpg",
				"images/fulls/08.jpg",
				"images/fulls/09.jpg"
			],
			technologies: ["Jest", "Selenium", "Cypress", "Mocha", "Chai", "Supertest"],
			timeline: "3 weeks",
			challenges: "Creating maintainable test suites and achieving high code coverage.",
			results: "Achieved 95% code coverage with automated test execution."
		},
		12: {
			title: "Performance Optimization",
			description: "Code optimization and performance monitoring project. This project involved profiling, bottleneck identification, and implementation of performance improvements across the application stack.",
			images: [
				"images/fulls/10.jpg",
				"images/fulls/11.jpg",
				"images/fulls/12.jpg"
			],
			technologies: ["Chrome DevTools", "Lighthouse", "Webpack", "Babel", "CDN", "Caching"],
			timeline: "2 weeks",
			challenges: "Identifying performance bottlenecks and implementing effective optimizations.",
			results: "Improved page load time by 60% and reduced bundle size by 40%."
		}
	};

	// Handle project clicks
	$('.project-link').on('click', function(e) {
		e.preventDefault();
		var projectId = $(this).data('project');
		var project = projectData[projectId];
		
		if (project) {
			showProjectModal(project);
		}
	});

	// Show project modal
	function showProjectModal(project) {
		var modalContent = `
			<h2>${project.title}</h2>
			<div class="project-description">
				<p>${project.description}</p>
			</div>
			<div class="project-images">
				${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
			</div>
			<div class="project-tech">
				<h3>Technologies Used</h3>
				<ul>
					${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
				</ul>
			</div>
			<div class="project-timeline">
				<h3>Timeline</h3>
				<p>${project.timeline}</p>
			</div>
			<div class="project-challenges">
				<h3>Key Challenges</h3>
				<p>${project.challenges}</p>
			</div>
			<div class="project-results">
				<h3>Results</h3>
				<p>${project.results}</p>
			</div>
		`;
		
		$('#project-details').html(modalContent);
		$modal.show();
	}

	// Close modal
	$close.on('click', function() {
		$modal.hide();
	});

	// Close modal when clicking outside
	$(window).on('click', function(e) {
		if (e.target == $modal[0]) {
			$modal.hide();
		}
	});

	// Close modal with escape key
	$(document).on('keydown', function(e) {
		if (e.keyCode === 27) { // Escape key
			$modal.hide();
		}
	});

	// Smooth scrolling for anchor links
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - $header.height()
				}, 1000);
				return false;
			}
		}
	});

})(jQuery);