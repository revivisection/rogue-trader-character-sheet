import catmissar from '../../assets/images/gallery images/catmissar.jpg'
import bikini from '../../assets/images/gallery images/Bikini.jpg'
interface GalleryEntry {
    name?: string,
    text?: string,
    image?: string
}

// Want the first image to be full width? Change this to true.
export const firstImageBig = false;

export const GalleryData:Array<GalleryEntry> = [
  {
    name: 'Shore leave on Janus', 
    text: `<p>Haters will say this pict has been doctored.</p>`,
    image: bikini
  }, 
  {
    name: 'Welcome to the Gallery', 
    text: `<p>Pictures, screenshots, writing excerpts, lore, fanfics, any other notes and all that jazz goes here.</p>
    <p>Music too? Of course!</p>
    <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2780941012/size=small/bgcol=181a1b/linkcol=25972a/track=3042203657/transparent=true/" seamless><a href="https://bluestahli.bandcamp.com/album/the-devil-deluxe-edition">The Devil (Deluxe Edition) by Blue Stahli</a></iframe>`
  },
  // for youtube embeds, set width = "100%" to make it fit properly, as shown below.
  {
    name: '☆ Semper Servientes ☆', 
    text: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/Sg1vjEHyzyI?si=2KYDrsEGPUKjyAx5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  }, 
  {
    name: 'Catmmissar', 
    text: `Pew`,
    image: catmissar,
  },  
  // {
  //     name: `Title`, 
  //     text: ``,
  //     image: catmissar,
  // }, 
]