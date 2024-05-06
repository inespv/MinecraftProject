function create(){

    map = this.make.tilemap({key: "map"});

    let scale 
    scale *= (Math.max(screenWidth/map.widthInPixels,
     screenHeight/map.heightInPixels));
   
    let tileset = map.addTilesetImage("cuadrados","tiles");

    let belowLayer = map.createLayer("layer1", tileset, 0, 0).setDepth(1);
    

    //.setScale(scale)
    //emptyTiles = this.pared.filterTiles(tile => (tile.index === -1 || !tile.collides));
}
