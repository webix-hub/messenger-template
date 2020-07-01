import {leftSidebar} from "./js/leftSidebar";
import {convBlock} from "./js/convBlock";
import {chatBlock} from "./js/chatBlock";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize && webix.CustomScroll) {
		webix.CustomScroll.init();
	}

	webix.ui({
		type: "line",
		css: "gray",
		cols: [
			{},
			{
				width: 1320,
				css: "white",
				type: "clean",
				cols: [
					{
						css: "dark",
						width: 240,
						paddingY: 20,
						rows: [
							leftSidebar
						]
					},
					{
						cols: [
							{
								css: "gray",
								width: 350,
								rows: [
									convBlock
								]
							},
							chatBlock
						]
					}
				]
			},
			{}
		]
	});
	webix.$$("comments:template").focus();
});
