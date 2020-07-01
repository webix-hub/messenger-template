import {dataComments} from "../data/dataComments";
import {dataUsers} from "../data/dataUsers";
import {chatToolbar} from "./chatToolbar";

export const chatBlock = {
	rows: [
		chatToolbar,
		{
			id: "comments:template",
			view: "comments",
			css: "commentsList",
			currentUser: 3,
			data: dataComments,
			users: dataUsers,
			sendAction: "enter",
			listItem: {
				template: (obj, common) => {
					let message;

					let avatar = common.templateAvatar(obj, common);
					let user = common.templateUser(obj, common);
					let date = common.templateDate(obj, common);
					let menu = common.templateMenu(obj, common);
					let text = common.templateText(obj, common);

					if (obj.user_id === 3) { // current user
						message = `<div class='comment'>${user}${menu}${date}${text}</div>${avatar}`;
					}
					else {
						message = `${avatar}<div class='comment'>${user}${menu}${date}${text}</div>`;
					}

					return message;
				}
			}
		}
	]
};
