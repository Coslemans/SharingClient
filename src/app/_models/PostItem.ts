import { IPostItem } from "../_interfaces/IPostItem";

export class PostItem implements IPostItem{
    Id: number;
    Title: string;
    Description: string;
    User: string;
    CreationDate: Date;
    canEdit: boolean;

    /**
     *
     */
    constructor(post:PostItem) {
        this.Id = post.Id;
        this.Title=post.Title;
        this.Description = post.Description;
        this.User = post.User;
        this.CreationDate = post.CreationDate;
        this.canEdit = post.canEdit;
    }
    
}