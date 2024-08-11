import "./ShowApplicationPhotos.css"
export default function ShowApplicationPhotos({photos}: {photos: {name: string, type: string, path?: string}[]}) {
  return (
    <ul className="photos">
      {photos.map((photo) => {
        return <li key={photo.name}>
          <img src={photo.path}></img>
        </li>
      })}
    </ul>
  )
}