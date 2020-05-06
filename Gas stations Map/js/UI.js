class UI {
    constructor() {

        //Instance API
        this.api = new API();

        //Create markers with LayerGroup
        this.markers = new L.LayerGroup();

         // Init map
         this.mapa = this.initMap();

    }

    initMap() {
         // Init map and get its properties
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const linkMap = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + linkMap + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    showEstablishments = () => {
        this.api.getData()
            .then (data => {
                const result = data.resJSON.results;

                //Execute function to show markers
                this.showMarkers(result);
            })
    }

    showMarkers(data){
        //Clean markers(Leaflet method)
        this.markers.clearLayers();

        //Loop through the establishments
        data.forEach(establishment => {
            // destructuring
            const {latitude, longitude, calle, regular, premium} = establishment;

            //Create Popup
            const popUpInfo = L.popup()
            .setContent(`<p>Street: ${calle}</p>
                        <p><b>Regular: $ ${regular}</b></p>
                        <p><b>Premium: $ ${premium}</b></p>                   
            `);

            //Add the marker
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(popUpInfo);
            //Markers layer
            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }

    getSearch(search) {
        this.api.getData()
            .then(data => {
                //Get Data
                const results = data.resJSON.results;
                //Send JSON and search to filter it
                this.filterSearch(results, search);
            })
    }

    filterSearch(result, search) {
        //filter
        const filter = result.filter(filter => filter.calle.indexOf(search) !== -1);
        console.log(filter);
        //show markers filtered
        this.showMarkers(filter);
    }
}

