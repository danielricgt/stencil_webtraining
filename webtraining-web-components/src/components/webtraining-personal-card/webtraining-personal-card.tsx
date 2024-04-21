import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'webtraining-personal-card',
    styleUrl: 'webtraining-personal-card.css',
    shadow: true
})

export class WebtrainingPersonalCard {

    @Prop () firstName : string = "";
    @Prop () lastName: string = "";
    @Prop () photo: string = "";
    @Prop () resume: string = "";

    render(){
        return(
            <div class="b-personal-card-box">
                <div class="b-personal-card">
                    <div class="b-personal-card-content">
                 <div class="b-personal-card__photo-container">
                    <img class="b-personal-card__photo"src={this.photo} alt="Daniel Galvan" />
                    </div>   
                <h2 class="b-personal-card__full-name"> 
                {this.firstName} {this.lastName}
                </h2>
                <div class="b-personal-card__resume">
                    {this.resume}
                </div> 
            </div>
                </div>
           
                
            </div>
        );
    }
}