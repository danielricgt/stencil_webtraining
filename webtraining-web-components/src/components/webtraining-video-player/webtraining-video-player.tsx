import { Component, Prop, h } from "@stencil/core";
import { VimeoPlayer } from "./functional-component/vimeo-player";
import {  YoutubePlayer } from "./functional-component/youtube-player";

const VIDEO_PROVIDERS = {
    YOUTUBE: 'youtube',
    VIMEO: 'vimeo'
};

@Component({
    tag:'webtraining-video-player',
})

export class WebtrainingVideoPlayer{


    @Prop () source:string;
    @Prop () provider:string= VIDEO_PROVIDERS.YOUTUBE;

    render(){

        if(!this.source) {
            return <div>No video source provide</div>
        }
        return(
            <div class="b-video">
                {
                    this.provider === VIDEO_PROVIDERS.YOUTUBE && 
                    <YoutubePlayer source={this.source}></YoutubePlayer>

                }

{
                    this.provider === VIDEO_PROVIDERS.VIMEO && 
                    <VimeoPlayer source={this.source}></VimeoPlayer>

                }
 
            </div>
    
        )
    }

       
    }