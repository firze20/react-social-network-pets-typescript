export interface IUserListProps {
    usernames: string[];
    onChoose(data: string): void;
}