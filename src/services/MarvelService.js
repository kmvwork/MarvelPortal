class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=7d9e983a92986ded8ed784fb152c3d45'

    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=999&${this._apiKey}`)
    }
    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`)
    }
}
export default MarvelService