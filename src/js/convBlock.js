import {dataConv} from "../data/dataConv";

export const convBlock = {
	css: "convBlock",
	rows: [
		{
			view: "toolbar",
			css: "convBg",
			padding: 22,
			rows: [
				{
					cols: [
						{
							view: "label",
							label: "Conversations (3)"
						},
						{
							view: "button",
							value: "New conversation",
							css: "webix_primary"
						}
					]
				},
				{
					view: "search",
					placeholder: "Search...",
					css: "search"
				}
			]
		},
		{
			view: "list",
			css: "convList convBg",
			data: dataConv,
			select: true,
			scroll: true,
			type: {
				height: 76,
				margin: 5,
				css: "convItem",
				template(obj) {
					const html = `
                        <div class="convOverall flex">
                            <div class="convImg flex flexCentered">
                                <img src="./assets/img/${obj.photo}">
                            </div>
                            <div class="convContent">
                                <div class="convSubrow flex baseLine">
                                    <span class="convName ellipses">${obj.name}</span>
                                    <span class="convDate mlAuto">${obj.date}</span>
                                </div>
                                <div class="convSubrow flex ">
                                    <span class="convMessage ellipses">${obj.message}</span>
                                    ${obj.unread > 0 ? `<span class="convCounter flex flexCentered mlAuto">
                                        <span class="ellipses">${obj.unread}</span>
                                    </span>` : ""}
                                </div>    
                            </div>
                        </div>
                    `;
					return html;
				}
			},
			ready() {
				this.select(2);
			}
		}
	]
};
