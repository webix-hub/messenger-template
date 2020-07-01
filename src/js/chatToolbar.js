import {dataUsers} from "../data/dataUsers";

if (dataUsers.length > 4) {
	const rest = dataUsers.length - 4;
	dataUsers.length = 4;
	dataUsers.push({rest});
}

export const chatToolbar = {
	view: "toolbar",
	paddingX: 25,
	paddingY: 12,
	cols: [
		{
			view: "template",
			id: "chatIcon",
			css: "chatIcon",
			borderless: true,
			width: 44,
			height: 44,
			template() {
				const html = `
                    <img src="./assets/img/team_chat.jpg" >
                `;
				return html;
			}
		},
		{
			view: "label",
			css: "chatText",
			label: "Team Chat"
		},
		{},
		{
			id: "userList",
			view: "list",
			layout: "x",
			css: "userList",
			width: 118,
			height: 32,
			borderless: true,
			scroll: false,
			data: dataUsers,
			type: {
				height: 32
			},
			template(obj) {
				const html = `
                <div class="chatImg flex flexCentered">
                    ${obj.image ? `<img src="${obj.image}">` : `
                    <span class="chatCounter flex flexCentered">
                        <span>${obj.rest}</span>+
                    </span>`}
                </div>
                `;
				return html;
			}
		},
		{
			view: "icon",
			icon: "wxi-dots",
			popup: {
				view: "popup",
				width: 100,
				body: {
					view: "menu",
					layout: "y",
					autoheight: true,
					borderless: true,
					on: {
						onItemClick() {
							this.getParentView().hide();
						}
					},
					data: ["Settings", "Search"]
				}
			}
		}
	]
};
