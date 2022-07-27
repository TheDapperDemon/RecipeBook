export class Recipe {
    public imagePath: string;

    constructor(public name: string, 
        public description: string, 
        imagePath: string){
            this.imagePath = imagePath
        };
}
