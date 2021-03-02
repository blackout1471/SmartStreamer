export class MovieDto {

    Title: string;
    ImageSource: string;

    constructor(title:string, imageSource:string)
    {
        this.Title = title;
        this.ImageSource = imageSource;
    }

}