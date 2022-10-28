import React from "react";
import { cancelFetch, fetchUserData } from "../services/dataFetcher";

//PROPS
import { IProfileProps} from './IProfileProps'
//STATES
import {IProfileState} from './IProfileState';
//sub components
import {Userlist} from './Userlist';

export class Profile extends React.Component<IProfileProps, IProfileState> {
    fetchID: any;

    constructor(props: IProfileProps) {
        super(props);

        this.state = {
            userData: null
        }
    }

    componentDidMount(): void {
        this.loadUserData();
    }

    componentWillUnmount(): void {
        cancelFetch(this.fetchID);
    }

    componentDidUpdate(prevProps: Readonly<IProfileProps>, prevState: Readonly<IProfileState>, snapshot?: any): void {
        if(this.props.username !== prevProps.username) {
            cancelFetch(this.fetchID);
            this.loadUserData();
        }
    }
    
    loadUserData(): void {
        this.setState({
            userData: null
        });

        this.fetchID = fetchUserData(this.props.username, (userData) => {
            console.log(userData);
            this.setState({
                userData: this.fetchID
            });
        })

        console.log(this.fetchID);
        console.log(this.state.userData);

    }

    render(): JSX.Element {
        let isLoading: boolean = this.state.userData === null ? true : false;

        let className: string = 'Profile';
        if (isLoading) {
            className+= ' loading';
        }

        const name = isLoading ? 'Loading...' : this.state.userData?.name;

        const bio = isLoading ? 'Loading...' : this.state.userData?.bio;

        const friends = isLoading ? [] : this.state.userData?.friends;

        const profileImage = isLoading ? <p>Is Loading...</p> : <img src={this.state.userData?.profilePictureUrl} alt="" />


        return(
            <div className={className}>
                <div className="profile-picture">
                    {profileImage}
                </div>
                <div className="profile-body">
                    <h2>{name}</h2>
                    <h3>@{this.props.username}</h3>
                    <p>{bio}</p>
                    <h3>My friends</h3>
                    <Userlist usernames={friends!} onChoose={this.props.onChoose} />
                </div>
            </div>
        )
    }

}