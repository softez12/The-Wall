import "/scripts/jquery.min.js";

$(document).ready(() => {
	$("nav").load("/components/navbar.html", () => {
		$("<link/>", { rel: "stylesheet", type: "text/css", href: "/components/navbar.css" }).appendTo("head");
	});

	$("footer").load("/components/footer.html", () => {
		$("<link/>", { rel: "stylesheet", type: "text/css", href: "/components/footer.css" }).appendTo("head");
	});
});
