export interface IAnimal {
    [key: string]: IDescription; //dynamic key, any animal
  }
  
  export type Dictionary = {
    [key in keyof IAnimal]?: IAnimal[key];
  };
  
  export interface IDescription {
    name: string;
    bio: string;
    profilePictureUrl: string;
    friends: string[];
    [key: string]: any; //dynamic key
  }
  