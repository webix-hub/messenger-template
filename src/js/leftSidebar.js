export const leftSidebar = {
	view: "sidebar",
	css: "webix_dark leftSidebar",
	select: true,
	ready() {
		this.select(2);
	},
	data: [
		{id: "1", value: "Home", icon: "mdi mdi-home"},
		{id: "2", value: "Messages", icon: "mdi mdi-forum"},
		{id: "3", value: "Profile", icon: "mdi mdi-account-group"},
		{id: "4", value: "Settings", icon: "mdi mdi-tune"},
		{id: "5", value: "Resources", icon: "mdi mdi-file-chart"}
	]
};
