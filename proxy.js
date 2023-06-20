// use proxy to stand-in the real object, as the object is severely constrained and cannot be getted quickly
class GeoCoder {
    getLatLng = async(address) => {
        if (address === "London") {
            // this could be a api request whichi will takes some time
            return "52.3700° N, 4.8900° E"
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E";
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E";
        } else {
            return "";
        }
    }
}

class Proxy {
    constructor(){
        this.geoCoder = new GeoCoder();
        this.geoCache = {};
    } 
    getLatLng = (address) =>{
        if(!this.geoCache[address]) {
            const latLng = this.geoCoder.getLatLng(address);
            this.geoCache[address] = latLng;
        }
        return this.geoCache.address;
    }
    getGeoCache = () => {
        return this.geoCache;
    }
}

function run(){
    const geoCode = new Proxy();
    geoCode.getLatLng("London");
    geoCode.getLatLng("Paris");
    geoCode.getLatLng("London");
    console.log(geoCode.getGeoCache());
}

run();



