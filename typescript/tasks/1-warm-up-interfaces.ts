/* Instructions:
  • Create an interface "Coords" that has numeric "latitude" and "longitude" properties.
  • Create a new "Info" interface that extends the existing interface "City" by adding a
    "coords" property of type "Coords".
*/

export interface City {
    name: string
}

/* [Declare your "Coords" and "Info" interfaces below.] */

interface Coords {
    latitude: number,
    longitude: number
}

interface Info extends City {
    coords: Coords
}

export let montreal: Info;

export let tampa: Info;