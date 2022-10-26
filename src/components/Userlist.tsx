import React from "react";

//props

import { IUserListProps } from "./IUserListProps";

export class Userlist extends React.Component<IUserListProps, {}> {
  constructor(props: IUserListProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev: React.SyntheticEvent<EventTarget>): void {
    // If event target not an HTMLButtonElement, exit
    if (!(ev.target instanceof HTMLButtonElement)) {
      return;
    }
    //console.debug("ev.target", ev.taergt.dataset["ix"]);

    const dataset = ev.target.dataset.username ? ev.target.dataset.username : undefined;

    if(dataset) {
        this.props.onChoose(dataset);
    }
  }

  render(): JSX.Element {
    return(
        <ul>
        {this.props.usernames.map((username) => (
          <li key={username}>
            <button data-username={username} onClick={this.handleClick}>
              @{username}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}
